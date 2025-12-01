'use client';

interface TrendResultsProps {
  results: any;
}

export default function TrendResults({ results }: TrendResultsProps) {
  if (!results) return null;

  const { searchQuery, trends, relatedQueries, trendsData } = results;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-xl">📈</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Resultados</h2>
      </div>

      <div className="space-y-4">
        {/* Search Info */}
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Búsqueda:</span> {searchQuery.query}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">País:</span> {searchQuery.country}
          </p>
        </div>

        {/* Trends Timeline */}
        {trendsData && (
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-900 mb-3">Interés a lo largo del tiempo</h3>
            <div className="space-y-2">
              {trendsData.timeline_data?.slice(-10).map((item: any, index: number) => (
                <div key={index} className="flex items-center">
                  <span className="text-xs text-gray-500 w-24">{item.date}</span>
                  <div className="flex-1 ml-3">
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${item.values[0]?.value || 0}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-700 ml-3 w-8 text-right">
                    {item.values[0]?.value || 0}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Queries */}
        {relatedQueries && relatedQueries.length > 0 && (
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-900 mb-3">Búsquedas relacionadas</h3>
            <div className="grid grid-cols-1 gap-2">
              {relatedQueries.slice(0, 5).map((related: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm font-medium text-gray-800">{related.query}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="border-t pt-4 grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">{trends.length}</p>
            <p className="text-xs text-gray-600">Puntos de datos</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">{relatedQueries?.length || 0}</p>
            <p className="text-xs text-gray-600">Búsquedas relacionadas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
