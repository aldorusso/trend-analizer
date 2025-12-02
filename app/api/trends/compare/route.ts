import { NextRequest, NextResponse } from 'next/server';

const SERPAPI_URL = 'https://serpapi.com/search';

interface CountryComparisonRequest {
  keyword: string;
  countries: string[];
  timeframe?: '1h' | '4h' | '1d' | '7d' | '1m' | '3m' | '12m' | '5y' | 'all';
}

interface CountryData {
  country: string;
  country_name: string;
  flag: string;
  search_volume: number;
  trend_direction: 'up' | 'down' | 'stable';
  interest_data: Array<{
    date: string;
    value: number;
  }>;
  peak_interest: number;
  avg_interest: number;
  growth_rate: number;
}

interface ComparisonResponse {
  keyword: string;
  countries_data: CountryData[];
  top_country: CountryData;
  trending_countries: CountryData[];
  market_leader: CountryData;
  emerging_markets: CountryData[];
  insights: {
    global_trend: 'up' | 'down' | 'stable';
    market_distribution: string;
    opportunities: string[];
    recommendations: string[];
  };
}

const countryInfo: Record<string, { name: string; flag: string }> = {
  'ES': { name: 'España', flag: '🇪🇸' },
  'MX': { name: 'México', flag: '🇲🇽' },
  'AR': { name: 'Argentina', flag: '🇦🇷' },
  'CO': { name: 'Colombia', flag: '🇨🇴' },
  'PE': { name: 'Perú', flag: '🇵🇪' },
  'CL': { name: 'Chile', flag: '🇨🇱' },
  'VE': { name: 'Venezuela', flag: '🇻🇪' },
  'EC': { name: 'Ecuador', flag: '🇪🇨' },
  'US': { name: 'Estados Unidos', flag: '🇺🇸' },
  'BR': { name: 'Brasil', flag: '🇧🇷' },
  'UY': { name: 'Uruguay', flag: '🇺🇾' },
  'PY': { name: 'Paraguay', flag: '🇵🇾' },
  'GT': { name: 'Guatemala', flag: '🇬🇹' },
  'CR': { name: 'Costa Rica', flag: '🇨🇷' },
  'PA': { name: 'Panamá', flag: '🇵🇦' }
};

async function getTrendDataForCountry(keyword: string, country: string, apiKey: string, timeframe: string = '12m'): Promise<CountryData | null> {
  try {
    console.log(`Obteniendo datos para ${country} con timeframe ${timeframe}`);
    
    const searchParams = new URLSearchParams({
      engine: 'google_trends',
      q: keyword,
      geo: country.toUpperCase(),
      data_type: 'TIMESERIES',
      time: timeframe,
      api_key: apiKey,
    });

    const response = await fetch(`${SERPAPI_URL}?${searchParams}`);
    const data = await response.json();

    console.log(`Respuesta para ${country}:`, {
      ok: response.ok,
      hasData: !!data.interest_over_time?.timeline_data,
      dataLength: data.interest_over_time?.timeline_data?.length || 0,
      keys: Object.keys(data)
    });

    if (!response.ok || !data.interest_over_time?.timeline_data) {
      console.log(`Sin datos para ${country}:`, data.error || 'No timeline data');
      return null;
    }

    const timelineData = data.interest_over_time.timeline_data || [];
    const dataToUse = timelineData.slice(-50); // Usar más datos para mejor análisis
    
    // Extract interest data
    const interestData = dataToUse.map((item: { date: string; values?: Array<{ value?: number }> }) => ({
      date: item.date,
      value: item?.values?.[0]?.value || 0
    }));

    console.log(`Datos procesados para ${country}:`, {
      dataPoints: interestData.length,
      sampleValues: interestData.slice(0, 5).map(d => d.value),
      avgValue: interestData.reduce((sum: number, d: any) => sum + d.value, 0) / interestData.length
    });

    // Calculate metrics
    const values = interestData.map(item => item.value);
    const avgInterest = values.reduce((sum: number, val: number) => sum + val, 0) / values.length;
    const maxInterest = Math.max(...values);
    
    // Calculate trend direction
    const recentValues = values.slice(-3);
    const olderValues = values.slice(0, 3);
    const recentAvg = recentValues.reduce((sum: number, val: number) => sum + val, 0) / recentValues.length;
    const olderAvg = olderValues.reduce((sum: number, val: number) => sum + val, 0) / olderValues.length;
    
    let trend_direction: 'up' | 'down' | 'stable' = 'stable';
    if (recentAvg > olderAvg * 1.15) trend_direction = 'up';
    else if (recentAvg < olderAvg * 0.85) trend_direction = 'down';

    // Calculate growth rate
    const firstValue = values[0] || 1;
    const lastValue = values[values.length - 1] || 1;
    const growthRate = ((lastValue - firstValue) / firstValue) * 100;

    const countryDetails = countryInfo[country.toUpperCase()] || { name: country, flag: '🌍' };

    return {
      country: country.toUpperCase(),
      country_name: countryDetails.name,
      flag: countryDetails.flag,
      search_volume: Math.round(avgInterest),
      trend_direction,
      interest_data: interestData,
      peak_interest: maxInterest,
      avg_interest: Math.round(avgInterest),
      growth_rate: Math.round(growthRate * 100) / 100
    };

  } catch (error) {
    console.error(`Error obteniendo datos para ${country}:`, error);
    return null;
  }
}

