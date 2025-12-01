'use client';

import { useState, useEffect } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si ya está autenticado en sessionStorage
    const auth = sessionStorage.getItem('facebank_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === 'aldo1234') {
      sessionStorage.setItem('facebank_auth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
      setPassword('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('facebank_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#01a4a8]"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#01a4a8] to-[#019ca0] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
              FB
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              💰 FACEBANK.PR
            </h1>
            <p className="text-gray-600 mt-2">Centro de Contenido</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña de acceso
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa la contraseña"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#01a4a8] focus:border-transparent outline-none transition-all"
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#01a4a8] to-[#019ca0] text-white py-3 rounded-lg font-medium hover:from-[#019ca0] hover:to-[#018c8e] transition-all shadow-lg hover:shadow-xl"
            >
              Acceder
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>🇵🇷 Puerto Rico • Servicios en USD</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      {/* Botón flotante de logout */}
      <button
        onClick={handleLogout}
        className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors text-sm font-medium flex items-center gap-2"
        title="Cerrar sesión"
      >
        🔒 Salir
      </button>
    </>
  );
}
