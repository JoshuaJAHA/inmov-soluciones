/* ==========================================================================
   INMOV SOLUCIONES — Apple Fluid Interactions & Physics
   Principles from Emil Kowalski's apple-design skill:
   - Instant response (kill latency)
   - Direct manipulation (1:1 pointer tracking)
   - Interruptibility & velocity handoff into spring settling
   - Rubber-banding soft boundaries
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Header scroll blur & Back to top ---------------- */
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');

  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    if (header) header.classList.toggle('is-scrolled', scrolled);
    if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 500);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------- Mobile Navigation (Apple Sheet Animation) ---------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  navToggle?.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('is-open');
    primaryNav?.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  primaryNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('is-open');
      primaryNav?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on click outside
  document.addEventListener('click', (e) => {
    if (primaryNav?.classList.contains('is-open')) {
      if (!primaryNav.contains(e.target) && !navToggle?.contains(e.target)) {
        navToggle.classList.remove('is-open');
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  /* ---------------- Reveal on Scroll (Apple Spring Motion) ---------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------------- Keynote Stat Numbers Counter ---------------- */
  const statNums = document.querySelectorAll('.stat .num[data-target]');
  const animateCount = (el) => {
    const target = el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const numeric = parseFloat(target);
    if (isNaN(numeric)) { el.textContent = target; return; }

    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Apple ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(numeric * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window && statNums.length) {
    const statIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statNums.forEach(el => statIo.observe(el));
  }

  /* ---------------- Apple Fluid Testimonials Carousel ---------------- */
  const carousel = document.querySelector('.carousel');
  const track = document.querySelector('.carousel-track');

  if (track && typeof TESTIMONIOS !== 'undefined') {
    // Populate cards
    track.innerHTML = TESTIMONIOS.map(t => `
      <div class="testimonio-card">
        <div class="testimonio-inner">
          <div class="stars" aria-label="5 de 5 estrellas">★★★★★</div>
          <p class="quote">“${t.texto}”</p>
          <div class="testimonio-meta">
            <span>${t.nombre}</span>
            <span>${t.fecha}</span>
          </div>
        </div>
      </div>
    `).join('');

    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let startTranslate = 0;
    let currentTranslate = 0;
    let animationId = null;
    let lastPos = 0;
    let lastTime = 0;
    let velocity = 0;

    const getVisibleCount = () => {
      if (window.innerWidth >= 1080) return 3;
      if (window.innerWidth >= 760) return 2;
      return 1;
    };

    const getMaxIndex = () => Math.max(0, TESTIMONIOS.length - getVisibleCount());

    const getCardWidth = () => {
      const firstCard = track.children[0];
      return firstCard ? firstCard.getBoundingClientRect().width : 0;
    };

    const setPosition = (pos, withTransition = false) => {
      currentTranslate = pos;
      if (withTransition) {
        // Apple spring curve
        track.style.transition = 'transform 0.45s cubic-bezier(0.32, 0.72, 0, 1)';
      } else {
        track.style.transition = 'none';
      }
      track.style.transform = `translateX(${pos}px)`;
    };

    const updateToIndex = (index, withTransition = true) => {
      currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
      const cardWidth = getCardWidth();
      const targetPos = -currentIndex * cardWidth;
      setPosition(targetPos, withTransition);
    };

    /* ---------- Pointer Events (1:1 Direct Manipulation + Velocity) ---------- */
    const onPointerDown = (e) => {
      if (e.button !== 0) return; // Only main button
      isDragging = true;
      startX = e.clientX;
      currentX = e.clientX;
      lastPos = e.clientX;
      lastTime = performance.now();
      velocity = 0;

      // Interruptibility: capture current presentation value
      const style = window.getComputedStyle(track);
      const matrix = new DOMMatrixReadOnly(style.transform);
      startTranslate = matrix.m41;
      currentTranslate = startTranslate;
      setPosition(currentTranslate, false);

      carousel.classList.add('is-dragging');
      carousel.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      currentX = e.clientX;
      const deltaX = currentX - startX;
      const cardWidth = getCardWidth();
      const minTranslate = -getMaxIndex() * cardWidth;
      const maxTranslate = 0;

      let newTranslate = startTranslate + deltaX;

      // Apple Rubber-banding: soft boundaries when dragged past edges
      if (newTranslate > maxTranslate) {
        const overscroll = newTranslate - maxTranslate;
        newTranslate = maxTranslate + overscroll * 0.32;
      } else if (newTranslate < minTranslate) {
        const overscroll = minTranslate - newTranslate;
        newTranslate = minTranslate - overscroll * 0.32;
      }

      // Calculate instantaneous velocity (px/ms)
      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 10) {
        velocity = (e.clientX - lastPos) / dt;
        lastPos = e.clientX;
        lastTime = now;
      }

      setPosition(newTranslate, false);
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove('is-dragging');

      try {
        carousel.releasePointerCapture(e.pointerId);
      } catch (err) {}

      const cardWidth = getCardWidth();
      if (!cardWidth) return;

      const deltaX = currentX - startX;

      // Momentum projection: if flicked quickly, advance slide based on velocity
      if (Math.abs(velocity) > 0.35) {
        if (velocity < 0) {
          currentIndex = Math.min(currentIndex + 1, getMaxIndex());
        } else {
          currentIndex = Math.max(currentIndex - 1, 0);
        }
      } else if (Math.abs(deltaX) > cardWidth * 0.25) {
        // Dragged past 25% of card width
        if (deltaX < 0) {
          currentIndex = Math.min(currentIndex + 1, getMaxIndex());
        } else {
          currentIndex = Math.max(currentIndex - 1, 0);
        }
      }

      updateToIndex(currentIndex, true);
    };

    carousel.addEventListener('pointerdown', onPointerDown);
    carousel.addEventListener('pointermove', onPointerMove);
    carousel.addEventListener('pointerup', onPointerUp);
    carousel.addEventListener('pointercancel', onPointerUp);

    // Controls
    document.querySelector('.carousel-next')?.addEventListener('click', () => {
      currentIndex = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1;
      updateToIndex(currentIndex, true);
    });

    document.querySelector('.carousel-prev')?.addEventListener('click', () => {
      currentIndex = currentIndex <= 0 ? getMaxIndex() : currentIndex - 1;
      updateToIndex(currentIndex, true);
    });

    window.addEventListener('resize', () => {
      updateToIndex(currentIndex, false);
    });

    // Gentle Auto-play (paused during user interaction & respecting reduced-motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let autoplayTimer = null;

    const startAutoplay = () => {
      if (prefersReducedMotion) return;
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        if (!isDragging) {
          currentIndex = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1;
          updateToIndex(currentIndex, true);
        }
      }, 5500);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('pointerdown', stopAutoplay);

    startAutoplay();
  }

  /* ---------------- Filter Chips active state toggle on Propiedades.html ---------------- */
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.style.borderColor = '');
      chip.style.borderColor = 'var(--orange)';
      chip.style.color = 'var(--orange)';
      chip.style.backgroundColor = 'var(--orange-subtle)';
    });
  });

  /* ---------------- Current Year in Footer ---------------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
