#!/bin/bash
# Script para actualizar la versión del cache de imágenes
# Ejecuta esto después de subir nuevas imágenes en el admin

NEW_VERSION=$(date +%s%3N)
echo "// Cambia este número manualmente cuando subas nuevas imágenes en el admin" > lib/cache-version.ts
echo "// O usa Date.now() para generar uno automático: console.log(Date.now())" >> lib/cache-version.ts
echo "export const CACHE_VERSION = ${NEW_VERSION};" >> lib/cache-version.ts

echo "✅ Cache version actualizada a: ${NEW_VERSION}"
echo "Las imágenes se recargarán automáticamente en la próxima visita"
