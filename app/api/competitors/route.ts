import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const competitors = await prisma.competitor.findMany({
      where: { active: true },
      include: {
        posts: {
          take: 5,
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: { name: 'asc' },
    });

    return NextResponse.json({ competitors });
  } catch (error) {
    console.error('Error al obtener competidores:', error);
    return NextResponse.json(
      { error: 'Error al obtener competidores' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === 'seed') {
      // Cargar competidores iniciales desde el JSON
      const filePath = path.join(process.cwd(), 'data', 'competitors.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const competitorsData = JSON.parse(fileContents);

      // Insertar en la base de datos
      for (const comp of competitorsData) {
        await prisma.competitor.upsert({
          where: { name: comp.name },
          update: comp,
          create: comp,
        });
      }

      return NextResponse.json({
        success: true,
        message: `${competitorsData.length} competidores cargados`,
      });
    }

    if (action === 'add') {
      const { name, instagram, website, category, country, notes } = body;

      const competitor = await prisma.competitor.create({
        data: {
          name,
          instagram,
          website,
          category,
          country,
          notes,
        },
      });

      return NextResponse.json({ success: true, competitor });
    }

    return NextResponse.json(
      { error: 'Acción no válida' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Error en API de competidores:', error);
    return NextResponse.json(
      { error: 'Error al procesar solicitud', details: error.message },
      { status: 500 }
    );
  }
}
