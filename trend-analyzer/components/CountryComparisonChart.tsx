'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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

interface Props {
  data: ComparisonData;
}

const chartColors = [
  '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
  '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
];

export default function CountryComparisonChart({ data }: Props) {
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  // Find the longest timeline to ensure all data points are shown
  const allTimelines = data.countries_data.map(country => country.interest_data);
  const longestTimeline = allTimelines.reduce((longest, current) => 
    current.length > longest.length ? current : longest, allTimelines[0] || []
  );

  // Prepare timeline chart data
  const timelineData = {
    labels: longestTimeline.map(item => 
      new Date(item.date).toLocaleDateString('es-ES', { month: 'short', year: '2-digit' })
    ),
    datasets: data.countries_data.map((country, index) => {
      // Pad shorter datasets with null values to align with longest timeline
      const paddedData = longestTimeline.map((_, dataIndex) => {
        const countryDataPoint = country.interest_data[dataIndex];
        return countryDataPoint ? countryDataPoint.value : null;
      });

      return {
        label: `${country.flag} ${country.country_name}`,
        data: paddedData,
        borderColor: chartColors[index % chartColors.length],
        backgroundColor: chartColors[index % chartColors.length] + (chartType === 'line' ? '20' : '80'),
        borderWidth: 2,
        fill: false, // Set to false to avoid overlap issues
        tension: 0.4,
        spanGaps: true, // Connect points even with null values
      };
    })
  };

  // Prepare comparison bar chart data
  const comparisonData = {
    labels: data.countries_data.map(country => `${country.flag} ${country.country_name}`),
    datasets: [
      {
        label: 'Interés Promedio',
        data: data.countries_data.map(country => country.avg_interest),
        backgroundColor: data.countries_data.map((_, index) => 
          chartColors[index % chartColors.length] + '80'
        ),
        borderColor: data.countries_data.map((_, index) => 
          chartColors[index % chartColors.length]
        ),
        borderWidth: 2,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Tendencias de "${data.keyword}" por País (${longestTimeline.length} puntos de datos)`,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Tiempo'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Nivel de Interés'
        },
        beginAtZero: true,
        max: 100
      }
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Comparación de Interés Promedio - "${data.keyword}"`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Interés Promedio'
        }
      }
    },
  };

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➖';
      default: return '❓';
    }
  };

  const getTrendColor = (direction: string) => {
    switch (direction) {
      case 'up': return 'text-green-600 bg-green-50';
      case 'down': return 'text-red-600 bg-red-50';
      case 'stable': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Data Quality Alert */}
      {data.countries_data.length < 2 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <span className="text-yellow-600 text-xl mr-2">⚠️</span>
            <div>
              <h4 className="font-medium text-yellow-800">Datos limitados</h4>
              <p className="text-yellow-700 text-sm">
                Solo se obtuvieron datos para {data.countries_data.length} de los países solicitados. 
                Esto puede deberse a restricciones de la API o falta de datos para algunos países.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chart Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-between bg-white rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          📊 Visualización de Datos ({data.countries_data.length} países)
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setChartType('line')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              chartType === 'line'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            📈 Líneas
          </button>
          <button
            onClick={() => setChartType('bar')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              chartType === 'bar'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            📊 Barras
          </button>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline Chart */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="h-80">
            <Line data={timelineData} options={chartOptions} />
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="h-80">
            <Bar data={comparisonData} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Country Statistics */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          🏆 Ranking de Países
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-800">País</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-800">Interés Promedio</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-800">Pico Máximo</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-800">Tendencia</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-800">Crecimiento</th>
              </tr>
            </thead>
            <tbody>
              {data.countries_data.map((country, index) => (
                <tr 
                  key={country.country} 
                  className={`border-b border-gray-100 ${index === 0 ? 'bg-yellow-50' : ''}`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{country.flag}</span>
                      <span className="font-medium">{country.country_name}</span>
                      {index === 0 && <span className="text-yellow-500">👑</span>}
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="font-semibold text-lg">{country.avg_interest}</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="text-blue-600 font-medium">{country.peak_interest}</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getTrendColor(country.trend_direction)}`}>
                      {getTrendIcon(country.trend_direction)} {country.trend_direction === 'up' ? 'Subiendo' : country.trend_direction === 'down' ? 'Bajando' : 'Estable'}
                    </span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`font-medium ${country.growth_rate > 0 ? 'text-green-600' : country.growth_rate < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                      {country.growth_rate > 0 ? '+' : ''}{country.growth_rate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Market Leaders */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            🥇 Líderes del Mercado
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium">Top País</span>
              <span className="flex items-center gap-2">
                {data.top_country.flag} {data.top_country.country_name}
                <span className="text-sm text-gray-600">({data.top_country.avg_interest}%)</span>
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="font-medium">Pico Histórico</span>
              <span className="flex items-center gap-2">
                {data.market_leader.flag} {data.market_leader.country_name}
                <span className="text-sm text-gray-600">({data.market_leader.peak_interest}%)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Emerging Markets */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            🚀 Mercados Emergentes
          </h3>
          <div className="space-y-2">
            {data.emerging_markets.length > 0 ? (
              data.emerging_markets.map((market) => (
                <div key={market.country} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    {market.flag} {market.country_name}
                  </span>
                  <span className="text-green-600 font-medium">
                    +{market.growth_rate}% 📈
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-4">
                No hay mercados emergentes identificados
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Global Insights */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          🌍 Insights Globales
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">📈 Oportunidades</h4>
            <ul className="space-y-2">
              {data.insights.opportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700">{opportunity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">💡 Recomendaciones</h4>
            <ul className="space-y-2">
              {data.insights.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}