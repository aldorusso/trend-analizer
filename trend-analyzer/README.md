# 📊 Analizador de Tendencias Financieras

Aplicación web para analizar tendencias de búsqueda sobre información financiera en Latinoamérica y España, y generar contenido automáticamente para redes sociales usando IA.

## 🚀 Características

- **Análisis de Tendencias**: Busca tendencias de Google usando SerpAPI en diferentes países de LATAM y España
- **Generación de Contenido con IA**: Crea contenido optimizado para diferentes plataformas (Instagram, Twitter, LinkedIn, Facebook, TikTok)
- **Base de Datos Local**: Guarda todas tus búsquedas y contenido generado en SQLite
- **Interfaz Moderna**: UI limpia y responsive con Tailwind CSS

## 📋 Requisitos Previos

- Node.js 18+ instalado
- Cuenta en [SerpAPI](https://serpapi.com/) (obtén tu API key)
- Cuenta en [OpenAI](https://platform.openai.com/) (obtén tu API key)

## 🔧 Instalación

1. **Navega al directorio del proyecto**:
```bash
cd trend-analyzer
```

2. **Las dependencias ya están instaladas**, pero si necesitas reinstalarlas:
```bash
npm install
```

3. **Configura las variables de entorno**:

Edita el archivo `.env` y añade tus API keys:

```env
DATABASE_URL="file:./dev.db"

# Añade tus claves aquí
SERPAPI_KEY=tu_clave_de_serpapi_aqui
OPENAI_API_KEY=tu_clave_de_openai_aqui
```

Para obtener las API keys:
- **SerpAPI**: Regístrate en https://serpapi.com/ - El plan gratuito incluye 100 búsquedas/mes
- **OpenAI**: Regístrate en https://platform.openai.com/ - Necesitarás agregar crédito

4. **La base de datos ya está configurada**, pero si necesitas resetearla:
```bash
npx prisma migrate reset
npx prisma generate
```

## 🎯 Uso

1. **Inicia el servidor de desarrollo**:
```bash
npm run dev
```

2. **Abre tu navegador** en [http://localhost:3000](http://localhost:3000)

3. **Flujo de trabajo**:
   - Selecciona un país (Argentina, México, Colombia, Chile, España, etc.)
   - Escribe un término de búsqueda relacionado con finanzas (ej: "cuenta en dólares")
   - Haz clic en "Buscar Tendencias"
   - Revisa los resultados y tendencias
   - Selecciona una plataforma social (Instagram, Twitter, etc.)
   - Elige el tipo de publicación
   - Haz clic en "Generar Contenido con IA"
   - Copia el contenido generado para usar en tus redes sociales

## 📁 Estructura del Proyecto

```
trend-analyzer/
├── app/
│   ├── api/
│   │   ├── search/        # API para buscar tendencias con SerpAPI
│   │   └── generate/      # API para generar contenido con OpenAI
│   ├── layout.tsx
│   └── page.tsx          # Página principal
├── components/
│   ├── SearchForm.tsx         # Formulario de búsqueda
│   ├── TrendResults.tsx       # Muestra resultados de tendencias
│   ├── ContentGenerator.tsx   # Generador de contenido
│   └── GeneratedContent.tsx   # Muestra contenido generado
├── lib/
│   └── prisma.ts         # Cliente de Prisma
├── prisma/
│   ├── schema.prisma     # Esquema de base de datos
│   └── dev.db           # Base de datos SQLite
└── .env                 # Variables de entorno (API keys)
```

## 🗄️ Base de Datos

La aplicación usa SQLite con Prisma ORM. Los modelos son:

- **SearchQuery**: Almacena las búsquedas realizadas
- **Trend**: Guarda las tendencias encontradas
- **Content**: Almacena el contenido generado por IA

## 🌍 Países Soportados

- 🇦🇷 Argentina
- 🇲🇽 México
- 🇨🇴 Colombia
- 🇨🇱 Chile
- 🇪🇸 España
- 🇵🇪 Perú
- 🇻🇪 Venezuela
- 🇪🇨 Ecuador

## 📱 Plataformas de Redes Sociales

- Instagram (Posts, Stories, Reels, Carousel)
- Twitter/X (Tweets, Threads)
- LinkedIn (Posts, Articles)
- Facebook (Posts, Stories)
- TikTok (Video Scripts)

## 💡 Ejemplos de Búsquedas

- "cuenta en dólares"
- "inversión en dólares"
- "cómo comprar dólares"
- "mejor banco para dólares"
- "tarjeta de crédito internacional"
- "transferencia internacional"
- "crypto para principiantes"

## 🔒 Seguridad

- Las API keys nunca se envían al cliente
- Todas las llamadas a APIs externas se hacen desde el servidor
- El archivo `.env` está en `.gitignore` para proteger tus claves

## 🚀 Producción

Para construir la aplicación para producción:

```bash
npm run build
npm start
```

## 🤝 Contribuciones

Esta es una aplicación personal, pero siéntete libre de usarla y modificarla según tus necesidades.

## 📝 Notas

- SerpAPI tiene un límite de 100 búsquedas gratuitas al mes
- OpenAI cobra por tokens usados (el modelo usado es gpt-4o-mini, que es económico)
- Los datos se guardan localmente en SQLite para que puedas revisar búsquedas anteriores
- La aplicación está optimizada para temas financieros, pero puedes modificarla para otros nichos

## 🐛 Solución de Problemas

**Error de conexión con SerpAPI/OpenAI**:
- Verifica que tus API keys estén correctamente configuradas en `.env`
- Asegúrate de tener crédito disponible en OpenAI
- Verifica que no hayas excedido el límite de SerpAPI

**Error de base de datos**:
```bash
npx prisma migrate reset
npx prisma generate
```

**El servidor no inicia**:
- Verifica que el puerto 3000 esté disponible
- Elimina la carpeta `.next` y vuelve a ejecutar `npm run dev`

## 📧 Soporte

Si tienes problemas o preguntas, revisa la documentación de:
- [SerpAPI](https://serpapi.com/docs)
- [OpenAI API](https://platform.openai.com/docs)
- [Next.js](https://nextjs.org/docs)
- [Prisma](https://www.prisma.io/docs)

---

**Hecho con ❤️ para análisis de tendencias financieras en LATAM**
