//creando un arreglo de objetos 

let productosBD=[

    /*{nombre:"camisaDipper",precio:50000, descripcion:"Camisa de color negro con diseño de Dipper"},
    {nombre:"camisaMabel",precio:50000, descripcion:"Camisa de color negro con diseño de Mabel"},*/

    {foto: 'img/FunkoPopDipper.jpg' ,nombre:"Funkpop Dipper", precio:"$ "+124000+" COP", descripcion:"Funkopop de Dipper Pines clásico", boton: "Mostrar Producto"},
    {foto: 'img/termoAluminioPato.jpg', nombre:"Termo Aluminio Pato", precio:"$ "+28000+" COP", descripcion:"Termo de aluminio con diseño de Pato", boton: "Mostrar Producto"},
    {foto:'img/camisaPato.jpg', nombre:"Camisa Pato", precio:"$ "+35000+" COP", descripcion:"Camisa de color blanco con diseño de Pato", boton: "Mostrar Producto"},
    {foto: 'img/tulaDipper.jpg', nombre:"Tula Dipper", precio:"$ "+18000+" COP", descripcion:"Tula Deportiva blanca con diseño de Dipper", boton: "Mostrar Producto"},
    {foto: 'img/llaveroDipper.jpg',nombre:"Llavero Dipper", precio:"$ "+15000+" COP", descripcion:"Llavero con diseño Dipper", boton: "Mostrar Producto"},
    {foto: 'img/comic2GravityFalls.jpg',nombre:"Comic Gravity Falls dos", precio:"$ "+35000+" COP", descripcion:"Comic Gravity Galls volumen dos", boton: "Mostrar Producto"},
    {foto: 'img/comic3GravityFalls.jpg',nombre:"Comic Gravity Falls tres", precio:"$ "+35000+" COP", descripcion:"Comic Gravity Galls volumen tres", boton: "Mostrar Producto"},
    {foto: 'img/comic4GravityFalls.jpg',nombre:"Comic Gravity Falls cuatro", precio:"$ "+35000+" COP", descripcion:"Comic Gravity Falls volumen cuatro", boton: "Mostrar Producto"},
    {foto: 'img/comic5GravityFalls.jpg',nombre:"Comic Gravity Falls cinco", precio:"$ "+35000+" COP", descripcion:"Comic Gravity Falls volumen cinco", boton: "Mostrar Producto"},
    {foto: 'img/comic6GravityFalls.jpg',nombre:"Comic Gravity Falls seis", precio:"$ "+35000+" COP", descripcion:"Comic Gravity Galls volumen seis", boton: "Mostrar Producto"}
]

console.log(productosBD)

//Necesito recorre un arreglo en JS

//1. Creo una variable para lamacenar la base sobre la cual voy a pintar 
let fila=document.getElementById("fila")
productosBD.forEach(function(producto){
    //console.log(producto.nombre)
    //console.log(producto.precio) 
    //console.log(producto.foto)
    //console.log(producto.descripcion)


    //2. pintando etiquetas 

    //div con la clase col 
    let columna=document.createElement("div")
    columna.classList.add("col")
    columna.classList.add("card")
    columna.classList.add("border-secondary")
    columna.classList.add("mb-3")
    

    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

     //h4 con la clase text-center
     let titulo=document.createElement("h4")
     titulo.classList.add("text-center")
     titulo.textContent=producto.nombre

    //necesito un img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.classList.add("h-100")
    foto.src=producto.foto


    //precio con la clase 
    let precio=document.createElement("h5")
    precio.classList.add("text-center")
    precio.textContent=producto.precio

    //Descripción con la clase 
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center")
    descripcion.textContent=producto.descripcion

    //tratar de hacer un boton 
    let boton=document.createElement("button")
    boton.classList.add("btn","btn-info")
    boton.textContent=producto.boton


    //padres e hijos 
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(foto)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(boton)   
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    


})


//rutina para ampliar información del producto 
let filaContenedora=document.getElementById("fila")

filaContenedora.addEventListener("click", function(evento){
    if(evento.target.classList.contains("btn")){

        console.log(evento.target.parentElement.querySelector("h5").textContent)
        console.log(evento.target.parentElement.querySelector("img").src)

        /*let fotoInfo=document.getElementById("fotoInfo")

        fotoInfo.addEventListener("change",mostrarFoto)

        function mostrarFoto () {
            let foto=document.getElementById("fotoInfo")
            foto.src=producto.foto
        }*/

        let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))

        //Cargar información de producto dentro del modal
        let fotoInfo=document.getElementById("fotoInfo")
        fotoInfo.src=evento.target.parentElement.querySelector("img").src

        let tituloInfo=document.getElementById("tituloInfo")
        tituloInfo.textContent=evento.target.parentElement.querySelector("h4").textContent

        let precioInfo=document.getElementById("precioInfo")
        precioInfo.textContent=evento.target.parentElement.querySelector("h5").textContent

        let descripcionInfo=document.getElementById("descripcionInfo")
        descripcionInfo.textContent=evento.target.parentElement.querySelector("p").textContent


        modalInfo.show()

        

    }
})