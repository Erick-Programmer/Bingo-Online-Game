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
    if (rodadas == 0 || isNaN(rodadas) || rodadas >= 50){
        alert('Determine um valor de até 50 rodadas!');
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
var tempoRodada = 4000;

function comecarJogo() {
    //rodadas
    var rodadas = inRodadas.value;

    var intervalo = setTimeout(() => {
        numeroAtual.textContent = numerosSorteados[roundRecursivo];

        console.log(roundRecursivo);

        if (roundRecursivo >= rodadas){
            clearInterval(intervalo);
        }else {    
            roundRecursivo += 1;
            setTimeout(comecarJogo, tempoRodada);
        }


    }, 1000);
        
}

var btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', comecarJogo);

//PARAR JOGO (zerar o array ou reload na pagina)
const pararJogo = () => {
    for(var x in numerosSorteados){
        numerosSorteados[x] = undefined;
        location.reload();
    }
    console.log(numerosSorteados);
    return numerosSorteados;
}

var btnParar = document.getElementById('btnParar');
btnParar.addEventListener('click', pararJogo);

//REFLETIR NUMERO ANTERIOR
var numeroPassado = document.querySelector('#numero-passado');
if(numeroAtual.value > 0) {
    numeroPassado.textContent = 2;
}

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