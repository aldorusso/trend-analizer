'use client';

import { useState, useEffect } from 'react';

interface SavedPost {
  id: string;
  competitorName: string;
  platform: string;
  postType: string;
  postUrl: string;
  caption: string | null;
  hashtags: string | null;
  mentions: string | null;
  likesCount: number | null;
  commentsCount: number | null;
  viewsCount: number | null;
  timestamp: string;
  analysis: string | null;
  insights: string | null;
  tags: string | null;
  createdAt: string;
}

export default function InfoInterest() {
  const [posts, setPosts] = useState<SavedPost[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [selectedCompetitor, setSelectedCompetitor] = useState('');
  const [selectedPostType, setSelectedPostType] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [analyzingPost, setAnalyzingPost] = useState<string | null>(null);

  // Cargar posts al montar el componente
  useEffect(() => {
    loadPosts();
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      if (response.ok) {
        setTotalPosts(data.totalPosts || 0);
        setStats(data);
      }
    } catch (err: any) {
      console.error('Error loading stats:', err);
    }
  };

  const loadPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/saved-posts');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al cargar posts');
      }

      setPosts(data.posts || []);
    } catch (err: any) {
      console.error('Error loading posts:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const url = new URL('/api/saved-posts', window.location.origin);
      if (search) {
        url.searchParams.append('search', search);
      }
      if (selectedCompetitor) {
        url.searchParams.append('competitor', selectedCompetitor);
      }
      if (selectedPostType) {
        url.searchParams.append('postType', selectedPostType);
      }

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al buscar posts');
      }

      setPosts(data.posts || []);
    } catch (err: any) {
      console.error('Error searching posts:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSearch('');
    setSelectedCompetitor('');
    setSelectedPostType('');
    loadPosts();
  };

  const handleImport = async () => {
    if (!jsonInput.trim()) {
      setError('Por favor pega el JSON de Instagram');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const postsData = JSON.parse(jsonInput);

      if (!Array.isArray(postsData)) {
        throw new Error('El JSON debe ser un array de posts');
      }

      const response = await fetch('/api/saved-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'import',
          posts: postsData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al importar posts');
      }

      alert(`✅ ${data.count} posts importados exitosamente`);
      setJsonInput('');
      setShowImport(false);
      loadPosts();
      loadStats();
    } catch (err: any) {
      console.error('Error importing posts:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async (postId: string) => {
    try {
      setAnalyzingPost(postId);
      setError('');

      const response = await fetch('/api/saved-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'analyze',
          postId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al analizar post');
      }

      // Actualizar el post en la lista con el análisis
      setPosts(posts.map(p => p.id === postId ? data.post : p));
      alert('✅ Análisis completado');
    } catch (err: any) {
      console.error('Error analyzing post:', err);
      setError(err.message);
    } finally {
      setAnalyzingPost(null);
    }
  };

  const handleDelete = async (postId: string) => {
    if (!confirm('¿Estás seguro de eliminar este post?')) {
      return;
    }

    try {
      const response = await fetch(`/api/saved-posts?id=${postId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al eliminar post');
      }

      setPosts(posts.filter(p => p.id !== postId));
      alert('✅ Post eliminado');
    } catch (err: any) {
      console.error('Error deleting post:', err);
      setError(err.message);
    }
  };

  const formatNumber = (num: number | null) => {
    if (!num) return '0';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">📌</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Info de Interés</h2>
              <p className="text-purple-100">Posts guardados de competidores para análisis</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{totalPosts}</p>
            <p className="text-sm text-purple-100">Posts totales</p>
            {(search || selectedCompetitor || selectedPostType) && (
              <p className="text-xs text-purple-200 mt-1">
                Mostrando {posts.length} resultados
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Top Competitors */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">🏦</span>
              Principales Competidores
            </h3>
            <div className="space-y-2">
              {stats.postsByCompetitor.slice(0, 5).map((comp: any, i: number) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <button
                    onClick={() => {
                      setSelectedCompetitor(comp.competidor);
                      handleSearch();
                    }}
                    className="text-purple-600 hover:text-purple-800 hover:underline text-left"
                  >
                    {comp.competidor}
                  </button>
                  <span className="text-gray-500 font-medium">{comp.posts}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Post Types */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">📊</span>
              Tipos de Contenido
            </h3>
            <div className="space-y-2">
              {stats.postsByType.map((type: any, i: number) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <button
                    onClick={() => {
                      setSelectedPostType(type.tipo);
                      handleSearch();
                    }}
                    className="text-indigo-600 hover:text-indigo-800 hover:underline text-left"
                  >
                    {type.tipo}
                  </button>
                  <span className="text-gray-500 font-medium">{type.posts}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Stats */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">📈</span>
              Engagement Promedio
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Likes</p>
                <p className="text-lg font-bold text-pink-600">
                  {formatNumber(stats.engagement.promedio.likes)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Comentarios</p>
                <p className="text-lg font-bold text-blue-600">
                  {formatNumber(stats.engagement.promedio.comments)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Vistas</p>
                <p className="text-lg font-bold text-green-600">
                  {formatNumber(stats.engagement.promedio.views)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search & Import */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {/* Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Search Input */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Buscar por texto..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />

            {/* Competitor Filter */}
            <select
              value={selectedCompetitor}
              onChange={(e) => setSelectedCompetitor(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Todos los competidores</option>
              {stats?.postsByCompetitor.map((comp: any, i: number) => (
                <option key={i} value={comp.competidor}>
                  {comp.competidor} ({comp.posts})
                </option>
              ))}
            </select>

            {/* Post Type Filter */}
            <select
              value={selectedPostType}
              onChange={(e) => setSelectedPostType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Todos los tipos</option>
              {stats?.postsByType.map((type: any, i: number) => (
                <option key={i} value={type.tipo}>
                  {type.tipo} ({type.posts})
                </option>
              ))}
            </select>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleSearch}
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                🔍 Buscar
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                ↻
              </button>
            </div>
          </div>

          {/* Import Button */}
          <button
            onClick={() => setShowImport(!showImport)}
            className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {showImport ? '❌ Cerrar Import' : '➕ Importar Posts desde JSON'}
          </button>
        </div>

        {/* Import Panel */}
        {showImport && (
          <div className="mt-4 p-4 bg-indigo-50 rounded-lg border-2 border-indigo-600">
            <h3 className="font-bold text-gray-900 mb-2">Importar Posts de Instagram</h3>
            <p className="text-sm text-gray-600 mb-3">
              Pega el JSON con el array de posts de Instagram. Debe ser un array con objetos que contengan los datos del post.
            </p>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder='[{"ownerUsername": "banco", "caption": "...", "likesCount": 1000, ...}, ...]'
              className="w-full h-40 px-4 py-2 border-2 border-indigo-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono text-sm"
            />
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleImport}
                disabled={loading}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-300"
              >
                {loading ? 'Importando...' : '📥 Importar'}
              </button>
              <button
                onClick={() => {
                  setJsonInput('');
                  setShowImport(false);
                }}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-2 text-gray-600">Cargando...</p>
        </div>
      )}

      {/* Posts Grid */}
      {!loading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Post Header */}
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">{post.competitorName}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-purple-600 text-white rounded-full">
                        {post.platform}
                      </span>
                      <span className="text-xs px-2 py-1 bg-indigo-600 text-white rounded-full">
                        {post.postType}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(post.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:text-red-800 text-xl"
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4 space-y-3">
                {/* Caption */}
                {post.caption && (
                  <div>
                    <p className="text-sm text-gray-700 line-clamp-3">{post.caption}</p>
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    ❤️ <strong>{formatNumber(post.likesCount)}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    💬 <strong>{formatNumber(post.commentsCount)}</strong>
                  </span>
                  {post.viewsCount && post.viewsCount > 0 && (
                    <span className="flex items-center gap-1">
                      👁️ <strong>{formatNumber(post.viewsCount)}</strong>
                    </span>
                  )}
                </div>

                {/* Hashtags */}
                {post.hashtags && (
                  <div className="flex flex-wrap gap-1">
                    {JSON.parse(post.hashtags).slice(0, 3).map((tag: string, i: number) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        #{tag}
                      </span>
                    ))}
                    {JSON.parse(post.hashtags).length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        +{JSON.parse(post.hashtags).length - 3} más
                      </span>
                    )}
                  </div>
                )}

                {/* Analysis Section */}
                {post.analysis ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🤖</span>
                      <p className="font-semibold text-green-900">Análisis con IA</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      <p className="font-medium mb-1">Análisis:</p>
                      <p className="text-xs whitespace-pre-line line-clamp-4">{post.analysis}</p>
                    </div>
                    {post.insights && (
                      <div className="text-sm text-gray-700 mt-2">
                        <p className="font-medium mb-1">Insights para FACEBANK.PR:</p>
                        <p className="text-xs whitespace-pre-line line-clamp-3">{post.insights}</p>
                      </div>
                    )}
                    {post.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {JSON.parse(post.tags).map((tag: string, i: number) => (
                          <span key={i} className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleAnalyze(post.id)}
                    disabled={analyzingPost === post.id}
                    className="w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors disabled:from-gray-300 disabled:to-gray-300"
                  >
                    {analyzingPost === post.id ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analizando...
                      </span>
                    ) : (
                      '🤖 Analizar con IA'
                    )}
                  </button>
                )}

                {/* Post URL */}
                {post.postUrl && (
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-sm text-purple-600 hover:text-purple-800 underline"
                  >
                    Ver post original ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && posts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <span className="text-6xl mb-4 block">📭</span>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No hay posts guardados</h3>
          <p className="text-gray-600 mb-4">
            Importa posts de Instagram usando el botón "Importar Posts"
          </p>
          <button
            onClick={() => setShowImport(true)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            ➕ Importar ahora
          </button>
        </div>
      )}
    </div>
  );
}
