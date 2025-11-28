import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// GET - Obtener posts guardados con búsqueda
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const competitorName = searchParams.get('competitor');
    const platform = searchParams.get('platform');
    const postType = searchParams.get('postType');

    const where: any = {};

    if (search) {
      where.OR = [
        { caption: { contains: search } },
        { competitorName: { contains: search } },
        { tags: { contains: search } },
      ];
    }

    if (competitorName) {
      where.competitorName = { contains: competitorName };
    }

    if (platform) {
      where.platform = platform;
    }

    if (postType) {
      where.postType = postType;
    }

    const posts = await prisma.savedPost.findMany({
      where,
      orderBy: { timestamp: 'desc' },
      take: 50,
    });

    return NextResponse.json({ posts });
  } catch (error: any) {
    console.error('Error al obtener posts guardados:', error);
    return NextResponse.json(
      { error: 'Error al obtener posts guardados', details: error.message },
      { status: 500 }
    );
  }
}

// POST - Guardar nuevos posts
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, posts: postsData, postId } = body;

    if (action === 'import') {
      // Importar múltiples posts desde JSON
      if (!Array.isArray(postsData) || postsData.length === 0) {
        return NextResponse.json(
          { error: 'Se requiere un array de posts' },
          { status: 400 }
        );
      }

      const savedPosts = [];

      for (const postData of postsData) {
        // Extraer nombre del competidor
        const competitorName = postData.ownerUsername || postData.ownerFullName || 'Desconocido';

        // Obtener conteo de vistas (priorizar videoPlayCount)
        const viewsCount = postData.videoPlayCount || postData.videoViewCount || 0;

        // Crear timestamp
        const timestamp = postData.timestamp ? new Date(postData.timestamp) : new Date();

        const post = await prisma.savedPost.create({
          data: {
            competitorName,
            platform: 'Instagram',
            postType: postData.type || postData.productType || 'Unknown',
            postUrl: postData.url || '',
            caption: postData.caption || '',
            hashtags: JSON.stringify(postData.hashtags || []),
            mentions: JSON.stringify(postData.mentions || []),
            likesCount: postData.likesCount || 0,
            commentsCount: postData.commentsCount || 0,
            viewsCount,
            timestamp,
            rawData: JSON.stringify(postData),
          },
        });
        savedPosts.push(post);
      }

      return NextResponse.json({
        success: true,
        message: `${savedPosts.length} posts importados exitosamente`,
        count: savedPosts.length,
      });
    }

    if (action === 'analyze') {
      // Analizar un post con IA
      if (!postId) {
        return NextResponse.json(
          { error: 'Se requiere postId' },
          { status: 400 }
        );
      }

      const post = await prisma.savedPost.findUnique({
        where: { id: postId },
      });

      if (!post) {
        return NextResponse.json(
          { error: 'Post no encontrado' },
          { status: 404 }
        );
      }

      // Generar análisis con IA
      const prompt = `Analiza este post de Instagram de ${post.competitorName} y proporciona insights detallados:

DATOS DEL POST:
- Tipo: ${post.postType}
- Caption: ${post.caption || 'Sin caption'}
- Hashtags: ${post.hashtags}
- Engagement: ${post.likesCount} likes, ${post.commentsCount} comentarios, ${post.viewsCount} views
- Fecha: ${post.timestamp}

ANÁLISIS REQUERIDO:
1. **Estrategia de Contenido**: ¿Qué estrategia está usando? (educativo, entretenimiento, producto, etc.)
2. **Hook y Engagement**: ¿Qué hace que este post enganche? ¿Cuál es el gancho?
3. **Mensaje Principal**: ¿Cuál es el mensaje clave que comunica?
4. **Tono y Voz**: ¿Cómo es el tono? (profesional, casual, humorístico, etc.)
5. **Call-to-Action**: ¿Tiene CTA? ¿Cuál es?
6. **Hashtags Strategy**: ¿La estrategia de hashtags es efectiva?
7. **¿Por qué funciona?**: Factores clave de éxito del post

INSIGHTS PARA FACEBANK.PR:
8. **Aplicabilidad**: ¿Podemos adaptar esta estrategia para FACEBANK.PR?
9. **Ideas Concretas**: 3-4 ideas específicas inspiradas en este post que podemos crear para FACEBANK.PR
10. **Mejoras**: ¿Qué podríamos hacer diferente/mejor?

Responde en formato JSON:
{
  "analysis": "Análisis completo y detallado del post",
  "insights": "Insights y aprendizajes clave para FACEBANK.PR",
  "ideas": ["Idea 1", "Idea 2", "Idea 3"],
  "tags": ["tag1", "tag2", "tag3"]
}`;

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'Eres un experto analista de marketing de contenidos para redes sociales, especializado en el sector financiero y bancario.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      });

      const result = JSON.parse(completion.choices[0].message.content || '{}');

      // Actualizar el post con el análisis
      const updatedPost = await prisma.savedPost.update({
        where: { id: postId },
        data: {
          analysis: typeof result.analysis === 'string' ? result.analysis : JSON.stringify(result.analysis),
          insights: typeof result.insights === 'string' ? result.insights : JSON.stringify(result.insights),
          tags: result.tags ? JSON.stringify(result.tags) : null,
        },
      });

      return NextResponse.json({
        success: true,
        post: updatedPost,
        analysis: result,
      });
    }

    return NextResponse.json(
      { error: 'Acción no válida' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Error en API de saved-posts:', error);
    return NextResponse.json(
      { error: 'Error al procesar solicitud', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar un post
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('id');

    if (!postId) {
      return NextResponse.json(
        { error: 'Se requiere ID del post' },
        { status: 400 }
      );
    }

    await prisma.savedPost.delete({
      where: { id: postId },
    });

    return NextResponse.json({
      success: true,
      message: 'Post eliminado exitosamente',
    });
  } catch (error: any) {
    console.error('Error al eliminar post:', error);
    return NextResponse.json(
      { error: 'Error al eliminar post', details: error.message },
      { status: 500 }
    );
  }
}
