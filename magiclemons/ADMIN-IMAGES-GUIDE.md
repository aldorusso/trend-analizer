# Guía: Administrador de Imágenes

## 🎯 Cómo usar el panel de administración

### 1. Acceder al panel
Abre tu navegador en: **http://localhost:3002/admin-images**

### 2. Subir imágenes
1. Haz clic en "Cambiar Imagen" en cualquier imagen que quieras reemplazar
2. Selecciona tu imagen del ordenador
3. Espera a que se suba (verás un mensaje de confirmación)

### 3. Ver los cambios en el frontend

Después de subir una imagen, sigue estos pasos **EN ORDEN**:

#### Opción A: Recarga forzada (Recomendado)
1. Ve a la página principal: http://localhost:3002
2. Presiona **Ctrl + Shift + R** (Windows/Linux) o **Cmd + Shift + R** (Mac)
3. Esto fuerza al navegador a descargar todas las imágenes de nuevo

#### Opción B: Modo incógnito
1. Abre una ventana de incógnito/privada
2. Ve a: http://localhost:3002
3. Las imágenes deberían aparecer frescas sin caché

#### Opción C: Si nada funciona
Ejecuta este comando desde la terminal:

\`\`\`bash
cd /home/kumel69/magiclemons
./scripts/update-cache-version.sh
\`\`\`

Esto actualizará el número de versión del cache y forzará la recarga de TODAS las imágenes en todos los navegadores.

## 📁 Imágenes administrables

### Hero (Limón principal)
- **Archivo**: `/limon-removebg-preview.png`
- **Tamaño recomendado**: 915x1157px
- **Formato**: PNG con fondo transparente

### Servicios (4 servicios × 2 tamaños)

#### Servicio 1: Desarrollo Web
- Móvil: `800x800_ser-01.webp`
- Desktop: `1000x1000_ser-01.webp`

#### Servicio 2: Software a Medida
- Móvil: `800x800_ser-02.webp`
- Desktop: `1000x1000_ser-02.webp`

#### Servicio 3: Inteligencia Artificial
- Móvil: `800x800_ser-03.webp`
- Desktop: `1000x1000_ser-03.webp`

#### Servicio 4: Diseño UX/UI
- Móvil: `800x800_ser-04.webp`
- Desktop: `1000x1000_ser-04.webp`

### CTA (Call to Action)
- **Icono**: `/img/icons/300x300_obj-cta-01.webp` (300x300px)
- **Imagen principal**: `/img/illustrations/cta-img-01.webp` (800x912px)
- **Imagen secundaria**: `/img/illustrations/cta-img-02.webp` (600x601px)

### Parallax Button
- **Botón rotatorio**: `/img/icons/300x300_obj-btn-02.webp` (300x300px)

## ⚠️ Problemas comunes

### "Las imágenes no se ven actualizadas"
**Causa**: Caché del navegador
**Solución**: Ctrl+Shift+R o ejecutar `./scripts/update-cache-version.sh`

### "Veo la misma imagen repetida"
**Causa**: Subiste la misma imagen para diferentes servicios
**Solución**: Asegúrate de subir imágenes ÚNICAS para cada servicio

### "Las imágenes se ven borrosas"
**Causa**: Las imágenes no tienen las dimensiones recomendadas
**Solución**: Usa imágenes con las dimensiones exactas recomendadas

## 🔧 Técnico: Sistema de cache-busting

El sistema añade automáticamente `?v=TIMESTAMP` a todas las URLs de imágenes administrables:
- **Ubicación del timestamp**: `/lib/cache-version.ts`
- **Script de actualización**: `/scripts/update-cache-version.sh`
- **Componentes afectados**: Services, Hero, Cta, ParallaxBanner

Cuando ejecutas `update-cache-version.sh`, se genera un nuevo timestamp que invalida automáticamente toda la caché del navegador para estas imágenes.
