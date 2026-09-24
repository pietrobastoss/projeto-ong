export function iniciarMenu() {

    const botao = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (!botao || !menu) {
        return;
    }

    botao.addEventListener("click", function () {

        const aberto = menu.classList.toggle("aberto");

        botao.setAttribute(
            "aria-expanded",
            aberto
        );
    });

    menu.addEventListener("click", function (evento) {

        const link = evento.target.closest("a");

        if (!link) {
            return;
        }

        menu.classList.remove("aberto");

        botao.setAttribute(
            "aria-expanded",
            "false"
        );
    });
}