/*programa que pregunte la edad de ususario
(PROMTP) y depende del valor, decirle si es nayor o manosr de edad*/

//let usuario = prompt('cual es tu edad')
/* if( edadUsuario >= 18 ) {
    console.log ('eres mayor de edad')
}else{
    console.log ('eres menor de edad')
} */

// depende del color de semaforo le damos un mensaje al usuario si pone un coloor diferente a rojo, amarillo o verde "no se que hacer"

/* let color = prompt ('¿color semaforo?').toLowerCase();
if(color === 'rojo') {
    console.log ('DETENTE') 
}else if ( color === 'amarillo'){
    console.log ('PREPARATE')
}else if ( color === 'verde'){
    console.log ('continuar')
}else{  
    console.log ('no se que hacer')
} */

/* let nombre = prompt ('Ingresa tu nombre').toLowerCase()
let edad = prompt ('ingresa tu edad')
if (nombre === 'mario' || nombre === 'carlos' && edad >= 18){
}
    console.log ('puede ingresar a V.I.P')
if (nombre = 'mario || carlos')
if (edad >= 18) {
    console.log ('entra')
} else if (edad < 18){
    console.log ('no entra')
} */

let jugador;
let pc;

function aleatoria(){
    return Math.ceil(Math.random()*3)
}

jugador = prompt('Elija: 1-PIEDRA, 2-PAPEL, 3-TIJERA');
pc = aleatoria();
alert('Tu elegiste: ' + eleccion(jugador))
alert('PC eligio: ' + eleccion(pc))

if(jugador === pc){
    alert('EMPATE')
}else if(jugador === 1 && pc === 3){
    alert('GANASTE')
}else if(jugador === 2 && pc=== 1){
    alert('GANASTE')
}else if(jugador === 3 && pc === 2){
    alert('GANASTE')
}if(pc === jugador){
    alert('EMPATE')
}else if(pc === 1 && jugador === 3){
    alert('PERDISTE')
}else if(pc === 2 && jugador=== 1){
    alert('PERDISTE')
}else if(pc === 3 && jugador === 2){
    alert('PERDISTE')
}