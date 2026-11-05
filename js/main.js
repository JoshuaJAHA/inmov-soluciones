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

  /* ---------------- Reusable Apple Fluid Carousel Controller ---------------- */
  function setupAppleCarousel({ carouselEl, trackEl, prevBtn, nextBtn, itemCount, autoplayInterval = 5500 }) {
    if (!carouselEl || !trackEl || !itemCount) return;

    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let startTranslate = 0;
    let currentTranslate = 0;
    let lastPos = 0;
    let lastTime = 0;
    let velocity = 0;

    const getVisibleCount = () => {
      if (window.innerWidth >= 1080) return 3;
      if (window.innerWidth >= 680) return 2;
      return 1;
    };

    const getMaxIndex = () => Math.max(0, itemCount - getVisibleCount());

    const getCardWidth = () => {
      const firstCard = trackEl.children[0];
      return firstCard ? firstCard.getBoundingClientRect().width : 0;
    };

    const setPosition = (pos, withTransition = false) => {
      currentTranslate = pos;
      if (withTransition) {
        // Apple spring curve
        trackEl.style.transition = 'transform 0.45s cubic-bezier(0.32, 0.72, 0, 1)';
      } else {
        trackEl.style.transition = 'none';
      }
      trackEl.style.transform = `translateX(${pos}px)`;
    };

    const updateToIndex = (index, withTransition = true) => {
      currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
      const cardWidth = getCardWidth();
      const targetPos = -currentIndex * cardWidth;
      setPosition(targetPos, withTransition);
    };

    const onPointerDown = (e) => {
      if (e.button !== 0) return;
      
      // If clicking directly on a link or inside a link, allow native click without drag capture
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }

      isDragging = true;
      startX = e.clientX;
      currentX = e.clientX;
      lastPos = e.clientX;
      lastTime = performance.now();
      velocity = 0;

      const style = window.getComputedStyle(trackEl);
      const matrix = new DOMMatrixReadOnly(style.transform);
      startTranslate = matrix.m41;
      currentTranslate = startTranslate;
      setPosition(currentTranslate, false);

      carouselEl.classList.add('is-dragging');
      try { carouselEl.setPointerCapture(e.pointerId); } catch (_) {}
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      currentX = e.clientX;
      const deltaX = currentX - startX;
      const cardWidth = getCardWidth();
      const minTranslate = -getMaxIndex() * cardWidth;
      const maxTranslate = 0;

      let newTranslate = startTranslate + deltaX;

      // Apple rubber-banding past bounds
      if (newTranslate > maxTranslate) {
        const overscroll = newTranslate - maxTranslate;
        newTranslate = maxTranslate + overscroll * 0.32;
      } else if (newTranslate < minTranslate) {
        const overscroll = minTranslate - newTranslate;
        newTranslate = minTranslate - overscroll * 0.32;
      }

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
      carouselEl.classList.remove('is-dragging');
      try { carouselEl.releasePointerCapture(e.pointerId); } catch (_) {}

      const cardWidth = getCardWidth();
      if (!cardWidth) return;

      const deltaX = currentX - startX;

      if (Math.abs(velocity) > 0.35) {
        if (velocity < 0) {
          currentIndex = Math.min(currentIndex + 1, getMaxIndex());
        } else {
          currentIndex = Math.max(currentIndex - 1, 0);
        }
      } else if (Math.abs(deltaX) > cardWidth * 0.25) {
        if (deltaX < 0) {
          currentIndex = Math.min(currentIndex + 1, getMaxIndex());
        } else {
          currentIndex = Math.max(currentIndex - 1, 0);
        }
      }

      updateToIndex(currentIndex, true);
    };

    carouselEl.addEventListener('pointerdown', onPointerDown);
    carouselEl.addEventListener('pointermove', onPointerMove);
    carouselEl.addEventListener('pointerup', onPointerUp);
    carouselEl.addEventListener('pointercancel', onPointerUp);

    nextBtn?.addEventListener('click', () => {
      currentIndex = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1;
      updateToIndex(currentIndex, true);
    });

    prevBtn?.addEventListener('click', () => {
      currentIndex = currentIndex <= 0 ? getMaxIndex() : currentIndex - 1;
      updateToIndex(currentIndex, true);
    });

    window.addEventListener('resize', () => {
      updateToIndex(currentIndex, false);
    });

    // Gentle Auto-play
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let autoplayTimer = null;

    const startAutoplay = () => {
      if (prefersReducedMotion || !autoplayInterval) return;
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        if (!isDragging) {
          currentIndex = currentIndex >= getMaxIndex() ? 0 : currentIndex + 1;
          updateToIndex(currentIndex, true);
        }
      }, autoplayInterval);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    carouselEl.addEventListener('mouseenter', stopAutoplay);
    carouselEl.addEventListener('mouseleave', startAutoplay);
    carouselEl.addEventListener('pointerdown', stopAutoplay);

    startAutoplay();
  }

  /* ---------------- Facebook Posts Carousel Render & Setup ---------------- */
  const fbTrack = document.querySelector('.fb-track');
  const fbCarousel = document.getElementById('fb-carousel');

  if (fbTrack && typeof PUBLICACIONES_FACEBOOK !== 'undefined' && PUBLICACIONES_FACEBOOK.length) {
    fbTrack.innerHTML = PUBLICACIONES_FACEBOOK.map(p => `
      <div class="fb-card">
        <article class="fb-inner">
          <div class="fb-media">
            <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" />
            <span class="fb-badge">${p.tag}</span>
          </div>
          <div class="fb-content">
            <div class="fb-meta-header">
              <span class="fb-channel">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </span>
              <span>${p.fecha}</span>
            </div>
            <h4>${p.titulo}</h4>
            <p>${p.texto}</p>
            <div class="fb-footer">
              <div class="fb-engagement">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                  ${p.likes}
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  ${p.comentarios}
                </span>
              </div>
              <a href="${p.link}" target="_blank" rel="noopener" class="fb-link">
                Ver post
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    `).join('');

    setupAppleCarousel({
      carouselEl: fbCarousel,
      trackEl: fbTrack,
      prevBtn: document.querySelector('.fb-prev'),
      nextBtn: document.querySelector('.fb-next'),
      itemCount: PUBLICACIONES_FACEBOOK.length,
      autoplayInterval: 6000
    });
  }

  /* ---------------- Apple Fluid Testimonials Carousel ---------------- */
  const opinCarousel = document.getElementById('opiniones-carousel');
  const opinTrack = opinCarousel?.querySelector('.carousel-track');

  if (opinTrack && typeof TESTIMONIOS !== 'undefined') {
    opinTrack.innerHTML = TESTIMONIOS.map(t => `
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

    setupAppleCarousel({
      carouselEl: opinCarousel,
      trackEl: opinTrack,
      prevBtn: document.querySelector('.carousel-prev:not(.fb-prev)'),
      nextBtn: document.querySelector('.carousel-next:not(.fb-next)'),
      itemCount: TESTIMONIOS.length,
      autoplayInterval: 5500
    });
  }

  /* ---------------- Filter Chips active state toggle on Propiedades.html ---------------- */
  const filterChips = document.querySelectorAll('.filter-chip');
  const catalogoCards = document.querySelectorAll('#catalogo-grid .property-apple-card');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => {
        c.style.borderColor = '';
        c.style.color = '';
        c.style.backgroundColor = '';
      });
      chip.style.borderColor = 'var(--orange)';
      chip.style.color = 'var(--orange)';
      chip.style.backgroundColor = 'var(--orange-subtle)';

      const filterText = chip.textContent.trim().toLowerCase();
      catalogoCards.forEach(card => {
        const categories = (card.dataset.category || '').toLowerCase().split(' ');
        if (filterText === 'todas') {
          card.style.display = 'flex';
        } else if (filterText === 'departamentos' && (categories.includes('departamentos') || categories.includes('departamento'))) {
          card.style.display = 'flex';
        } else if (filterText === 'terrenos' && (categories.includes('terrenos') || categories.includes('terreno'))) {
          card.style.display = 'flex';
        } else if (categories.includes(filterText) || (card.dataset.category || '').toLowerCase().includes(filterText)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ---------------- Apple Fluid Service Detail Modal (Liquid Glass Sheet) ---------------- */
  const serviceCards = document.querySelectorAll('.servicio-card[data-service-id]');
  const serviceModal = document.getElementById('service-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');

  const modalHeroImg = document.getElementById('modal-hero-img');
  const modalEyebrow = document.getElementById('modal-eyebrow');
  const modalTitle = document.getElementById('modal-title');
  const modalLema = document.getElementById('modal-lema');
  const modalIntro = document.getElementById('modal-intro');
  const modalSections = document.getElementById('modal-sections');
  const modalConclusion = document.getElementById('modal-conclusion');
  const modalCtaBtn = document.getElementById('modal-cta-btn');
  const modalCtaText = document.getElementById('modal-cta-text');

  const openServiceModal = (serviceId) => {
    if (typeof DETALLE_SERVICIOS === 'undefined' || !DETALLE_SERVICIOS[serviceId] || !serviceModal) return;
    const data = DETALLE_SERVICIOS[serviceId];

    if (modalHeroImg) {
      modalHeroImg.src = data.imagen;
      modalHeroImg.alt = data.titulo;
    }
    if (modalEyebrow) modalEyebrow.textContent = data.eyebrow;
    if (modalTitle) modalTitle.textContent = data.titulo;
    if (modalLema) modalLema.textContent = data.lema;
    if (modalIntro) modalIntro.textContent = data.intro;

    if (modalSections) {
      modalSections.innerHTML = data.secciones.map(sec => `
        <div class="modal-section-block">
          <div class="modal-section-heading">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            <span>${sec.titulo}</span>
          </div>
          <div class="modal-items-grid">
            ${sec.items.map(it => `
              <div class="modal-item-card">
                <span class="modal-item-bullet">✓</span>
                <div class="modal-item-text">
                  <strong>${it.nombre}</strong>
                  <span>${it.desc}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    if (modalConclusion) modalConclusion.innerHTML = data.conclusion;
    if (modalCtaText) modalCtaText.textContent = data.ctaTexto;
    if (modalCtaBtn) {
      modalCtaBtn.href = `https://wa.me/525635919360?text=${data.ctaWhatsapp}`;
    }

    serviceModal.classList.add('is-active');
    document.body.classList.add('modal-open');
    serviceModal.setAttribute('aria-hidden', 'false');

    // Focus close button for accessibility
    setTimeout(() => {
      modalCloseBtn?.focus();
    }, 100);
  };

  const closeServiceModal = () => {
    if (!serviceModal) return;
    serviceModal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
    serviceModal.setAttribute('aria-hidden', 'true');
  };

  serviceCards.forEach(card => {
    const serviceId = card.dataset.serviceId;
    card.addEventListener('click', () => openServiceModal(serviceId));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openServiceModal(serviceId);
      }
    });
  });

  modalCloseBtn?.addEventListener('click', closeServiceModal);
  modalCancelBtn?.addEventListener('click', closeServiceModal);

  // Close when clicking on backdrop outside the sheet
  serviceModal?.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
      closeServiceModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal?.classList.contains('is-active')) {
      closeServiceModal();
    }
  });

  /* ---------------- Current Year in Footer ---------------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
