# Music Site Design

**Date:** 2026-02-27
**Branch:** `music` (swap with `main` on GitHub Pages when ready)

## Overview

Single-page violin teacher / freelance violinist website for Noam Elisha. Replaces the software designer site on the same domain (`noamelisha.com`) via branch swap. Built with the same vanilla HTML/CSS/JS stack.

## Audience

- Parents looking for violin lessons for their kids
- Adult students interested in picking up violin
- Freelance gig inquiries (orchestras, chamber music, events)

## Architecture

Single `index.html` with anchor-link navigation. Reuse existing stack (no frameworks). Delete `about.html` and `projects.html` on this branch.

### Files

| File | Action |
|------|--------|
| `index.html` | Rewrite — single-page music site |
| `css/styles.css` | Rewrite — light theme |
| `js/main.js` | Simplify — navbar scroll, mobile nav, scroll reveal only |
| `about.html` | Delete |
| `projects.html` | Delete |
| `CNAME` | Keep as-is |

## Page Sections (top to bottom)

### Navbar
- "Noam Elisha" text logo (left)
- Anchor links: About, Lessons, Experience, Videos, Contact
- Sticky on scroll, hamburger menu on mobile

### About (opens the page — no hero)
- Two-column layout: photo placeholder (left) + warm bio (right)
- Bio: who Noam is, teaching philosophy, performing background
- Tone: warm, approachable, personal

### Lessons
- 2-3 cards for different student types (e.g., Beginner, Intermediate/Advanced, Adult Learner)
- Each card: icon/emoji, title, short description, what to expect
- Mention location (Berkeley, CA) and availability

### Experience
- Compact highlights from resume, not a full timeline
- Key items: Sacramento Philharmonic, Aspen Music Festival, UC Berkeley conducting roles, Cal Concerto Competition Finalist
- Education: B.A. Music from UC Berkeley

### Videos
- Placeholder section with heading and a message like "Videos coming soon"
- Layout ready for future YouTube/Vimeo embeds (2-3 card grid)

### Contact
- Email, phone (placeholder), location (Berkeley, CA)
- Simple call-to-action for booking a trial lesson

### Footer
- Name, copyright year (dynamic)
- Social links: Email, LinkedIn, Instagram (no GitHub)

## Visual Design

- **Background:** White / off-white (#fafafa or similar)
- **Text:** Near-black (#1a1a1a) primary, gray secondary
- **Accent:** One warm color (to be chosen during implementation — warm gold, terracotta, or deep blue)
- **Font:** Inter (same as current site)
- **Whitespace:** Generous padding between sections
- **Animations:** Subtle scroll reveal only — no glow, no gradients, no glassmorphism
- **Mobile:** Fully responsive, hamburger nav

## Key Decisions

- No hero section — page opens directly with About content
- Single page — keeps it simple and focused
- Light theme — opposite of the dark software site, feels warmer and more inviting
- Vanilla stack — no build tools, easy to maintain
