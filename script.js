const element =  document.querySelectorAll('.conteudo img')
element.forEach((item)=>{
    item.addEventListener('click', randomNumber)
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
    console.log(computerMove)
        
}