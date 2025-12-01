'use client';

import { useState } from 'react';

interface RelatedTrend {
  keyword: string;
  search_volume: string;
  competition: string;
  trend_direction: 'up' | 'down' | 'stable';
}

interface MarketInsights {
  popularity: string;
  seasonal_trends: string;
  competition_level: string;
  content_opportunities: string[];
}

interface TrendAnalysis {
  main_keyword: string;
  country: string;
  search_results: Array<{ date: string; value: number }>;
  related_trends: RelatedTrend[];
  suggested_keywords: string[];
  market_insights: MarketInsights;
}

export default function CountryTrendsAnalyzer() {
  const [keyword, setKeyword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('ES');
  const [selectedTimeframe, setSelectedTimeframe] = useState('12m');
  const [analysis, setAnalysis] = useState<TrendAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Países disponibles para análisis
  const countries = [
    { code: 'ES', name: 'España', flag: '🇪🇸' },
    { code: 'MX', name: 'México', flag: '🇲🇽' },
    { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
    { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
    { code: 'PE', name: 'Perú', flag: '🇵🇪' },
    { code: 'CL', name: 'Chile', flag: '🇨🇱' },
    { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
    { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
    { code: 'US', name: 'Estados Unidos', flag: '🇺🇸' },
  ];

  const timeframeOptions = [
    { value: '1h', label: 'Última hora', icon: '⏰' },
    { value: '4h', label: 'Últimas 4 horas', icon: '🕓' },
    { value: '1d', label: 'Último día', icon: '📅' },
    { value: '7d', label: 'Última semana', icon: '📆' },
    { value: '1m', label: 'Último mes', icon: '🗓️' },
    { value: '3m', label: 'Últimos 3 meses', icon: '🗓️' },
    { value: '12m', label: 'Último año', icon: '🗓️' },
    { value: '5y', label: 'Últimos 5 años', icon: '🗓️' },
    { value: 'all', label: 'Todo el tiempo', icon: '⏳' }
  ];

  // Keywords predefinidos para pruebas rápidas
  const quickKeywords = [
    'abrir cuenta dólares',
    'cuenta extranjero',
    'inversión dólares',
    'transferencia internacional',
    'banco digital',
    'fintech',
    'criptomonedas',
    'tarjeta sin comisiones',
    'cambio divisas',
    'cuenta multimoneda'
  ];

  const analyzeKeyword = async () => {
    if (!keyword.trim()) {
      setError('Por favor ingresa una palabra clave para analizar');
      return;
    }

    setLoading(true);
    setError('');
    setAnalysis(null);

    try {
      const response = await fetch('/api/trends/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keyword.trim(),
          country: selectedCountry,
          timeframe: selectedTimeframe,
          includeRelated: true,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error al analizar las tendencias');
      }

      setAnalysis(data.data);

    } catch (err: unknown) {
      setError((err as Error)?.message || 'Error al analizar las tendencias');
    } finally {
      setLoading(false);
    }
  };

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➖';
      default: return '❓';
    }
  };

  const getVolumeColor = (volume: string) => {
    switch (volume) {
      case 'Alto': return 'text-green-600 bg-green-50';
      case 'Medio': return 'text-yellow-600 bg-yellow-50';
      case 'Bajo': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'Alta': return 'text-red-600 bg-red-50';
      case 'Media': return 'text-yellow-600 bg-yellow-50';
      case 'Baja': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-2">🌍 Análisis de Tendencias por País</h1>
        <p className="text-blue-100">
          Descubre qué busca la gente en diferentes países y encuentra oportunidades de contenido
        </p>
      </div>

      {/* Búsqueda */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
            <h3 className="font-semibold text-gray-800">🔍 Configuración</h3>
            
            {/* País */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                País
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Timeframe */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Período de Análisis
              </label>
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {timeframeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Keyword */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Palabra Clave
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Ej: abrir cuenta dólares"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && analyzeKeyword()}
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              onClick={analyzeKeyword}
              disabled={loading || !keyword.trim()}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                loading || !keyword.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analizando...
                </div>
              ) : (
                '📊 Analizar Tendencias'
              )}
            </button>
          </div>

          {/* Keywords rápidos */}
          <div className="bg-white rounded-lg shadow-sm border p-4 mt-4">
            <h4 className="font-semibold text-gray-800 mb-3">⚡ Keywords Populares</h4>
            <div className="space-y-1">
              {quickKeywords.slice(0, 6).map((quickKeyword, index) => (
                <button
                  key={index}
                  onClick={() => setKeyword(quickKeyword)}
                  className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors"
                >
                  {quickKeyword}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="lg:col-span-3">
          {!analysis && !loading && (
            <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Analiza Tendencias por País
              </h3>
              <p className="text-gray-600">
                Selecciona un país, ingresa una palabra clave y descubre insights valiosos
              </p>
            </div>
          )}

          {analysis && (
            <div className="space-y-6">
              {/* Resumen Principal */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    📈 Análisis: &quot;{analysis.main_keyword}&quot;
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {countries.find(c => c.code === analysis.country)?.flag} {countries.find(c => c.code === analysis.country)?.name}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-1">Popularidad</h4>
                    <p className="text-blue-700">{analysis.market_insights.popularity}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-1">Competencia</h4>
                    <p className="text-green-700">{analysis.market_insights.competition_level}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-1">Tendencias</h4>
                    <p className="text-purple-700">{analysis.market_insights.seasonal_trends}</p>
                  </div>
                </div>
              </div>

              {/* Tendencias Relacionadas */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  🔗 Búsquedas Relacionadas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysis.related_trends.map((trend, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-800">{trend.keyword}</h4>
                        <span className="text-xl">{getTrendIcon(trend.trend_direction)}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getVolumeColor(trend.search_volume)}`}>
                          Vol: {trend.search_volume}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getCompetitionColor(trend.competition)}`}>
                          Comp: {trend.competition}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keywords Sugeridos */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  💡 Keywords Sugeridos para Contenido
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {analysis.suggested_keywords.map((suggestedKeyword, index) => (
                    <button
                      key={index}
                      onClick={() => setKeyword(suggestedKeyword)}
                      className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                    >
                      {suggestedKeyword}
                    </button>
                  ))}
                </div>
              </div>

              {/* Oportunidades de Contenido */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  🎯 Oportunidades de Contenido
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {analysis.market_insights.content_opportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-green-800">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}