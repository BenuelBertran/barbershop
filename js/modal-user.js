var user_link = document.querySelector(".user-link");
var modal_user = document.querySelector(".modal-user");
var modal_form = modal_user.querySelector(".modal-form");
var login_field = modal_user.querySelector("[type=text]");
var password_field = modal_user.querySelector("[type=password]");
var login_storage = localStorage.getItem("login_field");
var user_close = modal_user.querySelector(".modal-close");

user_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_user.classList.add("modal-show");
    if (login_storage) {
        password_field.focus();
    } else {
        login_field.focus();    
    }
});

modal_form.addEventListener("submit", function(evt) {
    if (!login_field.value || !password_field.value) {
        evt.preventDefault();
        modal_user.classList.add("modal-invalid");
    } else {
        localStorage.setItem("login_field", login_storage.value);
    }
});

user_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_user.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal_user.classList.contains("modal-show")) {
            modal_user.classList.remove("modal-show");
        }
    }
});
