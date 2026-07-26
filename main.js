/* ==========================================================================
   INMOV SOLUCIONES — interactividad
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- abrir el "muro" del hero al cargar ---------- */
  requestAnimationFrame(() => {
    setTimeout(() => document.body.classList.add('is-loaded'), 150);
  });

  /* ---------- header: fondo al hacer scroll ---------- */
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');
  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    if (header) header.classList.toggle('is-scrolled', scrolled);
    if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 700);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- menú móvil ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('is-open');
    primaryNav.classList.toggle('is-open');
  });
  primaryNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('is-open');
      primaryNav.classList.remove('is-open');
    });
  });

  /* ---------- revelado al hacer scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- contador de estadísticas ---------- */
  const statNums = document.querySelectorAll('.stat .num[data-target]');
  const animateCount = (el) => {
    const target = el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const numeric = parseFloat(target);
    if (isNaN(numeric)) { el.textContent = target; return; }
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
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
    }, { threshold: 0.6 });
    statNums.forEach(el => statIo.observe(el));
  }

  /* ---------- carrusel de testimonios ---------- */
  const track = document.querySelector('.carousel-track');
  if (track && typeof TESTIMONIOS !== 'undefined') {
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

    let index = 0;
    const getVisible = () => window.innerWidth >= 1080 ? 3 : window.innerWidth >= 760 ? 2 : 1;
    const getMax = () => Math.max(0, TESTIMONIOS.length - getVisible());

    const update = () => {
      const cardWidth = track.children[0]?.getBoundingClientRect().width || 0;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    };

    document.querySelector('.carousel-next')?.addEventListener('click', () => {
      index = index >= getMax() ? 0 : index + 1;
      update();
    });
    document.querySelector('.carousel-prev')?.addEventListener('click', () => {
      index = index <= 0 ? getMax() : index - 1;
      update();
    });
    window.addEventListener('resize', update);

    /* autoplay suave, se detiene si el usuario prefiere menos movimiento */
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      setInterval(() => {
        index = index >= getMax() ? 0 : index + 1;
        update();
      }, 5500);
    }
  }

  /* ---------- año actual en el footer ---------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});