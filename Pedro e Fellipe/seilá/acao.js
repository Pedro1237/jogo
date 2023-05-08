// Pega os elementos da página
const numNomesInput = document.getElementById("num-nomes");
const iniciarButton = document.getElementById("iniciar");
const jogoNomeDiv = document.getElementById("jogo-nome");
const nomeAtualLabel = document.getElementById("nome-atual-label");
const nomeInput = document.getElementById("nome-input");
const verificarButton = document.getElementById("verificar");
const pontuacaoLabel = document.getElementById("pontuacao");
const rodadaLabel = document.getElementById("rodada");

// Variáveis do jogo
let nomes = [];
let numNomes = 0;
let rodada = 0;
let pontuacao = 0;

// Função que inicia o jogo
function iniciarJogo() {
  // Pega a quantidade de nomes digitada pelo usuário
  numNomes = parseInt(numNomesInput.value);

  // Pede para o usuário digitar os nomes e adiciona na lista
  for (let i = 0; i < numNomes; i++) {
    const nome = prompt(`Digite o ${i + 1}º nome:`);
    nomes.push(nome);
  }

  // Reseta as variáveis do jogo
  rodada = 1
