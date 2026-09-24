import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

import { iniciarFormulario } from "./formulario.js";

const app = document.getElementById("app");

function obterPaginaAtual() {
    return window.location.hash.substring(1) || "inicio";
}

export function renderizarPagina(pagina) {

    app.innerHTML = "";

    if (pagina === "inicio") {
        app.innerHTML = templateInicio();
    }

    if (pagina === "projetos") {
        app.innerHTML = templateProjetos();
    }

    if (pagina === "cadastro") {
        app.innerHTML = templateCadastro();

        iniciarFormulario();
    }
}

export function iniciarRoteador() {

    document.addEventListener("click", function (evento) {

        const link = evento.target.closest("[data-page]");

        if (!link) {
            return;
        }

        evento.preventDefault();

        window.location.hash = link.dataset.page;
    });

    window.addEventListener("hashchange", function () {

        const pagina = obterPaginaAtual();

        renderizarPagina(pagina);
    });
}

export { obterPaginaAtual };