import {
    salvarCadastros,
    buscarCadastros
} from "./storage.js";

export function iniciarFormulario() {

    const formulario = document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    const alertaErro = document.getElementById("alerta-erro");
    const alertaSucesso = document.getElementById("alerta-sucesso");

    alertaErro.style.display = "none";
    alertaSucesso.classList.remove("mostrar");

    aplicarMascaras(formulario);

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (!formulario.checkValidity()) {

            alertaErro.style.display = "block";
            alertaSucesso.style.display = "none";

            formulario.reportValidity();

            return;
        }

        alertaErro.style.display = "none";

        const dados = Object.fromEntries(
            new FormData(formulario)
        );

        const cadastros = buscarCadastros();

        cadastros.push(dados);

        salvarCadastros(cadastros);

        alertaSucesso.classList.add("mostrar");

        formulario.reset();
    });
        formulario.addEventListener("reset", function () {

            alertaErro.style.display = "none";

            alertaSucesso.classList.remove("mostrar");
        });
}


function aplicarMascaras(formulario) {

    const cpf = formulario.querySelector("#cpf");
    const telefone = formulario.querySelector("#telefone");
    const cep = formulario.querySelector("#cep");


    // Máscara CPF

    cpf.addEventListener("input", function () {

        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length > 9) {

            valor = valor.replace(
                /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
                "$1.$2.$3-$4"
            );

        } else if (valor.length > 6) {

            valor = valor.replace(
                /(\d{3})(\d{3})(\d{1,3})/,
                "$1.$2.$3"
            );

        } else if (valor.length > 3) {

            valor = valor.replace(
                /(\d{3})(\d{1,3})/,
                "$1.$2"
            );
        }

        cpf.value = valor;
    });


    // Máscara telefone

    telefone.addEventListener("input", function () {

        let valor = telefone.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length > 10) {

            valor = valor.replace(
                /(\d{2})(\d{5})(\d{4})/,
                "($1) $2-$3"
            );

        } else if (valor.length > 6) {

            valor = valor.replace(
                /(\d{2})(\d{4})(\d{1,4})/,
                "($1) $2-$3"
            );

        } else if (valor.length > 2) {

            valor = valor.replace(
                /(\d{2})(\d{1,5})/,
                "($1) $2"
            );
        }

        telefone.value = valor;
    });


    // Máscara CEP

    cep.addEventListener("input", function () {

        let valor = cep.value.replace(/\D/g, "");

        valor = valor.substring(0, 8);

        if (valor.length > 5) {

            valor = valor.replace(
                /(\d{5})(\d{1,3})/,
                "$1-$2"
            );
        }

        cep.value = valor;
    });
}