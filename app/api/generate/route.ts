import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { prisma } from '@/lib/prisma';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { trendId, searchQueryId, platform, postType } = await request.json();

    if (!searchQueryId || !platform || !postType) {
      return NextResponse.json(
        { error: 'Faltan parámetros requeridos' },
        { status: 400 }
      );
    }

    // Obtener la búsqueda y tendencias
    const searchQuery = await prisma.searchQuery.findUnique({
      where: { id: searchQueryId },
      include: { trends: true },
    });

    if (!searchQuery) {
      return NextResponse.json(
        { error: 'Búsqueda no encontrada' },
        { status: 404 }
      );
    }

    let trend = null;
    if (trendId) {
      trend = await prisma.trend.findUnique({
        where: { id: trendId },
      });
    }

    // Construir el prompt para OpenAI
    const trendInfo = trend ? `
Tendencia específica: ${trend.title}
Descripción: ${trend.description}
Tráfico: ${trend.traffic}
Búsquedas relacionadas: ${trend.relatedQueries}
` : `
Búsqueda general: ${searchQuery.query}
País: ${searchQuery.country}
`;

    const platformSpecs: Record<string, string> = {
      'instagram': 'Instagram (máximo 2,200 caracteres, usa emojis, incluye llamado a la acción)',
      'twitter': 'Twitter/X (máximo 280 caracteres, directo y conciso)',
      'linkedin': 'LinkedIn (profesional, informativo, entre 600-1300 caracteres)',
      'facebook': 'Facebook (conversacional, entre 400-600 caracteres)',
      'tiktok': 'TikTok (script para video, casual y dinámico, con hooks iniciales)',
    };

    const prompt = `Eres un experto en marketing de contenidos y redes sociales especializado en temas financieros.

Contexto de la tendencia:
${trendInfo}

Plataforma: ${platformSpecs[platform.toLowerCase()] || platform}
Tipo de publicación: ${postType}

Genera contenido COMPLETO y LISTO PARA PUBLICAR para esta plataforma. El contenido debe:

1. Ser relevante para la tendencia de búsqueda sobre "${searchQuery.query}" en ${searchQuery.country}
2. Estar dirigido a personas interesadas en información financiera (cuentas en dólares, inversiones, finanzas personales)
3. Ser educativo pero accesible
4. Incluir un gancho inicial que capture atención
5. Tener valor práctico para la audiencia
6. Incluir un llamado a la acción (CTA) apropiado

Responde SOLO con un JSON con esta estructura exacta:
{
  "title": "Título llamativo del post (60-80 caracteres)",
  "description": "Contenido completo del post, listo para copiar y pegar",
  "hashtags": "#hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5"
}

IMPORTANTE:
- El "description" debe ser el texto COMPLETO del post, no una descripción del post
- Debe estar listo para publicar directamente
- Para Instagram/TikTok incluye emojis relevantes
- Para LinkedIn sé más formal y profesional
- Los hashtags deben ser relevantes al tema financiero y la región`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Eres un experto en marketing de contenidos financieros. Generas contenido de alta calidad para redes sociales. Siempre respondes en formato JSON válido.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.8,
      response_format: { type: "json_object" },
    });

    const generatedContent = JSON.parse(completion.choices[0].message.content || '{}');

    // Guardar el contenido generado
    const content = await prisma.content.create({
      data: {
        searchQueryId,
        trendId: trendId || null,
        platform,
        postType,
        title: generatedContent.title,
        description: generatedContent.description,
        hashtags: generatedContent.hashtags,
      },
    });

    return NextResponse.json({
      success: true,
      content,
    });
  } catch (error: any) {
    console.error('Error al generar contenido:', error);
    return NextResponse.json(
      {
        error: 'Error al generar contenido',
        details: error.message
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const searchQueryId = searchParams.get('searchQueryId');

    const where = searchQueryId ? { searchQueryId } : {};

    const contents = await prisma.content.findMany({
      where,
      take: 20,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        searchQuery: true,
        trend: true,
      },
    });

    return NextResponse.json({ contents });
  } catch (error) {
    console.error('Error al obtener contenidos:', error);
    return NextResponse.json(
      { error: 'Error al obtener contenidos' },
      { status: 500 }
    );
  }
}
