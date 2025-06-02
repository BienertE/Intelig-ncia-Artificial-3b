const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual a importância do 2Pac na cultura de plantações de ervas?",
        alternativas: [
            {
            texto: "trazer dignidade e expandir a visibilidade cultural afro-americana.",
            afirmacao:"O 2Pac foi fundamental para a cultura afro-americana"
            },
            {
            texto: "Ele foi simbolo de diversidade cultural e musical e foi importante para abrir espaços para trazer igualdade racial"
            afirmacao:"A preservação da cultura de resistência de um povo."
            },
    },
    {
     {
        enunciado: "Pergunta 1",
        alternativas: [
            {
            texto: "Alternativa1",
            afirmacao:"afirmacao1"
            },
            {
            texto: "alternativa2"
            afirmacao: "afirmacao2"
            },
     },
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();