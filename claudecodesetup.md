claude code setup

CLAUDE CODE SETUP FOR YOUR RAMADAN MAJLIS WEBSITE
INSTALLATION & SETUP (5 Minutes)
Step 1: Install Claude Code
Option A: npm (Recommended for Windows)
bashnpm install -g @anthropic/claude-code
Option B: Homebrew (Mac)
bashbrew install claude-code
Option C: Native Installer

Download from: https://claude.ai/download
Auto-updates in background

Step 2: Authenticate
bashclaude
You'll get three authentication options:

Claude Pro/Max subscription (Recommended - $20-40/month)
Claude Console (Pay-as-you-go API credits)
Cloud provider (AWS Bedrock, Google Vertex, Azure)

Choose #1 if you have Claude subscription, follow the verification code process.
Step 3: Verify Installation
bashclaude --version

PROJECT-SPECIFIC SETUP
Step 1: Create Project Directory
bashmkdir ramadan-majlis-website
cd ramadan-majlis-website
Step 2: Initialize Git (IMPORTANT)
bashgit init
git config user.name "Your Name"
git config user.email "your.email@example.com"
Why? Claude Code works best with version control. You can review changes before accepting them.
Step 3: Create CLAUDE.md File
This is THE MOST IMPORTANT file. It teaches Claude about your project.
bash# Create the file
touch CLAUDE.md
CLAUDE.md Content (Copy this exactly):
markdown# Ramadan Majlis Website - Project Guide

## Project Overview
Lead generation website for Ramadan Majlis & Tent rental services across UAE. Built with Next.js 15, targeting hotels, corporations, and families for seasonal Ramadan events.

## Tech Stack
- **Framework:** Next.js 15.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL (Supabase)
- **Forms:** React Hook Form + Zod validation
- **i18n:** next-intl (English + Arabic support)
- **Deployment:** Vercel
- **Analytics:** Google Analytics 4

## Architecture Decisions
- Server-Side Rendering (SSR) for SEO
- Bilingual (English /en/ + Arabic /ar/) with separate URLs
- RTL support for Arabic
- Mobile-first responsive design
- Lead capture forms with multi-step workflow

## Directory Structure
```
app/
├── [locale]/           # Language-specific routes (en, ar)
│   ├── layout.js      # Root layout with i18n
│   ├── page.js        # Homepage
│   ├── services/      # Service pages
│   ├── locations/     # City-specific SEO pages
│   ├── portfolio/     # Gallery
│   ├── get-quote/     # Lead form
│   └── blog/          # Content marketing
├── api/               # API routes
│   ├── submit-quote/
│   └── send-email/
components/
├── forms/             # Form components
├── layout/            # Header, Footer, Navigation
└── ui/                # Reusable UI components
messages/
├── en.json           # English translations
└── ar.json           # Arabic translations
```

## Development Guidelines

### Code Standards
- Use TypeScript for all new files
- Use `async/await` over Promises
- Prefer Server Components unless interactivity needed
- Use `'use client'` directive only when necessary
- Keep components small (<150 lines)
- Extract reusable logic into custom hooks

