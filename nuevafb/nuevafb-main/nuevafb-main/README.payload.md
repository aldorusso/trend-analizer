# Proyecto Next.js + Payload CMS + Docker

Este proyecto integra Next.js 15 con Payload CMS utilizando PostgreSQL como base de datos, todo orquestado con Docker.

## 🚀 Arquitectura

- **Next.js** (puerto 3000) - Frontend y SSR
- **Payload CMS** (puerto 3001) - Panel de administración headless CMS
- **PostgreSQL** (puerto 5432) - Base de datos relacional

## 📦 Colecciones de Payload CMS

### Collections
- **Users** - Usuarios y autenticación
- **Media** - Gestión de archivos e imágenes con redimensionamiento automático
- **Blog** - Posts del blog con categorías, tags y SEO
- **Services** - Servicios ofrecidos con características y orden
- **Pages** - Páginas dinámicas con secciones modulares (Hero, Gallery, CTA, etc.)

### Globals
- **Settings** - Configuración global (header, footer, SEO, redes sociales, contacto)

## 🛠️ Requisitos

- Docker Desktop instalado y ejecutándose
- Node.js 20+ (para desarrollo local sin Docker)

## 🏃 Inicio Rápido con Docker

### 1. Instalar dependencias localmente (primera vez)

```bash
npm install
```

### 2. Configurar variables de entorno

Copia el archivo de ejemplo y ajusta si es necesario:

```bash
cp .env.example .env.local
```

### 3. Levantar todos los servicios

```bash
docker-compose up -d
```

Esto levantará:
- PostgreSQL en `http://localhost:5432`
- Payload CMS en `http://localhost:3001`
- Next.js en `http://localhost:3000`

### 4. Crear primer usuario de Payload

Visita `http://localhost:3001/admin` y crea tu primer usuario administrador.

## 📝 Scripts Disponibles

### Con Docker (recomendado)

```bash
# Levantar todos los servicios
docker-compose up -d

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f payload
docker-compose logs -f nextjs

# Detener servicios
docker-compose down

# Detener y eliminar volúmenes (⚠️ borra la base de datos)
docker-compose down -v

# Reconstruir imágenes
docker-compose build
docker-compose up -d --build
```

### Sin Docker (desarrollo local)

```bash
# Desarrollo (Next.js + Payload en paralelo)
npm run dev:all

# Solo Next.js
npm run dev

# Solo Payload CMS
npm run dev:payload

# Build
npm run build
npm run build:payload

# Producción
npm start
npm run start:payload
```

## 🗂️ Estructura del Proyecto

```
/home/kumel69/fb/
├── payload/                    # Aplicación Payload CMS
│   ├── collections/           # Definiciones de colecciones
│   │   ├── Users.ts
│   │   ├── Media.ts
│   │   ├── Blog.ts
│   │   ├── Services.ts
│   │   ├── Pages.ts
│   │   └── Settings.ts
│   ├── payload.config.ts      # Configuración principal
│   ├── server.ts              # Servidor Express de Payload
│   └── payload-types.ts       # (Auto-generado) TypeScript types
├── src/                       # Aplicación Next.js
│   ├── app/
│   └── components/
├── public/
│   └── media/                 # Uploads de Payload CMS
├── docker-compose.yml         # Orquestación de servicios
├── Dockerfile                 # Multi-stage build
├── .env.local                 # Variables de entorno (no en git)
└── .env.example               # Plantilla de variables
```

## 🔧 Configuración Avanzada

### Variables de Entorno

#### Base de Datos
- `DATABASE_URL` - Connection string de PostgreSQL

#### Payload CMS
- `PAYLOAD_SECRET` - Clave secreta para JWT (cambiar en producción)
- `PAYLOAD_PUBLIC_SERVER_URL` - URL pública del servidor Payload

#### Next.js
- `NEXT_PUBLIC_API_URL` - URL de la API de Payload
- `NEXT_PUBLIC_PAYLOAD_URL` - URL base de Payload

### Acceder a la Base de Datos

```bash
# Conectar a PostgreSQL dentro del contenedor
docker exec -it payload-postgres psql -U payload -d payload
```

### Ver datos de Payload

Los datos se almacenan en el volumen Docker `postgres_data`. Para hacer backup:

```bash
# Backup
docker exec payload-postgres pg_dump -U payload payload > backup.sql

# Restore
cat backup.sql | docker exec -i payload-postgres psql -U payload payload
```

## 📱 Panel de Administración

Accede a `http://localhost:3001/admin` para gestionar:

- 📝 **Blog Posts** - Crea y edita artículos
- 🛠️ **Servicios** - Gestiona servicios ofrecidos
- 📄 **Páginas** - Construye páginas con secciones modulares
- 🖼️ **Media** - Sube y organiza imágenes
- ⚙️ **Settings** - Configura header, footer, SEO y redes sociales

## 🔌 API de Payload

Payload genera automáticamente una REST API y GraphQL API:

- REST API: `http://localhost:3001/api/{collection}`
- GraphQL: `http://localhost:3001/api/graphql`

Ejemplos:
```bash
# Obtener todos los posts
curl http://localhost:3001/api/blog

# Obtener un post por ID
curl http://localhost:3001/api/blog/{id}

# Obtener configuración global
curl http://localhost:3001/api/globals/settings
```

## 🚢 Despliegue a Producción

### 1. Actualizar variables de entorno

Crea un archivo `.env.production` con valores seguros:

```bash
DATABASE_URL=postgresql://user:password@host:5432/dbname
PAYLOAD_SECRET=tu-clave-super-secreta-de-produccion
PAYLOAD_PUBLIC_SERVER_URL=https://tu-dominio.com
```

### 2. Build y deploy

```bash
# Build producción
docker-compose -f docker-compose.prod.yml build

# Deploy
docker-compose -f docker-compose.prod.yml up -d
```

## 🐛 Troubleshooting

### El contenedor de Payload no arranca

```bash
# Ver logs detallados
docker-compose logs payload

# Verificar que PostgreSQL esté healthy
docker-compose ps
```

### Problemas con permisos en media

```bash
# Dar permisos correctos a la carpeta de uploads
chmod -R 755 public/media
```

### Resetear todo (⚠️ borra datos)

```bash
docker-compose down -v
rm -rf node_modules .next
npm install
docker-compose up -d --build
```

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Docker Compose Docs](https://docs.docker.com/compose/)

## 🤝 Contribuir

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
