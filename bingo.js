//Preencher números da cartela
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
//chamou função que preenche cartela.
preencherCartela(array);

//Números sorteados
//Rodadas
var btnRodadas = document.querySelector('#btnRodadas');
var inRodadas = document.querySelector('#inRodadas');

//Array de números sorteados
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
//Função que define rodadas
btnRodadas.addEventListener('click', sortearNumeros);

//Número da rodada anterior.
var numeroPassado = document.querySelector('#numero-passado'); 

function espelharNumero(){
    for(var i = 1; i <= numerosSorteados.length;i++){
        if(numerosSorteados[i] == numeroAtual.textContent){
            numeroPassado.textContent = numerosSorteados[i-1];
        }
    }
}

//Definir Tempo para lançar número
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

//Iniciar Jogo e chama a função que marca botão!
var numeroAtual = document.querySelector('#numero-sorteado');

var roundRecursivo = 0;

function comecarJogo() {
    //rodadas
    marcado();

    var rodadas = inRodadas.value;

    var intervalo = setTimeout(() => {
        numeroAtual.textContent = numerosSorteados[roundRecursivo];

        console.log(roundRecursivo);

        if (roundRecursivo >= rodadas){
            clearInterval(intervalo);
            numeroPassado.textContent = "";

        }else {    
            roundRecursivo += 1;
            setTimeout(comecarJogo, tempoRodada);
            espelharNumero();
        }


    }, 1000);
        
}

var btnIniciar = document.getElementById('btnIniciar');

btnIniciar.addEventListener('click', comecarJogo);

//Parar Jogo
const pararJogo = () => {   
    numerosSorteados = [];
    numeroAtual.textContent = "";
    numeroPassado.textContent = "";
    inTempo.value = "";
    inRodadas.value = "";
    return numerosSorteados;
}

var btnParar = document.getElementById('btnParar');
btnParar.addEventListener('click', pararJogo);


//Marcar Número da Rodada (função roda quando a função ComeçarJogo é acionada) *****
//Controlar o tempo para a função marcar esta em atraso! tanto para marcar quanto para ganhar!
function marcado() {
    let totalBtn = 25;

    for (var i = 1; i <= totalBtn; i++){
        if(i == 13){
            continue;
        } else if (Number(document.getElementById(i.toString()).value) == numeroAtual.textContent ||
             (Number(document.getElementById(i.toString()).value) == numeroPassado.textContent)) {
            console.log('aaa');
            document.getElementById(i.toString()).addEventListener('click', (e) => {
                e.target.className = 'numero';
            })
            
        }

   }
   
    if (document.getElementById('1').classList.value == 'numero' &&
        document.getElementById('2').classList.value == 'numero' &&
        document.getElementById('3').classList.value == 'numero' &&
        document.getElementById('4').classList.value == 'numero' &&
        document.getElementById('5').classList.value == 'numero' &&
        document.getElementById('6').classList.value == 'numero' &&
        document.getElementById('7').classList.value == 'numero' &&
        document.getElementById('8').classList.value == 'numero' &&
        document.getElementById('9').classList.value == 'numero' &&
        document.getElementById('10').classList.value == 'numero' &&
        document.getElementById('11').classList.value == 'numero' &&
        document.getElementById('12').classList.value == 'numero' &&
        document.getElementById('14').classList.value == 'numero' &&
        document.getElementById('15').classList.value == 'numero' &&
        document.getElementById('16').classList.value == 'numero' &&
        document.getElementById('17').classList.value == 'numero' &&
        document.getElementById('18').classList.value == 'numero' &&
        document.getElementById('19').classList.value == 'numero' &&
        document.getElementById('20').classList.value == 'numero' &&
        document.getElementById('21').classList.value == 'numero' &&
        document.getElementById('22').classList.value == 'numero' &&
        document.getElementById('23').classList.value == 'numero' &&
        document.getElementById('24').classList.value == 'numero' &&
        document.getElementById('25').classList.value == 'numero') {
        console.log('voce ganhou');
    }


    // switch(numeroAtual.value != ""){
    //     case document.getElementById('1').value != numeroAtual.value:
    //         console.log('aaa');
    //         document.getElementById('1').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('2').value == numeroAtual.value:
    //         document.getElementById('2').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('3').value == numeroAtual.value:
    //         document.getElementById('3').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('4').value == numeroAtual.value:
    //         document.getElementById('4').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('5').value == numeroAtual.value:
    //         document.getElementById('5').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('6').value == numeroAtual.value:
    //         document.getElementById('6').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('7').value == numeroAtual.value:
    //         console.log('aaa');
    //         document.getElementById('7').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('8').value == numeroAtual.value:
    //         document.getElementById('8').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('9').value == numeroAtual.value:
    //         document.getElementById('9').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('10').value == numeroAtual.value:
    //         document.getElementById('10').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('11').value == numeroAtual.value:
    //         document.getElementById('11').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('12').value == numeroAtual.value:
    //         document.getElementById('12').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;    
    //     case document.getElementById('13').value == numeroAtual.value:
    //         console.log('aaa');
    //         document.getElementById('13').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('14').value == numeroAtual.value:
    //         document.getElementById('14').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('15').value == numeroAtual.value:
    //         document.getElementById('15').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('16').value == numeroAtual.value:
    //         document.getElementById('16').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('17').value == numeroAtual.value:
    //         document.getElementById('17').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('18').value == numeroAtual.value:
    //         document.getElementById('18').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('19').value == numeroAtual.value:
    //         console.log('aaa');
    //         document.getElementById('19').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('20').value == numeroAtual.value:
    //         document.getElementById('20').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('21').value == numeroAtual.value:
    //         document.getElementById('21').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('22').value == numeroAtual.value:
    //         document.getElementById('22').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('23').value == numeroAtual.value:
    //         document.getElementById('23').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break;
    //     case document.getElementById('24').value == numeroAtual.value:
    //         document.getElementById('24').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break; 
    //     case document.getElementById('25').value == numeroAtual.value:
    //         document.getElementById('25').addEventListener('click', (e) => {
    //             e.target.className = 'numero';
    //         })
    //         break; 
    // }
}

marcado();