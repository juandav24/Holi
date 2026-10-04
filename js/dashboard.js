// ==========================================
// BANCOSEGURO
// FUNCIONES DEL DASHBOARD
// ==========================================


// ==========================================
// ELEMENTOS
// ==========================================

const modoOscuro =
    document.getElementById("modoOscuro");

const cerrarSesion =
    document.getElementById("cerrarSesion");

const disminuirTexto =
    document.getElementById("disminuirTexto");

const aumentarTexto =
    document.getElementById("aumentarTexto");

const notificaciones =
    document.getElementById("notificaciones");

const filtrarMovimientos =
    document.getElementById(
        "filtrarMovimientos"
    );

const filterPanel =
    document.getElementById("filterPanel");

const filtroTipo =
    document.getElementById("filtroTipo");

const movimientosBody =
    document.getElementById(
        "movimientosBody"
    );


// ==========================================
// MODO OSCURO
// ==========================================

function actualizarModoDashboard() {

    const modo =
        localStorage.getItem("modoOscuro");


    if (modo === "activado") {

        document.body.classList.add(
            "dark-mode"
        );


        if (modoOscuro) {

            modoOscuro.textContent =
                "☀ Modo claro";

        }

    } else {

        document.body.classList.remove(
            "dark-mode"
        );


        if (modoOscuro) {

            modoOscuro.textContent =
                "◐ Modo oscuro";

        }

    }

}


if (modoOscuro) {

    modoOscuro.addEventListener(
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

                modoOscuro.textContent =
                    "◐ Modo oscuro";

            } else {

                document.body.classList.add(
                    "dark-mode"
                );

                localStorage.setItem(
                    "modoOscuro",
                    "activado"
                );

                modoOscuro.textContent =
                    "☀ Modo claro";

            }

        }
    );

}


actualizarModoDashboard();


// ==========================================
// CERRAR SESIÓN
// ==========================================

if (cerrarSesion) {

    cerrarSesion.addEventListener(
        "click",
        function () {

            const confirmar = confirm(
                "¿Estás seguro de que deseas cerrar sesión?"
            );


            if (confirmar) {

                window.location.href =
                    "index.html";

            }

        }
    );

}


// ==========================================
// AUMENTAR TEXTO
// ==========================================

if (aumentarTexto) {

    aumentarTexto.addEventListener(
        "click",
        function () {

            document.body.classList.remove(
                "text-large"
            );

            document.body.classList.add(
                "text-extra-large"
            );

        }
    );

}


// ==========================================
// DISMINUIR TEXTO
// ==========================================

if (disminuirTexto) {

    disminuirTexto.addEventListener(
        "click",
        function () {

            document.body.classList.remove(
                "text-extra-large"
            );

            document.body.classList.add(
                "text-large"
            );

        }
    );

}


// ==========================================
// NOTIFICACIONES
// ==========================================

if (notificaciones) {

    notificaciones.addEventListener(
        "click",
        function () {

            alert(
                "Tienes 2 notificaciones nuevas.\n\n" +
                "• Tu pago de servicios fue realizado correctamente.\n" +
                "• Se recibió una transferencia de $350.000."
            );

        }
    );

}


// ==========================================
// TRANSFERIR
// ==========================================

function realizarTransferencia() {

    alert(
        "Módulo de transferencias.\n\n" +
        "Desde aquí podrás enviar dinero a otras cuentas."
    );

}


const accionTransferir =
    document.getElementById(
        "accionTransferir"
    );


if (accionTransferir) {

    accionTransferir.addEventListener(
        "click",
        realizarTransferencia
    );

}


// ==========================================
// PAGAR FACTURA
// ==========================================

const accionPagar =
    document.getElementById(
        "accionPagar"
    );


if (accionPagar) {

    accionPagar.addEventListener(
        "click",
        function () {

            alert(
                "Módulo de pagos.\n\n" +
                "Próximamente podrás pagar tus facturas desde aquí."
            );

        }
    );

}


// ==========================================
// DESCARGAR EXTRACTO
// ==========================================

const accionExtracto =
    document.getElementById(
        "accionExtracto"
    );


if (accionExtracto) {

    accionExtracto.addEventListener(
        "click",
        function () {

            alert(
                "Generando extracto bancario..."
            );

        }
    );

}


// ==========================================
// VER TODAS LAS CUENTAS
// ==========================================

const verCuentas =
    document.getElementById(
        "verCuentas"
    );


if (verCuentas) {

    verCuentas.addEventListener(
        "click",
        function () {

            alert(
                "Aquí podrás consultar todas tus cuentas y productos financieros."
            );

        }
    );

}


// ==========================================
// BOTONES DE CUENTAS
// ==========================================

const botonesCuenta =
    document.querySelectorAll(
        "[data-action]"
    );


botonesCuenta.forEach(
    function (boton) {

        boton.addEventListener(
            "click",
            function () {

                const accion =
                    boton.getAttribute(
                        "data-action"
                    );


                if (
                    accion === "transferir"
                ) {

                    realizarTransferencia();

                }


                if (
                    accion === "movimientos"
                ) {

                    const movimientos =
                        document.getElementById(
                            "movimientos"
                        );


                    if (movimientos) {

                        movimientos.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    }
);


// ==========================================
// FILTRO DE MOVIMIENTOS
// ==========================================

if (filtrarMovimientos) {

    filtrarMovimientos.addEventListener(
        "click",
        function () {

            filterPanel.hidden =
                !filterPanel.hidden;

        }
    );

}


if (filtroTipo) {

    filtroTipo.addEventListener(
        "change",
        function () {

            const seleccion =
                filtroTipo.value;


            const filas =
                movimientosBody.querySelectorAll(
                    "tr"
                );


            filas.forEach(
                function (fila) {

                    const categoria =
                        fila.getAttribute(
                            "data-categoria"
                        );


                    if (
                        seleccion === "todos" ||
                        categoria === seleccion
                    ) {

                        fila.style.display = "";

                    } else {

                        fila.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


// ==========================================
// MENÚ MÓVIL
// ==========================================

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        function () {

            alert(
                "Menú de navegación móvil.\n\n" +
                "Inicio\n" +
                "Mis cuentas\n" +
                "Transferencias\n" +
                "Movimientos\n" +
                "Pagos"
            );

        }
    );

}