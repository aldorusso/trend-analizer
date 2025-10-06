# Base stage - dependencias comunes
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Dependencies stage
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install

# ====================================
# Payload CMS Development
# ====================================
FROM base AS payload-dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3001
CMD ["npm", "run", "dev:payload"]

# ====================================
# Next.js Development
# ====================================
FROM base AS nextjs-dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ====================================
# Payload CMS Production Build
# ====================================
FROM base AS payload-builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build:payload

# ====================================
# Next.js Production Build
# ====================================
FROM base AS nextjs-builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ====================================
# Payload CMS Production
# ====================================
FROM base AS payload-production
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY --from=payload-builder /app/payload ./payload
COPY --from=payload-builder /app/public ./public
COPY package.json ./

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 payloaduser && \
    chown -R payloaduser:nodejs /app

USER payloaduser
EXPOSE 3001
CMD ["npm", "run", "start:payload"]

# ====================================
# Next.js Production
# ====================================
FROM base AS nextjs-production
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=nextjs-builder /app/public ./public
COPY --from=nextjs-builder /app/.next/standalone ./
COPY --from=nextjs-builder /app/.next/static ./.next/static

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
