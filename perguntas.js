// Função para criar os cartões
function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

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

    // Alterna o cartão ao clicar
    cartao.addEventListener('click', () => {
        cartao.querySelector('.cartao__conteudo').classList.toggle('active');
    });

    container.appendChild(cartao);
}

// Array de cartões
const cartoes = [
    { categoria: "Portugues", pergunta: "Quais são as eras do romantismo no Brasil?", resposta: "Primeira geração: nacionalista, indianista e religiosa.\nSegunda geração: geração do mal-do-século ou Ultrarromântica.\nTerceira geração: geração condoreira." },
    { categoria: "Tecnologia", pergunta: "O que é GitHub?", resposta: "É uma plataforma que serve como um banco de armazenamento com códigos de programação. Além disso, é uma rede de compartilhamento e troca de conhecimento entre programadores." },
    { categoria: "Biotecnologia", pergunta: "Como a técnica de CRISPR-Cas9 tem sido utilizada no desenvolvimento de terapias genéticas para doenças hereditárias?", resposta: "A técnica de <b>CRISPR-Cas9</b> corrige mutações ao editar genes diretamente no DNA. Identifica-se o gene defeituoso e um RNA guia direciona a proteína Cas9 ao local específico, onde ela faz um corte. Aplicações incluem tratamentos de anemia falciforme e fibrose cística." },
    { categoria: "Matematica", pergunta: "O que é log?", resposta: "O logaritmo é o inverso da operação de exponenciação.\nEx: Qual é o expoente necessário para elevar uma base e obter um número?" },
    { categoria: "Matematica", pergunta: "O que é fração?", resposta: "A fração é uma forma de representar uma parte de um todo ou uma razão entre dois números." },
    { categoria: "Matematica", pergunta: "O que é fórmula de Bhaskara?", resposta: "É um cálculo matemático que permite resolver equações do segundo grau, também conhecidas como equações quadráticas." },
    { categoria: "Historia", pergunta: "Por que a ditadura aconteceu? E quando?", resposta: "A Ditadura Militar no Brasil começou em 1964 com um golpe civil-militar e terminou em 1985, marcada pela repressão." },
    { categoria: "Historia", pergunta: "Qual foi o golpe de Collor?", resposta: "Em 16 de março de 1990, o ex-presidente implementou o Plano Collor, que consistia no confisco das cadernetas de poupança por 18 meses. Estima-se que o governo tenha confiscado cerca de US$ 100 bilhões." },
    { categoria: "Sociologia", pergunta: "O que é capitalismo?", resposta: "É um sistema econômico que se baseia na propriedade privada dos meios de produção, na acumulação de capital e no lucro." },
    { categoria: "Geografia", pergunta: "O que é gentrificação?", resposta: "É o processo de transformação socioeconômica e cultural de um bairro ou região, que leva à expulsão de moradores antigos e à valorização mercadológica do local." },
    { categoria: "Geografia", pergunta: "O que é segregação socioespacial?", resposta: "Segregação socioespacial é a divisão de classes sociais em áreas específicas de uma cidade." },
    { categoria: "Biologia", pergunta: "O que é o símbolo triangular nas embalagens de alimentos?", resposta: "Indicativo da presença de componentes geneticamente modificados - os chamados transgênicos." },
    { categoria: "Biologia", pergunta: "Por que duplicamos o DNA humano?", resposta: "A replicação do DNA ou duplicação do DNA é um processo de grande importância para a transmissão do material genético." },
    { categoria: "Biologia", pergunta: "O que é IST?", resposta: "Infecções Sexualmente Transmissíveis." }
];

// Gerar cartões dinamicamente
cartoes.forEach(({ categoria, pergunta, resposta }) => criaCartao(categoria, pergunta, resposta));
