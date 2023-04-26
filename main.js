const popup = document.querySelector('.popup_wrapper');
const buttonElement = document.querySelector('.button')
buttonElement.addEventListener('click', function (popupOn) {
  popup.classList.toggle('visible');
});