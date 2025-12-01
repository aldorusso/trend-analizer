# 🐳 Docker Deployment Guide - FACEBANK.PR Trend Analyzer

Esta guía te ayudará a desplegar la aplicación usando Docker, compatible con Dokploy, Docker Swarm, y otros orquestadores de contenedores.

## 📋 Requisitos Previos

- Docker Engine 20.10+ instalado
- Docker Compose 2.0+ (opcional pero recomendado)
- Al menos 2GB de RAM disponible
- 5GB de espacio en disco

## 🚀 Despliegue Rápido

### 1. Configuración inicial

```bash
# Clonar el repositorio
git clone https://github.com/aldorusso/trend-analizer.git
cd trend-analizer

# Configurar variables de entorno
cp .env.example .env
nano .env  # Configura tus API keys
```

### 2. Variables de entorno requeridas

Edita el archivo `.env` con tus credenciales:

```bash
# API Keys - REQUERIDAS
SERPAPI_KEY=tu_clave_serpapi
OPENAI_API_KEY=tu_clave_openai
FREEPIK_API_KEY=tu_clave_freepik

# Configuración básica
PORT=3000
NODE_ENV=production
DATABASE_URL=file:/app/data/database.db
```

### 3. Desplegar con el script automatizado

```bash
# Hacer el script ejecutable
chmod +x deploy.sh

# Desplegar la aplicación
./deploy.sh deploy
```

## 📖 Métodos de Despliegue

### Método 1: Docker Compose (Recomendado)

```bash
# Despliegue completo
docker-compose up -d --build

# Ver logs
docker-compose logs -f app

# Detener
docker-compose down
```

### Método 2: Docker standalone

```bash
# Construir imagen
docker build -t facebank-trend-analyzer:latest .

# Crear volumen para datos persistentes
docker volume create facebank_app_data

# Ejecutar contenedor
docker run -d \
  --name facebank-trend-analyzer \
  --restart unless-stopped \
  -p 3000:3000 \
  -v facebank_app_data:/app/data \
  --env-file .env \
  facebank-trend-analyzer:latest
```

### Método 3: Usando npm scripts

```bash
# Construir y ejecutar
npm run docker:build
npm run docker:run

# Para desarrollo
npm run docker:dev

# Para producción
npm run docker:up
```

## 🔧 Configuración para Dokploy

### 1. Preparar proyecto para Dokploy

```bash
# Asegurar que todos los archivos estén en la raíz
ls -la  # Debe mostrar Dockerfile, docker-compose.yml, etc.

# Verificar configuración
cat Dockerfile | head -10
```

### 2. Configuración en Dokploy

1. **Repository**: `https://github.com/aldorusso/trend-analizer`
2. **Branch**: `master`
3. **Build Context**: `.` (raíz del proyecto)
4. **Dockerfile**: `Dockerfile`
5. **Port**: `3000`

### 3. Variables de entorno en Dokploy

Configurar en el panel de Dokploy:

```
SERPAPI_KEY=tu_clave_serpapi
OPENAI_API_KEY=tu_clave_openai
FREEPIK_API_KEY=tu_clave_freepik
NODE_ENV=production
DATABASE_URL=file:/app/data/database.db
PORT=3000
```

### 4. Configuración de volúmenes

```
/app/data:/app/data
```

## 📊 Monitoreo y Mantenimiento

### Health Check

La aplicación incluye un endpoint de health check:

```bash
curl http://localhost:3000/api/health
```

Respuesta esperada:
```json
{
  "status": "healthy",
  "timestamp": "2024-12-01T20:00:00.000Z",
  "version": "1.0.0",
  "environment": "production",
  "uptime": 3600
}
```

### Comandos útiles

```bash
# Ver estado de la aplicación
./deploy.sh status

# Ver logs en tiempo real
./deploy.sh logs

# Reiniciar aplicación
./deploy.sh restart

# Detener aplicación
./deploy.sh stop

# Acceder al shell del contenedor
docker exec -it facebank-trend-analyzer sh
```

### Monitoreo de recursos

```bash
# Ver uso de recursos
docker stats facebank-trend-analyzer

# Ver volúmenes
docker volume ls | grep facebank

# Backup de datos
docker cp facebank-trend-analyzer:/app/data ./backup
```

## 🔒 Seguridad

### Configuraciones de seguridad aplicadas

- ✅ Contenedor ejecuta como usuario no-root
- ✅ Imágenes multi-stage para reducir superficie de ataque
- ✅ Variables de entorno para credenciales
- ✅ Health checks configurados
- ✅ Volúmenes persistentes para datos

### Recomendaciones adicionales

```bash
# Ejecutar con usuario específico
docker run --user 1001:1001 ...

# Limitar recursos
docker run --memory=1g --cpus=1 ...

# Network personalizada
docker network create facebank_network
docker run --network=facebank_network ...
```

## 🚨 Troubleshooting

### Problemas comunes

#### Error: "SERPAPI_KEY not found"
```bash
# Verificar variables de entorno
cat .env | grep SERPAPI_KEY

# Verificar en el contenedor
docker exec facebank-trend-analyzer env | grep SERPAPI_KEY
```

#### Error: "Database connection failed"
```bash
# Verificar permisos del volumen
ls -la /var/lib/docker/volumes/facebank_app_data/_data/

# Recrear volumen
docker-compose down -v
docker-compose up -d --build
```

#### Error: "Port 3000 already in use"
```bash
# Verificar qué está usando el puerto
lsof -i :3000

# Usar puerto diferente
export PORT=3001
docker-compose up -d
```

#### Error de build: "no space left on device"
```bash
# Limpiar imágenes antiguas
docker system prune -f

# Limpiar todo
docker system prune -a --volumes
```

### Logs de debugging

```bash
# Logs detallados de la aplicación
docker logs -f --tail 100 facebank-trend-analyzer

# Logs de build
docker build --no-cache --progress=plain .

# Inspeccionar contenedor
docker inspect facebank-trend-analyzer
```

## 📈 Optimización de Performance

### Configuraciones recomendadas para producción

```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  app:
    deploy:
      resources:
        limits:
          memory: 1G
          cpus: '1'
        reservations:
          memory: 512M
          cpus: '0.5'
    environment:
      - NODE_OPTIONS=--max-old-space-size=1024
```

### Configurar reverse proxy

```nginx
# nginx.conf
upstream facebank_app {
    server 127.0.0.1:3000;
}

server {
    listen 80;
    server_name tu-dominio.com;
    
    location / {
        proxy_pass http://facebank_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🎯 Próximos Pasos

1. **SSL/HTTPS**: Configurar certificados SSL
2. **CI/CD**: Implementar pipeline automático
3. **Monitoring**: Agregar Prometheus/Grafana
4. **Backup**: Automatizar backup de base de datos
5. **Scaling**: Configurar Docker Swarm o Kubernetes

## 🆘 Soporte

Si encuentras problemas:

1. Revisa los logs: `./deploy.sh logs`
2. Verifica el health check: `curl http://localhost:3000/api/health`
3. Consulta esta documentación
4. Abre un issue en GitHub

---

**¡Tu aplicación FACEBANK.PR Trend Analyzer está lista para producción!** 🚀