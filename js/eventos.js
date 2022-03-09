let etiquetaBoton=document.getElementById("boton")

etiquetaBoton.addEventListener("click",cambiarFoto)
function cambiarFoto() {

    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="Buenos días señor"
}

let etiquetaImagen=document.getElementById("fotogravityfalls")

etiquetaImagen.addEventListener("mouseover", cambiarTitulo)

function cambiarTitulo() {

    let titulo=document.getElementById("titulo")
    titulo.textContent="Le temeran al ser de un solo ojo"
}
