const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual a importância das ervas medicinais em rituais de cura tradicionais africanos que visam o equilíbrio espiritual e físico da comunidade?",
        alternativas: [
            {
                texto: "Elas são consideradas meros Placebos sem eficácia comprovada, focando apenas no aspecto psicológico.",
                afirmacao: "Esta alternativa é incorreta, pois desconsidera o vasto conhecimento ancestral e a eficácia das ervas em diversas culturas africanas."
                
            },
            {
                texto: "São vistas como veículos de energia vital e conexão com os ancestrais, indispensáveis para a restauração da saúde integral.",
                afirmacao: "Esta alternativa é correta, pois reflete a cosmovisão africana onde a saúde é holística e as ervas possuem um papel fundamental na medicina tradicional."
            },
        ]
    },
    {
        enunciado: "De que forma o conhecimento sobre ervas medicinais, transmitido oralmente através das gerações, contribui para a preservação da identidade cultural africana?",
        alternativas: [
            {
                texto: "Esse conhecimento é irrelevante para a cultura, sendo apenas uma prática isolada de indivíduos.",
                afirmacao: "Esta alternativa é incorreta, pois subestima a importância do conhecimento medicinal como um pilar da transmissão cultural e da identidade de um povo."
            },
            {
                texto: "Ele representa um elo vital com o passado, mantendo vivas as tradições e a sabedoria dos povos africanos.",
                afirmacao: "Esta alternativa é correta, pois a transmissão do conhecimento sobre ervas medicinais é um elemento central na manutenção da memória e da identidade cultural africana."
            },
        ]
    },
    {
        enunciado: "Ao analisar as práticas de cura africanas que utilizam ervas medicinais, qual a principal diferença em relação à abordagem da medicina ocidental no que diz respeito ao tratamento de doenças?",
        alternativas: [
            {
                texto: " A medicina ocidental foca na cura da doença isoladamente, enquanto a medicina africana integra o tratamento ao contexto social e espiritual do indivíduo.",
                afirmacao: "Esta alternativa é correta, pois destaca a abordagem holística da medicina tradicional africana em contraste com a fragmentação da medicina ocidental."
            },
            {
                texto: " A medicina ocidental é baseada em evidências científicas rigorosas, enquanto a medicina africana se apoia unicamente em crenças e superstições.",
                afirmacao: "Esta alternativa é incorreta, pois generaliza e desvaloriza a complexidade da medicina tradicional africana, que possui seus próprios sistemas de observação e conhecimento empírico."
            },
        ]
    },
    {
        enunciado: "Como a rápida evolução tecnológica desafia a escola a se adaptar para preparar os alunos para as futuras demandas da sociedade, e qual o papel da comunidade nesse processo?",
        alternativas: [
            {
                texto: "A evolução tecnológica exige que a escola inove o currículo para as futuras demandas da sociedade.",
                afirmacao: "A comunidade, incluindo pais e empresas, é essencial para apoiar essa adaptação e oferecer recursos."
            },
            {
                texto: "O desafio da tecnologia é garantir que a escola ensine habilidades relevantes para o futuro do trabalho na sociedade.",
                afirmacao: "A comunidade pode conectar a escola com o mercado, trazendo experiências práticas e oportunidades."
            },
        ]
    },
    {
        enunciado: "De que maneira a tecnologia pode ser usada pela escola para fortalecer os laços entre a comunidade escolar e a sociedade, promovendo um senso de responsabilidade compartilhada no desenvolvimento educacional e social?",
        alternativas: [
            {
                texto: "A tecnologia permite à escola comunicar-se melhor com a sociedade e a comunidade.",
                afirmacao: "Isso cria um senso de responsabilidade compartilhada no apoio ao desenvolvimento educacional."
            },
            {
                texto: "Usar a tecnologia na escola facilita projetos que engajam a comunidade em causas sociais relevantes",
                afirmacao: " Isso fortalece laços, promovendo colaboração para melhorias educacionais e sociais na sociedade."
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
     atual++;
     mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();