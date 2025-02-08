// Basic interactive functionality
document.addEventListener('DOMContentLoaded', () => {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  // Sewa contribution form handling
  document.getElementById('sewaForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('ਸੇਵਾ ਦਾਨ ਲਈ ਧੰਨਵਾਦ! (Thank you for Sewa contribution!)');
  });
});