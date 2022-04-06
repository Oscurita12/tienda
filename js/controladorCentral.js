import {llenarTienda} from './llenadoTienda.js'
import {ampliarInformacionProducto} from './ampliarInfo.js'

//creo un producto vacío 
let producto={}

//Lamando a llenadoTienda
llenarTienda ()

//creando el modal info
let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
let modalCompra = new bootstrap.Modal(document.getElementById('resumenCompra'))



//rutina para ampliar informacion
let filaContenedora=document.getElementById("fila")
filaContenedora.addEventListener("click", function(evento){
    if(evento.target.classList.contains("btn")){
        producto=ampliarInformacionProducto (evento)
        console.log(producto)
        modalInfo.show()
    }
})

//rutina para el añadir un producto al carrito de compras
let carrito=[]

let botonAgregarCarrito=document.getElementById("botonAdd")
botonAgregarCarrito.addEventListener("click", function(){


    //Debo capturar la canntidad y agregarla al producto 
    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad

    //Agrego los productos al carrito 
    carrito.push(producto)

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    console.log(suma)
    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    console.log(carrito)

    modalInfo.hide()

})
//Rutina para limpiar
let botonLimpiarCarrito=document.getElementById("botonLimpiar")
botonLimpiarCarrito.addEventListener("click", function(){
    carrito=[]

    let capsula=document.getElementById("capsula")
    capsula.classList.add("invisible")
})
//Rutina para ver carrito 
let botonVerCarrito=document.getElementById("verCarrito")
botonVerCarrito.addEventListener("click", function(){

    //Recorrer el carrito y pintar los productos 
    let base=document.getElementById("baseCarrito")

    base.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100", "img-fluid")
        foto.src=producto.foto

        //PADRES E HIJOS
        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)

    })

    modalCompra.show()
})