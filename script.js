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
                texto: "A prateleira com capas futuristas, naves espaciais e robôs, onde as histórias prometem mundos com tecnologias que desafiam a imaginação.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "A prateleira onde as capas mostram dragões, castelos medievais e seres mágicos, indicando contos de aventuras épicas e feitiçaria.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Você encontra um manuscrito sem título, com páginas amareladas e uma escrita elegante. Ao ler as primeiras linhas, percebe que a história pode seguir dois rumos principais. Qual enredo você esperaria encontrar ao continuar a leitura?",
        alternativas: [
            {
                texto: "Uma trama cheia de enigmas, segredos e uma investigação complexa para desvendar um crime ou uma conspiração, onde cada pista é crucial.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Uma narrativa focada nas relações entre personagens, explorando amores proibidos, sacrifícios pessoais e a complexidade das emoções humanas.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Uma máquina do tempo surge à sua frente, oferecendo uma viagem instantânea para qualquer período da história ou para um momento de puro lazer. Para qual destino você viajaria sem hesitar?",
        alternativas: [
            {
                texto: "Para uma época marcante do passado, como a Roma Antiga, a Revolução Francesa ou o Velho Oeste, para vivenciar os costumes e os grandes eventos.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Para um lugar onde você possa apenas relaxar e se divertir, talvez um parque de diversões excêntrico ou um festival cheio de situações hilárias e inesperadas.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Um convite misterioso chega pelo correio, convidando você para um evento secreto onde as histórias ganham vida. Ao chegar, você percebe que precisará escolher um gênero para participar. Qual seria o ambiente ideal para você se perder completamente?",
        alternativas: [
            {
                texto: "Um ambiente totalmente novo, com leis da física diferentes, onde a criação de mundos é infinita e a imaginação dita as regras de seres e paisagens.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Um ambiente que reflete a vida como ela é, com personagens realistas enfrentando dilemas cotidianos, mostrando a profundidade da alma humana em suas alegrias e tristezas.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você está prestes a embarcar em uma jornada, e duas rotas se apresentam, cada uma prometendo um tipo diferente de experiência. Qual tipo de jornada te empolgaria mais?",
        alternativas: [
            {
                texto: "Uma jornada cheia de desafios físicos, perigos iminentes e a constante necessidade de superar obstáculos e escapar de situações de risco.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Uma jornada que te faria refletir profundamente sobre a existência, o sentido da vida e as grandes questões da humanidade, mesmo que não haja ação constante. ",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
