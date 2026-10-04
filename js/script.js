// ==========================================
// BANCOSEGURO
// FUNCIONES DEL LOGIN
// ==========================================


// ==========================================
// ELEMENTOS
// ==========================================

const loginForm =
    document.getElementById("loginForm");

const usuario =
    document.getElementById("usuario");

const password =
    document.getElementById("password");

const usuarioError =
    document.getElementById("usuarioError");

const passwordError =
    document.getElementById("passwordError");

const mostrarPassword =
    document.getElementById("mostrarPassword");

const loginDarkMode =
    document.getElementById("loginDarkMode");


// ==========================================
// MODO OSCURO
// ==========================================

function actualizarModoOscuroLogin() {

    const modo =
        localStorage.getItem("modoOscuro");


    if (modo === "activado") {

        document.body.classList.add(
            "dark-mode"
        );


        if (loginDarkMode) {

            loginDarkMode.textContent =
                "☀ Modo claro";

        }

    } else {

        document.body.classList.remove(
            "dark-mode"
        );


        if (loginDarkMode) {

            loginDarkMode.textContent =
                "◐ Modo oscuro";

        }

    }

}


if (loginDarkMode) {

    loginDarkMode.addEventListener(
        "click",
        function () {

            const oscuro =
                document.body.classList.contains(
                    "dark-mode"
                );


            if (oscuro) {

                document.body.classList.remove(
                    "dark-mode"
                );

                localStorage.setItem(
                    "modoOscuro",
                    "desactivado"
                );

                loginDarkMode.textContent =
                    "◐ Modo oscuro";

            } else {

                document.body.classList.add(
                    "dark-mode"
                );

                localStorage.setItem(
                    "modoOscuro",
                    "activado"
                );

                loginDarkMode.textContent =
                    "☀ Modo claro";

            }

        }
    );

}


actualizarModoOscuroLogin();


// ==========================================
// MOSTRAR / OCULTAR CONTRASEÑA
// ==========================================

if (mostrarPassword) {

    mostrarPassword.addEventListener(
        "click",
        function () {

            if (
                password.type === "password"
            ) {

                password.type = "text";

                mostrarPassword.textContent =
                    "Ocultar";

                mostrarPassword.setAttribute(
                    "aria-label",
                    "Ocultar contraseña"
                );

            } else {

                password.type = "password";

                mostrarPassword.textContent =
                    "Mostrar";

                mostrarPassword.setAttribute(
                    "aria-label",
                    "Mostrar contraseña"
                );

            }

        }
    );

}


// ==========================================
// LIMPIAR ERRORES
// ==========================================

function limpiarErrores() {

    usuarioError.textContent = "";

    passwordError.textContent = "";

    usuario.removeAttribute(
        "aria-invalid"
    );

    password.removeAttribute(
        "aria-invalid"
    );

}


// ==========================================
// LOGIN
// ==========================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            limpiarErrores();


            let formularioValido = true;


            // ======================================
            // VALIDAR USUARIO
            // ======================================

            if (
                usuario.value.trim() === ""
            ) {

                usuarioError.textContent =
                    "Por favor, ingresa tu número de usuario.";

                usuario.setAttribute(
                    "aria-invalid",
                    "true"
                );

                formularioValido = false;

            }


            // ======================================
            // VALIDAR CONTRASEÑA
            // ======================================

            if (
                password.value.trim() === ""
            ) {

                passwordError.textContent =
                    "Por favor, ingresa tu contraseña.";

                password.setAttribute(
                    "aria-invalid",
                    "true"
                );

                formularioValido = false;

            }


            // ======================================
            // SI HAY ERRORES
            // ======================================

            if (!formularioValido) {

                if (
                    usuario.value.trim() === ""
                ) {

                    usuario.focus();

                } else {

                    password.focus();

                }

                return;

            }


            // ======================================
            // LOGIN CORRECTO
            // ======================================

            window.location.href =
                "dashboard.html";

        }
    );

}