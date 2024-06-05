//1.Variables
const btnNumeros= document.querySelectorAll ('.min');
const flotante = document.querySelector('#flotante');
const cuadroOpacidad = document.querySelector ('#cuadro');
const equis = document.querySelector('#equis');
const btnSiguiente= document.querySelector('#sig');
const btnAnterior=document.querySelector('#ant');
const imgPrincipal=document.querySelector ('#imgprincipal');
//2.Funciones

function lightbox (e){
    //console.log (e.target.src)
    let currentImg = e.target.src;
    flotante.computedStyleMap.top = '0vh';
    flotante.computedStyleMap.transitionDuration = '.5s';
    imgPrincipal.setAttribute('src',currentImg);
}function cerrar (){
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '.5s'

}

//3.eventos
btnNumeros [0] .addEventListener ('click',lightbox);
btnNumeros [1] .addEventListener ('click',lightbox);
equis.addEventListener ('click',cerrar)
cuadroOpacidad.addEventListener('click',cerrar)
// no entiendo por que no me funciona :( pero ya se habia terminado la clase ¿puedo mañana corregirlo contigo?? o me haces retroalimentacion por correo?