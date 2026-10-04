// ==========================================
// BANCOFÁCIL
// FUNCIONES DEL PANEL PRINCIPAL
// ==========================================


// ==========================================
// CERRAR SESIÓN
// ==========================================

const cerrarSesion =
    document.getElementById("cerrarSesion");

cerrarSesion.addEventListener("click", function () {

    const salir = confirm(
        "¿Quieres salir de tu cuenta?"
    );

    if (salir) {

        window.location.href = "index.html";

    }

});


// ==========================================
// ENVIAR DINERO
// ==========================================

const transferir =
    document.getElementById("transferir");

transferir.addEventListener("click", function () {

    alert(
        "La función para enviar dinero estará disponible próximamente."
    );

});


// ==========================================
// MOVIMIENTOS
// ==========================================

const movimientos =
    document.getElementById("movimientos");

movimientos.addEventListener("click", function () {

    const historial =
        document.getElementById("historyTitle");

    historial.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// ==========================================
// MIS PRODUCTOS
// ==========================================

const cuentas =
    document.getElementById("cuentas");

cuentas.addEventListener("click", function () {

    alert(
        "Aquí podrás consultar tus cuentas y productos bancarios."
    );

});


// ==========================================
// INFORMACIÓN PERSONAL
// ==========================================

const perfil =
    document.getElementById("perfil");

perfil.addEventListener("click", function () {

    alert(
        "El apartado de información personal estará disponible próximamente."
    );

});


// ==========================================
// VER HISTORIAL COMPLETO
// ==========================================

const verTodos =
    document.getElementById("verTodos");

verTodos.addEventListener("click", function () {

    alert(
        "Aquí podrás consultar todas las operaciones de tu cuenta."
    );

});
