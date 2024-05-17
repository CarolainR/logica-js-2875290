//console.log ('Hola mundo');

/* Declarar variables con var, let, const */

var fruta = 'manzana'; //se puede redeclarar y sobreescribir o reasignar
var fruta = 'pera';
fruta = 'piña'

let pais = 'peru'; //no se puede redeclarar pero si se sobreescribe o reasigna
//let pais = 'argentina'; no es valido
pais = 'Francia';

const comida = 'helado';//no se declara ni se sobreescribe o reasigna
// const comida = 'arroz'; //no es valido
//comida = 'helado'; // no es valido

console.log(comida) //comentar

/*formas correctas de declarar variable*/

let nombre = 'Alex';
let nombrePersona = 'Sofia';
let nombre_perro = 'Gaia';
const $caja = 'Cosas';
let dia1 = 'Domingo';
let edad = 45;
let estatura = 1.69;
let disponible = false;

/*formas incorrectas de declarar variable*/
// ctl + } : comentario de una sola linea

// let 1dia = 'domingo';
// let dia uno = 'domingo';
// let dia-uno = 'domingo';

/* Datos booleanos */

// let entra = confirm('¿Quieres entrar?'); //puedes dar true o false

/* Operadores matematicos */

console.log(7*8) // resultado 56

let num1 = 4;
let num2 = 6;

console.log(num1 + num2) //resultado 10

/* El + tiene dos funciones en javascript: sumar y concatenar */
let num3 = 4;
let num4 = '6';

// console.log(num3 + num4) // resultado 46

/* typeof me dice el tipo de dato de una variable */
// let resultado = num3 + num4;//resultado 46
// console.log(resultado);//resultado 46
// console.log(typeof resultado); //string
// console.log('la suma de 4 + "6" es' + resultado + 'por que no puedes sumaar un numero con strign');

// crear una variable (let) que se llame "texto" y va a guardar el resultado de
// 3 + "2" + 5 "ocho"
// al final imprima el resultado en la consola

let texto = "3 + '2' + 5 + 'ocho'";
console.log = (texto);

//ejemplo incremento
let vidas = 5;
vidas++//suma un valor de vidas (6)
vidad--//resta uno al valor de vidas (5)
console.log = (vidas);

let puntuacion = 0;
puntuacion += 3; // le suma y le asigna el valor especificado a la variable
puntuacion += 5; // puntuacion vale 8
puntuacion -=3; // le resta y le asigna el valor especificado a la variable // puntuacion vale 5

console.log ('puntuacion: ')


