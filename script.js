let personagem = document.querySelector('#personagem')
let cacto = document.querySelector('#cacto')

function pular(){
    if (personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }
   
    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500);
}

var testarColisao = setInterval( function(){

    var topPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var esquerdaCacto = parseInt(
        window.getComputedStyle(cacto).getPropertyValue('left')
    )    

    if(esquerdaCacto < 9 && esquerdaCacto > 0 && topPersonagem >= 130){
       cacto.style.animation = 'none'
       cacto.style.display= 'none' 
       alert('Você perdeu!', location.reload())
    }
},10)
