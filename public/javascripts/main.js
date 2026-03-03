// TWM-2026 - Main JavaScript
console.log('✅ TWM-2026 App iniciada correctamente');

// Activar el nav-link de la página actual
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});