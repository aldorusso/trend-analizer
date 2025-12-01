#!/bin/bash
# Script de despliegue para FACEBANK.PR Trend Analyzer
# Compatible con Dokploy, Docker Swarm, y otros orquestadores

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuración
APP_NAME="facebank-trend-analyzer"
DOCKER_IMAGE="$APP_NAME:latest"
CONTAINER_NAME="$APP_NAME"

echo -e "${BLUE}🚀 Iniciando despliegue de $APP_NAME${NC}"

# Función para logging
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
    exit 1
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Verificar que Docker esté instalado
if ! command -v docker &> /dev/null; then
    error "Docker no está instalado. Por favor, instala Docker primero."
fi

# Verificar que docker-compose esté instalado
if ! command -v docker-compose &> /dev/null; then
    warning "docker-compose no está instalado. Usando 'docker compose' en su lugar."
    DOCKER_COMPOSE_CMD="docker compose"
else
    DOCKER_COMPOSE_CMD="docker-compose"
fi

# Función de limpieza
cleanup() {
    log "Limpiando recursos antiguos..."
    
    # Detener y remover contenedor existente
    if docker ps -a --format 'table {{.Names}}' | grep -q "^$CONTAINER_NAME$"; then
        log "Deteniendo contenedor existente..."
        docker stop $CONTAINER_NAME || true
        docker rm $CONTAINER_NAME || true
    fi
    
    # Limpiar imágenes antiguas (mantener las últimas 2)
    log "Limpiando imágenes antiguas..."
    docker images --filter="dangling=true" -q | head -10 | xargs -r docker rmi || true
}

# Función para build
build_image() {
    log "Construyendo imagen Docker..."
    docker build -t $DOCKER_IMAGE . \
        --build-arg NODE_ENV=production \
        --no-cache
    
    if [ $? -eq 0 ]; then
        log "✅ Imagen construida exitosamente"
    else
        error "❌ Fallo al construir la imagen"
    fi
}

# Función para despliegue con docker-compose
deploy_compose() {
    log "Desplegando con docker-compose..."
    
    # Verificar que existe .env
    if [ ! -f .env ]; then
        warning "Archivo .env no encontrado. Creando archivo de ejemplo..."
        cat > .env.example << EOF
# Configuración de API Keys
SERPAPI_KEY=your_serpapi_key_here
OPENAI_API_KEY=your_openai_key_here
FREEPIK_API_KEY=your_freepik_key_here

# Puerto de la aplicación
PORT=3000

# Base de datos
DATABASE_URL=file:/app/data/database.db

# Entorno
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
EOF
        error "Por favor, copia .env.example a .env y configura las API keys"
    fi
    
    # Desplegar con compose
    $DOCKER_COMPOSE_CMD down
    $DOCKER_COMPOSE_CMD up -d --build
    
    if [ $? -eq 0 ]; then
        log "✅ Aplicación desplegada exitosamente"
        log "🌐 La aplicación está disponible en: http://localhost:3000"
        log "💾 Los datos se persisten en el volumen 'facebank_app_data'"
    else
        error "❌ Fallo en el despliegue"
    fi
}

# Función para despliegue simple con Docker
deploy_docker() {
    log "Desplegando con Docker standalone..."
    
    # Crear volumen para datos si no existe
    docker volume create facebank_app_data || true
    
    # Ejecutar contenedor
    docker run -d \
        --name $CONTAINER_NAME \
        --restart unless-stopped \
        -p 3000:3000 \
        -v facebank_app_data:/app/data \
        -e NODE_ENV=production \
        -e NEXT_TELEMETRY_DISABLED=1 \
        -e DATABASE_URL=file:/app/data/database.db \
        $DOCKER_IMAGE
    
    if [ $? -eq 0 ]; then
        log "✅ Contenedor iniciado exitosamente"
        log "🌐 La aplicación está disponible en: http://localhost:3000"
    else
        error "❌ Fallo al iniciar el contenedor"
    fi
}

# Función para mostrar logs
show_logs() {
    log "Mostrando logs de la aplicación..."
    if command -v docker-compose &> /dev/null && [ -f docker-compose.yml ]; then
        docker-compose logs -f app
    else
        docker logs -f $CONTAINER_NAME
    fi
}

# Función para mostrar status
show_status() {
    log "Estado de la aplicación:"
    
    if docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}' | grep -q "$CONTAINER_NAME"; then
        echo -e "${GREEN}✅ Aplicación ejecutándose${NC}"
        docker ps --filter name=$CONTAINER_NAME --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
        
        # Health check
        sleep 2
        if curl -f http://localhost:3000/api/health &> /dev/null; then
            echo -e "${GREEN}✅ Health check: OK${NC}"
        else
            echo -e "${YELLOW}⚠️  Health check: Esperando...${NC}"
        fi
    else
        echo -e "${RED}❌ Aplicación no está ejecutándose${NC}"
    fi
}

# Parsear argumentos
case "$1" in
    "build")
        build_image
        ;;
    "deploy")
        cleanup
        deploy_compose
        ;;
    "deploy-docker")
        cleanup
        build_image
        deploy_docker
        ;;
    "logs")
        show_logs
        ;;
    "status")
        show_status
        ;;
    "stop")
        log "Deteniendo aplicación..."
        $DOCKER_COMPOSE_CMD down || docker stop $CONTAINER_NAME || true
        ;;
    "restart")
        log "Reiniciando aplicación..."
        $DOCKER_COMPOSE_CMD restart app || docker restart $CONTAINER_NAME || true
        ;;
    *)
        echo "🐳 Script de despliegue para FACEBANK.PR Trend Analyzer"
        echo ""
        echo "Uso: $0 {build|deploy|deploy-docker|logs|status|stop|restart}"
        echo ""
        echo "Comandos:"
        echo "  build         - Construir imagen Docker"
        echo "  deploy        - Desplegar con docker-compose"
        echo "  deploy-docker - Desplegar con Docker standalone"
        echo "  logs          - Mostrar logs de la aplicación"
        echo "  status        - Mostrar estado de la aplicación"
        echo "  stop          - Detener la aplicación"
        echo "  restart       - Reiniciar la aplicación"
        echo ""
        echo "Ejemplos:"
        echo "  $0 deploy     # Desplegar para producción"
        echo "  $0 logs       # Ver logs en tiempo real"
        echo "  $0 status     # Verificar estado"
        ;;
esac