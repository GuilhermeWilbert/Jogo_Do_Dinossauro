let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

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

    var esquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )    

    if(esquerdaQuadrado < 9 && esquerdaQuadrado > 0 && topPersonagem >= 130){
       quadrado.style.animation = 'none'
       quadrado.style.display= 'none' 
       alert('Você perdeu!', location.reload())
    }
},10)