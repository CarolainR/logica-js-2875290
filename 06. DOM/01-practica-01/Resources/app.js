/* const meInput= document.getElementById("Boton");
function cambiarValue (){
    console.log (meInput.value)
    meInput.Value='Lanzamiento Exitoso!✨' //PARA EMOJIS WINDOW Y . (TECLAS)
}
//03. Eventos
meInput.addEventListener('click', cambiarValue) */

//EJERCICIO DEL CUADRO DE COLORES
//Variables
/* const cajaColor= document.getElementById('caja');
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
 */


//Mover circulo
//VARIABLES
const pelota=document.querySelector('#circulo');
const mover=document.querySelector('#btnMover');
let e=0;
console.log (pelota)
console.log (mover)

//FUNCIONES
function rodar(){
    if (e==0){
        pelota.style.marginLeft= '400px';
        pelota.style.backgroundColor= 'yellow';
        pelota.style.transitionDuration= '.5s';
        e=1;
} else {
        pelota.style.marginLeft= '0px';
        pelota.style.backgroundColor= '#232323';
        pelota.style.transitionDuration= '.5s';
    e=0
}

}
//LLAMADO
btnMover.addEventListener('click', rodar);

//Cambiar imagen
const pantallaImg = document.querySelector('#miImagen')
const btnCambiar = document.querySelector('#btnCambiar');
let estado = 0;
function cambiarImagen(){
    pantallaImg.setAttribute('src','imagen2.jpg')
}

btnCambiar.addEventListener('click',cambiarImagen)