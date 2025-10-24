import { readFileSync, writeFileSync } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(request) {
  try {
    const { component, oldPath, newPath, page } = await request.json();

    if (!component || !oldPath || !newPath || !page) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Mapeo de páginas a directorios de componentes
    const pageComponentMap = {
      'home': 'components/homes/home-6',
      'features': 'components/innerPages/features',
      'about': 'components/innerPages/about',
      'contact': 'components/innerPages/contact',
      'pricing': 'components/innerPages/pricing'
    };

    const componentDir = pageComponentMap[page] || pageComponentMap['home'];
    const componentPath = path.join(process.cwd(), componentDir, component);

    // Leer el archivo del componente
    let content = readFileSync(componentPath, 'utf-8');

    // Reemplazar la ruta antigua por la nueva
    const escapedOldPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedOldPath, 'g');

    if (!regex.test(content)) {
      return NextResponse.json({
        error: 'Image path not found in component',
        oldPath,
        component
      }, { status: 404 });
    }

    content = content.replace(regex, newPath);

    // Guardar el archivo actualizado
    writeFileSync(componentPath, content, 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Image reference updated successfully',
      component,
      oldPath,
      newPath
    });
  } catch (error) {
    console.error('Error updating image reference:', error);
    return NextResponse.json({
      error: 'Failed to update image reference',
      details: error.message
    }, { status: 500 });
  }
}
