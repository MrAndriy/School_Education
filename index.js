//change navbar styles on scroll
window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 100);
});

//show/hide faq answer

const fags = document.querySelectorAll('.fag');

fags.forEach((fag) =>
  fag.addEventListener('click', () => {
    fag.classList.toggle('open');

    //change icon
    const icon = fag.querySelector('.fag__icons i');
    if (icon.className === 'bi bi-plus') {
      icon.className = 'bi bi-dash';
    } else {
      icon.className = 'bi bi-plus';
    }
  })
);

//show burger menu
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
});

//close nav menu
const closeNav = () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
};

closeBtn.addEventListener('click', closeNav);

