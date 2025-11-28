import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { country, query } = await request.json();

    if (!country || !query) {
      return NextResponse.json(
        { error: 'País y consulta son requeridos' },
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

    // Buscar tendencias usando SerpAPI Google Trends
    const trendsResponse = await axios.get('https://serpapi.com/search', {
      params: {
        engine: 'google_trends',
        q: query,
        data_type: 'TIMESERIES',
        geo: countryCode.toUpperCase(),
        api_key: SERPAPI_KEY,
      },
    });

    // También obtener búsquedas relacionadas
    const relatedResponse = await axios.get('https://serpapi.com/search', {
      params: {
        engine: 'google',
        q: query,
        gl: countryCode,
        hl: 'es',
        api_key: SERPAPI_KEY,
      },
    });

    // Guardar en la base de datos
    const searchQuery = await prisma.searchQuery.create({
      data: {
        country,
        query,
      },
    });

    // Extraer datos relevantes
    const trendsData = trendsResponse.data;
    const relatedQueries = relatedResponse.data.related_searches || [];

    // Guardar las tendencias encontradas
    const trends = [];
    if (trendsData.interest_over_time?.timeline_data) {
      const timelineData = trendsData.interest_over_time.timeline_data;
      const latestData = timelineData.slice(-5); // Últimos 5 puntos de datos

      for (const dataPoint of latestData) {
        const trend = await prisma.trend.create({
          data: {
            searchQueryId: searchQuery.id,
            title: query,
            description: `Tendencia en ${country}`,
            traffic: JSON.stringify(dataPoint.values),
            relatedQueries: JSON.stringify(relatedQueries),
          },
        });
        trends.push(trend);
      }
    }

    return NextResponse.json({
      success: true,
      searchQuery,
      trends,
      relatedQueries,
      trendsData: trendsData.interest_over_time,
    });
  } catch (error: any) {
    console.error('Error en búsqueda:', error);
    return NextResponse.json(
      {
        error: 'Error al buscar tendencias',
        details: error.response?.data || error.message
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Obtener últimas búsquedas
    const searches = await prisma.searchQuery.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        trends: true,
        contents: true,
      },
    });

    return NextResponse.json({ searches });
  } catch (error) {
    console.error('Error al obtener búsquedas:', error);
    return NextResponse.json(
      { error: 'Error al obtener búsquedas' },
      { status: 500 }
    );
  }
}
