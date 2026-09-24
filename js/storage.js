export function salvarCadastros(cadastros) {
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
}

export function buscarCadastros() {
    return JSON.parse(localStorage.getItem("cadastros")) || [];
}