'use client';

import { useState } from 'react';

interface GeneratedContent {
  topic: string;
  platform: string;
  postType: string;
  title: string;
  content: string;
  hashtags: string[];
  bestTime: string;
  tips: string[];
}

export default function ContentGeneratorFaceBank() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [error, setError] = useState('');

  const topics = [
    { value: 'cuenta-dolares', label: '💵 Cuenta en Dólares', description: 'Apertura, beneficios y uso de cuentas USD' },
    { value: 'transferencias', label: '🌎 Transferencias Internacionales', description: 'Envíos y recepción desde/hacia USA' },
    { value: 'ahorro', label: '💰 Ahorro en Dólares', description: 'Estrategias de ahorro en moneda extranjera' },
    { value: 'ventajas-pr', label: '🏝️ Ventajas Puerto Rico', description: 'Beneficios del banking en Puerto Rico' },
    { value: 'custom', label: '✏️ Tema Personalizado', description: 'Escribe tu propio tema' },
  ];

  const platforms = [
    { value: 'instagram', label: 'Instagram', types: ['Post', 'Reel', 'Carousel', 'Story'] },
    { value: 'facebook', label: 'Facebook', types: ['Post', 'Video'] },
    { value: 'linkedin', label: 'LinkedIn', types: ['Post', 'Artículo'] },
    { value: 'tiktok', label: 'TikTok', types: ['Video corto'] },
  ];

  const handleGenerate = async () => {
    if (!selectedTopic || !selectedPlatform) {
      setError('Por favor selecciona un tema y una plataforma');
      return;
    }

    if (selectedTopic === 'custom' && !customTopic.trim()) {
      setError('Por favor escribe el tema personalizado');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/generate-facebank-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: selectedTopic === 'custom' ? customTopic : selectedTopic,
          platform: selectedPlatform,
          isCustom: selectedTopic === 'custom',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al generar contenido');
      }

      setGeneratedContent(data.content);
    } catch (err: any) {
      console.error('Error generating content:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('¡Copiado al portapapeles!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#01a4a8] to-[#019ca0] rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl">✨</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Generador de Contenido FACEBANK.PR</h2>
            <p className="text-cyan-100">Contenido optimizado basado en mejores prácticas del sector</p>
          </div>
        </div>
      </div>

      {/* Best Practices Info */}
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg border-2 border-[#01a4a8] p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">📚</span>
          Mejores Prácticas Aplicadas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-[#01a4a8]">
            <div className="flex items-start">
              <span className="text-2xl mr-3">💡</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Contenido Educativo</p>
                <p className="text-sm text-gray-600">
                  60% educativo, 30% productos, 10% entretenimiento
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-[#01a4a8]">
            <div className="flex items-start">
              <span className="text-2xl mr-3">🎨</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Formatos que funcionan</p>
                <p className="text-sm text-gray-600">
                  Carousels + Reels de tips + Stories interactivas
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-[#01a4a8]">
            <div className="flex items-start">
              <span className="text-2xl mr-3">📅</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Frecuencia óptima</p>
                <p className="text-sm text-gray-600">
                  3-4 posts/semana + 2-3 stories/día + 1-2 reels/semana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selection Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Configurar Contenido</h3>

        <div className="space-y-4">
          {/* Topic Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Selecciona un tema
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {topics.map((topic) => (
                <button
                  key={topic.value}
                  onClick={() => setSelectedTopic(topic.value)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedTopic === topic.value
                      ? 'border-[#01a4a8] bg-cyan-50'
                      : 'border-gray-200 hover:border-[#01a4a8] hover:bg-gray-50'
                  }`}
                >
                  <p className="font-semibold text-gray-900">{topic.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
                </button>
              ))}
            </div>

            {/* Custom Topic Input */}
            {selectedTopic === 'custom' && (
              <div className="mt-4 p-4 bg-cyan-50 rounded-lg border-2 border-[#01a4a8]">
                <label htmlFor="customTopic" className="block text-sm font-semibold text-gray-900 mb-2">
                  Escribe tu tema personalizado
                </label>
                <input
                  type="text"
                  id="customTopic"
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="Ej: Seguridad en transacciones bancarias, Inversiones en bienes raíces, etc."
                  className="w-full px-4 py-3 border-2 border-[#01a4a8] rounded-lg focus:ring-2 focus:ring-[#01a4a8] focus:border-transparent"
                />
                <p className="text-xs text-gray-600 mt-2">
                  💡 Tip: Sé específico. Ejemplo: "Cómo usar FACEBANK.PR para inversiones en USA"
                </p>
              </div>
            )}
          </div>

          {/* Platform Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Selecciona una plataforma
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform.value}
                  onClick={() => setSelectedPlatform(platform.value)}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    selectedPlatform === platform.value
                      ? 'border-[#01a4a8] bg-cyan-50'
                      : 'border-gray-200 hover:border-[#01a4a8] hover:bg-gray-50'
                  }`}
                >
                  <p className="font-semibold text-gray-900">{platform.label}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {platform.types.join(', ')}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !selectedTopic || !selectedPlatform}
            className={`w-full py-4 rounded-lg font-semibold transition-all ${
              loading || !selectedTopic || !selectedPlatform
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-[#01a4a8] text-white hover:bg-[#019ca0]'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generando contenido...
              </span>
            ) : (
              '✨ Generar Contenido'
            )}
          </button>

          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
              <p className="text-sm">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Generated Content */}
      {generatedContent && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="text-2xl mr-2">📝</span>
              Contenido Generado
            </h3>
            <button
              onClick={() => copyToClipboard(generatedContent.content)}
              className="px-4 py-2 bg-[#01a4a8] text-white rounded-lg hover:bg-[#019ca0] transition-colors text-sm"
            >
              📋 Copiar
            </button>
          </div>

          <div className="space-y-4">
            {/* Metadata */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                {generatedContent.platform}
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                {generatedContent.postType}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                ⏰ {generatedContent.bestTime}
              </span>
            </div>

            {/* Title */}
            <div className="border-l-4 border-[#01a4a8] pl-4">
              <p className="text-sm text-gray-500 mb-1">Título sugerido:</p>
              <h4 className="text-lg font-bold text-gray-900">{generatedContent.title}</h4>
            </div>

            {/* Content */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-2">Contenido:</p>
              <p className="text-gray-900 whitespace-pre-line">{generatedContent.content}</p>
            </div>

            {/* Hashtags */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Hashtags recomendados:</p>
              <div className="flex flex-wrap gap-2">
                {generatedContent.hashtags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm cursor-pointer hover:bg-blue-200"
                    onClick={() => copyToClipboard(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2 flex items-center">
                <span className="text-xl mr-2">💡</span>
                Tips para maximizar engagement:
              </p>
              <ul className="space-y-2">
                {generatedContent.tips.map((tip, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
