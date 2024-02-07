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


//PREENCHER CARTELA
function preencherCartela(){
    var cartela = Math.floor(Math.random() * (99 - 1)) + 1;   
    return cartela;
}

var posicoes = 25;
for (var i = 1; i <= posicoes; i++){
    if(i == 13){
        continue;
    }
    document.getElementById(i.toString()).value = preencherCartela();

}
//SORTEAR NUMERO

var numeros = [];

function sortearNumero() {
    var sortearNumero = Math.floor(Math.random() * (99 - 1)) + 1;   
    numeros.push(sortearNumero);
    return sortearNumero;
}

//RODADAS
var inRodadas = document.getElementById('inRodadas');
var rodadas = inRodadas.value;

if (rodadas == 0 || isNaN(rodadas)) {
    alert('preencha corretamente');
    inRodadas.focus();
}

var turno = 1;
var numeroAtual = document.querySelector('#numero-sorteado');

do {
    setTimeout(() => {
        numeroAtual.textContent = sortearNumero();
    }, 2000);

    turno += 1;

    if(turno == rodadas){
        flag = false
    } else {
        setTimeout(() => {
            numeroAtual.textContent = sortearNumero();
        }, 2000);
    }

} while(turno <= rodadas) 
  
function iniciarJogo() {
    setTimeout(() => {
        numeroAtual.textContent = sortearNumero();
    }, 2000);
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

//MARCAR NUMERO
function marcado(){
    this.disabled = true;  
}

function manterAtivo(){
    this.disabled = false;
}

for (var i = 1; i <= posicoes; i++){
    if(i == 13){
        continue;
    }
    //VALIDAR O CLICK
    if (numeroAtual.value == document.getElementById(i.toString()).value) {
        document.getElementById(i.toString()).addEventListener('click', marcado);
    } else {
        document.getElementById(i.toString()).addEventListener('click', manterAtivo);
    }
    
}



function aa(number){
        
    console.log(number);

    let nextNumber = number - 1;

    if (nextNumber > 0) {
        setTimeout(aa, 1000);
    } else {
        console.log('acabou');
    }
}   

var flag = true;
var t = 1;
var r = 10;


var array = new Array();
for(t; t <= r;t++){
    array.push(t);
}

console.log(array);
//deu 2 segundos de intervalo soltou o while.

aa(3);