### Naming Conventions
- Components: PascalCase (e.g., `QuoteForm.tsx`)
- Files: kebab-case (e.g., `hotel-majlis.tsx`)
- Functions: camelCase (e.g., `submitQuote()`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_URL`)

### CSS & Styling
- Use Tailwind utility classes
- RTL-compatible classes (ms-4 instead of ml-4)
- Mobile-first breakpoints (sm:, md:, lg:, xl:)
- Follow off-white (#F8F7F3) + gold accent (#D4AF37) color scheme

### SEO Requirements
- Every page must have proper metadata
- Include Arabic and English hreflang tags
- Generate XML sitemap automatically
- Use semantic HTML
- Include Schema.org JSON-LD markup

### Forms
- Multi-step forms for better UX
- Client-side validation with Zod
- Server-side validation in API routes
- Toast notifications for feedback
- Loading states for all async operations

### Images
- Use Next.js Image component
- Optimize for mobile first
- Include alt text in both languages
- Use WebP format when possible

## Important Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript checks
```

### Database
```bash
npx prisma generate  # Generate Prisma client
npx prisma migrate dev  # Run migrations
```

### Deployment
- Auto-deploys from `main` branch on Vercel
- Preview deployments for PRs
- Environment variables in Vercel dashboard

## Critical Rules
1. **NEVER hardcode text** - Always use i18n translations
2. **NEVER skip RTL testing** - Test Arabic layout
3. **ALWAYS validate forms** - Client + Server
4. **ALWAYS use TypeScript** - No `any` types
5. **ALWAYS check mobile** - Mobile-first approach
6. **NEVER commit secrets** - Use environment variables
7. **ALWAYS write clean URLs** - SEO-friendly slugs

## File Patterns

### Creating a new page:
```typescript
// app/[locale]/services/[slug]/page.tsx
export default async function ServicePage({ 
  params 
}: { 
  params: { locale: string; slug: string } 
}) {
  // Your code
}

export async function generateMetadata({ params }) {
  // SEO metadata
}
```

### Creating API route:
```typescript
// app/api/submit-quote/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  // Handle request
  return Response.json({ success: true });
}
```

### Using translations:
```typescript
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('home');
  return {t('hero.title')};
}
```

## Testing Checklist
- [ ] Desktop responsive (1920px, 1440px, 1024px)
- [ ] Mobile responsive (375px, 414px)
- [ ] Tablet responsive (768px)
- [ ] RTL layout (Arabic)
- [ ] LTR layout (English)
- [ ] Form validation
- [ ] Loading states
- [ ] Error handling
- [ ] SEO metadata
- [ ] Performance (Lighthouse 90+)

## External Services
- **Email:** SendGrid API
- **Database:** Supabase PostgreSQL
- **Analytics:** Google Analytics 4
- **Forms:** React Hook Form
- **Monitoring:** Vercel Analytics

## Contact & Support
- Project Manager: [Your Name]
- Technical Lead: [Your Name]
- Emergency: [Phone Number]

## Notes for Claude
- When creating forms, use multi-step pattern
- When adding new pages, include both /en/ and /ar/ versions
- When modifying layouts, test RTL immediately
- When writing API routes, validate input thoroughly
- Always commit working code, not WIP
- Ask for clarification if requirements are ambiguous

MCP SERVERS SETUP (SUPER IMPORTANT)
MCP Servers give Claude superpowers. Here are the ESSENTIAL ones for your project:
1. Next.js DevTools MCP (MUST HAVE)
What it does: Connects to your running Next.js dev server, detects errors in real-time, queries routes, gets logs.
Install:
bashclaude mcp add next-devtools npx next-devtools-mcp@latest
OR manually add to MCP config:
Mac/Linux: ~/.claude/settings.json
Windows: %USERPROFILE%\.claude\settings.json
json{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

**Usage:**
```
claude> Next Devtools, what errors are in my application?
claude> Next Devtools, show me all routes
claude> Next Devtools, help me upgrade to Next.js 16
2. Context7 MCP (ESSENTIAL for current docs)
What it does: Fetches latest documentation from GitHub repos. Critical for Next.js 15, React 19, Tailwind v4.
Install:
bashnpm install -g @context7/mcp-server
claude mcp add context7 @context7/mcp-server
```

**Usage:**
```
claude> use context7 - Create a Server Component with the latest Next.js 15 patterns
claude> use context7 - Show me the current next-intl implementation
3. GitHub MCP (For version control)
What it does: Creates PRs, reviews code, manages issues.
Install:
bashclaude mcp add github -- docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN ghcr.io/github/github-mcp-server
```

**Get token:** https://github.com/settings/tokens
- Create token with `repo` permissions

**Usage:**
```
claude> Create a PR from my feature branch
claude> Review the latest PR and suggest improvements
4. Brave Search MCP (For research)
What it does: Web search for latest trends, competitor research, SEO strategies.
Install:
bashnpm install -g @modelcontextprotocol/server-brave-search
claude mcp add brave-search @modelcontextprotocol/server-brave-search
```

**Get API key:** https://brave.com/search/api/

**Usage:**
```
claude> use brave-search - What are the top-ranking keywords for "ramadan tent rental dubai"
claude> use brave-search - Find the latest SEO strategies for event rental websites
5. Database MCP (For Supabase)
What it does: Query database, run migrations, inspect schema.
Install:
bashnpm install -g @modelcontextprotocol/server-postgres
claude mcp add postgres @modelcontextprotocol/server-postgres
```

**Usage:**
```
claude> Query the leads table to show me today's submissions
claude> Create a migration to add a new column

CLAUDE CODE WORKFLOW FOR YOUR PROJECT
Phase 1: Initial Setup (Use Plan Mode)
Start Claude Code:
bashcd ramadan-majlis-website
claude
```

**Press Shift+Tab** to enter **PLAN MODE** (shows thinking, doesn't execute)

**Prompt:**
```
Initialize a new Next.js 15 project for a bilingual (English + Arabic) lead generation website. 

Tech stack:
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4
- next-intl for i18n
- Supabase for database

Setup:
1. Create Next.js app
2. Configure next-intl with /en/ and /ar/ routes
3. Setup Tailwind with RTL support
4. Create basic folder structure
5. Add CLAUDE.md (already exists)
6. Initialize git

After planning, ask me to confirm before executing.
```

Claude will show the plan. Review it, then say:
```
Looks good, execute the plan
```

### **Phase 2: Create Core Components**
```
Create the homepage layout with these components:

1. Header component:
   - Logo
   - Language switcher (EN/AR)
   - Navigation menu (Services, Locations, Portfolio, Contact)
   - CTA button: "Get Free Quote"
   - Mobile hamburger menu
   - RTL support

2. Hero section:
   - Headline (translatable)
   - Subheadline
   - Background image (Next.js Image)
   - Two CTAs: "Get Quote" + "WhatsApp"
   - Mobile optimized

3. Services cards section:
   - 5 service cards with icons
   - Hover effects
   - Link to service pages

Use Tailwind for styling, make it mobile-first, and ensure RTL works perfectly.
```

### **Phase 3: Forms & Lead Capture**
```
Create a multi-step quote form with these steps:

Step 1: Event Details
- Event type (dropdown: Hotel, Corporate, Home, Wedding)
- Event date (date picker)
- Location (dropdown: Dubai, Abu Dhabi, Sharjah, etc.)

Step 2: Requirements
- Number of guests (input)
- Duration (hours)
- Budget range (slider)

Step 3: Add-ons
- Furniture (checkbox)
- AC (checkbox)
- Decoration (checkbox)
- Catering setup (checkbox)

Step 4: Contact
- Name
- Phone (required, UAE format)
- Email
- Company name (optional)

Requirements:
- Use React Hook Form
- Zod validation
- Progress indicator
- Submit to /api/submit-quote
- Success toast notification
- WhatsApp quick option on every step

Implement in TypeScript with proper types.
```

### **Phase 4: SEO Pages**
```
Create location landing pages for SEO:

Generate pages for:
- /en/locations/dubai
- /en/locations/abu-dhabi
- /en/locations/sharjah
- (and 4 more cities)

Each page should have:
- Unique content (800+ words)
- Local SEO keywords
- Schema markup (LocalBusiness)
- Gallery of past projects in that city
- Quote form
- Google Maps embed
- Testimonials from that city

Use generateStaticParams for static generation.
Include proper metadata with hreflang tags.
```

### **Phase 5: API Routes & Database**
```
Create the backend:

1. Database schema (Prisma):
   - Leads table with all form fields
   - Timestamps
   - Source tracking

2. API route: /api/submit-quote
   - Validate input with Zod
   - Save to database
   - Send email notification (SendGrid)
   - Send SMS confirmation (Twilio)
   - Return success/error

3. API route: /api/send-whatsapp
   - Generate WhatsApp click-to-chat link
   - Track in database

Include proper error handling and TypeScript types.
```

---

## **PRO TIPS FOR WORKING WITH CLAUDE CODE**

### **1. Use Plan Mode for Complex Tasks**

**Press Shift+Tab twice** to cycle to Plan Mode

**When to use:**
- Building new features
- Refactoring code
- Making architectural decisions
- When unsure about approach

**Example:**
```
[Plan Mode]
Plan how to implement bilingual sitemap generation:
- Should it be dynamic or static?
- How to handle both languages?
- What format (XML)?
- Where to place the file?

Think through the options before coding.
2. Skip Permissions (YOLO Mode)
Start Claude with:
bashclaude --dangerously-skip-permissions
OR press Cmd+C (Mac) / Ctrl+C (Windows) and type:
bashclaude --dangerously-skip-permissions
```

**Why?** Claude asks permission for EVERY file edit. This gets annoying fast.

**Safe because:**
- You're using Git
- Can undo any changes
- Review diffs before committing

### **3. Clear Context Often**
```
claude> /clear
```

**When to clear:**
- Starting a new feature
- Switching between tasks
- Context getting too large
- Claude seems confused

Saves tokens, keeps responses focused.

### **4. Use Subagents for Parallel Work**
```
Use multiple subagents to:
1. Create the header component
2. Create the footer component  
3. Create the quote form
4. Run tests on existing code

Work in parallel.
Claude will split the work and handle it concurrently.
5. Custom Slash Commands
Create .claude/commands/ directory:
bashmkdir -p .claude/commands
Create /fix-bug command:
.claude/commands/fix-bug.md:
markdownFix bug from description: $ARGUMENTS

Process:
1. Understand the bug
2. Use context7 to check latest docs
3. Use Next DevTools to inspect errors
4. Fix the issue
5. Test the fix
6. Commit with descriptive message

Always use subagents for research.
```

**Usage:**
```
claude> /fix-bug hydration error on about page
```

### **6. Leverage MCP in Prompts**

**Good:**
```
use context7 - Create a Server Component following latest Next.js 15 App Router patterns
```

**Better:**
```
use context7 and brave-search to:
1. Find the latest Next.js 15 Server Component best practices
2. Research how competitors structure their service pages
3. Create a Service page component that follows current standards

Use subagents for parallel research.
```

---

## **SKILLS TO INSTALL**

Skills are pre-built workflows. Install these:

### **1. docx Skill (Create Word docs)**

**What it does:** Generate proposal documents, contracts, invoices as .docx files.

**Auto-available in:** claude.ai

**Usage:**
```
Create a professional proposal document for a corporate client requesting a 500-person iftar tent setup in Dubai. Include pricing breakdown, timeline, and terms. Output as .docx file.
```

### **2. pptx Skill (Create PowerPoint)**

**Usage:**
```
Create a sales presentation showcasing our Ramadan Majlis services. 10 slides:
1. Cover
2. About Us
3. Services Overview
4. Hotel Solutions
5. Corporate Solutions
6. Portfolio Gallery
7. Testimonials
8. Pricing Packages
9. Process & Timeline
10. Contact

Use our brand colors (off-white + gold). Output as .pptx.
```

### **3. xlsx Skill (Create Excel)**

**Usage:**
```
Create a lead tracking spreadsheet with:
- Columns: Date, Name, Phone, Email, Event Type, Location, Status, Follow-up Date
- Conditional formatting (red = overdue, green = completed)
- Auto-calculated metrics
- Filter views

Output as .xlsx

DAILY WORKFLOW EXAMPLE
Morning: Start New Feature
bashcd ramadan-majlis-website
git checkout -b feature/portfolio-gallery
claude
```
```
claude> /clear
claude> Init Next DevTools to connect to dev server

[Claude connects to running server]

claude> use context7 - Create a portfolio gallery component with these features:

1. Masonry layout (Pinterest-style)
2. Filter by: Event Type, Location, Capacity
3. Lightbox on click
4. Lazy loading
5. Mobile responsive
6. RTL support

Use latest Next.js 15 Image optimization.
Follow our component structure in CLAUDE.md.
```

### **Mid-day: Debug Issue**
```
claude> Next Devtools, what errors exist?

[Claude shows hydration error]

claude> use multiple subagents to:
1. Research this error with context7
2. Check our codebase for similar patterns
3. Find the solution
4. Implement the fix
5. Test the fix
```

### **Afternoon: SEO Content**
```
claude> use brave-search to:
1. Research top keywords for "ramadan tent rental abu dhabi"
2. Analyze top 3 competitors
3. Find content gaps

Then create an SEO-optimized blog post (1500 words) about "Complete Guide to Ramadan Majlis Setup for Hotels in Abu Dhabi"

Include:
- Target keywords naturally
- Internal links to our service pages
- Schema markup
- Meta description
Evening: Review & Commit
bashgit status
git add .
git commit -m "feat: add portfolio gallery with filters"
git push origin feature/portfolio-gallery
```

Create PR using Claude:
```
claude> Create a PR for this feature branch with a detailed description
```

---

## **TROUBLESHOOTING**

### **Claude is slow / using too many tokens**

**Solution 1:** Clear context
```
claude> /clear
```

**Solution 2:** Use plan mode for thinking
```
[Shift+Tab to Plan Mode]
```

**Solution 3:** Be more specific
```
❌ "Build the website"
✅ "Create the header component with logo, nav, and language switcher"
```

### **Claude suggests outdated code**

**Solution:** Always use context7
```
❌ "Create a Next.js page"
✅ "use context7 - Create a Next.js 15 App Router page"
Claude won't edit files
Solution: Check permissions
bash# Run with --dangerously-skip-permissions
claude --dangerously-skip-permissions
MCP servers not working
Check config:
bashcat ~/.claude/settings.json
Restart Claude:
bash# Exit Claude (Ctrl+D)
# Restart
claude
```

### **Arabic/RTL layout broken**

**Always test RTL:**
```
claude> Test the component in RTL mode and fix any layout issues
```

---

## **COST MANAGEMENT**

### **Claude Pro ($20/month):**
- 5x more usage than free
- Claude Sonnet 4.5
- Enough for 3-4 hours/day of coding

### **Token Usage Tips:**

1. **Use /clear often** - Keeps context small
2. **Be specific** - Less back-and-forth
3. **Use plan mode** - Thinking doesn't use tokens
4. **Batch requests** - Combine related tasks

**Example:**
```
❌ Three separate prompts
✅ One combined prompt:
"Create the header, footer, and navigation components. All should be mobile-responsive and support RTL."

KEYBOARD SHORTCUTS

Shift+Tab: Cycle modes (Edit → Plan → Auto-accept)
Ctrl/Cmd+C: Command palette
↑ Arrow: Previous conversation
Ctrl+D: Exit Claude Code
Ctrl+L: Clear screen


QUICK REFERENCE COMMANDS
bash# Start Claude
claude

# Start with specific model
claude -m sonnet

# One-shot command
claude -p "What is this project?"

# Resume last conversation
claude -r

# Clear permissions
claude --dangerously-skip-permissions

# Add MCP server
claude mcp add <name> <command>

# Install GitHub app for PR reviews
claude /install-github-app
```

---

## **WHAT TO BUILD FIRST (Recommended Order)**

### **Week 1: Foundation**
```
Day 1: Project setup, CLAUDE.md, basic layout
Day 2: Homepage hero + services section
Day 3: Header + Footer + Navigation
Day 4: Language switcher + i18n setup
Day 5: Mobile responsiveness + RTL testing
```

### **Week 2: Core Pages**
```
Day 1: Service pages (5 pages)
Day 2: Location pages (7 cities)
Day 3: Portfolio gallery
Day 4: About page + FAQ
Day 5: Contact forms
```

### **Week 3: Lead Generation**
```
Day 1: Multi-step quote form
Day 2: API routes + database
Day 3: Email integration
Day 4: WhatsApp integration
Day 5: Admin dashboard for leads
```

### **Week 4: SEO & Launch**
```
Day 1: Meta tags + sitemaps
Day 2: Schema markup
Day 3: Blog system
Day 4: Performance optimization
Day 5: Testing + Launch
```

---

## **FINAL PRO TIP**

**Start every session with:**
```
claude> Init Next DevTools

claude> Read CLAUDE.md and remind me of:
1. Our tech stack
2. Our coding standards
3. Critical rules for this project

Then let's start working.
This ensures Claude has full context every time.