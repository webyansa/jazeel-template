/* ============================================
   Jazeel Template — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileToggle = document.getElementById('jz-mobile-toggle');
  const mobileMenu = document.getElementById('jz-mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('svg');
      if (icon) {
        const isOpen = mobileMenu.classList.contains('open');
        icon.innerHTML = isOpen
          ? '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>'
          : '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>';
      }
    });
  }

  // Filter toggle
  const filterToggle = document.getElementById('jz-filter-toggle');
  const expandedFilters = document.getElementById('jz-expanded-filters');
  if (filterToggle && expandedFilters) {
    filterToggle.addEventListener('click', function () {
      expandedFilters.classList.toggle('open');
    });
  }

  // Status pills
  const statusPills = document.querySelectorAll('.jz-status-pill');
  statusPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      statusPills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
    });
  });

  // FAQ accordion
  const faqItems = document.querySelectorAll('.jz-faq-item');
  faqItems.forEach(function (item) {
    const trigger = item.querySelector('.jz-faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', function () {
        const wasOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(function (i) { i.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
    }
  });
});
