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
var btnRodadas = document.querySelector('#btnRodadas');
var inRodadas = document.querySelector('#inRodadas');
var numeroAtual = document.querySelector('#numero-sorteado');
var numeros = [];
var rodadas = inRodadas.value;
var round = rodadas*(-1);

function sorteio() {

    var rodadas = inRodadas.value;

    if (rodadas == 0 || isNaN(rodadas)){
        alert('preencha corretamente');
        inRodadas.focus();
        return;
    }

    sortearNumero();

}

btnRodadas.addEventListener('click', sorteio);

function sortearNumero() {
    rodadas--;
    console.log(rodadas);

    var intervalo = setInterval( function () {
        var numeroSorteado = Math.floor(Math.random() * (99 - 1)) + 1;
        numeroAtual.textContent = numeroSorteado;

        if(rodadas == round){
            clearInterval(intervalo);
        } else {
            setInterval(sortearNumero, 5000)
            
        }
    
    
    }, 5000);  

}

// function correr() {
//     var  intervalo = setInterval(()=>{
//         for(var i = 0; i < 10; i++){
//             console.log('a');
//             a = 10;
//         }
//         if (a == 10) {
//             clearInterval(intervalo);
//         }else {
//             correr();
//         }
        
//     },4000)
    
// }

// correr();


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

var flag = true;
var t = 1;
var r = 10;

var array = new Array();
for(t; t <= r;t++){
    array.push(t);
}

console.log(array);


//recursividade

//60 vezes vai lançar um numero

