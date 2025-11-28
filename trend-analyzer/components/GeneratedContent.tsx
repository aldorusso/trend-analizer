'use client';

import { useState } from 'react';

interface GeneratedContentProps {
  contents: any[];
}

export default function GeneratedContent({ contents }: GeneratedContentProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const getPlatformIcon = (platform: string) => {
    const icons: Record<string, string> = {
      instagram: '📷',
      twitter: '🐦',
      linkedin: '💼',
      facebook: '👥',
      tiktok: '🎵',
    };
    return icons[platform.toLowerCase()] || '📱';
  };

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      instagram: 'from-pink-500 to-purple-500',
      twitter: 'from-blue-400 to-blue-600',
      linkedin: 'from-blue-600 to-blue-800',
      facebook: 'from-blue-500 to-indigo-600',
      tiktok: 'from-pink-400 to-pink-600',
    };
    return colors[platform.toLowerCase()] || 'from-gray-500 to-gray-700';
  };

  if (!contents || contents.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-xl">💡</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Contenido Generado</h2>
      </div>

      {contents.map((content) => (
        <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header with Platform Badge */}
          <div className={`bg-gradient-to-r ${getPlatformColor(content.platform)} px-4 py-3`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <span className="text-xl mr-2">{getPlatformIcon(content.platform)}</span>
                <div>
                  <p className="font-semibold capitalize">{content.platform}</p>
                  <p className="text-xs opacity-90">{content.postType}</p>
                </div>
              </div>
              <span className="text-xs text-white opacity-75">
                {new Date(content.createdAt).toLocaleString('es')}
              </span>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{content.title}</h3>
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 whitespace-pre-wrap">{content.description}</p>
            </div>

            {/* Hashtags */}
            {content.hashtags && (
              <div className="flex flex-wrap gap-2">
                {content.hashtags.split(' ').map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() =>
                  handleCopy(
                    `${content.description}\n\n${content.hashtags || ''}`,
                    content.id
                  )
                }
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                  copiedId === content.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {copiedId === content.id ? '✓ Copiado!' : '📋 Copiar todo'}
              </button>
              <button
                onClick={() => handleCopy(content.description, `${content.id}-desc`)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  copiedId === `${content.id}-desc`
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {copiedId === `${content.id}-desc` ? '✓' : 'Texto'}
              </button>
              <button
                onClick={() => handleCopy(content.hashtags || '', `${content.id}-tags`)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  copiedId === `${content.id}-tags`
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {copiedId === `${content.id}-tags` ? '✓' : '#Tags'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
