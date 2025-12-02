import { NextRequest, NextResponse } from 'next/server';

const SERPAPI_URL = 'https://serpapi.com/search';

interface TrendAnalysisRequest {
  keyword: string;
  country: string;
  timeframe?: string;
  includeRelated?: boolean;
}

interface RelatedTrend {
  keyword: string;
  search_volume: string;
  competition: string;
  trend_direction: 'up' | 'down' | 'stable';
}

interface TrendAnalysisResponse {
  main_keyword: string;
  country: string;
  search_results: Array<{ date: string; value: number }>;
  related_trends: RelatedTrend[];
  suggested_keywords: string[];
  market_insights: {
    popularity: string;
    seasonal_trends: string;
    competition_level: string;
    content_opportunities: string[];
  };
}

// Financial keywords related to different main keywords
const getRelatedKeywords = (mainKeyword: string): string[] => {
  const keywordMap: Record<string, string[]> = {
    'abrir cuenta dólares': [
      'cuenta dólares España',
      'banco cuenta dólares',
      'cuenta extranjero dólares',
      'cambio euro dólar',
      'cuenta divisa extranjera',
      'inversión dólares',
      'ahorro en dólares',
      'cuenta multimoneda',
      'transferencia dólares'
    ],
    'cuenta dólares': [
      'mejor banco dólares',
      'comisiones cuenta dólares',
      'requisitos cuenta dólares',
      'cuenta dólares online',
      'tarjeta débito dólares',
      'cuenta ahorro dólares',
      'cuenta corriente dólares'
    ],
    'inversión dólares': [
      'comprar dólares',
      'ETF dólares',
      'fondos dólares',
      'bonos dólares',
      'acciones dólares',
      'divisas inversión',
      'hedge fondo dólares'
    ],
    'transferencia internacional': [
      'envío dinero extranjero',
      'transfer wire',
      'remesas internacionales',
      'cambio divisas',
      'SWIFT transferencia',
      'transferwise',
      'revolut transferencia'
    ]
  };

  // Find best match
  const normalizedKeyword = mainKeyword.toLowerCase();
  for (const [key, values] of Object.entries(keywordMap)) {
    if (normalizedKeyword.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedKeyword)) {
      return values;
    }
  }

  // Default financial keywords if no specific match
  return [
    'banca digital',
    'fintech España',
    'pagos online',
    'cuenta online',
    'banco móvil',
    'criptomonedas',
    'trading online',
    'préstamos online'
  ];
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { keyword, country, timeframe = '12m' }: TrendAnalysisRequest = body;

    const serpApiKey = process.env.SERPAPI_KEY;
    if (!serpApiKey) {
      return NextResponse.json(
        { error: 'SerpAPI key no configurada' },
        { status: 500 }
      );
    }

    if (!keyword || !country) {
      return NextResponse.json(
        { error: 'Keyword y país son requeridos' },
        { status: 400 }
      );
    }

    console.log(`Analizando tendencias para "${keyword}" en ${country} con timeframe ${timeframe}`);

    // Search main keyword
    const searchParams = new URLSearchParams({
      engine: 'google_trends',
      q: keyword,
      geo: country.toUpperCase(),
      data_type: 'TIMESERIES',
      time: timeframe,
      api_key: serpApiKey,
    });

    const mainResponse = await fetch(`${SERPAPI_URL}?${searchParams}`);
    const mainData = await mainResponse.json();

    if (!mainResponse.ok) {
      throw new Error(mainData.error || 'Error al consultar Google Trends');
    }

    console.log('Respuesta principal:', Object.keys(mainData));

    // Get related keywords
    const relatedKeywords = getRelatedKeywords(keyword);
    
    // Analyze related keywords (limit to avoid rate limits)
    const relatedTrendsPromises = relatedKeywords.slice(0, 5).map(async (relatedKeyword: string) => {
      try {
        const relatedParams = new URLSearchParams({
          engine: 'google_trends',
          q: relatedKeyword,
          geo: country.toUpperCase(),
          data_type: 'TIMESERIES',
          time: timeframe,
          api_key: serpApiKey,
        });

        const relatedResponse = await fetch(`${SERPAPI_URL}?${relatedParams}`);
        const relatedData = await relatedResponse.json();

        if (relatedResponse.ok && relatedData.interest_over_time) {
          const timeData = relatedData.interest_over_time.timeline_data || [];
          const lastValues = timeData.slice(-3); // Last 3 data points
          
          let trend_direction: 'up' | 'down' | 'stable' = 'stable';
          if (lastValues.length >= 2) {
            const recent = lastValues[lastValues.length - 1]?.values?.[0]?.value || 0;
            const previous = lastValues[lastValues.length - 2]?.values?.[0]?.value || 0;
            
            if (recent > previous * 1.1) trend_direction = 'up';
            else if (recent < previous * 0.9) trend_direction = 'down';
          }

          const avgValue = lastValues.reduce((sum: number, item: any) => {
            return sum + (item?.values?.[0]?.value || 0);
          }, 0) / lastValues.length;

          return {
            keyword: relatedKeyword,
            search_volume: avgValue > 50 ? 'Alto' : avgValue > 20 ? 'Medio' : 'Bajo',
            competition: avgValue > 70 ? 'Alta' : avgValue > 30 ? 'Media' : 'Baja',
            trend_direction
          };
        }

        return {
          keyword: relatedKeyword,
          search_volume: 'Datos no disponibles',
          competition: 'Desconocido',
          trend_direction: 'stable' as const
        };
      } catch (error) {
        console.error(`Error analizando ${relatedKeyword}:`, error);
        return {
          keyword: relatedKeyword,
          search_volume: 'Error',
          competition: 'Error',
          trend_direction: 'stable' as const
        };
      }
    });

    const relatedTrends = await Promise.all(relatedTrendsPromises);

    // Generate market insights
    const timelineData = mainData.interest_over_time?.timeline_data || [];
    const recentData = timelineData.slice(-12); // Last 12 months
    
    const avgInterest = recentData.reduce((sum: number, item: any) => {
      return sum + (item?.values?.[0]?.value || 0);
    }, 0) / recentData.length;

    const marketInsights = {
      popularity: avgInterest > 50 ? 'Alta demanda' : avgInterest > 20 ? 'Demanda moderada' : 'Nicho especializado',
      seasonal_trends: recentData.length > 6 ? 'Análisis estacional disponible' : 'Datos insuficientes para análisis estacional',
      competition_level: avgInterest > 60 ? 'Alta competencia' : avgInterest > 30 ? 'Competencia media' : 'Baja competencia',
      content_opportunities: [
        'Artículos educativos sobre el tema',
        'Guías paso a paso',
        'Comparativas de servicios',
        'Casos de uso reales',
        'FAQ sobre regulaciones'
      ]
    };

    // Generate suggested content keywords
    const suggestedKeywords = [
      `${keyword} ${country.toLowerCase()}`,
      `mejor ${keyword}`,
      `cómo ${keyword}`,
      `${keyword} requisitos`,
      `${keyword} comisiones`,
      `guía ${keyword}`,
      `${keyword} 2025`
    ];

    const response: TrendAnalysisResponse = {
      main_keyword: keyword,
      country: country,
      search_results: mainData.interest_over_time?.timeline_data || [],
      related_trends: relatedTrends,
      suggested_keywords: suggestedKeywords,
      market_insights: marketInsights
    };

    return NextResponse.json({
      success: true,
      data: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error en análisis de tendencias:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}