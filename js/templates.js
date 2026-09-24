export function templateInicio() {
    return `
        <section>
            <h2>Transformando vidas através da solidariedade</h2>

            <p>
                A ONG Mãos que Transformam é uma organização sem fins lucrativos
                dedicada a apoiar pessoas e famílias em situação de vulnerabilidade.
            </p>

            <p>
                Nosso trabalho é realizado por meio de campanhas de doação,
                ações comunitárias e participação de voluntários.
            </p>

            <img src="imagens/voluntariado.jpg"
                alt="Voluntários participando de uma ação solidária">
        </section>

        <section>
            <h2>Sobre a ONG</h2>

            <p>
                Nosso objetivo é promover ações que contribuam para uma sociedade
                mais solidária e oferecer apoio para pessoas que precisam de ajuda.
            </p>

            <p>
                Acreditamos que pequenas atitudes podem gerar grandes mudanças.
                Por isso, contamos com a participação da comunidade para ampliar
                nossas ações.
            </p>
        </section>

        <section>
            <h2>Nossa missão</h2>

            <p>
                Promover solidariedade, inclusão e apoio social por meio de
                projetos comunitários, doações e trabalho voluntário.
            </p>
        </section>

        <section>
            <h2>Como você pode ajudar</h2>

            <p>
                Existem diferentes formas de contribuir com nosso trabalho.
                Você pode realizar uma doação, participar de nossas campanhas
                ou atuar como voluntário.
            </p>

            <p>
                <a href="#projetos" data-page="projetos">
                    Conheça nossos projetos
                </a>
            </p>

            <p>
                <a href="#cadastro" data-page="cadastro">
                    Quero ser um colaborador
                </a>
            </p>
        </section>

        <section>
            <h2>Contato</h2>

            <address>
                <p>
                    E-mail:
                    <a href="mailto:contato@maosquetransformam.org">
                        contato@maosquetransformam.org
                    </a>
                </p>

                <p>
                    Telefone:
                    <a href="tel:+5551999999999">
                        (51) 99999-9999
                    </a>
                </p>

                <p>
                    Porto Alegre - RS
                </p>
            </address>
        </section>
    `;
}
export function templateProjetos() {
    return `
        <section>
            <h2>Nossos projetos</h2>

            <p>
                A ONG Mãos que Transformam desenvolve diferentes iniciativas
                para ajudar pessoas e famílias em situação de vulnerabilidade.
            </p>
        </section>

        <section>
            <h2>Projetos sociais</h2>

            <article>
                <h3>Campanha Alimento para Todos</h3>

                <span class="badge">Doação</span>

                <p>
                    Arrecadamos alimentos não perecíveis para montar cestas
                    básicas destinadas a famílias que precisam de apoio.
                </p>

                <p>
                    As doações podem ser realizadas durante nossas campanhas
                    de arrecadação.
                </p>
            </article>

            <article>
                <h3>Inverno Solidário</h3>

                <p>
                    Durante os meses mais frios, realizamos campanhas para
                    arrecadar roupas, cobertores e outros itens de inverno.
                </p>

                <p>
                    Os materiais arrecadados são destinados às famílias
                    cadastradas em nossas ações sociais.
                </p>

                <img src="imagens/doacoes.jpg"
                    alt="Doações de roupas e alimentos para famílias">
            </article>

            <article>
                <h3>Educação para o Futuro</h3>

                <p>
                    O projeto busca incentivar a educação por meio da
                    arrecadação de materiais escolares e atividades de apoio
                    à comunidade.
                </p>
            </article>
        </section>

        <section>
            <h2>Como fazer uma doação</h2>

            <p>
                As doações ajudam a manter nossos projetos e ampliar o número
                de pessoas atendidas.
            </p>

            <h3>Doação de alimentos</h3>

            <p>
                Você pode contribuir com alimentos não perecíveis, como arroz,
                feijão, macarrão, leite em pó e outros produtos básicos.
            </p>

            <h3>Doação de roupas</h3>

            <p>
                Roupas, calçados e cobertores em boas condições podem ser
                destinados às nossas campanhas de arrecadação.
            </p>

            <h3>Contribuição financeira</h3>

            <p>
                As contribuições financeiras podem ajudar na compra de
                materiais e na manutenção das atividades da organização.
            </p>
        </section>

        <section>
            <h2>Seja um voluntário</h2>

            <p>
                Os voluntários são importantes para a realização das nossas
                campanhas e atividades comunitárias.
            </p>

            <p>
                É possível colaborar na organização de doações, campanhas,
                eventos e outras atividades da ONG.
            </p>

            <p>
                Para demonstrar interesse em participar, acesse nosso
                formulário de cadastro.
            </p>

            <p>
                <a href="#cadastro" data-page="cadastro">
                    Quero ser voluntário
                </a>
            </p>
        </section>
    `;
}
export function templateCadastro() {
    return `
        <section>
            <h2>Seja um colaborador</h2>

            <p>
                Preencha o formulário abaixo para demonstrar interesse em
                participar das ações da ONG Mãos que Transformam.
            </p>
        </section>

        <form id="form-cadastro">

            <div class="alerta alerta-info">
                Preencha todos os campos obrigatórios antes de enviar.
            </div>

            <div
                class="alerta alerta-sucesso"
                id="alerta-sucesso"
                role="status"
                aria-live="polite">
                Cadastro enviado com sucesso!
            </div>

            <div
                class="alerta alerta-erro"
                id="alerta-erro"
                role="alert">
                Verifique os campos obrigatórios antes de enviar.
            </div>

            <fieldset>
                <legend>Dados pessoais</legend>

                <p>
                    <label for="nome">Nome completo:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        minlength="3"
                        autocomplete="name">
                </p>

                <p>
                    <label for="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autocomplete="email">
                </p>

                <p>
                    <label for="data-nascimento">Data de nascimento:</label>
                    <input
                        type="date"
                        id="data-nascimento"
                        name="data-nascimento"
                        required>
                </p>

                <p>
                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        required
                        maxlength="14"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00"
                        inputmode="numeric">
                </p>
            </fieldset>

            <fieldset>
                <legend>Dados de contato</legend>

                <p>
                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        maxlength="15"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        placeholder="(00) 00000-0000"
                        autocomplete="tel">
                </p>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <p>
                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        required
                        maxlength="9"
                        pattern="[0-9]{5}-[0-9]{3}"
                        placeholder="00000-000"
                        inputmode="numeric"
                        autocomplete="postal-code">
                </p>

                <p>
                    <label for="endereco">Endereço:</label>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                        autocomplete="street-address">
                </p>

                <p>
                    <label for="numero">Número:</label>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        required>
                </p>

                <p>
                    <label for="cidade">Cidade:</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                        autocomplete="address-level2">
                </p>

                <p>
                    <label for="estado">Estado:</label>

                    <select
                        id="estado"
                        name="estado"
                        required
                        autocomplete="address-level1">

                        <option value="">Selecione</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>

                    </select>
                </p>
            </fieldset>

            <fieldset>
                <legend>Como deseja participar?</legend>

                <p>
                    <input
                        type="radio"
                        id="voluntario"
                        name="participacao"
                        value="voluntario"
                        required>

                    <label for="voluntario">
                        Trabalho voluntário
                    </label>
                </p>

                <p>
                    <input
                        type="radio"
                        id="doador"
                        name="participacao"
                        value="doador">

                    <label for="doador">
                        Realizar doações
                    </label>
                </p>

                <p>
                    <input
                        type="radio"
                        id="ambos"
                        name="participacao"
                        value="ambos">

                    <label for="ambos">
                        Voluntariado e doações
                    </label>
                </p>
            </fieldset>

            <fieldset>
                <legend>Mensagem</legend>

                <p>
                    <label for="mensagem">
                        Conte-nos um pouco sobre como gostaria de ajudar:
                    </label>
                </p>

                <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="6"
                    placeholder="Digite sua mensagem..."></textarea>
            </fieldset>

            <fieldset>
                <legend>Confirmação</legend>

                <p>
                    <input
                        type="checkbox"
                        id="termos"
                        name="termos"
                        required>

                    <label for="termos">
                        Concordo em fornecer meus dados para contato da ONG.
                    </label>
                </p>

                <button type="submit">
                    Enviar cadastro
                </button>

                <button type="reset">
                    Limpar formulário
                </button>
            </fieldset>

        </form>
    `;
}