# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (port 3000 or next available)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Architecture

This is a **Next.js 15.5.4** portfolio/business website that was recently migrated from Vite. It uses the **App Router** architecture with React 18.

### Tech Stack
- **Framework**: Next.js 15.5.4 with App Router
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack React Query (client-side)
- **Image Optimization**: Next.js Image component with WebP/AVIF formats

### Directory Structure

```
app/                    # Next.js App Router
  ├── page.tsx          # Homepage (client component)
  ├── layout.tsx        # Root layout with metadata and providers
  ├── blog/[slug]/      # Dynamic blog post routes
  └── services/[slug]/  # Dynamic service detail routes

components/             # React components
  ├── ui/              # Shadcn/ui components (Radix UI wrappers)
  ├── Header.tsx       # Navigation header
  ├── HeroSection.tsx  # Homepage hero
  ├── ServicesSection.tsx
  ├── BlogSection.tsx
  ├── ContactSection.tsx
  └── Footer.tsx

lib/                    # Utility functions and data
  ├── utils.ts         # cn() utility for Tailwind merging
  ├── services.ts      # Services data with slugs and descriptions
  └── blog-data.ts     # Blog posts content (Spanish)

public/                 # Static assets
  ├── favicon.svg
  └── images/
```

### Key Architecture Decisions

1. **Client-Side Rendering**: Main page components use `"use client"` directive for interactivity
2. **Static Data**: Services and blog posts are defined in TypeScript files (not CMS)
3. **Dynamic Routes**: Blog and services use Next.js dynamic routing with `[slug]`
4. **Image Optimization**: Configured for Unsplash and jsDelivr CDN with modern formats
5. **Design System**: Custom Tailwind theme with HSL color variables defined in globals.css
6. **Type Safety**: TypeScript with relaxed strictness settings (`strict: false`)

### Component Patterns

- **UI Components**: All Shadcn components use Radix UI primitives with Tailwind styling
- **Icon System**: Lucide React icons imported from `lucide-react`
- **Client Components**: Interactive components marked with `"use client"`
- **Navigation**: Next.js `Link` and `useRouter` (no react-router-dom)

### Data Structure

**Services** (`lib/services.ts`):
- Array of service objects with `slug`, `title`, `shortDescription`, `longDescription`, and `icon` (Lucide component)
- Used for both listing and detail pages

**Blog Posts** (`lib/blog-data.ts`):
- Object with slugs as keys, containing HTML content, metadata, and images
- Content is in Spanish

### Configuration

- **Next.js Config** (`next.config.mjs`): Image optimization settings, React strict mode disabled
- **Tailwind Config** (`tailwind.config.ts`): Extended theme with custom colors, animations, and Shadcn integration
- **Path Aliases**: `@/*` maps to project root for imports
- **TypeScript**: Configured with loose type checking for faster development

### Important Notes

- Port 3000 may be occupied; Next.js will auto-assign next available port
- React Strict Mode is disabled (`reactStrictMode: false`)
- Powered-by header is disabled for security
- TypeScript strict mode is off; type checking is relaxed
- The project was originally built with Lovable.dev and migrated from Vite
