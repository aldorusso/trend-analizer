# Dockerfile para FACEBANK.PR Trend Analyzer
# Optimizado para producción con multi-stage build

# ================================================================
# Stage 1: Dependencies - Install dependencies in a separate stage
# ================================================================
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install ALL dependencies (including dev dependencies)
RUN npm ci && npm cache clean --force

# ================================================================
# Stage 2: Builder - Build the application
# ================================================================
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files first
COPY package.json package-lock.json* ./

# Install all dependencies including devDependencies
RUN npm ci

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js application
RUN npm run build

# ================================================================
# Stage 3: Runner - Production runtime
# ================================================================
FROM node:20-alpine AS runner
WORKDIR /app

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Set correct permissions for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy built application with correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy prisma schema and generate client
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma ./node_modules/.prisma

# Copy package.json for runtime dependencies
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Generate Prisma client again in production environment
RUN npx prisma generate

# Create data directory for SQLite database
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node healthcheck.js || exit 1

# Start the application
CMD ["node", "server.js"]