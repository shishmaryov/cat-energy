var menuBurger = document.querySelector(".page-header__toggle");
var openMenu = document.querySelector(".page-header__nav");
var closeMenu = document.querySelector(".page-header__toggle");

if (openMenu.classList.contains("page-header__nav--open")) {
  openMenu.classList.remove("page-header__nav--open");
}

if (menuBurger.classList.contains("burger-button")) {
  menuBurger.classList.remove("visually-hidden");
}

menuBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  openMenu.classList.toggle("page-header__nav--open");
  closeMenu.classList.toggle("burger-button--close");
});

// Закрытие меню по клавише ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (openMenu.classList.contains("page-header__nav--open")) {
      openMenu.classList.remove("page-header__nav--open");
    }
    if (closeMenu.classList.contains("burger-button--close")) {
      closeMenu.classList.remove("burger-button--close");
    }
  }
});


// Появление окна после нажатия кнопки ЗАКАЗАТЬ


var modalOpen = document.querySelector(".modal");
var items = document.querySelectorAll(".order-js");

for (var i = 0; i < items.length; i++) {
//  items[i].onclick = function (evt) {
    items[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalOpen.classList.toggle("modal__show");
  });
}

var modalClose = modalOpen.querySelector(".modal__close");

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOpen.classList.remove("modal__show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalOpen.classList.contains("modal__show")) {
      modalOpen.classList.remove("modal__show");
    }
  }
});
