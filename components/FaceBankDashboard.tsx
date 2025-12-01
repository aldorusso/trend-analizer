'use client';

import { useState, useEffect } from 'react';

interface Competitor {
  id: string;
  name: string;
  instagram: string | null;
  category: string;
  country: string;
  posts: CompetitorPost[];
}

interface CompetitorPost {
  id: string;
  topic: string;
  postType: string;
  whatWorked: string | null;
}

export default function FaceBankDashboard() {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null);

  useEffect(() => {
    loadCompetitors();
  }, []);

  const loadCompetitors = async () => {
    try {
      const response = await fetch('/api/competitors');
      const data = await response.json();
      setCompetitors(data.competitors || []);
    } catch (error) {
      console.error('Error al cargar competidores:', error);
    }
  };

  const seedCompetitors = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/competitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'seed' }),
      });
      const data = await response.json();
      alert(data.message);
      await loadCompetitors();
    } catch (error) {
      console.error('Error:', error);
      alert('Error al cargar competidores');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header específico de FaceBank */}
      <div className="bg-gradient-to-r from-[#01a4a8] to-[#019ca0] rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">💰 FACEBANK.PR</h2>
            <p className="text-cyan-100">Centro de Estrategia de Contenido para Cuentas en Dólares</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-cyan-100">Puerto Rico</p>
            <p className="text-xs text-cyan-200">Especialistas en cuentas USD</p>
          </div>
        </div>
      </div>

      {/* Resumen de FaceBank International */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="text-2xl mr-2">📱</span>
            Nuestra Cuenta de Instagram
          </h3>
          <a
            href="https://www.instagram.com/facebankinternational/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center gap-2"
          >
            <span>📸</span>
            Ver Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info Principal */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-[#01a4a8] to-[#019ca0] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                FB
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">@facebankinternational</h4>
                <p className="text-sm text-gray-600">FACEBANK International</p>
                <p className="text-xs text-gray-500 mt-1">🇵🇷 Puerto Rico</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-[#01a4a8]">🏦 Banco digital especializado en cuentas en dólares</strong>
                <br />
                Ofrecemos soluciones financieras modernas para Puerto Rico y Estados Unidos.
                Cuentas USD, transferencias internacionales, y servicios bancarios sin fronteras.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">🌐</span>
                <span className="text-gray-700">Servicios bancarios digitales</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">💵</span>
                <span className="text-gray-700">Cuentas en dólares (USD)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">🌎</span>
                <span className="text-gray-700">Transferencias internacionales</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📱</span>
                <span className="text-gray-700">App móvil para iOS y Android</span>
              </div>
            </div>
          </div>

          {/* Estrategia de Contenido */}
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-gray-900 mb-3">📊 Estrategia de Contenido Actual</h5>
              <div className="space-y-3">
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <p className="font-semibold text-purple-900 text-sm">Pilares de Contenido</p>
                  <ul className="text-xs text-purple-700 mt-2 space-y-1 ml-4">
                    <li>• Educación financiera en dólares</li>
                    <li>• Beneficios de cuentas internacionales</li>
                    <li>• Tips de ahorro y finanzas personales</li>
                    <li>• Servicios y features del banco</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-900 text-sm">Formatos Recomendados</p>
                  <ul className="text-xs text-blue-700 mt-2 space-y-1 ml-4">
                    <li>• Carousels educativos sobre finanzas</li>
                    <li>• Reels con tips rápidos de ahorro</li>
                    <li>• Infografías sobre servicios USD</li>
                    <li>• Testimonios de clientes satisfechos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips de mejores prácticas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">📚</span>
          Mejores Prácticas del Sector
        </h3>
        <div className="space-y-3">
          <div className="flex items-start p-3 bg-blue-50 rounded-lg">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <p className="font-semibold text-gray-900">Contenido Educativo</p>
              <p className="text-sm text-gray-600">
                Los neobancos exitosos publican 60% contenido educativo, 30% productos, 10% entretenimiento
              </p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-purple-50 rounded-lg">
            <span className="text-2xl mr-3">🎨</span>
            <div>
              <p className="font-semibold text-gray-900">Formatos que funcionan</p>
              <p className="text-sm text-gray-600">
                Carousels educativos + Reels de tips rápidos + Stories interactivas
              </p>
            </div>
          </div>
          <div className="flex items-start p-3 bg-green-50 rounded-lg">
            <span className="text-2xl mr-3">📅</span>
            <div>
              <p className="font-semibold text-gray-900">Frecuencia óptima</p>
              <p className="text-sm text-gray-600">
                3-4 posts por semana + 2-3 stories diarias + 1-2 reels semanales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
