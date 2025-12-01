'use client';

import { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import TrendResults from '@/components/TrendResults';
import ContentGenerator from '@/components/ContentGenerator';
import GeneratedContent from '@/components/GeneratedContent';
import ApiKeysConfig from '@/components/ApiKeysConfig';
import ContentRecommendations from '@/components/ContentRecommendations';
import FaceBankDashboard from '@/components/FaceBankDashboard';
import ContentGeneratorFaceBank from '@/components/ContentGenerator_FaceBank';
import InfoInterest from '@/components/InfoInterest';
import AuthGuard from '@/components/AuthGuard';
import FreepikImageGenerator from '@/components/FreepikImageGenerator';
import CountryTrendsAnalyzer from '@/components/CountryTrendsAnalyzer';
import CountryComparisonDashboard from '@/components/CountryComparisonDashboard';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'facebank' | 'generator' | 'recommendations' | 'manual' | 'info' | 'images' | 'trends' | 'global'>('facebank');
  const [searchResults, setSearchResults] = useState<any>(null);
  const [generatedContents, setGeneratedContents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearchComplete = (results: any) => {
    setSearchResults(results);
  };

  const handleContentGenerated = (content: any) => {
    setGeneratedContents(prev => [content, ...prev]);
  };

  return (
    <AuthGuard>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                💰 FACEBANK.PR - Centro de Contenido
              </h1>
              <p className="text-gray-600 mt-1">
                Estrategia de contenido inteligente para redes sociales
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <ApiKeysConfig />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('facebank')}
                className={`${
                  activeTab === 'facebank'
                    ? 'border-[#01a4a8] text-[#01a4a8]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center`}
              >
                <span className="text-xl mr-2">💰</span>
                FACEBANK.PR
              </button>
              <button
                onClick={() => setActiveTab('generator')}
                className={`${
                  activeTab === 'generator'
                    ? 'border-[#01a4a8] text-[#01a4a8]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center`}
              >
                <span className="text-xl mr-2">✨</span>
                Generador de Contenido
              </button>
              <button
                onClick={() => setActiveTab('recommendations')}
                className={`${
                  activeTab === 'recommendations'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center`}
              >
                <span className="text-xl mr-2">🎯</span>
                Recomendaciones IA
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`${
                  activeTab === 'manual'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center`}
              >
                <span className="text-xl mr-2">🔍</span>
                Búsqueda Manual
              </button>
              <button
                onClick={() => setActiveTab('info')}
                className={`${
                  activeTab === 'info'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center`}
              >
                <span className="text-xl mr-2">📌</span>
                Info de Interés
              </button>
              <button
                onClick={() => setActiveTab('images')}
                className={`${
                  activeTab === 'images'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center`}
              >
                <span className="text-xl mr-2">🎨</span>
                Generador de Imágenes
              </button>
              <button
                onClick={() => setActiveTab('trends')}
                className={`${
                  activeTab === 'trends'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center`}
              >
                <span className="text-xl mr-2">🌍</span>
                Tendencias por País
              </button>
              <button
                onClick={() => setActiveTab('global')}
                className={`${
                  activeTab === 'global'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center`}
              >
                <span className="text-xl mr-2">📊</span>
                Comparación Global
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'facebank' ? (
          <FaceBankDashboard />
        ) : activeTab === 'generator' ? (
          <ContentGeneratorFaceBank />
        ) : activeTab === 'recommendations' ? (
          <ContentRecommendations />
        ) : activeTab === 'info' ? (
          <InfoInterest />
        ) : activeTab === 'images' ? (
          <FreepikImageGenerator />
        ) : activeTab === 'trends' ? (
          <CountryTrendsAnalyzer />
        ) : activeTab === 'global' ? (
          <CountryComparisonDashboard />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Search */}
            <div className="space-y-6">
              <SearchForm
                onSearchComplete={handleSearchComplete}
                setLoading={setLoading}
              />

              {searchResults && (
                <TrendResults results={searchResults} />
              )}
            </div>

            {/* Right Column - Content Generation */}
            <div className="space-y-6">
              {searchResults && (
                <ContentGenerator
                  searchQueryId={searchResults.searchQuery.id}
                  trends={searchResults.trends}
                  onContentGenerated={handleContentGenerated}
                />
              )}

              {generatedContents.length > 0 && (
                <GeneratedContent contents={generatedContents} />
              )}
            </div>
          </div>
        )}

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-700 font-medium">Procesando...</p>
                <p className="mt-2 text-gray-500 text-sm text-center">
                  Esto puede tomar unos segundos
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500 text-sm">
            <p>Centro de Estrategia de Contenido para FACEBANK.PR 🇵🇷</p>
            <p className="mt-2">Powered by SerpAPI & OpenAI</p>
          </div>
        </div>
      </footer>
    </div>
    </AuthGuard>
  );
}
