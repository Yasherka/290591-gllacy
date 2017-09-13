var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.93848058432434,30.327623446101025],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });
};

var link = document.querySelector(".feedback__btn");
var popup = document.querySelector(".modal-feedback");
var shadow = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  shadow.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    shadow.classList.remove("modal-show");
  });
