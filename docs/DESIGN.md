# Design Document
## Marvis Osazuwa — Portfolio Website

---

### 1. Design Philosophy

The design follows a **"Modern Corporate Polish"** aesthetic — clean, structured, and confident. Think: the sophistication of a McKinsey report meets the energy of a YC startup page. Every element should communicate *competence, clarity, and forward momentum*.

**Design Principles:**
- **Clarity over cleverness** — Information is easy to find and understand in seconds
- **Breathing room** — Generous whitespace lets content speak
- **Purposeful motion** — Subtle animations guide attention, never distract
- **Data-driven identity** — Visual elements hint at data/ML (subtle grid patterns, node connections, chart-like motifs)

### 2. Site Architecture

```
┌─────────────────────────────────────────────────┐
│                 NAVIGATION BAR                   │
│  Logo/Name    About  Projects  Skills  Events    │
│               Blog   Resume   Contact            │
├─────────────────────────────────────────────────┤
│                                                   │
│                 HERO SECTION                       │
│        Name / Title / Tagline / CTAs              │
│                                                   │
├─────────────────────────────────────────────────┤
│                ABOUT ME                           │
│      Photo + Story + Quick Stats                  │
├─────────────────────────────────────────────────┤
│            EXPERIENCE / JOURNEY                   │
│   Timeline: GTBank → FMBN → Natural Clinic → MS  │
├─────────────────────────────────────────────────┤
│              PROJECT SHOWCASE                     │
│     Filter Tabs → Project Cards Grid              │
├─────────────────────────────────────────────────┤
│              SKILLS & TOOLS                       │
│       Categorized Visual Tech Stack               │
├─────────────────────────────────────────────────┤
│          EVENTS & NETWORKING                      │
│      Timeline of Events + Activities              │
├─────────────────────────────────────────────────┤
│                  BLOG                             │
│         Article Cards (Latest 3-6)                │
├─────────────────────────────────────────────────┤
│        CERTIFICATIONS & EDUCATION                 │
│          Vertical Timeline Layout                 │
├─────────────────────────────────────────────────┤
│                 RESUME                            │
│        Preview + Download Button                  │
├─────────────────────────────────────────────────┤
│                CONTACT                            │
│       Direct Links (Email, LinkedIn, GitHub)      │
├─────────────────────────────────────────────────┤
│                 FOOTER                            │
│     Social Icons / Copyright / Back to Top        │
└─────────────────────────────────────────────────┘
```

### 3. Section-by-Section Layout

#### 3.1 Navigation Bar
- **Behavior:** Fixed at top, transparent on hero, solid background on scroll
- **Layout:** Logo/name on left, nav links on right
- **Mobile:** Hamburger menu with slide-in panel
- **Active state:** Underline indicator on current section
- **Scroll behavior:** Smooth scroll to section anchors
- **Height:** 64px desktop, 56px mobile

#### 3.2 Hero Section
- **Layout:** Full viewport height (100vh), centered content
- **Background:** Subtle animated gradient or geometric pattern (data-inspired: dots, grid lines, or node network)
- **Content stack (centered):**
  - Greeting text: "Hi, I'm"
  - Name: **MARVIS OSAZUWA** (large, bold)
  - Animated role text that cycles: "Data Scientist" → "Analytics Engineer" → "ML Enthusiast"
  - Tagline: "Turning complex data into systems that drive real business outcomes"
  - Two CTA buttons: [View My Work] [Download Resume]
- **Scroll indicator:** Subtle down-arrow animation at bottom

#### 3.3 About Me
- **Layout:** Two-column on desktop (60/40 split), stacked on mobile
- **Left column:** Professional narrative (3-4 paragraphs)
  - The journey: Computer Engineering in Nigeria → Banking & Government analytics → CRM Architecture in Turkey → MS Data Science in the UK
  - What drives him: Passion for turning messy data into business-changing insights
  - Where he's headed: Bridging data engineering with ML to build intelligent systems at scale
- **Right column:**
  - Professional photo (or illustrated avatar placeholder)
  - Quick stats cards: "3 Countries" / "6+ Projects" / "5 Certifications" / "2 Master's Degrees"
- **Background:** Alternating section color (light gray)

#### NEW: 3.3b Experience / Career Journey
- **Layout:** Horizontal timeline or vertical cards
- **Shows:** GTBank → FMBN → Natural Clinic → Microsoft Ambassador → Current Studies
- **Each role:** Company logo, title, date range, 1-2 key metrics
- **Purpose:** Bridges the About Me story with concrete professional proof
- **Placement:** Between About Me and Projects

#### 3.4 Projects Showcase
- **Layout:** Filter tabs at top + responsive card grid (3 columns desktop, 2 tablet, 1 mobile)
- **Filter categories:** All / Data Science / Machine Learning / Data Engineering / Database Design
- **Each project card contains:**
  - Project thumbnail/preview image
  - Category badge
  - Project title
  - One-line description
  - Tech tags (pill-shaped)
  - Two links: [View Details] [GitHub]
- **Interaction:** Cards have hover lift effect with shadow
- **Featured project:** First card can be a larger "featured" card spanning 2 columns

#### 3.5 Skills & Tools
- **Layout:** Organized into categorized groups
- **Categories:**
  - Languages & Frameworks
  - Machine Learning & AI
  - Data Engineering & Cloud
  - Databases
  - Tools & Platforms
- **Visual treatment:** Icon/logo for each tool with label, organized in a clean grid
- **Optional enhancement:** Subtle skill level indicators (not bar charts — more tasteful, like filled dots or rings)
- **Background:** White

