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

var numeroAtual = document.querySelector('#numero-sorteado');
var inRodadas = document.querySelector('#inRodadas');

//array de numeros sorteados
var numerosSorteados = [];

function sortearNumeros() {
    //referencia
    var rodadas = inRodadas.value;

    //analisar numero de rodadas
    if (rodadas == 0 || isNaN(rodadas)){
        alert('preencha corretamente');
        inRodadas.focus();
        return;
    }

    //numeros sorteados

    for(var i = 0; i < rodadas; i++){
        var numeros = Math.floor(Math.random() * (99 - 1)) + 1;

        numerosSorteados.push(numeros);

    }

    console.log(numerosSorteados);

}

btnRodadas.addEventListener('click', sortearNumeros);

//INICIAR JOGO.
var roundRecursivo = 0;
var tempoRodada = 3000;

function comecarJogo() {
    //rodadas
    var rodadas = inRodadas.value;

    var intervalo = setInterval(() => {
        numeroAtual.textContent = numerosSorteados[roundRecursivo];

        console.log(roundRecursivo);

        if (roundRecursivo >= rodadas){
            clearInterval(intervalo);
        }else {    
            roundRecursivo = roundRecursivo + 1;
            setTimeout(comecarJogo, tempoRodada);
        }


    }, tempoRodada);
        
}

var btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', comecarJogo);

//PARAR JOGO
const pararJogo = () => {
    clearInterval(intervalo);
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