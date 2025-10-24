import { NextResponse } from 'next/server';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 'home';

    // Mapeo de páginas a directorios de componentes
    const pageComponentMap = {
      'home': 'components/homes/home-6',
      'features': 'components/innerPages/features',
      'about': 'components/innerPages/about',
      'contact': 'components/innerPages/contact',
      'pricing': 'components/innerPages/pricing'
    };

    const componentPath = path.join(process.cwd(), pageComponentMap[page] || pageComponentMap['home']);

    // Leer todos los archivos .jsx del directorio
    let files = [];
    try {
      files = readdirSync(componentPath).filter(file => file.endsWith('.jsx'));
    } catch (error) {
      console.error('Error reading directory:', error);
      return NextResponse.json({ images: [] });
    }

    const images = [];

    // Buscar imágenes en cada archivo
    files.forEach(file => {
      try {
        const filePath = path.join(componentPath, file);
        const content = readFileSync(filePath, 'utf-8');

        // Regex para encontrar rutas de imágenes
        const imageRegex = /(?:src|data-src)=["']([^"']+)["']/g;
        let match;

        while ((match = imageRegex.exec(content)) !== null) {
          const imagePath = match[1];

          // Filtrar solo imágenes (no svgs de iconos inline)
          if (imagePath.includes('/assets/images/') || imagePath.includes('/uploads/')) {
            images.push({
              path: imagePath,
              component: file,
              page: page
            });
          }
        }
      } catch (error) {
        console.error(`Error reading file ${file}:`, error);
      }
    });

    return NextResponse.json({
      success: true,
      page,
      images
    });
  } catch (error) {
    console.error('Error listing images:', error);
    return NextResponse.json({ error: 'Failed to list images' }, { status: 500 });
  }
}
