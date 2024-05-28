const meInput= document.getElementById("Boton");
function cambiarValue (){
    console.log (meInput.value)
    meInput.Value='Lanzamiento Exitoso!✨' //PARA EMOJIS WINDOW Y . (TECLAS)
}
//03. Eventos
meInput.addEventListener('click', cambiarValue)

//EJERCICIO DEL CUADRO DE COLORES
//Variables
const cajaColor= document.getElementById('caja');
const botonesColores =document.querySelectorAll ('.btnColores');

console.log (cajaColor)
console.log (botonesColores)
//funciones
function pintarCaja (e){
    console.log (e.target.getAttribute ('data-color'))
    let newColor = e.target.getAttribute ('data-color')
    cajaColor.style.backgroundColor= 'orange';
}
//EVENTOS
botonesColores[0].addEventListener('click', pintarCaja);
botonesColores[0].addEventListener('click', pintarCaja); //alt + shift + tecla abajo para copiar
botonesColores[0].addEventListener('click', pintarCaja); 
botonesColores[0].addEventListener('click', pintarCaja); 