#### 3.6 Events & Networking
- **Layout:** Timeline-style vertical layout
- **Each event card:**
  - Date
  - Event name
  - Role (Attendee / Speaker / Organizer)
  - Brief description
  - Location (virtual/in-person)
  - Link to event (if available)
- **Visual:** Alternating left-right cards on desktop, single column on mobile
- **Empty state:** "Coming soon — stay tuned for upcoming events" with a CTA to connect on LinkedIn
- **Background:** Light gray

#### 3.7 Blog
- **Layout:** Grid of article cards (3 across desktop, 1 mobile)
- **Each card:**
  - Featured image or category illustration
  - Publication date
  - Title
  - 2-line excerpt
  - Read time estimate
  - "Read More →" link
- **Links to:** Individual blog post pages (separate HTML files in /blog/ directory)
- **Blog post page:** Clean reading layout with back navigation, similar to Medium
- **Background:** White

#### 3.8 Certifications & Education
- **Layout:** Vertical timeline
- **Each entry:**
  - Date / year
  - Institution or platform logo
  - Credential name
  - Issuing organization
  - Verification link (if applicable)
- **Categories:** Education / Certifications / Courses
- **Empty/placeholder state:** Shows planned certifications with "In Progress" badges

#### 3.9 Resume Section
- **Layout:** Centered, minimal
- **Content:**
  - Brief text: "Want the full picture? Download my resume."
  - Visual resume preview (embedded image or styled summary)
  - Large download button: [Download Resume (PDF)]
  - Last updated date
- **Background:** Dark section (inverted colors for contrast)

#### 3.10 Contact
- **Layout:** Centered text with icon links
- **Content:**
  - Heading: "Let's Connect"
  - Subtext: "I'm always open to discussing data, ML, and new opportunities."
  - Direct links with icons:
    - Email (mailto: link)
    - LinkedIn profile
    - GitHub profile
  - Optional: Calendly or scheduling link
- **Style:** No form — clean, direct, professional
- **Background:** White

#### 3.11 Footer
- **Layout:** Three-column on desktop, stacked on mobile
- **Columns:**
  - Left: Name + short tagline
  - Center: Quick nav links
  - Right: Social media icons
- **Bottom bar:** Copyright + "Built with passion" + back-to-top button

### 4. Responsive Breakpoints

| Breakpoint | Width | Columns | Nav Style |
|-----------|-------|---------|-----------|
| Mobile | < 768px | 1 | Hamburger menu |
| Tablet | 768px - 1024px | 2 | Hamburger or condensed |
| Desktop | 1024px - 1440px | 3 | Full horizontal |
| Large | > 1440px | 3 (max-width container) | Full horizontal |

**Max content width:** 1200px (centered with auto margins)

### 5. Interaction & Motion Design

| Element | Trigger | Animation |
|---------|---------|-----------|
| Nav bar | Scroll past hero | Background fades in, subtle shadow appears |
| Hero role text | Automatic | Typewriter or fade-cycle effect (3s interval) |
| Section headings | Scroll into view | Fade up with slight translate (0.6s ease) |
| Project cards | Scroll into view | Staggered fade up (0.1s delay between cards) |
| Project cards | Hover | Lift 4px + shadow deepens |
| Skill icons | Scroll into view | Scale in from 0.8 to 1.0 |
| Timeline items | Scroll into view | Slide in from left/right alternating |
| CTA buttons | Hover | Background color shift + subtle scale (1.02) |
| Back to top | Click | Smooth scroll to top |
| Mobile menu | Click hamburger | Slide in from right with overlay |

**Animation principles:**
- Duration: 0.3s–0.6s
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design standard)
- Use `IntersectionObserver` for scroll-triggered animations
- Respect `prefers-reduced-motion` for accessibility

### 6. Image Strategy

| Image | Format | Max Size | Source |
|-------|--------|----------|--------|
| Hero background | SVG or CSS-generated | N/A | Custom CSS patterns |
| Profile photo | WebP with JPG fallback | 200KB | Provided by Marvis |
| Project thumbnails | WebP with JPG fallback | 100KB each | Screenshots or mockups |
| Skill/tool logos | SVG | 5KB each | Simple Icons / Devicons |
| Blog thumbnails | WebP with JPG fallback | 80KB each | Unsplash or custom |
| Cert/edu logos | SVG or PNG | 20KB each | Official logos |

### 7. SEO & Meta Structure

```html
<title>Marvis Osazuwa — Data Engineer, Data Scientist & ML Practitioner</title>
<meta name="description" content="Portfolio of Marvis Osazuwa — Data & ML Engineer turning raw data into intelligent systems across healthcare, sports, and gaming.">
<meta property="og:title" content="Marvis Osazuwa — Data & ML Portfolio">
<meta property="og:description" content="Explore projects in data engineering, machine learning, and analytics.">
<meta property="og:image" content="assets/og-image.png">
<meta property="og:url" content="https://marz1307.github.io">
```

### 8. File Structure

```
marz1307.github.io/
├── index.html              # Main single-page site
├── style.css               # All styles
├── script.js               # All interactivity
├── assets/
│   ├── images/
│   │   ├── profile.jpg     # Professional photo
│   │   ├── og-image.png    # Social share image
│   │   └── projects/       # Project thumbnails
│   ├── icons/              # SVG skill/tool icons
│   └── resume/
│       └── Marvis_Osazuwa_Resume.pdf
├── blog/
│   ├── post-template.html  # Reusable blog post layout
│   └── posts/              # Individual blog articles
├── docs/
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── FEATURES.md
│   └── STYLE_GUIDE.md
├── sitemap.xml
├── robots.txt
├── CNAME                   # Custom domain (future)
└── README.md
```

---

*Document Version: 1.0*  
*Last Updated: April 12, 2026*
