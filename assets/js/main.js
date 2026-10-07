/**
 * ARITRA DAS — EDITORIAL PORTFOLIO INTERACTION ENGINE
 * Fahim Bin Amin inspired craftsmanship: smooth, authentic, fast.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initPublicationFilters();
  initCitationCopy();
  initQuickCopy();
  initContactForm();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE (WARM STONE PAPER <-> EDITORIAL NOIR)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('aritra_theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('aritra_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.className = 'fa-solid fa-moon';
      themeIcon.title = 'Switch to Dark Noir Mode';
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      themeIcon.title = 'Switch to Warm Stone Paper Mode';
    }
  }
}

/* --------------------------------------------------------------------------
   NAVBAR & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll spy
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 220;

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

  // Mobile menu toggle
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

    // Close on link click
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
   PUBLICATION FILTERING
   -------------------------------------------------------------------------- */
function initPublicationFilters() {
  const tabs = document.querySelectorAll('.pub-pill-tab');
  const cards = document.querySelectorAll('.editorial-pub-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const types = (card.getAttribute('data-type') || '').split(' ');
        if (filter === 'all' || types.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   CITATION COPYING & TOAST FEEDBACK
   -------------------------------------------------------------------------- */
function initCitationCopy() {
  const copyBtns = document.querySelectorAll('.copy-citation-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const citationText = btn.getAttribute('data-citation');
      if (citationText) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(citationText).then(() => {
            showToast('BibTeX / IEEE Citation copied to clipboard');
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
      showToast('Citation copied to clipboard');
    } catch (err) {
      showToast('Citation copied');
    }
    document.body.removeChild(textArea);
  }
}

/* --------------------------------------------------------------------------
   QUICK COPY (EMAIL & PHONE)
   -------------------------------------------------------------------------- */
function initQuickCopy() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('aritrad768@gmail.com').then(() => {
        showToast('Email copied: aritrad768@gmail.com');
      });
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('+8801812985691').then(() => {
        showToast('Phone number copied: +880 1812985691');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   GLOBAL TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* --------------------------------------------------------------------------
   CONTACT FORM HANDLING (DIRECT NOTE VIA MAILTO)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const btnSend = document.getElementById('btn-send-message');
  const btnSendText = document.getElementById('btn-send-text');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fromVal = document.getElementById('form-from').value.trim();
      const messageVal = document.getElementById('form-message').value.trim();

      if (!fromVal || !messageVal) return;

      if (btnSend) btnSend.disabled = true;
      if (btnSendText) btnSendText.textContent = 'Preparing email...';

      const emailSubject = `Portfolio Inquiry from ${fromVal}`;
      const emailBody = `From: ${fromVal}\n\nMessage:\n${messageVal}\n\n---\nSent via Aritra Das Portfolio (fahimbinamin-inspired editorial)`;
      const mailtoLink = `mailto:aritrad768@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      if (status) {
        status.innerHTML = `<strong>Note Prepared.</strong> Opening email client to deliver to <code>aritrad768@gmail.com</code>...`;
        status.style.display = 'block';
      }

      showToast('Opening your email composer...');

      setTimeout(() => {
        window.location.href = mailtoLink;
        form.reset();
        if (btnSend) btnSend.disabled = false;
        if (btnSendText) btnSendText.textContent = 'Send Direct Note';
      }, 700);
    });
  }
}
