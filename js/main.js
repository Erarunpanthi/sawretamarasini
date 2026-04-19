/* ============================================================
   MAIN.JS — General Functionality
   Portfolio: Law Student
   ============================================================ */

'use strict';

/* ── Utility: Debounce ──────────────────────────────────── */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/* ── Utility: Query Helpers ─────────────────────────────── */
const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];

/* ============================================================
   1. MOBILE NAVIGATION
   ============================================================ */
function initNavigation() {
  const hamburger = $('#nav-hamburger');
  const navMenu   = $('#nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.classList.toggle('active', isOpen);
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      hamburger.classList.remove('active');
    }
  });

  // Toggle dropdown on mobile
  $$('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');
    if (!dropdown) return;

    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   2. SCROLL TO TOP BUTTON
   ============================================================ */
function initScrollTop() {
  const btn = $('#scroll-top');
  if (!btn) return;

  const toggleVisibility = () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', debounce(toggleVisibility, 50));
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   3. INTERSECTION OBSERVER — Fade-in animations
   ============================================================ */
function initFadeIn() {
  const elements = $$('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   4. SKILL BARS ANIMATION
   ============================================================ */
function initSkillBars() {
  const skillFills = $$('.skill-fill');
  if (!skillFills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const target = fill.getAttribute('data-width') || '0';
        fill.style.width = target + '%';
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(fill => observer.observe(fill));
}

/* ============================================================
   5. COUNTER ANIMATION (Stats)
   ============================================================ */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target + (el.getAttribute('data-suffix') || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (el.getAttribute('data-suffix') || '');
    }
  }, 16);
}

function initCounters() {
  const counters = $$('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* ============================================================
   6. NOTICE TICKER — pause on hover
   ============================================================ */
function initTicker() {
  const ticker = $('.notice-ticker');
  if (!ticker) return;

  ticker.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });
  ticker.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });
}

/* ============================================================
   7. FILTER TABS (Projects / Articles pages)
   ============================================================ */
function initFilterTabs() {
  const tabs    = $$('.filter-tab');
  const items   = $$('[data-category]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        const show = filter === 'all' || cat === filter || (cat && cat.includes(filter));
        item.style.display = show ? '' : 'none';
        if (show) {
          // Re-trigger fade animation
          item.classList.remove('visible');
          requestAnimationFrame(() => item.classList.add('visible'));
        }
      });
    });
  });
}

/* ============================================================
   8. CONTACT FORM SUBMISSION
   ============================================================ */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;

    requiredFields.forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        field.style.borderColor = '#8b0000';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    // Email validation
    const emailField = form.querySelector('#contact-email');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.style.borderColor = '#8b0000';
      valid = false;
    }

    if (!valid) return;

    // Simulate submission
    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      form.style.display = 'none';
      const success = $('#form-success');
      if (success) success.style.display = 'block';
    }, 1800);
  });

  // Live validation reset
  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = '';
    });
  });
}

/* ============================================================
   9. STICKY NAV — add shadow on scroll
   ============================================================ */
function initStickyNav() {
  const nav = $('.main-nav');
  if (!nav) return;

  window.addEventListener('scroll', debounce(() => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(0,0,0,0.35)'
      : '0 3px 12px rgba(0,0,0,0.25)';
  }, 30));
}

/* ============================================================
   10. LIVE DATE in Top Bar
   ============================================================ */
function initLiveDate() {
  const el = $('#live-date');
  if (!el) return;

  const lang = localStorage.getItem('portfolio-lang') || 'en';

  const updateDate = () => {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const locale  = (localStorage.getItem('portfolio-lang') === 'ne') ? 'ne-NP' : 'en-US';
    el.textContent = now.toLocaleDateString(locale, options);
  };

  updateDate();
  setInterval(updateDate, 60000); // Update every minute

  // Re-update on language change
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setTimeout(updateDate, 50));
  });
}

/* ============================================================
   11. CV DOWNLOAD (placeholder)
   ============================================================ */
function initCVDownload() {
  $$('.btn-download-cv').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('CV download will be available soon. Please contact via the form.');
    });
  });
}

/* ============================================================
   12. EXTERNAL LINKS — open in new tab
   ============================================================ */
function initExternalLinks() {
  $$('a[href^="http"]').forEach(link => {
    if (!link.hostname || link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

/* ============================================================
   13. SMOOTH INTERNAL ANCHOR SCROLLING
   ============================================================ */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = $(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70; // Nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ============================================================
   INIT — Run all on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollTop();
  initFadeIn();
  initSkillBars();
  initCounters();
  initTicker();
  initFilterTabs();
  initContactForm();
  initStickyNav();
  initLiveDate();
  initCVDownload();
  initExternalLinks();
  initSmoothScroll();

  // Re-run fade-in after language switch
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(initFadeIn, 100);
    });
  });
});
