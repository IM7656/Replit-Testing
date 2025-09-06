# Overview

This is a full-stack web application built with a React frontend and Express.js backend. It's designed as a modern starter template with a clean "Hello World" landing page and comprehensive UI component library. The application uses PostgreSQL with Drizzle ORM for data persistence and follows a modular monorepo structure with shared schemas between frontend and backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: Comprehensive Shadcn/UI component system built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming and dark mode support
- **State Management**: TanStack Query for server state management with custom API client
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation via Hookform Resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Development**: Hot reload with TSX for rapid development cycles
- **Build Process**: ESBuild for production bundling with external package handling

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Type Safety**: Drizzle-Zod integration for runtime validation of database schemas
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and PostgreSQL for production

## Development Environment
- **Monorepo Structure**: Shared TypeScript configuration and schemas between client/server
- **Hot Reload**: Vite development server with middleware mode for seamless full-stack development
- **Error Handling**: Replit-specific error overlay and development tools
- **Path Aliases**: Configured import aliases for clean code organization (@/, @shared/, @assets/)

## Authentication & Authorization
- **Session-based Authentication**: Express sessions with PostgreSQL storage
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Storage Abstraction**: Interface-based user management allowing for easy backend swapping

# External Dependencies

## Database Services
- **Neon**: Serverless PostgreSQL hosting with connection pooling
- **PostgreSQL**: Primary database with UUID generation and session storage

## UI & Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Shadcn/UI**: Pre-built component library with consistent design system
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component
- **Class Variance Authority**: Type-safe styling variants

## Development Tools
- **Replit Integration**: Development banner, cartographer, and runtime error modal
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **TanStack Query**: Powerful data fetching and caching library

## Utility Libraries
- **Date-fns**: Modern date utility library
- **Clsx & Tailwind Merge**: Conditional class name utilities
- **Nanoid**: URL-safe unique ID generator
- **Zod**: TypeScript-first schema validation