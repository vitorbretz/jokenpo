const element =  document.querySelectorAll('.conteudo img');
const spanText =  document.querySelector('#about');
const resultT = document.querySelector('.resultado');

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
    
    spanText.innerText = (`Você escolheu ${playerMove} é a maquina escolheu ${computerMove}`)
    resultT.innerText = result
}