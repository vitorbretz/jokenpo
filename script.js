const element =  document.querySelectorAll('.conteudo img');
const spanText =  document.querySelector('#about');
const resultT = document.querySelector('.resultado');

const score = {
    wins:0,
    losses: 0,
    ties: 0 
};
let vitoria = document.querySelector('.win')
const derrota = document.querySelector('.losser')
const empate = document.querySelector('.tie')


function resultTableWin(){
    
    let newElement = document.createElement('div'); // Cria o elemento
    newElement.innerText = score.wins;             // Adiciona o texto
    vitoria.appendChild(newElement);   
}
function resultTableTie(){
    
    let newElement = document.createElement('div'); // Cria o elemento
    newElement.innerText = score.ties;             // Adiciona o texto
    empate.appendChild(newElement);   
}
function resultTableLosser(){
    
    let newElement = document.createElement('div'); // Cria o elemento
    newElement.innerText = score.losses;             // Adiciona o texto
    derrota.appendChild(newElement);   
}

//moves
const playPedra = document.querySelector('.playPedra');
const playPapel = document.querySelector('.playPapel');
const playTesoura = document.querySelector('.PlayTesoura');

playPedra.addEventListener('click', ()=>{
    playGame('Pedra')
})
playPapel.addEventListener('click', ()=>{
    playGame('Papel')
})
playTesoura.addEventListener('click', ()=>{
    playGame('Tesoura')
})



function randomNumber(){
    const random = Math.random()
    let computerMove = ''
    if(random >= 0 && random < 1/3){
        computerMove = 'Pedra'
    }else if (random >= 1/3 && random < 2/3){
        computerMove = 'Papel'
    }else{
        computerMove = 'Tesoura'
    }

    return computerMove;
    
}
function playGame(playerMove){
    const computerMove = randomNumber();

    let result = '';
    if (playerMove === 'Tesoura' ){
        if (computerMove === 'Pedra'){
            result = 'Você perdeu'
        }else if (computerMove === 'Papel'){
            result = 'Você ganhou'
        }else if (computerMove === 'Tesoura'){
            result = 'Empate'
        }
    }else if (playerMove === 'Pedra' ){
        if (computerMove === 'Pedra'){
            result = 'Empate'
        }else if (computerMove === 'Papel'){
            result = 'Você perdeu'
        }else if (computerMove === 'Tesoura'){
            result = 'Você ganhou'
        }
    }else if (playerMove === 'Papel' ){
        if (computerMove === 'Pedra'){
            result = 'Você ganhou'
        }else if (computerMove === 'Papel'){
            result = 'Empate'
        }else if (computerMove === 'Tesoura'){
            result = 'Voce perdeu'
        }
    }
    
    if(result === 'Você ganhou'){
        score.wins += 1;
        resultTableWin()
    }else if(result === 'Voce perdeu'){
        score.losses += 1;
        resultTableLosser()
    }else if(result === 'Empate'){
        score.ties += 1;
        resultTableTie()
    }
    spanText.innerText = (`Você escolheu ${playerMove} é a maquina escolheu ${computerMove}`)
    resultT.innerText = result
}