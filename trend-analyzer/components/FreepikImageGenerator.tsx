'use client';

import { useState, useEffect } from 'react';

interface GeneratedImage {
  url: string;
  width: number;
  height: number;
}

interface GenerationTask {
  task_id: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'CREATED';
  generated?: GeneratedImage[];
  error?: string;
  prompt: string;
  created_at: Date;
}

export default function FreepikImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState<GenerationTask[]>([]);
  
  // Configuration options
  const [config, setConfig] = useState({
    aspect_ratio: 'square_1_1',
    resolution: '2k',
    model: 'realism',
    creative_detailing: 50,
  });

  // Predefined prompt templates for social media
  const promptTemplates = {
    instagram: {
      post: 'Professional Instagram post image showing {topic}, modern minimalist style, high quality photography, bright and engaging colors, perfect for social media',
      story: 'Instagram story template for {topic}, vertical format, bold typography space, modern design, eye-catching colors',
      carousel: 'Instagram carousel slide about {topic}, clean layout, professional photography, consistent branding'
    },
    linkedin: {
      post: 'Professional LinkedIn post image about {topic}, business-oriented, clean corporate style, professional photography',
      article: 'LinkedIn article header image for {topic}, thought leadership visual, professional and inspiring'
    },
    facebook: {
      post: 'Facebook post image showing {topic}, friendly and engaging style, community-focused, high-quality photography',
      cover: 'Facebook cover photo featuring {topic}, brand-focused, wide format, professional design'
    },
    twitter: {
      post: 'Twitter post image about {topic}, attention-grabbing, concise visual message, modern design',
      header: 'Twitter header image for {topic}, personal brand focused, professional yet approachable'
    }
  };

  // Business/Finance focused quick prompts
  const quickPrompts = [
    'Modern financial dashboard with charts and graphs, professional blue and white color scheme',
    'Diverse business team collaborating in a modern office, natural lighting, professional atmosphere',
    'Digital banking concept with smartphone and credit cards, clean minimal design',
    'Investment growth concept with ascending arrow and coins, elegant gold and blue colors',
    'Online payment and e-commerce concept, secure and trustworthy visual design',
    'Financial planning meeting with documents and calculator, professional business setting',
    'Cryptocurrency and digital finance concept, futuristic and innovative design',
    'Personal finance management app interface, user-friendly and modern design'
  ];

  // Check task status periodically
  useEffect(() => {
    const checkTasks = () => {
      tasks.forEach(task => {
        if (task.status === 'IN_PROGRESS' || task.status === 'CREATED') {
          checkTaskStatus(task.task_id);
        }
      });
    };

    const interval = setInterval(checkTasks, 3000); // Check every 3 seconds
    return () => clearInterval(interval);
  }, [tasks]);

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Por favor escribe un prompt para generar la imagen');
      return;
    }

    setGenerating(true);
    setError('');

    try {
      const response = await fetch('/api/freepik/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          ...config,
          filter_nsfw: true,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Error al generar imagen');
      }

      // Add task to list
      const newTask: GenerationTask = {
        task_id: data.task_id,
        status: data.status,
        prompt: prompt.trim(),
        created_at: new Date(),
      };

      setTasks(prev => [newTask, ...prev]);
      setPrompt(''); // Clear prompt after starting generation

    } catch (err: any) {
      setError(err.message || 'Error al generar imagen');
    } finally {
      setGenerating(false);
    }
  };

  const checkTaskStatus = async (taskId: string) => {
    try {
      const response = await fetch(`/api/freepik/generate?task_id=${taskId}`);
      const data = await response.json();

      if (response.ok && data.success) {
        setTasks(prev => prev.map(task => 
          task.task_id === taskId 
            ? { ...task, status: data.status, generated: data.generated, error: data.error }
            : task
        ));
      }
    } catch (err) {
      console.error('Error checking task status:', err);
    }
  };

  const downloadImage = async (imageUrl: string, prompt: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `freepik-${prompt.slice(0, 30).replace(/[^a-z0-9]/gi, '_')}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Error al descargar imagen:', err);
    }
  };

  const useTemplate = (platform: string, type: string, topic: string = '') => {
    const template = promptTemplates[platform as keyof typeof promptTemplates]?.[type as keyof typeof promptTemplates['instagram']];
    if (template) {
      const finalPrompt = template.replace('{topic}', topic || 'finanzas personales y banca digital');
      setPrompt(finalPrompt);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-2">🎨 Generador de Imágenes IA</h1>
        <p className="text-purple-100">
          Crea imágenes únicas para redes sociales usando IA de Freepik
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel de generación */}
        <div className="lg:col-span-1 space-y-6">
          {/* Prompts rápidos */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="font-semibold text-gray-800 mb-3">🚀 Prompts Rápidos</h3>
            <div className="space-y-2">
              {quickPrompts.slice(0, 4).map((quickPrompt, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(quickPrompt)}
                  className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {quickPrompt.slice(0, 60)}...
                </button>
              ))}
            </div>
          </div>

          {/* Plantillas por red social */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="font-semibold text-gray-800 mb-3">📱 Plantillas por Red Social</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Instagram</h4>
                <div className="flex gap-1">
                  <button
                    onClick={() => useTemplate('instagram', 'post')}
                    className="px-2 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded"
                  >
                    Post
                  </button>
                  <button
                    onClick={() => useTemplate('instagram', 'story')}
                    className="px-2 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded"
                  >
                    Story
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">LinkedIn</h4>
                <div className="flex gap-1">
                  <button
                    onClick={() => useTemplate('linkedin', 'post')}
                    className="px-2 py-1 bg-blue-600 text-white text-xs rounded"
                  >
                    Post
                  </button>
                  <button
                    onClick={() => useTemplate('linkedin', 'article')}
                    className="px-2 py-1 bg-blue-600 text-white text-xs rounded"
                  >
                    Article
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">Facebook</h4>
                <div className="flex gap-1">
                  <button
                    onClick={() => useTemplate('facebook', 'post')}
                    className="px-2 py-1 bg-blue-500 text-white text-xs rounded"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Configuración */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="font-semibold text-gray-800 mb-3">⚙️ Configuración</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Proporción
                </label>
                <select
                  value={config.aspect_ratio}
                  onChange={(e) => setConfig(prev => ({ ...prev, aspect_ratio: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="square_1_1">Cuadrada (1:1)</option>
                  <option value="widescreen_16_9">Horizontal (16:9)</option>
                  <option value="social_story_9_16">Vertical (9:16)</option>
                  <option value="classic_4_3">Clásica (4:3)</option>
                  <option value="traditional_3_4">Tradicional (3:4)</option>
                  <option value="social_5_4">Social (5:4)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resolución
                </label>
                <select
                  value={config.resolution}
                  onChange={(e) => setConfig(prev => ({ ...prev, resolution: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="1k">1K (Rápido)</option>
                  <option value="2k">2K (Alta Calidad)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estilo
                </label>
                <select
                  value={config.model}
                  onChange={(e) => setConfig(prev => ({ ...prev, model: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="realism">Realista</option>
                  <option value="mystic">Mystic (Premium)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Formulario de generación */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="font-semibold text-gray-800 mb-3">✨ Generar Imagen</h3>
            <div className="space-y-3">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe la imagen que quieres generar... Ej: Un dashboard financiero moderno con gráficos y datos, estilo profesional"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 resize-none"
                rows={4}
              />
              
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}

              <button
                onClick={generateImage}
                disabled={generating || !prompt.trim()}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                  generating || !prompt.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                {generating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generando...
                  </div>
                ) : (
                  '🎨 Generar Imagen'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-gray-800 mb-4">🖼️ Imágenes Generadas</h3>
            
            {tasks.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-lg mb-2">¡Comienza a generar imágenes!</p>
                <p className="text-sm">Escribe un prompt y haz clic en "Generar Imagen"</p>
              </div>
            ) : (
              <div className="space-y-6">
                {tasks.map((task) => (
                  <div key={task.task_id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {task.prompt}
                        </p>
                        <p className="text-xs text-gray-500">
                          {task.created_at.toLocaleTimeString()}
                        </p>
                      </div>
                      
                      <div className="ml-4">
                        {(task.status === 'IN_PROGRESS' || task.status === 'CREATED') && (
                          <div className="flex items-center text-yellow-600">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600 mr-2"></div>
                            <span className="text-sm">Generando...</span>
                          </div>
                        )}
                        {task.status === 'COMPLETED' && (
                          <span className="text-sm text-green-600 font-medium">✓ Completado</span>
                        )}
                        {task.status === 'FAILED' && (
                          <span className="text-sm text-red-600 font-medium">✗ Falló</span>
                        )}
                      </div>
                    </div>

                    {/* Show generated images */}
                    {task.generated && task.generated.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {task.generated.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image.url}
                              alt={task.prompt}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center">
                              <button
                                onClick={() => downloadImage(image.url, task.prompt)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-800 px-4 py-2 rounded-lg font-medium"
                              >
                                📥 Descargar
                              </button>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                              {image.width} × {image.height}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Show error if failed */}
                    {task.status === 'FAILED' && task.error && (
                      <div className="mt-3 text-red-600 text-sm bg-red-50 p-3 rounded">
                        Error: {task.error}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}