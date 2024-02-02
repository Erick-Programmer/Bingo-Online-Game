    //definir o numero aleatorio
    //numero aleatorio entre 1 e 99: função random!

    //preencher os numeros da cartela função random!
    //sair um numero atual função random! ok!

    //ao sair o numero atual - aparece no visor!  

//caso nao tenha saído nenhum numero - o espaço do numero anterior fica vazio. string = ""

    //vou ter 5 segundos pra marcar ou começa a outra rodada - aparecer o contador.

//se eu clicar no numero da cartela que corresponde numero atual o botao fica inativo.
////mas se eu clicar no numero da cartela que não corresponde numero atual o botao fica normal

//ao preencher toda a cartela ganha o jogo - break no laço while - aparece vitoria (gera uma div com vitoria e permanece ate atualizar a pagina ou iniciar novamente o jogo)

//numero 13 é um botao de desenho que nao serve pra nada (ele é inativo)

//botao de iniciar começa o jogo - laço while - enquanto estiver executando - sai um numero - tempo pra marcar - somente encerra ao marcar toda cartela - break no laço.




// numero minimo = 1, se der zero, colocamos + 1.
//numero maximo = 99, entao tem que usar 99 - 1, reaproveitar o + 1 pra quando zerar.
var numeros = [];
var numeroAtual = document.querySelector('#numero-sorteado');

//numero atual e guardar o anterior.
function sortearNumero() {
    var sortearNumero = Math.floor(Math.random() * (99 - 1)) + 1;   
    
    numeros.push(sortearNumero);

    return sortearNumero;
}

setTimeout(() => {
    numeroAtual.textContent = sortearNumero();
}, 3000);

//cartela ativa quando começa o jogo

function preencherCartela(){
    var cartela = Math.floor(Math.random() * (99 - 1)) + 1;   
    return cartela;
}

//preencher o botao com valor do random
var posicao1 = document.getElementById("1");
posicao1.value = preencherCartela();

//disabilitar o botao apos clicar.
posicao1.addEventListener('click', marcado);

function marcado(){
    this.disabled = true;
}

//iniciar jogo
function iniciarJogo() {
    jogoRodando = true;
    return jogoRodando;
}

var btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', iniciarJogo);

//parar jogo
function pararJogo() {
    jogoRodando = false;
    return jogoRodando;
}

var btnParar = document.getElementById('btnParar');
btnParar.addEventListener('click', pararJogo);


//laço + flag.
var jogoRodando = true;

while(jogoRodando) {
    setTimeOut(pararJogo(), 5000);
}

