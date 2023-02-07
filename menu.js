const menu = document.querySelector('menu');
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');

openMenuBtn.addEventListener('click', () => {
  menu.classList.remove('translate-x-full');
  menu.classList.add('translate-x-0');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('translate-x-0');
  menu.classList.add('translate-x-full');
})
