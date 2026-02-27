# Music Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page violin teacher / freelance violinist website on a new `music` branch, replacing the software designer site.

**Architecture:** Single `index.html` with anchor-link navigation, light theme CSS, minimal JS (navbar scroll, mobile nav, scroll reveal). No build tools, no frameworks. Delete multi-page files (`about.html`, `projects.html`) on this branch.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Inter font (Google Fonts), GitHub Pages

---

### Task 1: Create the `music` branch

**Step 1: Create and switch to new branch**

```bash
cd "D:/OneDrive/1Documents/Claude Code/noamelisha-website"
git checkout -b music
```

**Step 2: Verify branch**

```bash
git branch --show-current
```

Expected: `music`

---

### Task 2: Rewrite `css/styles.css` — light theme

**Files:**
- Modify: `css/styles.css` (complete rewrite)

This is the biggest file change. Replace the entire dark-theme CSS with a light theme. Key changes:

**CSS Variables (`:root`):**
```css
:root {
  --color-bg: #fafafa;
  --color-surface: #ffffff;
  --color-surface-2: #f0f0f0;
  --color-border: rgba(0, 0, 0, 0.08);

  --color-accent: #8b5e3c;        /* warm brown — inviting, musical */
  --color-accent-dim: rgba(139, 94, 60, 0.08);
  --color-accent-border: rgba(139, 94, 60, 0.2);

  --text-primary: #1a1a1a;
  --text-secondary: #555555;
  --text-muted: #888888;

  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06);

  --transition: 0.2s ease;
}
```

**Sections to include (rewrite from scratch):**
1. Reset & Base (keep structure, flip colors to light)
2. Typography (same scale, dark text on light bg)
3. `.accent-text` utility
4. Section layout (`.section`, `.container`, `.section-label`, `.section-title`, `.section-subtitle`)
5. Navbar — fixed, transparent → white on scroll. Use `rgba(250,250,250,0.9)` for `.navbar.scrolled` background
6. Hamburger + Mobile nav — light theme overlay (`rgba(250,250,250,0.98)`)
7. Buttons (`.btn`, `.btn-primary`, `.btn-secondary`) — primary uses accent color with white text
8. **About section** (new): `.about-section` with two-column grid (photo placeholder + text). Photo placeholder: square with light gray bg, centered violin emoji or icon
9. **Lesson cards** (new): `.lessons-grid` — 3-column grid (auto-fill, minmax 280px). `.lesson-card` — white card with subtle border, icon, title, description
10. **Experience section** (new): `.experience-grid` — compact card layout for highlights. `.exp-item` — small card with role, org, optional detail
11. **Videos section** (new): `.videos-grid` — 3-column grid of placeholder cards with play icon. `.video-placeholder` — 16:9 aspect ratio, light gray bg
12. **Contact section** (new): `.contact-section` — centered layout with contact details and CTA button
13. Footer — light theme, border-top with light border
14. Scroll reveal (keep existing `.reveal` / `.revealed` classes)
15. Responsive breakpoints: 1024px, 768px, 480px

**Delete all of these (not needed on music branch):**
- Hero section styles (`.hero`, `.hero-content`, `.hero-text`, `.hero-badge`, `.hero-heading`, `.hero-visual`, `.floating-card`, etc.)
- Stats strip (`.stats-strip`, `.stats-grid`, `.stat-item`)
- Skills grid (`.skill-card`)
- Project cards (`.project-card`, `.project-thumb`, `.project-body`, `.project-tags`, `.tag`)
- Projects page styles (`.projects-hero`, `.filter-bar`, `.filter-btn`, `.projects-full-grid`)
- About page styles (`.about-hero`, `.about-grid`, `.about-avatar`, `.about-chip`, `.tech-grid`, `.tech-badge`, `.timeline`, `.timeline-item`, `.values-grid`, `.value-card`)
- CTA section (`.cta-section`, `.cta-box`)
- Pulse/fadeIn keyframe animations

**Step 1: Write the complete new `css/styles.css`**

Replace the entire file. The new CSS should be ~400-500 lines covering all sections listed above.

**Step 2: Verify — start dev server and check page loads**

```bash
# Server should already be configured in .claude/launch.json
```

Use preview tools to verify the CSS loads without errors.

**Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: rewrite CSS for light-theme music site"
```

---

### Task 3: Rewrite `index.html` — single-page music site

**Files:**
- Modify: `index.html` (complete rewrite)

Replace the multi-section software portfolio with a single-page music site. Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- meta charset, viewport, description, title, stylesheet, favicon -->
  <!-- title: "Noam Elisha — Violinist & Teacher" -->
  <!-- description: violin lessons, performing, Berkeley CA -->
</head>
<body>

  <!-- NAVBAR -->
  <!-- "Noam Elisha" logo, anchor links: About, Lessons, Experience, Videos, Contact -->
  <!-- Hamburger for mobile -->

  <!-- MOBILE NAV -->
  <!-- Same anchor links, calls closeMobileNav() -->

  <!-- ABOUT SECTION (id="about") -->
  <!-- Two-column: photo placeholder (left) + bio text (right) -->
  <!-- Bio content: warm intro, teaching philosophy, performing background -->
  <!-- Mention: Sacramento Philharmonic, Aspen Music Festival, UC Berkeley conducting -->

  <!-- LESSONS SECTION (id="lessons") -->
  <!-- Section label: "Lessons" -->
  <!-- Title: "Violin Lessons in Berkeley" -->
  <!-- Subtitle: availability note -->
  <!-- 3 cards: -->
  <!--   1. Beginners — "Starting from scratch? ..." -->
  <!--   2. Intermediate & Advanced — "Ready to push further? ..." -->
  <!--   3. Adult Learners — "It's never too late ..." -->
  <!-- Each card: emoji icon, title, 2-3 sentence description -->

  <!-- EXPERIENCE SECTION (id="experience") -->
  <!-- Section label: "Background" -->
  <!-- Title: "Performance & Education" -->
  <!-- Compact highlight cards (not a timeline): -->
  <!--   - Sacramento Philharmonic — Section Violin -->
  <!--   - Aspen Music Festival — Violin Fellowship -->
  <!--   - UC Berkeley Philharmonia — Conductor & Concertmaster -->
  <!--   - UC Berkeley Symphony — Assistant Conductor -->
  <!--   - Cal Concerto Competition Finalist -->
  <!--   - B.A. Music — UC Berkeley -->

  <!-- VIDEOS SECTION (id="videos") -->
  <!-- Section label: "Watch" -->
  <!-- Title: "Videos" -->
  <!-- Subtitle: "Performance videos coming soon." -->
  <!-- 2-3 placeholder cards with play icon, 16:9 aspect ratio -->

  <!-- CONTACT SECTION (id="contact") -->
  <!-- Section label: "Get in Touch" -->
  <!-- Title: "Book a Lesson" -->
  <!-- Contact info: email (noam.elisha@berkeley.edu), location (Berkeley, CA) -->
  <!-- CTA button: "Send Me a Message" mailto link -->

  <!-- FOOTER -->
  <!-- "Noam Elisha" | copyright year (dynamic via span#year) -->
  <!-- Social links: Email, LinkedIn, Instagram (no GitHub) -->

  <script src="js/main.js"></script>
</body>
</html>
```

**Key content from resume to include:**

About section bio:
- Violinist and conductor based in Berkeley, CA
- Performs with the Sacramento Philharmonic
- Aspen Music Festival fellowship recipient
- Former conductor and concertmaster of UC Berkeley orchestras
- B.A. Music from UC Berkeley
- Teaching philosophy: patient, structured, adapts to each student

**Step 1: Write the complete new `index.html`**

Replace entire file with the single-page structure above.

**Step 2: Verify — preview the page**

Check that all sections render, nav links scroll to correct anchors, mobile nav works.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: rewrite index.html as single-page music site"
```

---

### Task 4: Simplify `js/main.js`

**Files:**
- Modify: `js/main.js`

Keep only what's needed for the music site:
1. Dynamic copyright year (`#year`)
2. Navbar scroll effect (`#navbar` → `.scrolled` class)
3. Mobile nav toggle (`#hamburger` + `#mobileNav`)
4. `closeMobileNav()` function
5. Scroll reveal (IntersectionObserver for `.reveal` elements)
6. Smooth scroll for anchor links (close mobile nav on click)

**Remove:**
- Animated counters (`animateCounter`, `counterObserver`, `[data-count]`)
- Project filter (`filterBtns`, `projectCards`)

**Add:**
- Active nav link highlighting on scroll (optional — highlights which section is in view)

**Step 1: Write the simplified `js/main.js`**

```javascript
/* =============================================
   NOAM ELISHA — Music Site JavaScript
   ============================================= */

// ── Dynamic copyright year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const isOpen = mobileNav.classList.contains('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

function closeMobileNav() {
  if (mobileNav) {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    const spans = hamburger ? hamburger.querySelectorAll('span') : [];
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
}

// ── Scroll Reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
```

**Step 2: Verify — check console for errors**

**Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: simplify JS for single-page music site"
```

---

### Task 5: Delete unused files

**Files:**
- Delete: `about.html`
- Delete: `projects.html`

**Step 1: Remove files**

```bash
git rm about.html projects.html
```

**Step 2: Commit**

```bash
git commit -m "chore: remove about.html and projects.html (single-page site)"
```

---

### Task 6: Visual verification and polish

**Step 1: Desktop verification**

Use preview tools to check all sections on desktop:
- Navbar renders, scrolls correctly, anchor links work
- About section: two-column layout, photo placeholder visible, bio text readable
- Lessons section: 3 cards side by side
- Experience section: highlight cards display correctly
- Videos section: placeholder cards with correct aspect ratio
- Contact section: email link works, CTA button visible
- Footer: copyright year shows, social links present

**Step 2: Mobile verification**

Resize to mobile (375px):
- Hamburger menu appears
- All sections stack vertically
- Lesson cards stack to single column
- Text is readable, no horizontal overflow

**Step 3: Fix any issues found**

Edit CSS/HTML as needed based on verification.

**Step 4: Final commit if any fixes were made**

```bash
git add -A
git commit -m "fix: polish music site layout and responsive issues"
```

---

### Task 7: Push branch

**Step 1: Push the music branch**

```bash
git push -u origin music
```

Expected: Branch pushed to remote, ready for GitHub Pages swap when desired.
