'use client';

import { useState } from 'react';

interface Recommendation {
  priority: 'high' | 'medium' | 'low';
  topic: string;
  reason: string;
  contentIdeas: string[];
  platforms: string[];
  formats: string[];
  hashtags: string[];
}

interface WeeklyPlan {
  monday?: string;
  wednesday?: string;
  friday?: string;
}

interface RecommendationsData {
  summary: string;
  recommendations: Recommendation[];
  weeklyPlan: WeeklyPlan;
}

export default function ContentRecommendations() {
  const [country, setCountry] = useState('argentina');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recommendations, setRecommendations] = useState<RecommendationsData | null>(null);

  const countries = [
    { value: 'argentina', label: 'Argentina' },
    { value: 'bolivia', label: 'Bolivia' },
    { value: 'chile', label: 'Chile' },
    { value: 'colombia', label: 'Colombia' },
    { value: 'costa-rica', label: 'Costa Rica' },
    { value: 'ecuador', label: 'Ecuador' },
    { value: 'el-salvador', label: 'El Salvador' },
    { value: 'españa', label: 'España' },
    { value: 'estados-unidos', label: 'Estados Unidos' },
    { value: 'guatemala', label: 'Guatemala' },
    { value: 'honduras', label: 'Honduras' },
    { value: 'mexico', label: 'México' },
    { value: 'panama', label: 'Panamá' },
    { value: 'paraguay', label: 'Paraguay' },
    { value: 'peru', label: 'Perú' },
    { value: 'uruguay', label: 'Uruguay' },
    { value: 'venezuela', label: 'Venezuela' },
  ];

  const handleGetRecommendations = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country }),
      });

      const data = await response.json();

      console.log('Response data completa:', data);
      console.log('data.recommendations:', data.recommendations);

      if (!response.ok) {
        throw new Error(data.error || 'Error al obtener recomendaciones');
      }

      // Verificar que tenemos la estructura correcta
      if (!data.recommendations) {
        console.error('No se encontró data.recommendations en la respuesta');
        throw new Error('La respuesta no contiene recomendaciones');
      }

      if (!data.recommendations.recommendations || data.recommendations.recommendations.length === 0) {
        console.error('No hay recomendaciones en el array');
        throw new Error('No se generaron recomendaciones');
      }

      console.log('Setting recommendations:', data.recommendations);
      setRecommendations(data.recommendations);
    } catch (err: any) {
      console.error('Error in handleGetRecommendations:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return '🔥';
      case 'medium':
        return '⚡';
      case 'low':
        return '💡';
      default:
        return '📌';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'Alta Prioridad';
      case 'medium':
        return 'Media Prioridad';
      case 'low':
        return 'Baja Prioridad';
      default:
        return 'Prioridad';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl">🎯</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Asistente Inteligente</h2>
            <p className="text-purple-100">Descubre qué publicar basado en tendencias reales</p>
          </div>
        </div>

        <div className="flex gap-3">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          >
            {countries.map((c) => (
              <option key={c.value} value={c.value} className="text-gray-900 bg-white">
                {c.label}
              </option>
            ))}
          </select>

          <button
            onClick={handleGetRecommendations}
            disabled={loading}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              loading
                ? 'bg-white bg-opacity-30 cursor-not-allowed text-white'
                : 'bg-white text-purple-600 hover:bg-gray-100'
            }`}
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analizando...
              </span>
            ) : (
              '🚀 Obtener Recomendaciones'
            )}
          </button>
        </div>

        {error && (
          <div className="mt-4 bg-red-500 bg-opacity-20 border border-red-300 text-white px-4 py-3 rounded-lg">
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="bg-white rounded-lg shadow-md p-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <div className="w-20 h-20 border-8 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Analizando tendencias...
              </h3>
              <p className="text-gray-600 mb-4">
                Estoy buscando las mejores oportunidades de contenido para ti
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="flex space-x-1">
                  <span className="animate-bounce" style={{ animationDelay: '0ms' }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: '150ms' }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: '300ms' }}>●</span>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <span className="mr-2">📊</span>
                  <span>Analizando tendencias de búsqueda</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <span className="mr-2">🔍</span>
                  <span>Identificando temas relevantes</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <span className="mr-2">💡</span>
                  <span>Generando recomendaciones personalizadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {recommendations && !loading && (
        <div className="space-y-6">
          {/* Summary */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center">
              <span className="text-xl mr-2">📊</span>
              Resumen Ejecutivo
            </h3>
            <p className="text-blue-800">{recommendations.summary}</p>
          </div>

          {/* Weekly Plan */}
          {recommendations.weeklyPlan && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-xl mr-2">📅</span>
                Plan Semanal Sugerido
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommendations.weeklyPlan.monday && (
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="font-semibold text-green-900 mb-1">Lunes</p>
                    <p className="text-sm text-green-700">{recommendations.weeklyPlan.monday}</p>
                  </div>
                )}
                {recommendations.weeklyPlan.wednesday && (
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <p className="font-semibold text-purple-900 mb-1">Miércoles</p>
                    <p className="text-sm text-purple-700">{recommendations.weeklyPlan.wednesday}</p>
                  </div>
                )}
                {recommendations.weeklyPlan.friday && (
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="font-semibold text-orange-900 mb-1">Viernes</p>
                    <p className="text-sm text-orange-700">{recommendations.weeklyPlan.friday}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Recommendations */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-xl flex items-center">
              <span className="text-2xl mr-2">💎</span>
              Oportunidades de Contenido ({recommendations.recommendations?.length || 0})
            </h3>

            {(!recommendations.recommendations || recommendations.recommendations.length === 0) ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <p className="text-yellow-800 font-medium">No se generaron recomendaciones</p>
                <p className="text-yellow-600 text-sm mt-2">Intenta con otro país o vuelve a intentar</p>
              </div>
            ) :
              recommendations.recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Priority Badge */}
                <div className={`px-4 py-2 border-b-2 ${getPriorityColor(rec.priority)}`}>
                  <span className="font-semibold text-sm flex items-center">
                    <span className="mr-2">{getPriorityIcon(rec.priority)}</span>
                    {getPriorityLabel(rec.priority)}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  {/* Topic */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{rec.topic}</h4>
                    <p className="text-gray-600 text-sm">{rec.reason}</p>
                  </div>

                  {/* Content Ideas */}
                  <div>
                    <p className="font-semibold text-gray-900 mb-2 text-sm">💡 Ideas de contenido:</p>
                    <ul className="space-y-2">
                      {rec.contentIdeas.map((idea, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platforms & Formats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm">📱 Plataformas:</p>
                      <div className="flex flex-wrap gap-2">
                        {rec.platforms.map((platform, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-sm">🎨 Formatos:</p>
                      <div className="flex flex-wrap gap-2">
                        {rec.formats.map((format, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hashtags */}
                  <div>
                    <p className="font-semibold text-gray-900 mb-2 text-sm">#️⃣ Hashtags sugeridos:</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.hashtags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!recommendations && !loading && (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ¿Qué publicar hoy?
          </h3>
          <p className="text-gray-600 mb-6">
            Selecciona un país y obtén recomendaciones inteligentes basadas en tendencias reales
          </p>
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto text-left">
            <p className="font-semibold text-gray-900 mb-3">Obtendrás:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Análisis de tendencias actuales en tu país</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Recomendaciones priorizadas de contenido</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Ideas específicas listas para implementar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Plan semanal de publicaciones</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
