import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const topicDetails: Record<string, { name: string; focus: string; keywords: string[] }> = {
  'cuenta-dolares': {
    name: 'Cuenta en Dólares',
    focus: 'apertura, beneficios, uso y ventajas de tener una cuenta bancaria en dólares estadounidenses',
    keywords: ['cuenta USD', 'dólares', 'ahorro en dólares', 'cuenta extranjera', 'FACEBANK'],
  },
  'transferencias': {
    name: 'Transferencias Internacionales',
    focus: 'envío y recepción de dinero desde/hacia Estados Unidos, comisiones, velocidad y seguridad',
    keywords: ['transferencias', 'envío dinero', 'remesas', 'USA', 'internacional', 'FACEBANK'],
  },
  'ahorro': {
    name: 'Ahorro en Dólares',
    focus: 'estrategias de ahorro en moneda extranjera, protección contra inflación, planificación financiera',
    keywords: ['ahorro', 'ahorrar dólares', 'inversión', 'finanzas personales', 'FACEBANK'],
  },
  'ventajas-pr': {
    name: 'Ventajas Puerto Rico',
    focus: 'beneficios específicos de tener una cuenta bancaria en Puerto Rico, ventajas fiscales, acceso a servicios financieros de USA',
    keywords: ['Puerto Rico', 'ventajas', 'beneficios', 'banca puertorriqueña', 'FACEBANK'],
  },
};

const platformSpecs: Record<string, { types: string[]; lengthGuide: string; tone: string }> = {
  instagram: {
    types: ['Post', 'Reel', 'Carousel', 'Story'],
    lengthGuide: 'Post: 150-200 palabras. Reel: script de 30-60 segundos. Carousel: 5-7 slides. Story: texto corto y directo',
    tone: 'Visual, casual pero profesional, uso de emojis estratégico',
  },
  facebook: {
    types: ['Post', 'Video'],
    lengthGuide: 'Post: 200-300 palabras con pregunta al final para engagement',
    tone: 'Conversacional, amigable, fomenta la interacción',
  },
  linkedin: {
    types: ['Post', 'Artículo'],
    lengthGuide: 'Post: 150-250 palabras profesionales. Artículo: 800-1200 palabras',
    tone: 'Profesional, educativo, con datos y estadísticas',
  },
  tiktok: {
    types: ['Video corto'],
    lengthGuide: 'Script de 15-60 segundos, hook en los primeros 3 segundos',
    tone: 'Dinámico, entretenido, educativo rápido',
  },
};

