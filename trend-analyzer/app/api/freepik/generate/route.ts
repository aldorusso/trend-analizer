import { NextRequest, NextResponse } from 'next/server';

// Freepik AI API Configuration
const FREEPIK_API_BASE = 'https://api.freepik.com/v1';

interface FreepikGenerateRequest {
  prompt: string;
  aspect_ratio?: string; // "square_1_1", "landscape_16_9", "portrait_9_16"
  resolution?: string; // "1k", "2k"
  model?: string; // "realism", "mystic"
  creative_detailing?: number; // 0-100
  filter_nsfw?: boolean;
  styling?: {
    styles?: string[];
    characters?: string[];
    colors?: string[];
  };
}

interface FreepikTaskResponse {
  task_id: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
  generated?: Array<{
    url: string;
    width: number;
    height: number;
  }>;
  error?: string;
}

// Generate image from text prompt
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      prompt,
      aspect_ratio = 'square_1_1',
      resolution = '2k',
      model = 'realism',
      creative_detailing = 50,
      filter_nsfw = true,
      styling
    }: FreepikGenerateRequest = body;

    // Get API key from environment
    const apiKey = process.env.FREEPIK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Freepik API key no configurada' },
        { status: 500 }
      );
    }

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: 'El prompt es requerido para generar la imagen' },
        { status: 400 }
      );
    }

    // Build request payload
    const payload = {
      prompt: prompt.trim(),
      aspect_ratio,
      resolution,
      model,
      creative_detailing,
      filter_nsfw,
      ...(styling && { styling })
    };

    console.log('Generando imagen con payload:', payload);
    console.log('API Key length:', apiKey?.length);

    // Make request to Freepik AI API
    const response = await fetch(`${FREEPIK_API_BASE}/ai/mystic`, {
      method: 'POST',
      headers: {
        'x-freepik-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error de Freepik AI API:', errorData);
      return NextResponse.json(
        { error: 'Error al generar imagen', details: errorData, status: response.status },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Respuesta de Freepik:', data);

    return NextResponse.json({
      success: true,
      task_id: data.data?.task_id || data.task_id,
      status: data.data?.status || data.status,
      message: 'Imagen en proceso de generación'
    });

  } catch (error) {
    console.error('Error en generación de imagen:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Check generation status and get result
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('task_id');

    if (!taskId) {
      return NextResponse.json(
        { error: 'task_id requerido' },
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

    // Check task status
    const response = await fetch(`${FREEPIK_API_BASE}/ai/mystic/${taskId}`, {
      method: 'GET',
      headers: {
        'x-freepik-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      return NextResponse.json(
        { error: 'Error al verificar estado de generación', details: errorData },
        { status: response.status }
      );
    }

    const data: any = await response.json();
    console.log('Status check response:', data);

    // Transform generated URLs to expected format
    const generated = (data.data?.generated || data.generated || []).map((url: string | any) => {
      if (typeof url === 'string') {
        return {
          url: url,
          width: 1024,
          height: 1024
        };
      }
      return url;
    });

    return NextResponse.json({
      success: true,
      task_id: taskId,
      status: data.data?.status || data.status,
      generated: generated,
      error: data.data?.error || data.error
    });

  } catch (error) {
    console.error('Error al verificar estado:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}