// static/js/auth.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const selector = btn.dataset.target;
      const input = document.querySelector(selector);
      if (!input) return;
      if (input.type === 'password') {
        input.type = 'text';
        btn.innerText = 'Hide';
      } else {
        input.type = 'password';
        btn.innerText = 'Show';
      }
    });
  });

  // Basic inline validation example on login form (optional)
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      const u = document.getElementById('login-username').value.trim();
      const p = document.getElementById('login-password').value.trim();
      if (!u || !p) {
        e.preventDefault();
        alert('Please fill username and password.');
      }
    });
  }
});
