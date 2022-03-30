import {llenarTienda} from './llenadoTienda.js'
import {ampliarInformacionProducto} from './ampliarInfo.js'

//creo un producto vacío 
let producto={}

//Lamando a llenadoTienda

llenarTienda ()

//rutina para ampliar informacion
let filaContenedora=document.getElementById("fila")
filaContenedora.addEventListener("click", function(evento){
    if(evento.target.classList.contains("btn")){
        let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
        producto=ampliarInformacionProducto (evento)
        console.log(producto)
        modalInfo.show()
    }
})

//rutina para el añadir un producto al carrito de compras
let carrito=[]

let botonAgregarCarrito=document.getElementById("botonAdd")
botonAgregarCarrito.addEventListener("click", function(){

    carrito.push(producto)
    console.log(carrito)
})