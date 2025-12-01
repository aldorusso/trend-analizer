'use client';

import { useState } from 'react';

interface SearchFormProps {
  onSearchComplete: (results: any) => void;
  setLoading: (loading: boolean) => void;
}

export default function SearchForm({ onSearchComplete, setLoading }: SearchFormProps) {
  const [country, setCountry] = useState('argentina');
  const [query, setQuery] = useState('cuenta en dólares');
  const [error, setError] = useState('');

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

  const popularQueries = [
    'cuenta en dólares',
    'inversión en dólares',
    'cómo comprar dólares',
    'mejor banco para dólares',
    'tarjeta de crédito internacional',
    'transferencia internacional',
    'crypto para principiantes',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country, query }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al buscar tendencias');
      }

      onSearchComplete(data);
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
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-xl">🔍</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Buscar Tendencias</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            País
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {countries.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
            Término de búsqueda
          </label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ej: cuenta en dólares"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs font-medium text-gray-600 mb-2">Búsquedas populares:</p>
          <div className="flex flex-wrap gap-2">
            {popularQueries.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setQuery(q)}
                className="text-xs px-3 py-1 bg-white border border-gray-300 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Buscar Tendencias
        </button>
      </form>
    </div>
  );
}
