//creando un arreglo de objetos 

let productosBD=[

    /*{nombre:"camisaDipper",precio:50000, descripcion:"camisa color negra dipper"},
    {nombre:"camisaMabel",precio:50000, descripcion:"camisa color negra mabel"},*/

    {foto: 'img/FunkoPopDipper.jpg' ,nombre:"funkpopDipper", precio:124000, descripcion:"funko pop Dipper Pines clásico"},
    {foto: 'img/termoAluminioPato.jpg', nombre:"termoAluminio", precio:28000, descripcion:"Termo aluminio diseño Pato"},
    {foto:'img/camisaPato.jpg', nombre:"camisaPato", precio:35000, descripcion:"camisa color blanca Pato"},
    {foto: 'img/tulaDipper.jpg', nombre:"tulaDipper", precio:18000, descripcion:"Tula Deportiva blanca Dipper"},
    {foto: 'img/llaveroDipper.jpg',nombre:"llaveroDipper", precio:15000, descripcion:"llavero con diseño Dipper"},
    {foto: 'img/comic2GravityFalls.jpg',nombre:"comicGFdos", precio:35000, descripcion:"Comic gravity falls volumen dos"},
    {foto: 'img/comic3GravityFalls.jpg',nombre:"comicGFtres", precio:35000, descripcion:"Comic gravity falls volumen tres"},
    {foto: 'img/comic4GravityFalls.jpg',nombre:"comicGFcuatro", precio:35000, descripcion:"Comic gravity falls volumen cuatro"},
    {foto: 'img/comic5GravityFalls.jpg',nombre:"comicGFcinco", precio:35000, descripcion:"Comic gravity falls volumen cinco"},
    {foto: 'img/comic6GravityFalls.jpg',nombre:"comicGFseis", precio:35000, descripcion:"Comic gravity falls volumen seis"}
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
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    

    //padres e hijos 
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    


})

