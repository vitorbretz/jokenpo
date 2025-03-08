const element = document.querySelectorAll('.conteudo img');
const spanText = document.querySelector('#about');
const resultT = document.querySelector('.resultado');

const score = {
    wins: 0,
    losses: 0,
    ties: 0
};
const vitoria = document.querySelector('.win');
const derrota = document.querySelector('.losser');
const empate = document.querySelector('.tie');

let maxResults = 6;
let gameOver = false;

function resultTable(type) {
    if (gameOver) {
        return;
    }

    let newElement = document.createElement('div'); // Cria o elemento
    newElement.innerText = score[type];             // Adiciona o texto
    if (type === 'wins' && vitoria.children.length < maxResults) {
        vitoria.appendChild(newElement);
    } else if (type === 'losses' && derrota.children.length < maxResults) {
        derrota.appendChild(newElement);
    } else if (type === 'ties' && empate.children.length < maxResults) {
        empate.appendChild(newElement);
    }

    // Verifica se qualquer categoria atingiu o limite de 5
    if (
        vitoria.children.length >= maxResults || 
        derrota.children.length >= maxResults || 
        empate.children.length >= maxResults
    ) {
        
        gameOver = true;
        
    }

    
}

// Moves
const playPedra = document.querySelector('.playPedra');
const playPapel = document.querySelector('.playPapel');
const playTesoura = document.querySelector('.PlayTesoura');

playPedra.addEventListener('click', () => {
    playGame('Pedra');
});
playPapel.addEventListener('click', () => {
    playGame('Papel');
});
playTesoura.addEventListener('click', () => {
    playGame('Tesoura');
});

function randomNumber() {
    const random = Math.random();
    let computerMove = '';
    if (random >= 0 && random < 1/3) {
        computerMove = 'Pedra';
    } else if (random >= 1/3 && random < 2/3) {
        computerMove = 'Papel';
    } else {
        computerMove = 'Tesoura';
    }
    return computerMove;
}

function playGame(playerMove) {
    if (gameOver) {
        return;
    }

    const computerMove = randomNumber();

    let result = '';
    if (playerMove === 'Tesoura') {
        if (computerMove === 'Pedra') {
            result = 'Você perdeu';
        } else if (computerMove === 'Papel') {
            result = 'Você ganhou';
        } else if (computerMove === 'Tesoura') {
            result = 'Empate';
        }
    } else if (playerMove === 'Pedra') {
        if (computerMove === 'Pedra') {
            result = 'Empate';
        } else if (computerMove === 'Papel') {
            result = 'Você perdeu';
        } else if (computerMove === 'Tesoura') {
            result = 'Você ganhou';
        }
    } else if (playerMove === 'Papel') {
        if (computerMove === 'Pedra') {
            result = 'Você ganhou';
        } else if (computerMove === 'Papel') {
            result = 'Empate';
        } else if (computerMove === 'Tesoura') {
            result = 'Você perdeu';
        }
    }

    if (result === 'Você ganhou') {
        score.wins += 1;
        resultTable('wins');
    } else if (result === 'Você perdeu') {
        score.losses += 1;
        resultTable('losses');
    } else if (result === 'Empate') {
        score.ties += 1;
        resultTable('ties');
    }

    spanText.innerText = (`Você escolheu ${playerMove} e a máquina escolheu ${computerMove}`);
    resultT.innerText = result;
    if (vitoria.children.length === maxResults) {
        spanText.innerText = 'Você GANHOU 5X';
        resultT.innerText = 'Reinicie o jogo';
    } else if (derrota.children.length === maxResults) {
        spanText.innerText = 'Você PERDEU 5X';
        resultT.innerText = 'Reinicie o jogo';
    } else if (empate.children.length === maxResults) {
        spanText.innerText = 'Você EMPATOU 5X';
        resultT.innerText = 'Reinicie o jogo';
    }
}
