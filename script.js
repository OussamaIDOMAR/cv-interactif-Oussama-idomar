const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  darkToggle.setAttribute('aria-pressed', String(isDark));
  darkToggle.textContent = isDark ? '☀️ Mode clair' : '🌙 Mode sombre';
});

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    accordions.forEach(a => {
      a.setAttribute('aria-expanded', 'false');
      if (a.nextElementSibling) a.nextElementSibling.hidden = true;
    });
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      if (btn.nextElementSibling) btn.nextElementSibling.hidden = false;
    }
  });
});

if (accordions.length > 0) accordions[0].click();


