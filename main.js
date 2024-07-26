let button = document.querySelector('.buttons');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .5 // El porcentaje de visibilidad que queremos observar
}


const observador = new IntersectionObserver(Object =>{
    Object.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('view')
        }
        else{
            entry.target.classList.remove('view')

        }
    })
},options)



observador.observe(button);

let input = document.querySelector('.buscador-input');
let divs = document.querySelectorAll('.banda');


input.addEventListener('keyup', e=>{
    let valorInput = input.value;
    console.log()
    divs.forEach(e =>{
        let bandaTitulo = e.title;
        if(valorInput == ""){
            e.style.display = "Flex";
        }
        else if(bandaTitulo.toLowerCase().includes(valorInput.toLowerCase())){
            e.style.display = "Flex";
            
        }
        else if(!bandaTitulo.toLowerCase().includes(valorInput.toLowerCase())){
            e.style.display = "none";
        }
    
    });
});

let lupa = document.querySelector('.lupa');
let cancelar = document.querySelector('.cancelar')
let info = document.querySelector('.informacion')

window.onload = ()=>{
    cancelar.style.display = "none";
    console.log(divs.length)
}

input.addEventListener('focus', () =>{

    lupa.style.display = "None";
    cancelar.style.display = "block";
})
input.addEventListener('focusout', () =>{
    lupa.style.display = "block";
    cancelar.style.display = "none";

})

cancelar.addEventListener('mouseover', ()=>{
    info.style.display = "flex"
})
cancelar.addEventListener('mouseout', ()=>{
    info.style.display = "none"
})
