/* MOSTRAR Y OCULTAR MENU**/

const contenedor = document.getElementById("contenedor-side");
contenedor.addEventListener("mouseover", MostrarMenu);
contenedor.addEventListener("mouseout", OcultarMenu);

const navmenu = document.getElementById('nav_menu');
navmenu.addEventListener("mouseover", MostrarMenu);

const navresto = document.getElementById('nav-resto');
navresto.addEventListener("mouseover",MostrarMenu);


function MostrarMenu(){
    const elem =document.getElementById('nav-resto')
    elem.style.display = "flex"
}

function OcultarMenu(){
    const elem =document.getElementById('nav-resto')
    elem.style.display = "none"
}

/* SOBRE MI**/

const dato1 =document.getElementById("dato1");
const dato2 =document.getElementById("dato2");
const dato3 =document.getElementById("dato3");

dato1.addEventListener("mouseover", MostrarA);
dato2.addEventListener("mouseover", MostrarB);
dato3.addEventListener("mouseover", MostrarC);

dato1.addEventListener("mouseout",MostrarA);
dato2.addEventListener("mouseout",MostrarA);
dato3.addEventListener("mouseout",MostrarA);

const preguntas = document.getElementsByClassName("preguntas")

function MostrarA() {    
    for (let i = 0; i < preguntas.length; i++) {
        const pregunta = preguntas[i];
        pregunta.style.display = "none";        
    }

    let info= document.getElementById("quehago");
    info.style.display = "block"
}

function MostrarB() {    
    for (let i = 0; i < preguntas.length; i++) {
        const pregunta = preguntas[i];
        pregunta.style.display = "none";        
    }

    let info= document.getElementById("dondevivo");
    info.style.display = "block"
}

function MostrarC() {    
    for (let i = 0; i < preguntas.length; i++) {
        const pregunta = preguntas[i];
        pregunta.style.display = "none";        
    }

    let info= document.getElementById("cuandonaci");
    info.style.display = "block"
}



/* EXPERIENCIA **/

   const boton1 = document.getElementById("boton1")
   const boton2 = document.getElementById("boton2")
   const boton3 = document.getElementById("boton3")
   const boton4 = document.getElementById("boton4")
   const boton5 = document.getElementById("boton5")
   const boton6 = document.getElementById("boton6")
   const boton7 = document.getElementById("boton7")

   boton1.addEventListener("click",Puesto1)
   boton2.addEventListener("click",Puesto2)
   boton3.addEventListener("click",Puesto3)
   boton4.addEventListener("click",Puesto4)
   boton5.addEventListener("click",Puesto5)
   boton6.addEventListener("click",Puesto6)
   boton7.addEventListener("click",Puesto7)


   const puestos = document.getElementsByClassName("puesto")

   function Puesto1() {

    for (let i = 0; i < puestos.length; i++) {
        const puest = puestos[i];
        puest.style.display = "none";        
    }

    const elemento =document.getElementById("puesto1")
    elemento.style.display="flex"

    boton1.style.borderColor = "#8c52ff"
    boton2.style.borderColor = "#fffa76"
    boton3.style.borderColor = "#fffa76"
    boton4.style.borderColor = "#fffa76"
    boton5.style.borderColor = "#fffa76"
    boton6.style.borderColor = "#fffa76"
    boton7.style.borderColor = "#fffa76"
    
   }
  

   function Puesto2() {

    for (let i = 0; i < puestos.length; i++) {
        const puest = puestos[i];
        puest.style.display = "none";        
    }

    const elemento =document.getElementById("puesto2")
    elemento.style.display="flex"

    boton1.style.borderColor = "#fffa76"
    boton2.style.borderColor = "#8c52ff"
    boton3.style.borderColor = "#fffa76"
    boton4.style.borderColor = "#fffa76"
    boton5.style.borderColor = "#fffa76"
    boton6.style.borderColor = "#fffa76"
    boton7.style.borderColor = "#fffa76"
    
    
   }

   function Puesto3() {

    for (let i = 0; i < puestos.length; i++) {
        const puest = puestos[i];
        puest.style.display = "none";        
    }

    const elemento =document.getElementById("puesto3")
    elemento.style.display="flex"

    boton1.style.borderColor = "#fffa76"
    boton2.style.borderColor = "#fffa76"
    boton3.style.borderColor = "#8c52ff "
    boton4.style.borderColor = "#fffa76"
    boton5.style.borderColor = "#fffa76"
    boton6.style.borderColor = "#fffa76"
    boton7.style.borderColor = "#fffa76"
    
   }

   function Puesto4() {

    for (let i = 0; i < puestos.length; i++) {
        const puest = puestos[i];
        puest.style.display = "none";        
    }

    const elemento =document.getElementById("puesto4")
    elemento.style.display="flex"

    boton1.style.borderColor = "#fffa76"
    boton2.style.borderColor = "#fffa76"
    boton3.style.borderColor = "#fffa76"
    boton4.style.borderColor = "#8c52ff "
    boton5.style.borderColor = "#fffa76"
    boton6.style.borderColor = "#fffa76"
    boton7.style.borderColor = "#fffa76"
   }

   function Puesto5() {

    for (let i = 0; i < puestos.length; i++) {
        const puest = puestos[i];
        puest.style.display = "none";        
    }

    const elemento =document.getElementById("puesto5")
    elemento.style.display="flex"

    boton1.style.borderColor = "#fffa76"
    boton2.style.borderColor = "#fffa76"
    boton3.style.borderColor = "#fffa76"
    boton4.style.borderColor = "#fffa76"
    boton5.style.borderColor = "#8c52ff "
    boton6.style.borderColor = "#fffa76"
    boton7.style.borderColor = "#fffa76"
   }

   function Puesto6() {

    for (let i = 0; i < puestos.length; i++) {
        const puest = puestos[i];
        puest.style.display = "none";        
    }

    const elemento =document.getElementById("puesto6")
    elemento.style.display="flex"

    boton1.style.borderColor = "#fffa76"
    boton2.style.borderColor = "#fffa76"
    boton3.style.borderColor = "#fffa76"
    boton4.style.borderColor = "#fffa76"
    boton5.style.borderColor = "#fffa76"
    boton6.style.borderColor = "#8c52ff "
    boton7.style.borderColor = "#fffa76"
   }

   function Puesto7() {

    for (let i = 0; i < puestos.length; i++) {
        const puest = puestos[i];
        puest.style.display = "none";        
    }

    const elemento =document.getElementById("puesto7")
    elemento.style.display="flex"

    boton1.style.borderColor = "#fffa76"
    boton2.style.borderColor = "#fffa76"
    boton3.style.borderColor = "#fffa76"
    boton4.style.borderColor = "#fffa76"
    boton5.style.borderColor = "#fffa76"
    boton6.style.borderColor = "#fffa76"
    boton7.style.borderColor = "#8c52ff "
    
   }



/**HABILIDADES */

function movimiento() {
    let habilidad = document.getElementById('contenido');
    let distancia = window.innerHeight-habilidad.getBoundingClientRect().top;
    if(distancia>=300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("office")
        habilidades[1].classList.add("cad")
        habilidades[2].classList.add("civil")
        habilidades[3].classList.add("qgis")
        habilidades[4].classList.add("Rstudio")
        habilidades[5].classList.add("htmlcss")
        habilidades[6].classList.add("javascript")

    }
}

window.addEventListener("scroll",movimiento)


/**CONTACTO */


let btn = document.getElementById('btn');

btn.addEventListener("submit",enviar)

function enviar(){
    const confirmacion ="Su mensaje fue enviado correctamente"
    alert(confirmacion)
}