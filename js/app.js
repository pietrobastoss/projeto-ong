import {
    iniciarRoteador,
    renderizarPagina,
    obterPaginaAtual
} from "./router.js";

import { iniciarMenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", function () {

    iniciarMenu();

    iniciarRoteador();

    renderizarPagina(obterPaginaAtual());
});