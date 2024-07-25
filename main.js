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
let divs = document.querySelectorAll('.div');


input.addEventListener('keyup', e=>{
    let value = input.value;
    console.log()
    divs.forEach(e =>{
        let valor = e.title;
        if(value == ""){
            e.style.display = "Block";
        }
        else if(valor.toLowerCase().includes(value.toLowerCase())){
            e.style.display = "block";
            
        }
        else{
            e.style.display = "none";
        }
    
    });
});

let lupa = document.querySelector('.lupa');
let cancelar = document.querySelector('.cancelar')

window.onload = ()=>{
    cancelar.style.display = "none";
}

input.addEventListener('focus', () =>{
    lupa.style.display = "None";
    cancelar.style.display = "block";
})
input.addEventListener('focusout', () =>{
    lupa.style.display = "block";
    cancelar.style.display = "none";

})
cancelar.addEventListener('click', ()=>{
    alert('Achooo')
})