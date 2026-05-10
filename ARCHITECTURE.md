# Architecture

## Frontend
- Next.js 15
- React
- Tailwind CSS

## Components
- Navbar
- Hero
- AuditForm
- Footer

## State Management
React useState and useEffect are used for:
- tool selection
- spend tracking
- recommendations
- audit IDs
- localStorage persistence

## Deployment
- Vercel for hosting
- GitHub for version control

## Audit Logic
The application estimates savings using:
- AI tool type
- pricing plan
- monthly spend
- savings rate logic

Different tools use different optimization percentages.

## Persistence
Monthly spend data persists using browser localStorage.

## Features
- Dynamic savings dashboard
- AI-generated summary
- Lead capture form
- Shareable report IDs
- High savings consultation CTA