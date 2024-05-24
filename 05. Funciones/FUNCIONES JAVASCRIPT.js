//FUNCIONES RECIBE UN ELEMENTO Y ENTREGA UNA SALIDA EJEMPLO: microondas
//FUNCION QUE SALUDE AL USUARIO

/* let nombreUsuario = prompt ('dime tu nombre')
//DECLARACIÒN DE LA FUNCION
function saludar(nombre){
    console.log ('funcion ejecutada')
    return 'Bienbenido ${nombre}'
    console.log ('esto nunca se va a ver')
}
//LLAMADO DE UNA FUNCION
console.log(saludar(nombreUsuario))
////Hacer una funcion que multiplique dos numeros.La funcion debe solamente retornar el resultado de la operacion, llamar a la funcion "multiplicar"

let n1=prompt ('ingresa n1 a multiplicar')
let n2=prompt ('ingresa n2 a multiplicar')
function multiplicar (n1,n2){
    console.log (n1*n2)
} */

// crear una funcion que le diga cuanto debe ahorrar al mes segun sus ingresos. La funcion se tiene que llamar calcular ahorro.

let ingresoMensual= prompt ('digitar ingreso mensual total');
let AhorroMensual= (40/100);

function calcularAhorro (ingreso,ahorro){
    return ingreso * ahorro
} //debo mprimir console.log despues de la llave, sino, se vera invalida y la funcion no se hara

console.log (`Tu ahorro es: ${calcularAhorro(ingresoMensual,AhorroMensual)}`);