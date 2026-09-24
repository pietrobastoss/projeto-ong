const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("aberto");

        const aberto = menu.classList.contains("aberto");

        menuToggle.setAttribute("aria-expanded", aberto);
    });
}


const formulario = document.querySelector("form");
const toast = document.querySelector("#toast");
const alertaSucesso = document.querySelector("#alerta-sucesso");
const alertaErro = document.querySelector("#alerta-erro");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!formulario.checkValidity()) {

            formulario.reportValidity();

            if (alertaErro) {
                alertaErro.style.display = "block";
            }

            if (alertaSucesso) {
                alertaSucesso.style.display = "none";
            }

            return;
        }

        if (alertaErro) {
            alertaErro.style.display = "none";
        }

        if (alertaSucesso) {
            alertaSucesso.style.display = "block";
        }

        if (toast) {
            toast.classList.add("mostrar");

            setTimeout(function () {
                toast.classList.remove("mostrar");
            }, 3000);
        }
    });
}