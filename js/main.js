/* =============================================
   NOAM ELISHA — Main JavaScript
   ============================================= */

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Mobile nav ────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const isOpen = mobileNav.classList.contains('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    // Animate hamburger lines
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

// ── Scroll Reveal ─────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Animated counters ─────────────────────────
function animateCounter(el, target, duration = 1400) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (target === 100 ? '%' : '+');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (target === 100 ? '%' : '+');
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ── Project filter (projects page) ───────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('#projectsGrid .project-card');

if (filterBtns.length && projectCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        const show = filter === 'all' || tags.split(' ').includes(filter);
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        if (show) {
          card.style.opacity = '1';
          card.style.transform = '';
          card.style.display = '';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            if (card.style.opacity === '0') card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// ── Smooth page load fade-in ──────────────────
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.4s ease';
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ── Cursor glow effect ────────────────────────
let glowEl = null;

function createGlow() {
  glowEl = document.createElement('div');
  glowEl.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    will-change: transform;
  `;
  document.body.appendChild(glowEl);
}

createGlow();

let mouseX = 0, mouseY = 0;
let rafActive = false;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (!rafActive) {
    rafActive = true;
    requestAnimationFrame(updateGlow);
  }
}, { passive: true });

function updateGlow() {
  if (glowEl) {
    glowEl.style.left = mouseX + 'px';
    glowEl.style.top = mouseY + 'px';
  }
  rafActive = false;
}

document.addEventListener('mouseleave', () => {
  if (glowEl) glowEl.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  if (glowEl) glowEl.style.opacity = '1';
});

// ── Stagger skill/value card animations ──────
document.querySelectorAll('.skill-card, .value-card').forEach((card, i) => {
  card.style.transitionDelay = (i % 4) * 0.08 + 's';
});

// ── Typing effect for hero subtitle (optional) ─
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const words = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver', 'Builder'];
  let wordIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let pausing = false;

  function typeWord() {
    if (pausing) return;

    const current = words[wordIdx];

    if (!deleting) {
      heroTitle.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        pausing = true;
        setTimeout(() => { pausing = false; deleting = true; typeWord(); }, 2200);
        return;
      }
    } else {
      heroTitle.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }
    }

    setTimeout(typeWord, deleting ? 50 : 80);
  }

  // Start after initial animation
  setTimeout(typeWord, 1200);
}
