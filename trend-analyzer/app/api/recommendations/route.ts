import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { country } = await request.json();

    if (!country) {
      return NextResponse.json(
        { error: 'País es requerido' },
        { status: 400 }
      );
    }

    const SERPAPI_KEY = process.env.SERPAPI_KEY;

    if (!SERPAPI_KEY) {
      return NextResponse.json(
        { error: 'SERPAPI_KEY no configurada' },
        { status: 500 }
      );
    }

    // Mapeo de países a códigos de Google
    const countryMap: Record<string, string> = {
      'argentina': 'ar',
      'mexico': 'mx',
      'colombia': 'co',
      'chile': 'cl',
      'españa': 'es',
      'peru': 'pe',
      'venezuela': 've',
      'ecuador': 'ec',
    };

    const countryCode = countryMap[country.toLowerCase()] || 'us';

    // Lista de temas financieros relevantes para analizar
    const financialTopics = [
      'inversión',
      'ahorro',
      'cuenta en dólares',
      'tarjeta de crédito',
      'préstamos',
      'criptomonedas',
      'finanzas personales',
      'emprendimiento',
    ];

    // Buscar tendencias para cada tema (limitado a 3 para no gastar muchas búsquedas)
    const trendPromises = financialTopics.slice(0, 3).map(async (topic) => {
      try {
        const response = await axios.get('https://serpapi.com/search', {
          params: {
            engine: 'google_trends',
            q: topic,
            data_type: 'TIMESERIES',
            geo: countryCode.toUpperCase(),
            api_key: SERPAPI_KEY,
          },
          timeout: 10000,
        });

        const timelineData = response.data.interest_over_time?.timeline_data || [];
        const latestData = timelineData.slice(-5);
        const avgInterest = latestData.reduce((sum: number, item: any) =>
          sum + (item.values[0]?.value || 0), 0) / (latestData.length || 1);

        return {
          topic,
          interest: avgInterest,
          trending: avgInterest > 50,
          data: latestData,
        };
      } catch (error) {
        console.error(`Error fetching trend for ${topic}:`, error);
        return {
          topic,
          interest: 0,
          trending: false,
          data: [],
        };
      }
    });

    const trends = await Promise.all(trendPromises);

    // También obtener búsquedas relacionadas populares
    const relatedSearches = await axios.get('https://serpapi.com/search', {
      params: {
        engine: 'google',
        q: 'finanzas personales',
        gl: countryCode,
        hl: 'es',
        api_key: SERPAPI_KEY,
      },
      timeout: 10000,
    });

    const relatedQueries = relatedSearches.data.related_searches || [];

    // Usar OpenAI para analizar y generar recomendaciones inteligentes
    const analysisPrompt = `Eres un experto en marketing de contenidos financieros y redes sociales.

Analiza estos datos de tendencias de búsqueda en ${country}:

${trends.map((t, i) => `
${i + 1}. "${t.topic}":
   - Interés actual: ${t.interest.toFixed(0)}/100
   - ¿En tendencia?: ${t.trending ? 'SÍ' : 'No'}
`).join('\n')}

Búsquedas relacionadas populares:
${relatedQueries.slice(0, 5).map((q: any, i: number) => `${i + 1}. "${q.query}"`).join('\n')}

Basándote en estos datos, genera recomendaciones ACCIONABLES de contenido para redes sociales.

Responde SOLO con un JSON con esta estructura:
{
  "summary": "Resumen ejecutivo de las oportunidades actuales (2-3 oraciones)",
  "recommendations": [
    {
      "priority": "high/medium/low",
      "topic": "Tema específico del contenido",
      "reason": "Por qué es relevante ahora (datos específicos)",
      "contentIdeas": [
        "Idea específica 1",
        "Idea específica 2",
        "Idea específica 3"
      ],
      "platforms": ["Instagram", "LinkedIn", "TikTok"],
      "formats": ["Post", "Reel", "Carousel"],
      "hashtags": ["#hashtag1", "#hashtag2", "#hashtag3"]
    }
  ],
  "weeklyPlan": {
    "monday": "Tipo de contenido sugerido para lunes",
    "wednesday": "Tipo de contenido sugerido para miércoles",
    "friday": "Tipo de contenido sugerido para viernes"
  }
}

IMPORTANTE:
- Sé específico y práctico
- Prioriza temas con mayor interés
- Sugiere formatos que funcionan mejor en cada plataforma
- Incluye mínimo 3 recomendaciones de alta prioridad`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Eres un estratega de contenido financiero. Generas recomendaciones específicas y accionables basadas en datos de tendencias. Siempre respondes en formato JSON válido.',
        },
        {
          role: 'user',
          content: analysisPrompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const recommendations = JSON.parse(completion.choices[0].message.content || '{}');

    return NextResponse.json({
      success: true,
      country,
      trendsAnalyzed: trends,
      recommendations,
      rawData: {
        trends,
        relatedQueries: relatedQueries.slice(0, 5),
      },
    });
  } catch (error: any) {
    console.error('Error al generar recomendaciones:', error);
    return NextResponse.json(
      {
        error: 'Error al generar recomendaciones',
        details: error.message
      },
      { status: 500 }
    );
  }
}
