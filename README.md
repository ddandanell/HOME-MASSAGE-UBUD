# Luxu Massae - Premium In-Villa Massage Services

A modern, responsive website for premium massage services in Ubud, Bali.

## Features

- **Modern Stack**: React 18, TypeScript, Express.js, Vite
- **UI Components**: Tailwind CSS, Radix UI, shadcn/ui
- **Backend**: Express server with Drizzle ORM and Zod validation
- **Booking System**: WhatsApp integration and booking management
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Mobile Responsive**: Works perfectly on all devices

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development and builds
- Tailwind CSS for styling
- Radix UI & shadcn/ui for components
- Wouter for routing
- TanStack React Query for state management
- React Hook Form for form handling
- Framer Motion for animations
- Lucide React for icons

### Backend
- Express.js web server
- Drizzle ORM for database operations
- Zod for data validation
- CORS and compression middleware

## Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd luxu-massae-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Server will start on http://localhost:5173 (or next available port)

4. **Build for production (Static)**
   ```bash
   npm run build
   npm run preview
   ```

5. **Run full-stack development (with backend)**
   ```bash
   npm run server:dev
   ```

## Deployment

### Static Deployment (Recommended for Vercel)
This project is optimized for static deployment on Vercel, Netlify, etc.

1. Push to GitHub
2. Import into Vercel
3. Choose "Vite" preset
4. Deploy automatically

### Full-Stack Deployment (Optional)
If you need the backend API:

```bash
npm run server:build
npm run server:start
```

## Project Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utility functions
│   │   └── hooks/       # Custom React hooks
├── server/           # Backend Express application
│   ├── index.ts        # Main server entry point
│   ├── routes.ts       # API routes
│   └── storage.ts      # Data storage layer
├── shared/           # Shared types and schemas
└── attached_assets/  # Static assets and images
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings
- `PATCH /api/bookings/:id/status` - Update booking status

## SEO Content Pipeline

This project includes a comprehensive prompt system for scalable SEO landing page generation:

### SEO & Link Management Tools

| Tool | Purpose | Command |
|------|---------|---------|
| **SEO Audit** | Analyze on-page SEO, meta tags, and content quality | `npm run seo:audit` |
| **Link Audit** | Scan for broken links, buttons, images, and redirects | `npm run link:audit` |
| **Sitemap Generator** | Generate sitemap.xml for search engines | `npm run sitemap:generate` |
| **SEO Validator** | Validate sitemap and SEO implementation | `npm run sitemap:validate` |

### Link Audit & Recovery System

Comprehensive tools for maintaining link health:
- **Broken Link Detection**: Scans all internal/external links, images, and buttons
- **Priority Scoring**: Automatically categorizes issues by SEO impact
- **Report Generation**: CSV, Markdown, and JSON reports with actionable recommendations
- **301 Redirect System**: Complete guide for implementing redirects
- **Prevention & Monitoring**: Governance policies and automated monitoring

**Quick Start:**
```bash
npm run link:audit  # Run comprehensive link audit
```

**Documentation:**
- `LINK_AUDIT_TOOL.md` - Complete tool documentation
- `REDIRECT_CONFIGURATION_GUIDE.md` - How to set up 301 redirects
- `BROKEN_LINK_PREVENTION_GUIDE.md` - Prevention strategies
- `SEO_LINK_AUDIT_ACTION_PLAN.md` - Implementation timeline
- `LINK_AUDIT_IMPLEMENTATION_SUMMARY.md` - Overview and benefits

### Prompt Files

| File | Purpose |
|------|---------|
| `KEYWORD_BLUEPRINT_PROMPT.md` | Converts keyword research into structured build instructions |
| `LANDING_PAGE_EXECUTION_PROMPT.md` | Generates landing pages from keyword blueprints |
| `SEO_HEADING_STRUCTURE_AGENT.md` | Creates optimized H1-H6 heading hierarchies for any page type |
| `AEO_GEO_OPTIMIZATION_PROMPT.md` | Transforms content into AI-search optimized "Golden Source" assets for Google SGE, Perplexity, ChatGPT |
| `KEYWORD_BLUEPRINT_OUTPUT_EXAMPLE.md` | Example output for 10 high-volume keywords |
| `AEO_GEO_EXAMPLE_OUTPUT.md` | Example transformation showing before/after AEO/GEO optimization |

### Workflow

1. **Run Keyword Blueprint Prompt** on your keyword list
2. **Pick one keyword blueprint** from the output
3. **Paste into Landing Page Execution Prompt**
4. **Generate page content**
5. **Apply AEO/GEO Optimization** to transform content for AI search engines
6. **Repeat for each keyword**

This system enables scaling from 10 to 200+ pages with consistent quality optimized for both traditional search and AI answer engines.

### Related Documentation

- `UNIQUENESS_BLUEPRINT.md` - Content analysis and uniqueness requirements
- `SEO_IMPLEMENTATION_SUMMARY.md` - SEO page implementation details
- `SEO_IMPROVEMENTS_IMPLEMENTATION.md` - Quick wins and content enhancements
- `INTERNAL_LINKING_SITEMAP_GUIDE.md` - Internal linking strategy

## License

MIT License