function generateInsights(countriesData: CountryData[], keyword: string): ComparisonResponse['insights'] {
  const totalAvgInterest = countriesData.reduce((sum: number, country: CountryData) => sum + country.avg_interest, 0);
  const avgGlobalInterest = totalAvgInterest / countriesData.length;

  const upTrendingCountries = countriesData.filter(c => c.trend_direction === 'up').length;
  const downTrendingCountries = countriesData.filter(c => c.trend_direction === 'down').length;

  let global_trend: 'up' | 'down' | 'stable' = 'stable';
  if (upTrendingCountries > downTrendingCountries) global_trend = 'up';
  else if (downTrendingCountries > upTrendingCountries) global_trend = 'down';

  const topCountries = countriesData
    .sort((a, b) => b.avg_interest - a.avg_interest)
    .slice(0, 3)
    .map(c => c.country_name);

  const emergingMarkets = countriesData
    .filter(c => c.trend_direction === 'up' && c.growth_rate > 0)
    .sort((a, b) => b.growth_rate - a.growth_rate)
    .slice(0, 3)
    .map(c => c.country_name);

  return {
    global_trend,
    market_distribution: `${topCountries.join(', ')} lideran el interés en "${keyword}"`,
    opportunities: [
      emergingMarkets.length > 0 
        ? `Mercados emergentes en ${emergingMarkets.join(', ')}` 
        : 'Explorar mercados con baja penetración',
      global_trend === 'up' 
        ? 'Tendencia global positiva - momento ideal para expansión'
        : 'Análisis detallado de factores locales requerido',
      `Interés promedio global: ${Math.round(avgGlobalInterest)}% - ${avgGlobalInterest > 30 ? 'mercado activo' : 'nicho especializado'}`,
      'Personalización por país basada en patrones locales'
    ],
    recommendations: [
      topCountries.length > 0 
        ? `Priorizar ${topCountries[0]} como mercado principal`
        : 'Analizar factores que impulsan el interés local',
      emergingMarkets.length > 0
        ? `Investigar oportunidades en ${emergingMarkets[0]}`
        : 'Considerar estrategias de entrada en mercados maduros',
      'Adaptar contenido a tendencias culturales y económicas locales',
      'Monitorear cambios estacionales en cada región'
    ]
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { keyword, countries, timeframe = '12m' }: CountryComparisonRequest = body;

    const serpApiKey = process.env.SERPAPI_KEY;
    if (!serpApiKey) {
      return NextResponse.json(
        { error: 'SerpAPI key no configurada' },
        { status: 500 }
      );
    }

    if (!keyword || !countries || countries.length === 0) {
      return NextResponse.json(
        { error: 'Keyword y países son requeridos' },
        { status: 400 }
      );
    }

    if (countries.length > 8) {
      return NextResponse.json(
        { error: 'Máximo 8 países permitidos para evitar límites de API' },
        { status: 400 }
      );
    }

    console.log(`Comparando "${keyword}" entre países: ${countries.join(', ')} con timeframe: ${timeframe}`);

    // Fetch data for all countries
    const countryDataPromises = countries.map(country => 
      getTrendDataForCountry(keyword, country, serpApiKey, timeframe)
    );

    const results = await Promise.all(countryDataPromises);
    const countriesData = results.filter(result => result !== null) as CountryData[];

    console.log(`Resultados obtenidos:`, {
      totalRequested: countries.length,
      successfulResults: countriesData.length,
      countries: countriesData.map(c => ({ country: c.country, avgInterest: c.avg_interest, dataPoints: c.interest_data.length }))
    });

    if (countriesData.length === 0) {
      return NextResponse.json(
        { error: 'No se pudieron obtener datos para ningún país. Verifica que la API key de SerpAPI esté configurada correctamente.' },
        { status: 404 }
      );
    }

    // Sort by average interest
    countriesData.sort((a, b) => b.avg_interest - a.avg_interest);

    // Find top performing countries
    const topCountry = countriesData[0];
    const trendingCountries = countriesData.filter(c => c.trend_direction === 'up').slice(0, 3);
    const marketLeader = countriesData.reduce((prev: CountryData, current: CountryData) => 
      prev.peak_interest > current.peak_interest ? prev : current
    );
    const emergingMarkets = countriesData
      .filter(c => c.growth_rate > 0 && c.trend_direction === 'up')
      .sort((a, b) => b.growth_rate - a.growth_rate)
      .slice(0, 3);

    const insights = generateInsights(countriesData, keyword);

    const response: ComparisonResponse = {
      keyword,
      countries_data: countriesData,
      top_country: topCountry,
      trending_countries: trendingCountries,
      market_leader: marketLeader,
      emerging_markets: emergingMarkets,
      insights
    };

    return NextResponse.json({
      success: true,
      data: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error en comparación de países:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}