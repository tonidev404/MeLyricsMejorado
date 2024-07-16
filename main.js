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