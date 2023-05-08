var nomes = [];
var numNomes = 0;
var nomeAtual = "";
var pontuacao = 0;
var rodada = 0;

function iniciarJogo() {
  numNomes = parseInt(document.getElementById("num-names").value);
  for (var i = 0; i < numNomes; i++) {
    nomes.push(prompt("Digite o " + (i + 1) + "º nome da lista"));
  }
  document.getElementById("nome-atual").textContent = "Digite o primeiro nome da lista";
  document.getElementById("nome-input").value = "";
  document.getElementById("nome-input").value = "";
  pontuacao = 0;
  rodada = 1;
  atualizarPontuacao();
  atualizarRodada();
}

function verificarNome() {
  var inputNome = document.getElementById("nome-input").value;
  if (inputNome == nomeAtual) {
    pontuacao++;
    document.getElementById("pontuacao").textContent = pontuacao;
  } else {
    pontuacao;
    document.getElementById("pontuacao").textContent = pontuacao;
  }
  if (rodada == 5) {
    alert("Fim de jogo! Sua pontuação final é " + pontuacao);
    reiniciarJogo();
  } else {
    rodada++;
    atualizarRodada();
    nomeAtual = nomes[rodada - 1];
    document.getElementById("nome-atual").textContent = "Digite o " + rodada + "º nome da lista";
    document.getElementById("nome-input").value = "";
  }
}

function atualizarPontuacao() {
  document.getElementById("pontuacao").textContent = pontuacao;
}

function atualizarRodada() {
  document.getElementById("rodada").textContent = rodada;
}

function reiniciarJogo() {
  nomes = [];
  numNomes = 0;
  nomeAtual = "";
  pontuacao = 0;
  rodada = 0;
  document.getElementById("num-names").value = "";
  document.getElementById("nome-atual").textContent = "";
  document.getElementById("nome-input").value = "";
  atualizarPontuacao();
  atualizarRodada();
}
