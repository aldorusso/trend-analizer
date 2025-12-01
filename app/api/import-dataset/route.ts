import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename } = body;

    if (!filename) {
      return NextResponse.json(
        { error: 'Se requiere el nombre del archivo' },
        { status: 400 }
      );
    }

    // Leer el archivo del dataset
    const filePath = path.join(process.cwd(), filename);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `Archivo no encontrado: ${filename}` },
        { status: 404 }
      );
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const postsData = JSON.parse(fileContents);

    if (!Array.isArray(postsData)) {
      return NextResponse.json(
        { error: 'El archivo debe contener un array de posts' },
        { status: 400 }
      );
    }

    // Llamar al endpoint de saved-posts para importar
    const baseUrl = request.url.split('/api/')[0];
    const importResponse = await fetch(`${baseUrl}/api/saved-posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'import',
        posts: postsData,
      }),
    });

    const result = await importResponse.json();

    return NextResponse.json({
      success: true,
      message: `Dataset importado: ${result.count} posts`,
      filename,
      totalPosts: postsData.length,
      imported: result.count,
    });
  } catch (error: any) {
    console.error('Error al importar dataset:', error);
    return NextResponse.json(
      { error: 'Error al importar dataset', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Listar archivos JSON disponibles en el directorio raíz
    const files = fs.readdirSync(process.cwd())
      .filter(file => file.endsWith('.json') && file.includes('dataset'));

    return NextResponse.json({
      availableDatasets: files,
      message: 'Usa POST con { "filename": "nombre-del-archivo.json" } para importar',
    });
  } catch (error: any) {
    console.error('Error al listar datasets:', error);
    return NextResponse.json(
      { error: 'Error al listar datasets', details: error.message },
      { status: 500 }
    );
  }
}
