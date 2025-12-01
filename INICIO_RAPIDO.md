# 🚀 Inicio Rápido

## Pasos para empezar en 2 minutos

### 1. Inicia la aplicación

```bash
cd trend-analyzer
npm run dev
```

### 2. Abre tu navegador

Ve a http://localhost:3001 (o el puerto que se muestre en la terminal)

### 3. Configura tus API Keys directamente en la app

**¡NUEVO!** Ya no necesitas editar archivos manualmente. Ahora puedes configurar tus API keys directamente desde la interfaz:

1. **Verás un botón naranja "⚙️ Configurar APIs"** en la esquina superior derecha (si no están configuradas)
2. **Haz clic en el botón** para abrir el panel de configuración
3. **Ingresa tus API keys**:
   - OpenAI API Key (obtén una en: https://platform.openai.com/api-keys)
   - SerpAPI Key (obtén una gratis en: https://serpapi.com/manage-api-key)
4. **Haz clic en "💾 Guardar API Keys"**
5. **¡Listo!** El botón se volverá verde con un ✓

**¿Dónde obtengo las claves?**

- **SerpAPI** (GRATIS):
  - Ve a https://serpapi.com/
  - Regístrate gratis
  - Copia tu API key desde https://serpapi.com/manage-api-key
  - Plan gratuito: 100 búsquedas/mes

- **OpenAI** (pago):
  - Ve a https://platform.openai.com/
  - Crea una cuenta
  - Ve a https://platform.openai.com/api-keys
  - Crea una nueva API key
  - Añade crédito (mínimo $5 USD)
  - El modelo usado (gpt-4o-mini) es muy económico (~$0.01 por generación)

### 4. ¡Usa la aplicación!

1. **Selecciona un país**: Argentina, México, Colombia, etc.
2. **Escribe una búsqueda**: Ejemplo: "cuenta en dólares"
3. **Haz clic en "Buscar Tendencias"**
4. **Espera los resultados** (toma 5-10 segundos)
5. **Selecciona una plataforma**: Instagram, Twitter, LinkedIn, etc.
6. **Haz clic en "Generar Contenido con IA"**
7. **Copia el contenido** y úsalo en tus redes sociales

## 💡 Ejemplos de búsquedas que funcionan bien

Para contenido financiero:
- "cuenta en dólares"
- "mejor tarjeta de crédito"
- "cómo invertir dinero"
- "billetera virtual"
- "transferencia internacional"
- "comprar dólares online"
- "crypto para principiantes"

Para cada país:
- "cuentas en dólares" + Argentina
- "mejor banco" + México
- "tarjeta internacional" + Colombia
- "inversión" + Chile

## 📊 Lo que obtendrás

### De SerpAPI:
- Gráfico de interés a lo largo del tiempo
- Búsquedas relacionadas populares
- Estadísticas de tráfico por región

### De OpenAI:
- Título llamativo optimizado
- Contenido completo listo para publicar
- Hashtags relevantes para la plataforma
- Adaptado al tono de cada red social

## 🎯 Plataformas soportadas

- **Instagram**: Posts, Stories, Reels, Carousel
- **Twitter/X**: Tweets, Threads
- **LinkedIn**: Posts profesionales, Articles
- **Facebook**: Posts, Stories
- **TikTok**: Scripts para videos

## 🔄 Flujo completo de ejemplo

```
1. Búsqueda: "cuenta en dólares" en Argentina
   ↓
2. SerpAPI te muestra:
   - Interés en aumento del 40% en el último mes
   - Búsquedas relacionadas: "brubank dólares", "ualá dólares", etc.
   ↓
3. Seleccionas Instagram > Post
   ↓
4. OpenAI genera:
   Título: "¿Querés abrir una cuenta en dólares? Esto es lo que tenés que saber 💵"

   Contenido: Post completo optimizado para Instagram con:
   - Hook inicial que capta atención
   - Información valiosa y práctica
   - Call to action
   - Emojis apropiados

   Hashtags: #CuentaEnDolares #FinanzasPersonales #Argentina #Ahorro #Inversiones
   ↓
5. ¡Copias y pegas en tu Instagram!
```

## ⚡ Tips Pro

1. **Prueba diferentes países** para el mismo tema - cada región tiene tendencias únicas
2. **Genera contenido para múltiples plataformas** desde la misma búsqueda
3. **Revisa las búsquedas relacionadas** para encontrar nuevas ideas de contenido
4. **Guarda tus favoritos** - la app los almacena en la base de datos local
5. **Personaliza el contenido** después de generarlo para que suene más "tuyo"

## 🆘 Problemas comunes

**"Error al buscar tendencias"**
- Verifica que tu SERPAPI_KEY sea correcta
- Revisa que no hayas excedido las 100 búsquedas mensuales gratuitas

**"Error al generar contenido"**
- Verifica que tu OPENAI_API_KEY sea correcta
- Asegúrate de tener crédito en tu cuenta de OpenAI
- Cada generación cuesta ~$0.01 USD

**"No se muestra nada"**
- Abre la consola del navegador (F12) para ver errores
- Verifica que el servidor esté corriendo en localhost:3000
- Intenta con otra búsqueda o país

## 🎓 Próximos pasos

Una vez que domines lo básico:

1. **Crea un calendario de contenido** basado en las tendencias que encuentres
2. **Analiza qué días de la semana** hay más interés en ciertos temas
3. **Compara tendencias entre países** para contenido regional
4. **Guarda tus mejores contenidos** para reutilizar el formato
5. **Experimenta con diferentes tipos** de publicaciones por plataforma

## 📚 Recursos adicionales

- [Documentación de SerpAPI](https://serpapi.com/docs)
- [Documentación de OpenAI](https://platform.openai.com/docs)
- [Guía de hashtags por industria](https://www.instagram.com/explore/tags/)

---

**¿Listo? ¡Ejecuta `npm run dev` y empieza a crear contenido!** 🚀
