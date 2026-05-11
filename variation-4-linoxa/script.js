/* ============================================
   ZED-AIR V4 — INTERACTIONS & ANIMATIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- NAVBAR SCROLL BEHAVIOR ---- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  };
  navbar.classList.add('transparent');
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- HAMBURGER MENU ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.mob-link, .mob-cta').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ---- HERO SLIDER ---- */
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('#heroDots .dot');
  let heroIndex = 0;
  let heroTimer;

  const goHeroSlide = (idx) => {
    heroSlides[heroIndex].classList.remove('active');
    heroDots[heroIndex].classList.remove('active');
    heroIndex = (idx + heroSlides.length) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
    heroDots[heroIndex].classList.add('active');
  };

  document.getElementById('heroNext').addEventListener('click', () => {
    clearInterval(heroTimer);
    goHeroSlide(heroIndex + 1);
    heroTimer = setInterval(() => goHeroSlide(heroIndex + 1), 4000);
  });
  document.getElementById('heroPrev').addEventListener('click', () => {
    clearInterval(heroTimer);
    goHeroSlide(heroIndex - 1);
    heroTimer = setInterval(() => goHeroSlide(heroIndex + 1), 4000);
  });
  heroDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(heroTimer);
      goHeroSlide(i);
      heroTimer = setInterval(() => goHeroSlide(heroIndex + 1), 4000);
    });
  });
  heroTimer = setInterval(() => goHeroSlide(heroIndex + 1), 4000);

  /* ---- HERO CARD 3D TILT on mouse move ---- */
  const heroCard = document.getElementById('heroCard');
  if (heroCard) {
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / 30;
      const dy = (e.clientY - cy) / 30;
      heroCard.style.transform = `perspective(1000px) rotateY(${-8 + dx * 0.5}deg) rotateX(${4 - dy * 0.5}deg)`;
    });
    document.querySelector('.hero').addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateY(-8deg) rotateX(4deg)';
    });
  }

  /* ---- PROJECTS 3D CAROUSEL ---- */
  const projData = [
    { img: 'rooftop.jpg', label: 'Rooftop AC System' },
    { img: 'commercial-install.jpg', label: 'Industrial HVAC Install' },
    { img: 'commercial2.jpg', label: 'Multi-Unit AC System' }
  ];
  let projIndex = 0;
  const projCards = document.querySelectorAll('.proj-card');
  const projLabel = document.getElementById('projLabel');
  const projCurrent = document.getElementById('projCurrent');

  const updateCarousel = () => {
    const prevIdx = (projIndex - 1 + projData.length) % projData.length;
    const nextIdx = (projIndex + 1) % projData.length;

    projCards.forEach(c => {
      c.classList.remove('proj-active', 'proj-prev', 'proj-next');
    });

    const activeCard = document.querySelector('.proj-card[data-index="' + projIndex + '"]');
    const prevCard = document.querySelector('.proj-card[data-index="' + prevIdx + '"]');
    const nextCard = document.querySelector('.proj-card[data-index="' + nextIdx + '"]');

    if (activeCard) { activeCard.classList.add('proj-active'); activeCard.querySelector('img').src = projData[projIndex].img; }
    if (prevCard) { prevCard.classList.add('proj-prev'); prevCard.querySelector('img').src = projData[prevIdx].img; }
    if (nextCard) { nextCard.classList.add('proj-next'); nextCard.querySelector('img').src = projData[nextIdx].img; }

    projLabel.textContent = projData[projIndex].label;
    projCurrent.textContent = String(projIndex + 1).padStart(2, '0');
  };

  document.getElementById('projNext').addEventListener('click', () => {
    projIndex = (projIndex + 1) % projData.length;
    updateCarousel();
  });
  document.getElementById('projPrev').addEventListener('click', () => {
    projIndex = (projIndex - 1 + projData.length) % projData.length;
    updateCarousel();
  });

  // Click side cards to navigate
  projCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index);
      if (card.classList.contains('proj-prev') || card.classList.contains('proj-next')) {
        projIndex = idx;
        updateCarousel();
      }
    });
  });

  /* ---- TESTIMONIALS SLIDER ---- */
  const testSlides = document.querySelectorAll('.testimonial-slide');
  const testDots = document.querySelectorAll('.tdot');
  let testIndex = 0;
  let testTimer;

  const goTestSlide = (idx) => {
    testSlides[testIndex].classList.remove('active');
    testDots[testIndex].classList.remove('active');
    testIndex = (idx + testSlides.length) % testSlides.length;
    testSlides[testIndex].classList.add('active');
    testDots[testIndex].classList.add('active');
  };

  document.getElementById('testNext').addEventListener('click', () => {
    clearInterval(testTimer);
    goTestSlide(testIndex + 1);
    testTimer = setInterval(() => goTestSlide(testIndex + 1), 5000);
  });
  document.getElementById('testPrev').addEventListener('click', () => {
    clearInterval(testTimer);
    goTestSlide(testIndex - 1);
    testTimer = setInterval(() => goTestSlide(testIndex + 1), 5000);
  });
  testDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(testTimer);
      goTestSlide(i);
      testTimer = setInterval(() => goTestSlide(testIndex + 1), 5000);
    });
  });
  testTimer = setInterval(() => goTestSlide(testIndex + 1), 5000);

  /* ---- FAQ ACCORDION ---- */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });

  /* ---- LIGHTBOX ---- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  // Open lightbox on project card click (active card)
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('proj-active')) return;
      const img = card.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = projData[projIndex].label;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Open lightbox on split card images
  document.querySelectorAll('.split-img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ---- SCROLL REVEAL ANIMATIONS ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  // Add reveal classes to elements
  const revealSelectors = [
    '.stats-left', '.stats-right',
    '.split-left', '.split-right',
    '.about-feature-img', '.about-feature-content',
    '.svc-card', '.services-cards-header',
    '.projects-headline', '.proj-carousel-wrap',
    '.testimonials-header', '.testimonial-card',
    '.faq-left', '.faq-item',
    '.footer-col-cta', '.footer-col-nav', '.footer-col-about', '.footer-col-contact'
  ];

  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 0.08}s`;
      revealObserver.observe(el);
    });
  });

  // Left/right reveals
  document.querySelectorAll('.about-feature-img').forEach(el => {
    el.classList.remove('reveal');
    el.classList.add('reveal-left');
    revealObserver.observe(el);
  });
  document.querySelectorAll('.about-feature-content').forEach(el => {
    el.classList.remove('reveal');
    el.classList.add('reveal-right');
    revealObserver.observe(el);
  });

  /* ---- ACTIVE NAV LINK on scroll ---- */
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObserver.observe(s));

  /* ---- SMOOTH ANCHOR SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
