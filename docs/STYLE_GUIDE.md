# Style Guide
## Marvis Osazuwa — Portfolio Website

---

### 1. Brand Identity

#### 1.1 Brand Personality
- **Professional** — Polished, trustworthy, enterprise-ready
- **Modern** — Current design trends, not outdated or generic
- **Intelligent** — Subtle nods to data/ML (patterns, precision, structure)
- **Approachable** — Warm enough to feel human, not cold or corporate

#### 1.2 Brand Voice
- **First person, confident but not arrogant:** "I build..." not "Marvis builds..."
- **Action-oriented:** Lead with what you do, not what you are
- **Specific over vague:** "Built a recommender system using ALS on 200K+ user interactions" vs "Experienced in machine learning"
- **Forward-looking:** Show trajectory, not just current state

#### 1.3 Tagline Options (to be finalized)
1. "Turning Raw Data Into Intelligent Systems"
2. "Engineering Data. Building Intelligence."
3. "From Data Pipelines to ML Models — End to End"
4. "Where Data Engineering Meets Machine Learning"

---

### 2. Color Palette

#### 2.1 Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Deep Navy** | `#0A1628` | 10, 22, 40 | Primary dark backgrounds, hero section, nav (scrolled) |
| **Royal Blue** | `#2563EB` | 37, 99, 235 | Primary accent, CTAs, links, active states |
| **Electric Blue** | `#3B82F6` | 59, 130, 246 | Hover states, secondary accent |

#### 2.2 Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **White** | `#FFFFFF` | 255, 255, 255 | Primary background, card backgrounds |
| **Off-White** | `#F8FAFC` | 248, 250, 252 | Alternating section backgrounds |
| **Light Gray** | `#E2E8F0` | 226, 232, 240 | Borders, dividers |
| **Medium Gray** | `#94A3B8` | 148, 163, 184 | Secondary text, captions |
| **Dark Gray** | `#334155` | 51, 65, 85 | Body text |
| **Near Black** | `#0F172A` | 15, 23, 42 | Headings, primary text |

#### 2.3 Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success Green** | `#10B981` | Completed badges, positive indicators |
| **Warning Amber** | `#F59E0B` | In-progress badges, attention items |
| **Info Cyan** | `#06B6D4` | Informational badges, tags |
| **Subtle Purple** | `#8B5CF6` | ML/AI category accent |

#### 2.4 Category Colors (for project/skill badges)

| Category | Color | Hex |
|----------|-------|-----|
| Data Science | Blue | `#2563EB` |
| Machine Learning | Purple | `#8B5CF6` |
| Data Engineering | Cyan | `#06B6D4` |
| Database Design | Amber | `#F59E0B` |

#### 2.5 Gradient

```css
/* Hero background gradient */
background: linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #0A1628 100%);

/* Accent gradient for special elements */
background: linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%);
```

---

### 3. Typography

#### 3.1 Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headings** | Inter | 700 (Bold), 600 (Semibold) | -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif |
| **Body** | Inter | 400 (Regular), 500 (Medium) | Same fallback stack |
| **Code/Technical** | JetBrains Mono | 400, 500 | 'Fira Code', 'Courier New', monospace |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

#### 3.2 Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
|---------|---------------|---------------|--------|-------------|----------------|
| H1 (Hero name) | 72px / 4.5rem | 40px / 2.5rem | 700 | 1.1 | -0.02em |
| H2 (Section titles) | 40px / 2.5rem | 28px / 1.75rem | 700 | 1.2 | -0.01em |
| H3 (Card titles) | 24px / 1.5rem | 20px / 1.25rem | 600 | 1.3 | 0 |
| H4 (Subsection) | 20px / 1.25rem | 18px / 1.125rem | 600 | 1.4 | 0 |
| Body Large | 18px / 1.125rem | 16px / 1rem | 400 | 1.7 | 0 |
| Body | 16px / 1rem | 16px / 1rem | 400 | 1.6 | 0 |
| Body Small | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 | 0 |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 500 | 1.4 | 0.02em |
| Nav Link | 15px / 0.9375rem | 16px / 1rem | 500 | 1 | 0.01em |
| Button | 16px / 1rem | 16px / 1rem | 600 | 1 | 0.01em |
| Tag/Badge | 12px / 0.75rem | 12px / 0.75rem | 500 | 1 | 0.02em |

#### 3.3 Type Rules
- **Section headings** are always uppercase with a subtle colored underline accent
- **Body text** maximum width: 720px for readability
- **No text smaller than 12px** anywhere on the site
- **Links in body text:** Royal Blue, underline on hover

---

### 4. Spacing System

