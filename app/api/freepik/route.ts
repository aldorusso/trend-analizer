import { NextRequest, NextResponse } from 'next/server';

// Freepik API Configuration
const FREEPIK_API_BASE = 'https://api.freepik.com/v1';

interface FreepikSearchParams {
  term: string;
  page?: number;
  limit?: number;
  order?: 'relevance' | 'recent';
  filters?: {
    orientation?: {
      landscape?: boolean;
      portrait?: boolean;
      square?: boolean;
      panoramic?: boolean;
    };
    content_type?: {
      photo?: boolean;
      psd?: boolean;
      vector?: boolean;
    };
    license?: {
      freemium?: boolean;
      premium?: boolean;
    };
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { term, page = 1, limit = 20, order = 'relevance', filters }: FreepikSearchParams = body;

    // Get API key from environment
    const apiKey = process.env.FREEPIK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Freepik API key no configurada' },
        { status: 500 }
      );
    }

    if (!term) {
      return NextResponse.json(
        { error: 'El término de búsqueda es requerido' },
        { status: 400 }
      );
    }

    // Build query parameters
    const searchParams = new URLSearchParams({
      term,
      page: page.toString(),
      limit: limit.toString(),
      order,
    });

    // Add filters if provided
    if (filters) {
      searchParams.append('filters', JSON.stringify(filters));
    }

    // Make request to Freepik API
    const response = await fetch(`${FREEPIK_API_BASE}/resources?${searchParams}`, {
      method: 'GET',
      headers: {
        'x-freepik-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error de Freepik API:', errorData);
      return NextResponse.json(
        { error: 'Error al buscar imágenes en Freepik', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      data: data.data || [],
      meta: data.meta || {},
      pagination: {
        currentPage: data.meta?.current_page || page,
        lastPage: data.meta?.last_page || 1,
        perPage: data.meta?.per_page || limit,
        total: data.meta?.total || 0,
      },
    });

  } catch (error) {
    console.error('Error en API de Freepik:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Get resource details
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const resourceId = searchParams.get('id');

    if (!resourceId) {
      return NextResponse.json(
        { error: 'ID de recurso requerido' },
        { status: 400 }
      );
    }

    const apiKey = process.env.FREEPIK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Freepik API key no configurada' },
        { status: 500 }
      );
    }

    const response = await fetch(`${FREEPIK_API_BASE}/resources/${resourceId}`, {
      method: 'GET',
      headers: {
        'x-freepik-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      return NextResponse.json(
        { error: 'Error al obtener detalles del recurso', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      resource: data,
    });

  } catch (error) {
    console.error('Error en API de Freepik:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}