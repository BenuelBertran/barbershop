var user_link = document.querySelector(".js-user__link");
var modal_user = document.querySelector(".js-modal-user");
var modal_form = modal_user.querySelector(".js-modal-user__form");
var login_field = modal_user.querySelector(".js-modal-user__login");
var password_field = modal_user.querySelector(".js-modal-user__password");
var login_storage = localStorage.getItem("login_field");
var user_close = modal_user.querySelector(".js-modal__close");

user_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (modal_user.classList.contains("js-modal-invalid")) {
        modal_user.classList.remove("js-modal-invalid");
    }
    modal_user.classList.add("js-modal-show");
    if (login_storage) {
        password_field.focus();
    } else {
        login_field.focus();    
    }
});

modal_form.addEventListener("submit", function(evt) {
    if (!login_field.value || !password_field.value) {
        evt.preventDefault();
        modal_user.classList.add("js-modal-invalid");
    } else {
        localStorage.setItem("login_field", login_storage.value);
    }
});

user_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_user.classList.remove("js-modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal_user.classList.contains("js-modal-show")) {
            modal_user.classList.remove("js-modal-show");
        }
    }
});
