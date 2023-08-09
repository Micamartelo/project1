const mobileMenu = document.querySelector('.mobileMenu');
const navList = document.querySelector('.navList');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});