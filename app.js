function criaCartao({ categoria, pergunta, resposta }) {
    let container = document.getElementById('container');
    if (!container) {
        console.error('Elemento com id "container" não encontrado.');
        return;
    }

    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.setAttribute('role', 'button');
    cartao.setAttribute('aria-expanded', 'false');

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
        cartao.setAttribute('aria-expanded', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}
