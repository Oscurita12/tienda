//rutina para ampliar información del producto 


//filaContenedora.addEventListener("click", function(evento){
    //if(evento.target.classList.contains("btn")){

        //console.log(evento.target.parentElement.querySelector("h5").textContent)
        //console.log(evento.target.parentElement.querySelector("img").src)

        /*let fotoInfo=document.getElementById("fotoInfo")

        fotoInfo.addEventListener("change",mostrarFoto)

        function mostrarFoto () {
            let foto=document.getElementById("fotoInfo")
            foto.src=producto.foto
        }*/

        //let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
        //modalInfo.show()
    //}
//})


export function ampliarInformacionProducto (evento){
    //Cargar información de producto dentro del modal

    let producto={}

    //lleno la información del producto
    producto.foto=evento.target.parentElement.querySelector("img").src
    producto.titulo=evento.target.parentElement.querySelector("h4").textContent
    producto.precio=evento.target.parentElement.querySelector("h5").textContent
    producto.descripcion=evento.target.parentElement.querySelector("p").textContent

    let fotoInfo=document.getElementById("fotoInfo")
    fotoInfo.src=evento.target.parentElement.querySelector("img").src

    let tituloInfo=document.getElementById("tituloInfo")
    tituloInfo.textContent=evento.target.parentElement.querySelector("h4").textContent

    let precioInfo=document.getElementById("precioInfo")
    precioInfo.textContent=evento.target.parentElement.querySelector("h5").textContent

    let descripcionInfo=document.getElementById("descripcionInfo")
    descripcionInfo.textContent=evento.target.parentElement.querySelector("p").textContent

    //devolver el producto generado
    return producto
}