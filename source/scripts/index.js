/* в этот файл добавляет скрипты*/
const Nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

Nav.classList.remove('navigation--nojs');

Nav.classList.add('navigation--closed');

navToggle.addEventListener('click', () => {
  if (Nav.classList.contains('navigation--closed')) {
    Nav.classList.remove('navigation--closed');
    Nav.classList.add('navigation--opened');
  } else {
    Nav.classList.add('navigation--closed');
    Nav.classList.remove('navigation--opened');
  }
});