Based on an 8px grid:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing, icon gaps |
| `--space-2` | 8px | Inline element spacing |
| `--space-3` | 12px | Small padding |
| `--space-4` | 16px | Card padding, list gaps |
| `--space-5` | 24px | Section internal padding |
| `--space-6` | 32px | Between content groups |
| `--space-7` | 48px | Between major elements |
| `--space-8` | 64px | Section vertical padding (mobile) |
| `--space-9` | 80px | Section vertical padding (tablet) |
| `--space-10` | 100px | Section vertical padding (desktop) |

---

### 5. Component Styles

#### 5.1 Buttons

**Primary Button:**
```css
.btn-primary {
  background: #2563EB;
  color: #FFFFFF;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover {
  background: #1D4ED8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}
```

**Secondary Button (Outline):**
```css
.btn-secondary {
  background: transparent;
  color: #2563EB;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #2563EB;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-secondary:hover {
  background: #2563EB;
  color: #FFFFFF;
  transform: translateY(-2px);
}
```

#### 5.2 Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #E2E8F0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}
```

#### 5.3 Tags / Badges

```css
.tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  background: #F1F5F9;
  color: #334155;
}
.tag--category {
  background: rgba(37, 99, 235, 0.1);
  color: #2563EB;
}
```

#### 5.4 Section Headings

```css
.section-heading {
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0F172A;
  margin-bottom: 16px;
  position: relative;
}
.section-heading::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #2563EB, #8B5CF6);
  border-radius: 2px;
  margin-top: 12px;
}
```

---

### 6. Shadows & Elevation

| Level | Shadow | Usage |
|-------|--------|-------|
| **Subtle** | `0 1px 3px rgba(0,0,0,0.06)` | Default card state |
| **Medium** | `0 4px 12px rgba(0,0,0,0.08)` | Nav bar (scrolled) |
| **Elevated** | `0 12px 24px rgba(0,0,0,0.1)` | Card hover, modals |
| **Strong** | `0 20px 40px rgba(0,0,0,0.15)` | Featured elements |

---

### 7. Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 8px |
| Cards | 12px |
| Tags/Badges | 100px (full pill) |
| Images (profile) | 50% (circle) or 16px (rounded) |
| Input fields | 8px |
| Modals | 16px |

---

### 8. Iconography

- **Source:** Lucide Icons (open source, consistent, clean)
- **Size:** 20px default, 24px for nav/contact, 16px for inline
- **Stroke width:** 2px
- **Color:** Inherits from text color or accent color
- **Skill/tool icons:** Simple Icons (brand logos) or Devicon

---

### 9. Background Patterns

#### Hero Section Pattern
A subtle data-inspired pattern layered over the gradient:
- **Option A:** Dot grid (evenly spaced small dots at 10% opacity)
- **Option B:** Connected nodes (SVG network graph pattern)
- **Option C:** Abstract geometric lines (diagonal, data-flow inspired)

```css
/* Dot grid pattern */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 30px 30px;
}
```

---

### 10. CSS Custom Properties (Variables)

```css
:root {
  /* Colors */
  --color-primary: #2563EB;
  --color-primary-dark: #1D4ED8;
  --color-primary-light: #3B82F6;
  --color-bg-dark: #0A1628;
  --color-bg-white: #FFFFFF;
  --color-bg-off-white: #F8FAFC;
  --color-border: #E2E8F0;
  --color-text-primary: #0F172A;
  --color-text-body: #334155;
  --color-text-secondary: #94A3B8;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-info: #06B6D4;
  --color-accent-purple: #8B5CF6;

  /* Typography */
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;
  --space-10: 100px;

  /* Borders */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 100px;

  /* Shadows */
  --shadow-subtle: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-medium: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-elevated: 0 12px 24px rgba(0,0,0,0.1);
  --shadow-strong: 0 20px 40px rgba(0,0,0,0.15);

  /* Transitions */
  --transition-default: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  /* Layout */
  --max-width: 1200px;
  --nav-height: 64px;
  --nav-height-mobile: 56px;
}
```

---

### 11. Do's and Don'ts

#### Do:
- Use the primary blue for interactive elements (links, buttons, active states)
- Maintain generous whitespace between sections
- Use the gradient accent sparingly (section heading underlines, hero background)
- Keep card designs consistent across projects, blog, and events
- Use real data and specifics, not lorem ipsum

#### Don't:
- Use more than 2 colors in a single component
- Apply shadows to every element — use elevation purposefully
- Mix font families (only Inter + JetBrains Mono)
- Use pure black (#000000) — always use Near Black (#0F172A)
- Make text smaller than 12px
- Use centered body text for paragraphs longer than 3 lines
- Add decorative elements without purpose

---

*Document Version: 1.0*  
*Last Updated: April 12, 2026*
