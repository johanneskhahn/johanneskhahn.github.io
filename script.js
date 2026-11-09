const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  links.classList.toggle('open', expanded);
});
links.addEventListener('click', event => {
  if (event.target.closest('a')) {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && links.classList.contains('open')) {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
const navigationLinks = [...links.querySelectorAll('a')];
const sections = navigationLinks.map(link => document.querySelector(link.getAttribute('href')));
let scheduled = false;
function updateCurrentSection() {
  const marker = window.scrollY + 150;
  let current = sections[0];
  for (const section of sections) if (section.offsetTop <= marker) current = section;
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) current = sections.at(-1);
  for (const link of navigationLinks) {
    if (link.getAttribute('href') === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateCurrentSection); }
}, { passive: true });
window.addEventListener('resize', updateCurrentSection);
window.addEventListener('load', updateCurrentSection);
document.querySelector('#year').textContent = new Date().getFullYear();
