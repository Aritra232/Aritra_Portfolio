/**
 * ARITRA DAS - PORTFOLIO INTERACTION ENGINE
 * Handles Canvas Particles, Theme Toggle, Smooth Scroll, 
 * Filtering, Citation Copying, and Counters
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initTypewriter();
  initNeuralCanvas();
  initCounters();
  initPublicationFilters();
  initProjectFilters();
  initCitationCopy();
  initContactForm();
  initBackToTop();
  initQuickCopy();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE (DARK / LIGHT MODE)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.className = 'fa-solid fa-moon';
      themeIcon.title = 'Switch to Dark Mode';
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      themeIcon.title = 'Switch to Light Mode';
    }
  }
}

/* --------------------------------------------------------------------------
   NAVBAR & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Spy
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinkItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('open')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Close menu on link click
    navLinkItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   DYNAMIC TYPEWRITER EFFECT
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const typedRoleElement = document.getElementById('typed-role');
  if (!typedRoleElement) return;

  const roles = [
    'AI Developer',
    'Machine Learning Researcher',
    'NLP & Computer Vision Specialist',
    'LLM & RAG Systems Builder',
    'Self-Supervised Learning Enthusiast'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedRoleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedRoleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   NEURAL NETWORK PARTICLES CANVAS (INTERACTIVE BACKGROUND)
   -------------------------------------------------------------------------- */
function initNeuralCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse collision interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const directionX = dx / dist;
          const directionY = dy / dist;
          this.x -= directionX * force * 1.5;
          this.y -= directionY * force * 1.5;
        }
      }
    }

    draw() {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? 'rgba(99, 102, 241, 0.4)' : 'rgba(6, 182, 212, 0.6)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const linkColor = isLight ? 'rgba(99, 102, 241,' : 'rgba(99, 102, 241,';

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = (1 - dist / 130) * (isLight ? 0.2 : 0.35);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `${linkColor} ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Connect to mouse
    if (mouse.x !== null && mouse.y !== null) {
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.45;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   METRIC COUNTERS ANIMATION
   -------------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = counter.getAttribute('data-decimal') === 'true';
          const duration = 1800;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / totalSteps;
            // Ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeProgress * target;

            if (isDecimal) {
              counter.textContent = currentVal.toFixed(2);
            } else {
              counter.textContent = Math.floor(currentVal);
            }

            if (currentStep >= totalSteps) {
              clearInterval(timer);
              if (isDecimal) {
                counter.textContent = target.toFixed(2);
              } else {
                counter.textContent = target;
              }
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

/* --------------------------------------------------------------------------
   PUBLICATION FILTERING
   -------------------------------------------------------------------------- */
function initPublicationFilters() {
  const tabs = document.querySelectorAll('.pub-tab-btn');
  const cards = document.querySelectorAll('.pub-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else if (card.getAttribute('data-type') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   PROJECT FILTERING
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filters = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      projects.forEach(project => {
        const cats = project.getAttribute('data-category').split(' ');
        if (category === 'all' || cats.includes(category)) {
          project.style.display = 'flex';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   BIBTEX / CITATION COPYING & TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function initCitationCopy() {
  const copyBtns = document.querySelectorAll('.copy-citation-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const citationText = btn.getAttribute('data-citation');
      if (citationText) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(citationText).then(() => {
            showToast('Citation copied to clipboard! 📋');
          }).catch(() => {
            fallbackCopy(citationText);
          });
        } else {
          fallbackCopy(citationText);
        }
      }
    });
  });

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Citation copied to clipboard! 📋');
    } catch (err) {
      showToast('Citation copied! 📋');
    }
    document.body.removeChild(textArea);
  }
}

/* Quick Copy for Email & Phone */
function initQuickCopy() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('aritrad768@gmail.com').then(() => {
        showToast('Email address copied! ✉️');
      });
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+8801812985691').then(() => {
        showToast('Phone number copied! 📞');
      });
    });
  }
}

/* Global Toast Notification */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   CONTACT FORM HANDLING (DIRECT MESSAGE BOX)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const btnSend = document.getElementById('btn-send-message');
  const btnSendText = document.getElementById('btn-send-text');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fromVal = document.getElementById('form-from').value.trim();
      const messageVal = document.getElementById('form-message').value.trim();

      if (!fromVal || !messageVal) return;

      // Update button state
      if (btnSend) btnSend.disabled = true;
      if (btnSendText) btnSendText.textContent = 'Sending message...';

      // Construct mailto link
      const emailSubject = `Portfolio Message from ${fromVal}`;
      const emailBody = `From: ${fromVal}\n\nMessage:\n${messageVal}\n\n---\nSent via Aritra Das Portfolio`;
      const mailtoLink = `mailto:aritrad768@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Show success feedback
      if (status) {
        status.className = 'form-status success';
        status.innerHTML = `<strong>Message Prepared!</strong> Opening email client to send directly to <code>aritrad768@gmail.com</code>...`;
        status.style.display = 'block';
      }

      showToast('Opening mail to send to Aritra... 🚀');

      setTimeout(() => {
        window.location.href = mailtoLink;
        form.reset();
        if (btnSend) btnSend.disabled = false;
        if (btnSendText) btnSendText.textContent = "Send to Aritra's Mail";
      }, 800);
    });
  }
}

/* --------------------------------------------------------------------------
   BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
