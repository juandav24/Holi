// ==========================================
// BANCOFÁCIL
// FUNCIONES DEL LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

const usuario = document.getElementById("usuario");
const password = document.getElementById("password");

const usuarioError = document.getElementById("usuarioError");
const passwordError = document.getElementById("passwordError");

const mostrarPassword = document.getElementById("mostrarPassword");


// ==========================================
// MOSTRAR / OCULTAR CONTRASEÑA
// ==========================================

mostrarPassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        mostrarPassword.textContent = "Ocultar";

        mostrarPassword.setAttribute(
            "aria-label",
            "Ocultar contraseña"
        );

    } else {

        password.type = "password";

        mostrarPassword.textContent = "Mostrar";

        mostrarPassword.setAttribute(
            "aria-label",
            "Mostrar contraseña"
        );

    }

});


// ==========================================
// VALIDACIÓN DEL FORMULARIO
// ==========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Limpiar mensajes anteriores

    usuarioError.textContent = "";
    passwordError.textContent = "";

    usuario.removeAttribute("aria-invalid");
    password.removeAttribute("aria-invalid");


    let formularioValido = true;


    // ==========================================
    // VALIDAR USUARIO
    // ==========================================

    if (usuario.value.trim() === "") {

        usuarioError.textContent =
            "Debes ingresar tu número de usuario.";

        usuario.setAttribute(
            "aria-invalid",
            "true"
        );

        formularioValido = false;

    }


    // ==========================================
    // VALIDAR CONTRASEÑA
    // ==========================================

    if (password.value.trim() === "") {

        passwordError.textContent =
            "Debes ingresar tu contraseña.";

        password.setAttribute(
            "aria-invalid",
            "true"
        );

        formularioValido = false;

    }


    // ==========================================
    // COMPROBAR RESULTADO
    // ==========================================

    if (!formularioValido) {

        if (usuario.value.trim() === "") {

            usuario.focus();

        } else {

            password.focus();

        }

        return;
    }


    // ==========================================
    // ACCESO AL DASHBOARD
    // ==========================================

    window.location.href = "dashboard.html";

});
