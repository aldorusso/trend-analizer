import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const hasOpenAI = !!process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_key_here';
    const hasSerpAPI = !!process.env.SERPAPI_KEY && process.env.SERPAPI_KEY !== 'your_serpapi_key_here';
    const hasFreepik = !!process.env.FREEPIK_API_KEY && process.env.FREEPIK_API_KEY !== 'your_freepik_api_key_here';

    return NextResponse.json({
      configured: hasOpenAI && hasSerpAPI && hasFreepik,
      hasOpenAI,
      hasSerpAPI,
      hasFreepik,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al verificar configuración' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { openaiKey, serpapiKey, freepikKey } = await request.json();

    if (!openaiKey || !serpapiKey || !freepikKey) {
      return NextResponse.json(
        { error: 'Todas las API keys son requeridas' },
        { status: 400 }
      );
    }

    // Ruta al archivo .env
    const envPath = path.join(process.cwd(), '.env');

    // Leer el archivo .env actual
    let envContent = '';
    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf-8');
    }

    // Actualizar o agregar las keys
    const lines = envContent.split('\n');
    let openaiUpdated = false;
    let serpapiUpdated = false;
    let freepikUpdated = false;

    const updatedLines = lines.map((line: string) => {
      if (line.startsWith('OPENAI_API_KEY=')) {
        openaiUpdated = true;
        return `OPENAI_API_KEY=${openaiKey}`;
      }
      if (line.startsWith('SERPAPI_KEY=')) {
        serpapiUpdated = true;
        return `SERPAPI_KEY=${serpapiKey}`;
      }
      if (line.startsWith('FREEPIK_API_KEY=')) {
        freepikUpdated = true;
        return `FREEPIK_API_KEY=${freepikKey}`;
      }
      return line;
    });

    // Si no existían, agregarlas
    if (!openaiUpdated) {
      updatedLines.push(`OPENAI_API_KEY=${openaiKey}`);
    }
    if (!serpapiUpdated) {
      updatedLines.push(`SERPAPI_KEY=${serpapiKey}`);
    }
    if (!freepikUpdated) {
      updatedLines.push(`FREEPIK_API_KEY=${freepikKey}`);
    }

    // Escribir el archivo actualizado
    fs.writeFileSync(envPath, updatedLines.join('\n'));

    // Actualizar las variables de entorno en tiempo de ejecución
    process.env.OPENAI_API_KEY = openaiKey;
    process.env.SERPAPI_KEY = serpapiKey;
    process.env.FREEPIK_API_KEY = freepikKey;

    return NextResponse.json({
      success: true,
      message: 'API keys guardadas correctamente. Reinicia el servidor para que los cambios tengan efecto completo.'
    });
  } catch (error: any) {
    console.error('Error al guardar configuración:', error);
    return NextResponse.json(
      { error: 'Error al guardar las API keys', details: error.message },
      { status: 500 }
    );
  }
}
