var button_map = document.querySelector(".js-modal-map__button");
var modal_map = document.querySelector(".js-modal-map");
var map_close = modal_map.querySelector(".js-modal__close");

button_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.add("js-modal-show");
});

map_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("js-modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal_map.classList.contains("js-modal-show")) {
            modal_map.classList.remove("js-modal-show");
        }
    }
});