export async function POST(request: NextRequest) {
  try {
    const { topic, platform, isCustom } = await request.json();

    if (!topic || !platform) {
      return NextResponse.json(
        { error: 'Tema y plataforma son requeridos' },
        { status: 400 }
      );
    }

    const platformInfo = platformSpecs[platform];

    if (!platformInfo) {
      return NextResponse.json(
        { error: 'Plataforma inválida' },
        { status: 400 }
      );
    }

    // Si es un tema personalizado, crear topicInfo dinámicamente
    let topicInfo;
    if (isCustom) {
      topicInfo = {
        name: topic,
        focus: topic,
        keywords: [topic, 'FACEBANK', 'Puerto Rico', 'dólares', 'banking'],
      };
    } else {
      topicInfo = topicDetails[topic];
      if (!topicInfo) {
        return NextResponse.json(
          { error: 'Tema inválido' },
          { status: 400 }
        );
      }
    }

    // Seleccionar tipo de post aleatorio para la plataforma
    const postType = platformInfo.types[Math.floor(Math.random() * platformInfo.types.length)];

    // Generar un número aleatorio para asegurar variedad
    const randomSeed = Math.random();
    const contentStyles = [
      'storytelling personal con ejemplo real',
      'datos y estadísticas impactantes',
      'comparación antes/después',
      'mitos vs realidad',
      'pregunta provocativa al inicio',
      'caso de éxito de cliente',
      'tips numerados paso a paso',
      'errores comunes a evitar',
      'tendencia viral actual aplicada al tema',
      'humor sutil y educativo'
    ];
    const selectedStyle = contentStyles[Math.floor(randomSeed * contentStyles.length)];

    const prompt = `Eres un experto en marketing de contenidos para FACEBANK.PR, un banco en Puerto Rico especializado en cuentas en dólares.

IMPORTANTE: Genera contenido ÚNICO y CREATIVO. No repitas estructuras o fórmulas. Este debe ser completamente diferente a contenidos anteriores.

CONTEXTO DE FACEBANK.PR:
- Banco ubicado en Puerto Rico
- Especializado en cuentas bancarias en dólares estadounidenses
- Público objetivo: personas que necesitan manejar dinero en USD, hacer transferencias internacionales, o protegerse de la inflación
- Ventaja competitiva: ubicación en Puerto Rico con acceso al sistema financiero de USA

TEMA DEL CONTENIDO:
${topicInfo.name}
Enfoque: ${topicInfo.focus}

PLATAFORMA: ${platform.toUpperCase()}
Tipo de publicación: ${postType}
Guía de longitud: ${platformInfo.lengthGuide}
Tono: ${platformInfo.tone}

ESTILO CREATIVO OBLIGATORIO PARA ESTE CONTENIDO:
"${selectedStyle}"
Usa este estilo como base pero hazlo único. NO uses fórmulas genéricas.

MEJORES PRÁCTICAS A APLICAR:
- 60% contenido educativo, 30% sobre productos FACEBANK, 10% entretenimiento
- Formato optimizado para ${platform}
- Call-to-action claro y específico
- Hook poderoso en las primeras palabras
- Valor educativo primero, venta después

GENERAR:
Un contenido COMPLETAMENTE ORIGINAL para ${platform} que:
1. Use el estilo "${selectedStyle}" de forma creativa
2. Tenga un HOOK único en las primeras 3 segundos/líneas
3. Sea educativo y sorprendente
4. Mencione naturalmente a FACEBANK.PR (no forzado)
5. Incluya un título atractivo y clickeable
6. Tenga el formato PERFECTO para ${postType}
7. Incluya hashtags estratégicos (mezcla de populares y nicho)
8. Sugiera el mejor horario basado en analytics reales
9. Incluya 3-4 tips ESPECÍFICOS (no genéricos) para maximizar engagement

PARA TIKTOK ESPECÍFICAMENTE:
- Hook en los primeros 2 segundos que haga parar el scroll
- Usa lenguaje de trends actuales
- Incluye momentos de "wait, what?" o "plot twist"
- Termina con un CTA irresistible

Responde SOLO con un JSON con esta estructura:
{
  "topic": "${topicInfo.name}",
  "platform": "${platform}",
  "postType": "${postType}",
  "title": "Título atractivo y específico",
  "content": "Contenido completo del post (respetando la guía de longitud)",
  "hashtags": ["#hashtag1", "#hashtag2", "#hashtag3", "#hashtag4", "#hashtag5"],
  "bestTime": "Mejor horario para publicar (ej: 'Lunes-Viernes 9-11am')",
  "tips": [
    "Tip específico 1 para maximizar engagement",
    "Tip específico 2",
    "Tip específico 3",
    "Tip específico 4"
  ]
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Eres un creador de contenido viral experto en finanzas y redes sociales.
Conoces las últimas tendencias de TikTok, Instagram y otras plataformas.
Creas contenido ÚNICO, CREATIVO y DIFERENTE cada vez.
NUNCA repites estructuras o fórmulas.
Cada pieza de contenido es una obra original que sorprende.
Siempre respondes en formato JSON válido.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.95,
      presence_penalty: 0.6,
      frequency_penalty: 0.7,
      response_format: { type: "json_object" },
    });

    const content = JSON.parse(completion.choices[0].message.content || '{}');

    return NextResponse.json({
      success: true,
      content,
    });
  } catch (error: any) {
    console.error('Error al generar contenido FaceBank:', error);
    return NextResponse.json(
      {
        error: 'Error al generar contenido',
        details: error.message
      },
      { status: 500 }
    );
  }
}
