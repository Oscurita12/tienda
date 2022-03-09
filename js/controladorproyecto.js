/*Entradas del problema 


let nombreProducto="camisa_dipper"
let precioProducto=30000
let pesoProducto=18.5
let tieneDescuento=true
let descripcionProducto="Camisa con el personaje de Dipper"
let telefonoVendedor="3221542121"

const NOMBRE_CLIENTE="Clara"


//Arreglos unidimensionales 
//Sirven para almacenar varios elementos en una sola variable 
let productos=["camisa Dipper", "camisa Mabel", "gorra Stan", "cuaderno"]
let productos2=Array("camisa Dipper", "camisa Mabel", "gorra Stan", "cuaderno")




//Salidas del problema 


console.log(nombreProducto)
console.log("Su nombre es: "+NOMBRE_CLIENTE+" y su producto es: "+nombreProducto)
console.log(`Su nombre es ${NOMBRE_CLIENTE} y su producto es ${nombreProducto}`)
console.log("***************")
console.log(productos)
console.log(productos2[0])*/


/*Controlando etiquetas 

//1. crear una variable para crear una etiqueta 
let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)

//2. como modificar el texto de una etiqueta 
etiquetaTitulo.textContent="Bill Clave"

// controlando etiqueta

let etiquetaMenuNombre = document.getElementById("nombre")
console.log(etiquetaMenuNombre)

etiquetaMenuNombre.textContent="Gravity Falls"

//controlando una imagen 
let etiquetaFoto = document.getElementById("fotogravityfalls")
etiquetaFoto.src="img/gravityfalls2.png"

//cambiar el estilo de la etiqueta 
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")*/

//TIENDA 
let productosNombre=["camisaDipper","camisaMabel"]
let productosPrecio=[50000, 50000]
let productosPromocion=[true,false]

console.log(productosNombre)
console.log(productosNombre[1])

//creando objetos con JS
let usuario={

    nombre:"Bruno Madrigal",
    edad:50,
    amigos:["Mirabel", "Antonio", "las ratas"]

}

console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.amigos[2])