import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Total de posts
    const totalPosts = await prisma.savedPost.count();

    // Posts por competidor
    const postsByCompetitor = await prisma.savedPost.groupBy({
      by: ['competitorName'],
      _count: {
        id: true,
      },
      orderBy: {
        _count: {
          id: 'desc',
        },
      },
    });

    // Posts por tipo
    const postsByType = await prisma.savedPost.groupBy({
      by: ['postType'],
      _count: {
        id: true,
      },
    });

    // Engagement total
    const engagement = await prisma.savedPost.aggregate({
      _sum: {
        likesCount: true,
        commentsCount: true,
        viewsCount: true,
      },
      _avg: {
        likesCount: true,
        commentsCount: true,
        viewsCount: true,
      },
    });

    // Top posts por engagement
    const topPosts = await prisma.savedPost.findMany({
      take: 10,
      orderBy: {
        likesCount: 'desc',
      },
      select: {
        id: true,
        competitorName: true,
        caption: true,
        likesCount: true,
        commentsCount: true,
        viewsCount: true,
        postUrl: true,
      },
    });

    return NextResponse.json({
      totalPosts,
      postsByCompetitor: postsByCompetitor.map(p => ({
        competidor: p.competitorName,
        posts: p._count.id,
      })),
      postsByType: postsByType.map(p => ({
        tipo: p.postType,
        posts: p._count.id,
      })),
      engagement: {
        total: {
          likes: engagement._sum.likesCount || 0,
          comments: engagement._sum.commentsCount || 0,
          views: engagement._sum.viewsCount || 0,
        },
        promedio: {
          likes: Math.round(engagement._avg.likesCount || 0),
          comments: Math.round(engagement._avg.commentsCount || 0),
          views: Math.round(engagement._avg.viewsCount || 0),
        },
      },
      topPosts,
    });
  } catch (error: any) {
    console.error('Error al obtener estadísticas:', error);
    return NextResponse.json(
      { error: 'Error al obtener estadísticas', details: error.message },
      { status: 500 }
    );
  }
}
