# Luxu Massae - Premium In-Villa Massage Services

A modern, responsive website for premium massage services in Ubud, Bali.

## 🚀 Quick Start - Deploy Now

**Ready to deploy?** This repository is production-ready and fully configured!

👉 **[DEPLOYMENT_QUICKSTART.md](./DEPLOYMENT_QUICKSTART.md)** - Deploy in 5 minutes  
📚 **[VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)** - Comprehensive Vercel guide  
📖 **[GITHUB_PAGES_DEPLOYMENT_GUIDE.md](./GITHUB_PAGES_DEPLOYMENT_GUIDE.md)** - GitHub Pages guide  
📋 **[DEPLOYMENT_QA_FINAL_AUDIT_REPORT.md](./DEPLOYMENT_QA_FINAL_AUDIT_REPORT.md)** - Full audit report

**Status:** ✅ All deployment blockers resolved, configuration optimized, ready for production.

---

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
| **Orphan Page Detector** | Identify pages with zero internal links | `npm run orphan:detect` |
| **Orphan Page Monitor** | Weekly monitoring for new orphan pages | `npm run orphan:monitor` |
| **New Page Validator** | Validate pages before publishing | `npm run page:validate <url>` |
| **Sitemap Generator** | Generate sitemap.xml for search engines | `npm run sitemap:generate` |
| **SEO Validator** | Validate sitemap and SEO implementation | `npm run sitemap:validate` |

### Orphan Page Detection & Prevention System

**NEW!** Comprehensive system for detecting, fixing, and preventing orphan pages (pages with zero internal links):

**Features:**
- **Full Site Crawl**: Maps entire internal linking structure
- **Orphan Detection**: Identifies pages with 0 internal links
- **Smart Classification**: Prioritizes by traffic, backlinks, and content value
- **Automated Fixes**: Generates specific recommendations:
  - Add internal links (with suggestions)
  - Merge & 301 redirect (with targets)
  - Add noindex tag
  - Delete page
- **Tracking Spreadsheet**: Excel-compatible CSV for monitoring
- **Weekly Monitoring**: Detects new orphans automatically
- **Pre-Publication Validation**: Prevents orphans before they happen
- **Alerts**: Notifies when new orphans are detected

**Quick Start:**
```bash
# Run full orphan detection
npm run orphan:detect

# Weekly monitoring (automate with cron)
npm run orphan:monitor

# Validate new page before publishing
npm run page:validate https://yoursite.com/new-page
```

**Documentation:**
- `ORPHAN_PAGE_DETECTION_GUIDE.md` - Complete system guide
- `ORPHAN_PAGE_PREVENTION.md` - Best practices & content workflow
- `ORPHAN_DETECTION_EXAMPLES.md` - Example outputs and usage scenarios

**Expected Impact:**
- Traffic recovery: 20-50% on fixed pages
- Link equity preserved: 95%+
- Crawl efficiency: Significantly improved
- Prevention: <1% orphan rate

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
| **`AUTONOMOUS_LANDING_PAGE_BUILDER_V3.1.md`** | **NEW! Optimized autonomous landing page generator with keyword density controls and production-ready output** |
| `AUTONOMOUS_LANDING_PAGE_V3.1_GUIDE.md` | Implementation guide for v3.1 builder |
| `AUTONOMOUS_LANDING_PAGE_V3.1_EXAMPLE.md` | Ready-to-use example with filled YAML configuration |
| `KEYWORD_BLUEPRINT_PROMPT.md` | Converts keyword research into structured build instructions |
| `LANDING_PAGE_EXECUTION_PROMPT.md` | Generates landing pages from keyword blueprints (legacy) |
| `SEO_HEADING_STRUCTURE_AGENT.md` | Creates optimized H1-H6 heading hierarchies for any page type |
| `AEO_GEO_OPTIMIZATION_PROMPT.md` | Transforms content into AI-search optimized "Golden Source" assets for Google SGE, Perplexity, ChatGPT |
| `KEYWORD_BLUEPRINT_OUTPUT_EXAMPLE.md` | Example output for 10 high-volume keywords |
| `AEO_GEO_EXAMPLE_OUTPUT.md` | Example transformation showing before/after AEO/GEO optimization |

### Autonomous Landing Page Builder v3.1 (NEW!)

**What's New:**
- **No keyword stuffing** - Built-in density controls (2.0% cap)
- **Natural keyword usage** - 6-14 exact matches, 8-20 variations per keyword
- **Fully autonomous** - Runs all 7 phases without questions
- **Production-ready** - Complete HTML + 9 deliverables
- **Reusable** - Change only YAML block for new pages
- **Detailed structure** - Exact word counts per section
- **Style enforcement** - No generic copy, local references required

**Quick Start:**
```bash
# 1. Open AUTONOMOUS_LANDING_PAGE_BUILDER_V3.1.md
# 2. Fill in YAML variables for your page
# 3. Copy entire prompt + YAML
# 4. Paste into AI tool (ChatGPT, Claude)
# 5. Receive 9 complete deliverables:
#    - Business profile
#    - Site URL map
#    - Competitor analysis
#    - Page blueprint
#    - Meta tags
#    - Schema markup
#    - Full HTML landing page
#    - Image specifications
#    - Deployment checklist
```

**Documentation:**
- `AUTONOMOUS_LANDING_PAGE_BUILDER_V3.1.md` - Main prompt
- `AUTONOMOUS_LANDING_PAGE_V3.1_GUIDE.md` - Detailed implementation guide
- `AUTONOMOUS_LANDING_PAGE_V3.1_EXAMPLE.md` - Ready-to-use example

### Workflow

**Recommended (v3.1):**
1. **Run Keyword Blueprint Prompt** on your keyword list
2. **Pick one keyword blueprint** from the output
3. **Fill v3.1 YAML** with keyword data
4. **Run Autonomous Landing Page Builder v3.1**
5. **Receive 9 complete deliverables** (including HTML)
6. **Validate with SEO checklist**
7. **Apply AEO/GEO Optimization** to transform content for AI search engines
8. **Deploy to production**
9. **Repeat for each keyword**

**Legacy:**
1. Run Keyword Blueprint Prompt on your keyword list
2. Pick one keyword blueprint from the output
3. Paste into Landing Page Execution Prompt (legacy)
4. Generate page content
5. Apply AEO/GEO Optimization
6. Repeat for each keyword

This system enables scaling from 10 to 200+ pages with consistent quality optimized for both traditional search and AI answer engines.

### Related Documentation

- `UNIQUENESS_BLUEPRINT.md` - Content analysis and uniqueness requirements
- `SEO_IMPLEMENTATION_SUMMARY.md` - SEO page implementation details
- `SEO_IMPROVEMENTS_IMPLEMENTATION.md` - Quick wins and content enhancements
- `INTERNAL_LINKING_SITEMAP_GUIDE.md` - Internal linking strategy

## License

MIT License
