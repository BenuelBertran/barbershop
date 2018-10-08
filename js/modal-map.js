var button_map = document.querySelector(".button-map");
var modal_map = document.querySelector(".modal-map");
var map_close = modal_map.querySelector(".modal-close");

button_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-show");
});

map_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal_map.classList.contains("modal-show")) {
            modal_map.classList.remove("modal-show");
        }
    }
});
