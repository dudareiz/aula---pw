// Selecionando elementos do DOM
const tabuleiro = document.getElementById('tabuleiro');
const celulas = document.querySelectorAll('[data-celula]');
const statusJogo = document.getElementById('statusJogo');
const botaoReiniciar = document.getElementById('reiniciar');

// Variáveis de controle do jogo
let jogadorAtual  = 'X';
let jogoAtivo = true;

// Combinações vencedoras possíveis
const combinaçõesVencedoras = [
    [0,1,2], [3,4,5], [6,7,8],   //linhas
    [0,3,6], [1,4,7], [2,5,8],   // colunas
    [0,4,8], [2,4,6]
];

// Função para obter a combinação vencedora
 function obterCombVencedor() {
    return combinaçõesVencedoras.find(combinacao => {
        return combinacao.every(indice => {
            return celulas[indice].textContent === jogadorAtual
        });
    });
} 

// Função para verificar se houve vitória
function verificarVitoria(){
    return combinaçõesVencedoras.some(combinacao => {
        return combinacao.every(indice => {
            return celulas[indice].textContent === jogadorAtual;
        });
    }) ;
}

// Função para verficar se houve empate
function verificarEmpate() {
    return Array.from(celulas).every(celula => celula.textContent !== '');
}

// Função para lidar com o clique em uma célula
function lidarCliqueCelula(e) {
    const celula = e.target;
    const indiceCelula = Array. from(celulas).indexOf(celula);

    if (celula.textContent !== '' || !jogoAtivo) return;

    celula.textContent = jogadorAtual;

    if (verificarVitoria()) {
        statusJogo.textContent = 'Jogador ${jogadorAtual} venceu!';
        jogoAtivo = false;
    } else if(verificarEmpate()) {
        statusJogo.textContent = 'Empate!';
    } else {
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        statusJogo.textContent = 'Vez do jogador ${jogadorAtual}';
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    jogadorAtual = 'X';
    jogoAtivo = true;
    celulas.forEach(celula => {
        celula.textContent = '';

    })
    statusJogo(textContent) = 'Vez do jogador ${jogadorAtual}';
    
    
// Adicionar event listeners
celulas.forEach(celula => celula.addEventListener('click', lidarCliqueCelula));

// Inicialização do status do jogo
statusJogo.textContent = 'Vez do jogador $(jogadorAtual}';


}
