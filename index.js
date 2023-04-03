const ourMenuBtn = document.getElementById('ourMenuBtn');
const chevron = document.getElementById('chevron');

function menuBtnFunc() {
  ourMenuBtn.classList.toggle('active-button');
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
  chevron.classList.toggle('opened');
}

ourMenuBtn.addEventListener('click', menuBtnFunc);
