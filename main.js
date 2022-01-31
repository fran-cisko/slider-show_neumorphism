'use strict'
const containerImages = document.querySelector('.container-images');
const btn = document.querySelectorAll('.btn');


// cuando haga Click en un pnnto: 
//a. saber su posición(i).
//b. aplicar transform translateX al contenedor de las imágenes.
//c. quitar la clase active de todos los puntos  
//d. añadir la clase active al punto que hacemos click.
 btn.forEach((eachBtn, i) => {
    for(const b of btn){
    btn[i].addEventListener('click',() =>{
        let position = i;
        let move = position * -50;//porque position es 0 o 1.
        containerImages.style.transform = `translateX(${move}%)`;

        btn.forEach(( allbtn, i)=>{
            btn[i].classList.remove('active')
        })
        btn[i].classList.add('active')

    })
    }
    
})
