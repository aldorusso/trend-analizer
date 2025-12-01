'use client';

import { useState } from 'react';
import CountryComparisonChart from './CountryComparisonChart';

interface CountryData {
  country: string;
  country_name: string;
  flag: string;
  search_volume: number;
  trend_direction: 'up' | 'down' | 'stable';
  interest_data: Array<{
    date: string;
    value: number;
  }>;
  peak_interest: number;
  avg_interest: number;
  growth_rate: number;
}

interface ComparisonData {
  keyword: string;
  countries_data: CountryData[];
  top_country: CountryData;
  trending_countries: CountryData[];
  market_leader: CountryData;
  emerging_markets: CountryData[];
  insights: {
    global_trend: 'up' | 'down' | 'stable';
    market_distribution: string;
    opportunities: string[];
    recommendations: string[];
  };
}

export default function CountryComparisonDashboard() {
  const [keyword, setKeyword] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['ES', 'MX', 'AR']);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1h' | '4h' | '1d' | '7d' | '1m' | '3m' | '12m' | '5y' | 'all'>('12m');
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Available countries for analysis
  const availableCountries = [
    { code: 'ES', name: 'España', flag: '🇪🇸' },
    { code: 'MX', name: 'México', flag: '🇲🇽' },
    { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
    { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
    { code: 'PE', name: 'Perú', flag: '🇵🇪' },
    { code: 'CL', name: 'Chile', flag: '🇨🇱' },
    { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
    { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
    { code: 'US', name: 'Estados Unidos', flag: '🇺🇸' },
    { code: 'BR', name: 'Brasil', flag: '🇧🇷' },
    { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
    { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
    { code: 'GT', name: 'Guatemala', flag: '🇬🇹' },
    { code: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
    { code: 'PA', name: 'Panamá', flag: '🇵🇦' }
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

  const quickPresets = [
    {
      name: 'Hispanoamérica Principal',
      countries: ['ES', 'MX', 'AR', 'CO'],
      icon: '🌍'
    },
    {
      name: 'Mercados LATAM',
      countries: ['MX', 'AR', 'BR', 'CO'],
      icon: '🌎'
    },
    {
      name: 'Países Andinos',
      countries: ['CO', 'PE', 'EC', 'VE'],
      icon: '🏔️'
    },
    {
      name: 'Cono Sur',
      countries: ['AR', 'CL', 'UY', 'PY'],
      icon: '🌊'
    },
    {
      name: 'Centroamérica',
      countries: ['GT', 'CR', 'PA', 'MX'],
      icon: '🌴'
    }
  ];

  const popularKeywords = [
    'abrir cuenta dólares',
    'inversión criptomonedas',
    'transferencia internacional',
    'banco digital',
    'fintech',
    'cambio divisas',
    'tarjeta sin comisiones',
    'cuenta multimoneda',
    'prestamos online',
    'trading forex'
  ];

  const handleCountryToggle = (countryCode: string) => {
    setSelectedCountries(prev => {
      if (prev.includes(countryCode)) {
        return prev.filter(code => code !== countryCode);
      } else if (prev.length < 8) {
        return [...prev, countryCode];
      } else {
        setError('Máximo 8 países permitidos');
        setTimeout(() => setError(''), 3000);
        return prev;
      }
    });
  };

  const applyPreset = (countries: string[]) => {
    setSelectedCountries(countries);
  };

  const compareCountries = async () => {
    if (!keyword.trim()) {
      setError('Por favor ingresa una palabra clave para analizar');
      return;
    }

    if (selectedCountries.length < 2) {
      setError('Selecciona al menos 2 países para comparar');
      return;
    }

    setLoading(true);
    setError('');
    setComparisonData(null);

    try {
      const response = await fetch('/api/trends/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keyword.trim(),
          countries: selectedCountries,
          timeframe: selectedTimeframe,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error al comparar tendencias entre países');
      }

      setComparisonData(data.data);

    } catch (err: unknown) {
      setError((err as Error)?.message || 'Error al comparar tendencias entre países');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-2">🌍 Comparación Global de Tendencias</h1>
        <p className="text-purple-100">
          Analiza y compara tendencias entre diferentes países para identificar oportunidades globales
        </p>
      </div>

      {/* Configuration Panel */}
      <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">⚙️ Configuración de Análisis</h3>
        
        {/* Keyword and Timeframe Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Keyword Input */}
          <div className="lg:col-span-2 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Palabra Clave a Analizar
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Ej: abrir cuenta dólares"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && compareCountries()}
            />
          </div>

          {/* Timeframe Selector */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Período de Análisis
            </label>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value as '1h' | '4h' | '1d' | '7d' | '1m' | '3m' | '12m' | '5y' | 'all')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {timeframeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.icon} {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Keywords */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Populares:</span>
          {popularKeywords.slice(0, 5).map((quickKeyword) => (
            <button
              key={quickKeyword}
              onClick={() => setKeyword(quickKeyword)}
              className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
            >
              {quickKeyword}
            </button>
          ))}
        </div>

        {/* Country Presets */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Presets Rápidos
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {quickPresets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset.countries)}
                className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <span className="text-2xl mb-1">{preset.icon}</span>
                <span className="text-sm font-medium text-gray-700">{preset.name}</span>
                <span className="text-xs text-gray-500">{preset.countries.length} países</span>
              </button>
            ))}
          </div>
        </div>

        {/* Country Selection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">
              Países Seleccionados ({selectedCountries.length}/8)
            </label>
            <button
              onClick={() => setSelectedCountries([])}
              className="text-sm text-red-600 hover:text-red-800 transition-colors"
            >
              Limpiar selección
            </button>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2">
            {availableCountries.map((country) => {
              const isSelected = selectedCountries.includes(country.code);
              return (
                <button
                  key={country.code}
                  onClick={() => handleCountryToggle(country.code)}
                  className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-2xl mb-1">{country.flag}</span>
                  <span className="text-xs font-medium text-center">{country.name}</span>
                </button>
              );
            })}
          </div>
          
          {/* Selected Countries Summary */}
          {selectedCountries.length > 0 && (
            <div className="flex flex-wrap gap-2 p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Seleccionados:</span>
              {selectedCountries.map((countryCode) => {
                const country = availableCountries.find(c => c.code === countryCode);
                return (
                  <span key={countryCode} className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {country?.flag} {country?.name}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={compareCountries}
          disabled={loading || !keyword.trim() || selectedCountries.length < 2}
          className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all ${
            loading || !keyword.trim() || selectedCountries.length < 2
              ? 'bg-gray-400 cursor-not-allowed text-gray-200'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg'
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              Analizando tendencias globales...
            </div>
          ) : (
            '🚀 Comparar Tendencias Globales'
          )}
        </button>
      </div>

      {/* Results */}
      {!comparisonData && !loading && (
        <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Compara Tendencias Globalmente
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Selecciona países, ingresa una palabra clave y descubre cómo se comportan las tendencias en diferentes mercados
          </p>
        </div>
      )}

      {comparisonData && (
        <CountryComparisonChart data={comparisonData} />
      )}
    </div>
  );
}