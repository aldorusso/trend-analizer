'use client';

import { useState } from 'react';

interface ContentGeneratorProps {
  searchQueryId: string;
  trends: any[];
  onContentGenerated: (content: any) => void;
}

export default function ContentGenerator({
  searchQueryId,
  trends,
  onContentGenerated,
}: ContentGeneratorProps) {
  const [platform, setPlatform] = useState('instagram');
  const [postType, setPostType] = useState('post');
  const [selectedTrendId, setSelectedTrendId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const platforms = [
    { value: 'instagram', label: 'Instagram', icon: '📷' },
    { value: 'twitter', label: 'Twitter/X', icon: '🐦' },
    { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
    { value: 'facebook', label: 'Facebook', icon: '👥' },
    { value: 'tiktok', label: 'TikTok', icon: '🎵' },
  ];

  const postTypes = {
    instagram: ['Post', 'Story', 'Reel', 'Carousel'],
    twitter: ['Tweet', 'Thread'],
    linkedin: ['Post', 'Article'],
    facebook: ['Post', 'Story'],
    tiktok: ['Video Script'],
  };

  const handleGenerate = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchQueryId,
          trendId: selectedTrendId || undefined,
          platform,
          postType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al generar contenido');
      }

      onContentGenerated(data.content);
    } catch (err: any) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-xl">✨</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Generar Contenido</h2>
      </div>

      <div className="space-y-4">
        {/* Platform Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Plataforma
          </label>
          <div className="grid grid-cols-2 gap-2">
            {platforms.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => {
                  setPlatform(p.value);
                  setPostType(postTypes[p.value as keyof typeof postTypes][0]);
                }}
                className={`flex items-center justify-center px-4 py-3 rounded-lg border-2 transition-all ${
                  platform === p.value
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{p.icon}</span>
                <span className="text-sm font-medium">{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Post Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de publicación
          </label>
          <select
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {postTypes[platform as keyof typeof postTypes].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Trend Selection (optional) */}
        {trends && trends.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enfoque específico (opcional)
            </label>
            <select
              value={selectedTrendId}
              onChange={(e) => setSelectedTrendId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Tendencia general</option>
              {trends.map((trend) => (
                <option key={trend.id} value={trend.id}>
                  {trend.title}
                </option>
              ))}
            </select>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-200 ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generando...
            </span>
          ) : (
            'Generar Contenido con IA'
          )}
        </button>
      </div>
    </div>
  );
}
