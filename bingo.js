//PREENCHER NUMEROS DA CARTELA (ORDENAR A CARTELA**)
const array = [];
const _cartela = [];

const preencherCartela = () => {
    let posicoes = 50;

    for (var i = 1; i <= posicoes; i++){
        if(i === 1){
            array.push(Math.floor(Math.random() * (99 - 1)) + 1);  
            continue;
        }

        array.push(Math.floor(Math.random() * (99 - 1)) + 1); 
        array.sort();

        if(array[i] === array[i - 1]){
            array.pop();
            array.push(Math.floor(Math.random() * (99 - 1)) + 1); 
            continue;
        } 
    }

    //improviso.
    for(var i = 1; i <= array.length; i++){
        if(i == 1){
            _cartela.push(array[i]);
            continue;
        } else if (array[i] === array[i - 1]){
            continue;                
        } else {
            _cartela.push(array[i]);
        }
    }
    
    _cartela.sort((a,b) => a - b);

    for (var i = 1; i <= _cartela.length; i++){
         if(i == 13){
             continue;
         } else if (i == 26){
             break;
         } else {
            document.getElementById(i.toString()).value = _cartela[i]; 
         }

    }

}
   
preencherCartela(array);

console.log(array);
console.log(_cartela);


//SORTEAR NUMERO
var btnRodadas = document.querySelector('#btnRodadas');
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

//REFLETIR NUMERO ANTERIOR
var numeroPassado = document.querySelector('#numero-passado'); //REFLETIR NUMERO PASSADOok!

function espelharNumero(){
    for(var i = 1; i <= numerosSorteados.length;i++){
        if(numerosSorteados[i] == numeroAtual.textContent){
            numeroPassado.textContent = numerosSorteados[i-1];
        }
    }
}

//DEFINIR TEMPO
var inTempo = document.getElementById('inTempo');
var tempoRodada; //USUÁRIO ESCOLHE O TEMPO MÁXIMO 10 SEGUNDOS!ok

function relogio(){
    var tempo = inTempo.value;

    if(tempo == "" || tempo == 0 || tempo < 5 || tempo > 10 ){
        alert('Defina um tempo de 5 a 10 segundos');
        inTempo.focus();
        return;
    }

    tempoRodada = tempo * 1000;  

    console.log(tempoRodada);
    
}

var btnTempo = document.getElementById('btnTempo');
btnTempo.addEventListener('click', relogio);

//INICIAR JOGO.
var numeroAtual = document.querySelector('#numero-sorteado');

var roundRecursivo = 0;

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
            espelharNumero();
        }


    }, 1000);
        
}

var btnIniciar = document.getElementById('btnIniciar');

btnIniciar.addEventListener('click', comecarJogo);

//PARAR JOGO (zerar o array ou reload na pagina)
const pararJogo = () => {   //PARA CADA RODADA O ARRAY FICAR VAZIO!ok!
    numerosSorteados = [];
    numeroAtual.textContent = "";
    numeroPassado.textContent = "";
    inTempo.value = "";
    inRodadas.value = "";
    return numerosSorteados;
}

var btnParar = document.getElementById('btnParar');
btnParar.addEventListener('click', pararJogo);

//MARCAR NUMERO
function marcado(){ //PRECISAMOS QUE CADA VALOR CORRESPONDA COM ATUAL OU PASSADO E AO CLICAR FIQUE OUTRA COR
    this.className = 'numero';  //AO FICAR COM OUTRA COR SE PREENCHER TODO VENCERÁ!
}

function manterAtivo(){
    this.disabled = false;
}

var _numeros = 25;
for (var i = 1; i <= _numeros; i++){
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

