export const blogPosts = {
  "react-18-nuevas-caracteristicas": {
    title: "React 18: Nuevas características y mejoras de rendimiento",
    content: `
      <h2>Introducción a React 18</h2>
      <p>React 18 marca un hito importante en la evolución de esta popular biblioteca de JavaScript. Con la introducción de Concurrent Features, React 18 ofrece nuevas posibilidades para crear aplicaciones más rápidas y responsivas.</p>

      <h2>Concurrent Features</h2>
      <p>Una de las características más emocionantes de React 18 son las Concurrent Features. Estas permiten que React interrumpa, pause, reanude o abandone la renderización de componentes según sea necesario.</p>

      <h3>Automatic Batching</h3>
      <p>React 18 agrupa automáticamente múltiples actualizaciones de estado en una sola re-renderización para mejorar el rendimiento. Esto funciona incluso para promesas, timeouts y callbacks de eventos nativos.</p>

      <pre><code>// Antes de React 18
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React renderizará dos veces, una por cada actualización de estado
}, 1000);

// Con React 18
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React solo renderizará una vez al final
}, 1000);</code></pre>

      <h3>Suspense Improvements</h3>
      <p>Suspense ahora soporta más casos de uso y es más confiable. Puede usar Suspense para cargar datos, dividir código y renderizar contenido de forma lazy.</p>

      <h2>Nuevos Hooks</h2>

      <h3>useId</h3>
      <p>El hook useId genera IDs únicos que son estables tanto en el servidor como en el cliente, resolviendo problemas de hidratación.</p>

      <pre><code>function NameFields() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id + '-firstName'}>First Name</label>
      <input id={id + '-firstName'} type="text" />
      <label htmlFor={id + '-lastName'}>Last Name</label>
      <input id={id + '-lastName'} type="text" />
    </div>
  );
}</code></pre>

      <h3>useDeferredValue</h3>
      <p>Permite diferir actualizaciones no urgentes para mantener la interfaz responsiva durante actualizaciones costosas.</p>

      <h2>Migración a React 18</h2>
      <p>La migración a React 18 es gradual y retrocompatible. Simplemente actualiza tu aplicación y comienza a usar las nuevas características cuando sea necesario.</p>

      <p>Para comenzar, instala React 18 y actualiza tu root:</p>

      <pre><code>// Antes
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// React 18
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);</code></pre>

      <h2>Conclusión</h2>
      <p>React 18 representa un gran paso adelante en términos de rendimiento y experiencia del desarrollador. Las Concurrent Features abren nuevas posibilidades para crear aplicaciones más responsivas y eficientes.</p>
    `,
    category: "React",
    readTime: "8 min",
    date: "15 Mar 2024",
    author: "Equipo de Desarrollo",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "nextjs-14-server-components": {
    title: "Next.js 14: Server Components y App Router",
    content: `
      <h2>¿Qué son los Server Components?</h2>
      <p>Los Server Components de React son una nueva característica que permite renderizar componentes en el servidor, reduciendo el bundle de JavaScript enviado al cliente y mejorando el rendimiento.</p>

      <h2>App Router vs Pages Router</h2>
      <p>Next.js 14 introduce el App Router como la nueva forma recomendada de estructurar aplicaciones. Ofrece mejor ergonomía para desarrolladores y características más potentes.</p>

      <h3>Estructura de carpetas</h3>
      <pre><code>app/
  layout.tsx          # Root layout
  page.tsx            # Home page
  about/
    page.tsx          # About page
  blog/
    page.tsx          # Blog listing
    [slug]/
      page.tsx        # Individual blog post</code></pre>

      <h2>Streaming y Suspense</h2>
      <p>El App Router soporta streaming nativo, permitiendo que partes de la página se carguen incrementalmente mientras otras partes aún se están procesando.</p>

      <h3>Loading UI</h3>
      <p>Crea archivos loading.tsx para mostrar estados de carga automáticamente:</p>

      <pre><code>// app/blog/loading.tsx
export default function Loading() {
  return <div>Cargando posts del blog...</div>
}</code></pre>

      <h2>Data Fetching</h2>
      <p>Los Server Components simplifican el data fetching al permitir usar async/await directamente en los componentes:</p>

      <pre><code>// app/blog/page.tsx
async function BlogPage() {
  const posts = await fetch('https://api.example.com/posts')

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}</code></pre>

      <h2>Migración paso a paso</h2>
      <p>La migración del Pages Router al App Router puede hacerse gradualmente:</p>

      <ol>
        <li>Crea la carpeta app/ junto a pages/</li>
        <li>Migra las páginas una por una</li>
        <li>Actualiza los layouts y componentes compartidos</li>
        <li>Elimina la carpeta pages/ cuando hayas terminado</li>
      </ol>

      <h2>Ventajas del App Router</h2>
      <ul>
        <li><strong>Mejor rendimiento:</strong> Server Components reducen el bundle size</li>
        <li><strong>SEO mejorado:</strong> Renderizado en el servidor por defecto</li>
        <li><strong>Loading states:</strong> Manejo automático de estados de carga</li>
        <li><strong>Error boundaries:</strong> Manejo de errores simplificado</li>
      </ul>
    `,
    category: "Next.js",
    readTime: "12 min",
    date: "8 Mar 2024",
    author: "Equipo de Desarrollo",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "optimizacion-core-web-vitals": {
    title: "Optimización de Core Web Vitals para mejor SEO",
    content: `
      <h2>¿Qué son los Core Web Vitals?</h2>
      <p>Los Core Web Vitals son un conjunto de métricas específicas que Google considera importantes para la experiencia del usuario en una página web. Se centran en tres aspectos clave: carga, interactividad y estabilidad visual.</p>

      <h2>Las tres métricas principales</h2>

      <h3>Largest Contentful Paint (LCP)</h3>
      <p>Mide el tiempo que tarda en cargarse el elemento de contenido más grande visible en la ventana gráfica. El objetivo es menos de 2.5 segundos.</p>

      <h4>Cómo mejorar LCP:</h4>
      <ul>
        <li>Optimizar imágenes con formatos modernos (WebP, AVIF)</li>
        <li>Implementar lazy loading para imágenes</li>
        <li>Usar CDN para servir contenido estático</li>
        <li>Precargar recursos críticos</li>
      </ul>

      <pre><code>// Preload de imagen crítica
<link rel="preload" as="image" href="/hero-image.webp">

// Lazy loading
<img src="image.jpg" loading="lazy" alt="Descripción"></code></pre>

      <h3>First Input Delay (FID)</h3>
      <p>Mide el tiempo desde que un usuario interactúa por primera vez con tu sitio hasta que el navegador puede responder a esa interacción. El objetivo es menos de 100 milisegundos.</p>

      <h4>Cómo mejorar FID:</h4>
      <ul>
        <li>Dividir código JavaScript largo</li>
        <li>Usar Web Workers para tareas pesadas</li>
        <li>Minimizar JavaScript de terceros</li>
        <li>Implementar code splitting</li>
      </ul>

      <pre><code>// Code splitting con React
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}</code></pre>

      <h3>Cumulative Layout Shift (CLS)</h3>
      <p>Mide la estabilidad visual de la página. Cuantifica cuánto se mueven los elementos visibles durante la carga. El objetivo es menos de 0.1.</p>

      <h4>Cómo mejorar CLS:</h4>
      <ul>
        <li>Definir dimensiones explícitas para imágenes y videos</li>
        <li>Reservar espacio para contenido dinámico</li>
        <li>Evitar insertar contenido sobre contenido existente</li>
        <li>Usar transform para animaciones</li>
      </ul>

      <pre><code>/* CSS para evitar layout shift */
.image-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.skeleton-loader {
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, transparent 50%, #f0f0f0 75%);
}</code></pre>

      <h2>Herramientas de medición</h2>

      <h3>PageSpeed Insights</h3>
      <p>La herramienta oficial de Google para medir Core Web Vitals. Proporciona datos tanto de laboratorio como de campo.</p>

      <h3>Web Vitals Extension</h3>
      <p>Extensión de Chrome que muestra las métricas en tiempo real mientras navegas.</p>

      <h3>Search Console</h3>
      <p>Monitorea el rendimiento de Core Web Vitals de todo tu sitio web con datos reales de usuarios.</p>

      <h2>Optimizaciones avanzadas</h2>

      <h3>Critical CSS</h3>
      <p>Extrae e inline el CSS crítico para la primera pantalla:</p>

      <pre><code>// Inline critical CSS
<style>
  .hero { display: flex; justify-content: center; }
</style>

// Load non-critical CSS asynchronously
<link rel="preload" href="/styles.css" as="style" onload="this.rel='stylesheet'"></code></pre>

      <h3>Resource Hints</h3>
      <p>Usa resource hints para mejorar la carga:</p>

      <pre><code><!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Prefetch next page resources -->
<link rel="prefetch" href="/next-page.html">

<!-- Preload critical resources -->
<link rel="preload" href="/critical.css" as="style"></code></pre>

      <h2>Impacto en SEO</h2>
      <p>Los Core Web Vitals son un factor de ranking en Google desde 2021. Las páginas con mejores métricas tienen ventaja en los resultados de búsqueda, especialmente en dispositivos móviles.</p>

      <h2>Conclusión</h2>
      <p>Optimizar los Core Web Vitals no solo mejora el SEO, sino que también proporciona una mejor experiencia de usuario. Es una inversión que beneficia tanto a los usuarios como al posicionamiento en buscadores.</p>
    `,
    category: "Performance",
    readTime: "10 min",
    date: "1 Mar 2024",
    author: "Equipo de Desarrollo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
} as const;

export type BlogPost = typeof blogPosts[keyof typeof blogPosts];
export type BlogSlug = keyof typeof blogPosts;
