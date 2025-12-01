'use client';

import { useState, useEffect } from 'react';

interface ApiKeysConfigProps {
  onConfigured?: () => void;
}

export default function ApiKeysConfig({ onConfigured }: ApiKeysConfigProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openaiKey, setOpenaiKey] = useState('');
  const [serpapiKey, setSerpapiKey] = useState('');
  const [freepikKey, setFreepikKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    checkConfiguration();
  }, []);

  const checkConfiguration = async () => {
    try {
      const response = await fetch('/api/config');
      const data = await response.json();
      setConfigured(data.configured);
      if (!data.configured) {
        setIsOpen(true); // Abrir automáticamente si no está configurado
      }
    } catch (err) {
      console.error('Error al verificar configuración:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('/api/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          openaiKey,
          serpapiKey,
          freepikKey,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al guardar las API keys');
      }

      setSuccess('¡API keys guardadas correctamente! Puedes empezar a usar la aplicación.');
      setConfigured(true);
      setOpenaiKey('');
      setSerpapiKey('');
      setFreepikKey('');

      if (onConfigured) {
        onConfigured();
      }

      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Button to open config */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
          configured
            ? 'bg-green-100 text-green-700 hover:bg-green-200'
            : 'bg-orange-100 text-orange-700 hover:bg-orange-200 animate-pulse'
        }`}
      >
        <span className="text-lg">
          {configured ? '✓' : '⚙️'}
        </span>
        <span className="hidden sm:inline">
          {configured ? 'Configurado' : 'Configurar APIs'}
        </span>
      </button>

      {/* Modal/Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">⚙️ Configuración de API Keys</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>¿Por qué necesitas API keys?</strong> Esta aplicación usa servicios externos:
                </p>
                <ul className="mt-2 text-sm text-blue-700 space-y-1 ml-4 list-disc">
                  <li><strong>SerpAPI</strong>: Para buscar tendencias de Google (100 búsquedas gratis/mes)</li>
                  <li><strong>OpenAI</strong>: Para generar contenido con IA (~$0.01 por generación)</li>
                  <li><strong>Freepik</strong>: Para buscar y usar imágenes profesionales (plan gratuito disponible)</li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* OpenAI Key */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    🤖 OpenAI API Key
                  </label>
                  <input
                    type="password"
                    value={openaiKey}
                    onChange={(e) => setOpenaiKey(e.target.value)}
                    placeholder="sk-..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <a
                    href="https://platform.openai.com/api-keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                  >
                    → Obtener clave en OpenAI →
                  </a>
                </div>

                {/* SerpAPI Key */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    🔍 SerpAPI Key
                  </label>
                  <input
                    type="password"
                    value={serpapiKey}
                    onChange={(e) => setSerpapiKey(e.target.value)}
                    placeholder="Tu SerpAPI key"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <a
                    href="https://serpapi.com/manage-api-key"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                  >
                    → Obtener clave en SerpAPI (gratis) →
                  </a>
                </div>

                {/* Freepik API Key */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    🎨 Freepik API Key
                  </label>
                  <input
                    type="password"
                    value={freepikKey}
                    onChange={(e) => setFreepikKey(e.target.value)}
                    placeholder="Tu Freepik API key"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <a
                    href="https://www.freepik.com/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                  >
                    → Obtener clave en Freepik API →
                  </a>
                </div>

                {/* Instructions */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📝 Instrucciones rápidas:</h3>
                  <ol className="text-sm text-gray-700 space-y-2 ml-4 list-decimal">
                    <li>
                      <strong>OpenAI</strong>: Regístrate en{' '}
                      <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        platform.openai.com
                      </a>
                      , ve a "API Keys" y crea una nueva clave. Necesitarás agregar al menos $5 de crédito.
                    </li>
                    <li>
                      <strong>SerpAPI</strong>: Regístrate gratis en{' '}
                      <a href="https://serpapi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        serpapi.com
                      </a>
                      , ve a "Dashboard" y copia tu API key. El plan gratuito incluye 100 búsquedas al mes.
                    </li>
                    <li>
                      <strong>Freepik</strong>: Regístrate en{' '}
                      <a href="https://www.freepik.com/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        freepik.com/api
                      </a>
                      , solicita acceso a la API y obtén tu clave. Plan gratuito disponible para desarrolladores.
                    </li>
                  </ol>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    <p className="text-sm">{success}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      loading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                  >
                    {loading ? 'Guardando...' : '💾 Guardar API Keys'}
                  </button>
                  {configured && (
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-3 rounded-lg font-semibold bg-gray-200 hover:bg-gray-300 text-gray-700"
                    >
                      Cerrar
                    </button>
                  )}
                </div>
              </form>

              {/* Security note */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-xs text-yellow-800">
                  🔒 <strong>Seguridad:</strong> Tus API keys se guardan localmente en el archivo .env y nunca se envían al navegador.
                  Solo el servidor tiene acceso a ellas.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
