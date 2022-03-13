//creando un arreglo de objetos 

let productosBD=[

    /*{nombre:"camisaDipper",precio:50000, descripcion:"camisa color negra dipper"},
    {nombre:"camisaMabel",precio:50000, descripcion:"camisa color negra mabel"},*/

    {foto: 'img/FunkoPopDipper.jpg' ,nombre:"Funkpop Dipper", precio:"$ "+124000+" COP", descripcion:"funko pop Dipper Pines clásico"},
    {foto: 'img/termoAluminioPato.jpg', nombre:"Termo Aluminio Pato", precio:"$ "+28000+" COP", descripcion:"Termo aluminio diseño Pato"},
    {foto:'img/camisaPato.jpg', nombre:"Camisa Pato", precio:"$ "+35000+" COP", descripcion:"camisa color blanca Pato"},
    {foto: 'img/tulaDipper.jpg', nombre:"Tula Dipper", precio:"$ "+18000+" COP", descripcion:"Tula Deportiva blanca Dipper"},
    {foto: 'img/llaveroDipper.jpg',nombre:"Llavero Dipper", precio:"$ "+15000+" COP", descripcion:"llavero con diseño Dipper"},
    {foto: 'img/comic2GravityFalls.jpg',nombre:"Comic Gravity Falls dos", precio:"$ "+35000+" COP", descripcion:"Comic gravity falls volumen dos"},
    {foto: 'img/comic3GravityFalls.jpg',nombre:"Comic Gravity Falls tres", precio:"$ "+35000+" COP", descripcion:"Comic gravity falls volumen tres"},
    {foto: 'img/comic4GravityFalls.jpg',nombre:"Comic Gravity Falls cuatro", precio:"$ "+35000+" COP", descripcion:"Comic gravity falls volumen cuatro"},
    {foto: 'img/comic5GravityFalls.jpg',nombre:"Comic Gravity Falls cinco", precio:"$ "+35000+" COP", descripcion:"Comic gravity falls volumen cinco"},
    {foto: 'img/comic6GravityFalls.jpg',nombre:"Comic Gravity Falls seis", precio:"$ "+35000+" COP", descripcion:"Comic gravity falls volumen seis"}
]

console.log(productosBD)

//Necesito recorre un arreglo en JS

//1. Creo una variable para lamacenar la base sobre la cual voy a pintar 
let fila=document.getElementById("fila")
productosBD.forEach(function(producto){
    console.log(producto.nombre)
    console.log(producto.precio) 
    console.log(producto.foto)
    console.log(producto.descripcion)


    //2. pintando etiquetas 

    //div con la clase col 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //necesito un img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    //h4 con la clase text-center
    let titulo=document.createElement("h5")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    //precio con la clase 
    let precio=document.createElement("h5")
    precio.classList.add("text-center")
    precio.textContent=producto.precio

    //Descripción con la clase 
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center")
    descripcion.textContent=producto.descripcion

    //tratar de hacer un boton 
    /*let boton=document.createElement("button")
    boton.classList.add("btn btn-info")
    boton.textContent=*/

    //padres e hijos 
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    


})

