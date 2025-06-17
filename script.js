const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você entra em uma livraria antiga e misteriosa. Ao tocar em um livro empoeirado, a capa se ilumina e uma voz sussurra: Escolha seu caminho, e ele revelará quem você é. Qual prateleira te atrai imediatamente?",
        alternativas: [
            {
                texto: "Aquela com os títulos clássicos sobre amores proibidos e destinos entrelaçados.",
                afirmacao_romance: "Você é uma alma que busca conexão e emoção."
            },
            {
                texto: "A prateleira isolada, com livros de capas escuras e títulos intrigantes que prometem segredos e reviravoltas.",
                afirmacao_suspense: "Você é um aventureiro da mente, que adora desvendar mistérios."
            }
        ]
    },
    {
        enunciado: "Você encontra um manuscrito sem título, com páginas amareladas e uma escrita elegante. Ao ler as primeiras linhas, percebe que a história pode seguir dois rumos principais. Qual enredo você esperaria encontrar ao continuar a leitura?",
        alternativas: [
            {
                texto: "Uma história de paixão avassaladora e superação de obstáculos em busca do amor verdadeiro.",
                afirmacao_romance: "Você valoriza a profundidade emocional."
            },
            {
                texto: "Uma trama cheia de enigmas, desaparecimentos misteriosos e um detetive tentando desvendar a verdade.",
                afirmacao_suspense: "A adrenalina da incerteza te atrai."
            }
        ]
    },
    {
        enunciado: "Uma máquina do tempo surge à sua frente, oferecendo uma viagem instantânea para qualquer período da história ou para um momento de puro lazer. Para qual destino você viajaria sem hesitar?",
        alternativas: [
            {
                texto: "Um baile de máscaras em Veneza do século XVIII, onde o amor pode florescer em meio ao mistério.",
                afirmacao_romance: "Você aprecia a beleza dos laços humanos."
            },
            {
                texto: "Uma noite chuvosa em Londres vitoriana, acompanhando um detetive em busca de pistas cruciais.",
                afirmacao_suspense: "Você gosta de questionar e investigar."
            }
        ]
    },
    {
        enunciado: "Um convite misterioso chega pelo correio, convidando você para um evento secreto onde as histórias ganham vida. Ao chegar, você percebe que precisará escolher um gênero para participar. Qual seria o ambiente ideal para você se perder completamente?",
        alternativas: [
            {
                texto: "Um jardim secreto, onde encontros inesperados e declarações apaixonadas acontecem sob a luz do luar.",
                afirmacao_romance: "Sua jornada literária provavelmente é repleta de momentos tocantes e inspiradores!"
            },
            {
                texto: "Um casarão abandonado, com sussurros no ar e sombras dançando, sugerindo segredos a serem desvendados.",
                afirmacao_suspense: "Sua leitura é uma jornada eletrizante, cheia de reviravoltas e descobertas surpreendentes!"
            }
        ]
    },
    {
        enunciado: "Você está prestes a embarcar em uma jornada, e duas rotas se apresentam, cada uma prometendo um tipo diferente de experiência. Qual tipo de jornada te empolgaria mais?",
        alternativas: [
            {
                texto: "Uma viagem através de paisagens deslumbrantes, com a chance de encontrar uma alma gêmea e viver um grande amor.",
                afirmacao_romance: "Você se emociona com histórias de amor que superam o tempo e o espaço."
            },
            {
                texto: "Uma exploração de um lugar desconhecido e perigoso, cheio de armadilhas e mistérios a serem desvendados.",
                afirmacao_suspense: "Você se sente atraído por tramas complexas e resoluções impactantes."
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu estilo é...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
