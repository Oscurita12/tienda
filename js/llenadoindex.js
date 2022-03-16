let personajes=[

    {fotop: 'img/Dipper-Pines.jpg', nombre: "Dipper Pines", descripcionp: "Dipper es un chico muy inteligente, organizado y crítico con lo que hace. Le interesa y disfruta mucho de resolver los misterios del pueblo, analizar y hacer teorías, aunque también puede llegar a ponerse paranoico respecto a los eventos paranormales del pueblo."},
    {fotop: 'img/MaPines.jpg', nombre: "Mabel Pines", descripcionp: "Mabel es reconocida por ser alegre, optimista, divertida, relajada y soñadora. Siempre disfruta cualquier momento con sus amigos y está dispuesta a realizar cualquier actividad divertida o extrema con tal de divertirse."},
    {fotop: 'img/StanPines.jpg', nombre: "Stan Pines", descripcionp: "Es un hombre rudo, avaro y un rudo vendedor que consiguió crear una tienda en un pueblo con varios clientes incoherentes para vender sus artilugios sin valor."},
    {fotop: 'img/Ford_Pines.jpg', nombre: "Ford Pines", descripcionp: "Ford es considerado un hombre muy serio y centrado. Cuando era joven, al ser considerado como un 'fenómeno' por sus seis dedos en cada mano, otros niños se burlaban de él, hasta que aprendió a ignorarlos."},
    //{fotop: 'img/Wendy_Corduroy.jpg', descripcionp: "Wendy es reconocida por su actitud relajada, rebelde y sencilla, que solo desea divertirse y pasar un buen rato. A Wendy le gusta llevarse bien con la gente, y siempre está dispuesta a dar apoyo y consejos a sus amigos si lo necesitan."},
    //{fotop: 'img/Gideon_1.jpg', descripcionp: "Pese a su adorable apariencia, Gideon en realidad es todo lo contrario a lo que aparenta. A pesar de su mala actitud, Gideon ha demostrado que de verdad puede ser bueno con aquellos que de verdad quiere y ama, como ocurrió con Mabel la primera vez."},
    //{fotop: 'img/Soos_Ramirez.jpg', descripcionp: "Soos es muy amigable y adorable empleado cuyo deseo de estar donde está la acción, por lo que es un excelente recurso para los gemelos cuando necesitan una vuelta por el pueblo."}, 
    //{fotop: 'img/Pato.jpg', descripcionp: "Es un pequeño cerdito regordete de piel rosada clara. Posee tres manchas, una pequeña ubicada en su ojo izquierdo, otra grande ubicada cerca de su cola, junto a una pequeña también ubicada cerca del mismo lugar."},    
    {fotop: 'img/Bill_Clave.jpg', nombre: "Bill Clave", descripcionp: "Bill es un demonio del sueño que para él todo es divertido y no tiene remordimiento alguno al matar o destruir cosas. Es extraño y da la sensación de que está loco."},
    {fotop: 'img/El_Viejo_McGucket.jpg', nombre: "Fiddleford McGucket", descripcionp:"Su personalidad es algo demente y loca, pero a lo largo de la serie ha demostrado ser más inteligente de lo que aparenta. Es conocido como el 'loco del pueblo' por su actitud excéntrica."}
   
]

console.log(personajes)


let filap=document.getElementById("personajes")
personajes.forEach(function(personaje){
    console.log(personajes.fotop)
    console.log(personajes.descripcionp)


    let columnap=document.createElement("div")
    columnap.classList.add("col")
    

    let tarjetap=document.createElement("div")
    tarjetap.classList.add("card")
    tarjetap.classList.add("border-dark")
    tarjetap.classList.add("mb-3")

    let titulo=document.createElement("h3")
    titulo.classList.add("text-center")
    titulo.textContent=personaje.nombre

    let foto2p=document.createElement("img")
    foto2p.classList.add("card-img-top")
    foto2p.src=personaje.fotop

    let descripcionp=document.createElement("p")
    descripcionp.classList.add("text-center")
    descripcionp.textContent=personaje.descripcionp

    tarjetap.appendChild(titulo)
    tarjetap.appendChild(foto2p)
    tarjetap.appendChild(descripcionp)
    columnap.appendChild(tarjetap)
    filap.appendChild(columnap)
    
})