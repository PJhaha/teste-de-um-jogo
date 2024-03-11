let numerosDaLista = [];
let numeroLimiteTentativas = 10;
let numeroScreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
textoInicial()
function textoInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p','Escolha um número de 1 a 10');
}


function chutar() {
    let chute = document.querySelector('input').value;
    if(chute == numeroScreto){
        exibirTexto('h1', 'Acertou!');
        let palavraTenta = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTenta}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute > numeroScreto){
            exibirTexto('p', 'O número secreto é menor');
        }else{
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCanpo()
    }
}

function gerarNumeroSecreto(){
   let numerosSorteados = parseInt(Math.random() * numeroLimiteTentativas + 1);
   let qntElementosNaLista = numerosSorteados.length;

    if(qntElementosNaLista == numeroLimiteTentativas){
        numerosDaLista = [];
    }

   if(numerosDaLista.includes(numerosSorteados)){
    return gerarNumeroSecreto()
   }else{
    numerosDaLista.push(numerosSorteados);
    return numerosSorteados;
   }
}

function limparCanpo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    textoInicial()
    tentativas = 1;
    limparCanpo()
    numeroScreto = gerarNumeroSecreto;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}