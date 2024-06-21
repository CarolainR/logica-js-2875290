//console.log('ejecutando')

/*let altura  = prompt ('escriba su altura en cms').toLowerCase()
if (altura<=150 && altura>=80){
    console.log ('persona de altura baja');
}else if (altura>=151 && altura <=170){
    console.log('persona de altura media');
}else if (altura>=171 && altura<=200){
    console.log('persona alta o gigante');
}else if (altura<=79){
    console.log ('eres un minion');
}*/ 


/*let matematica = prompt ('Introduzca la nota de Matematicas');
let español = prompt ('Introduzca la nota de Español');
let sociales = prompt ('Introduzaca la nota de Sociales');
let promedio = (parseFloat (matematica) + parseFloat (español) + parseFloat (sociales) ) /3; //los datos 9+10+9 no sale, tampoco 10+9+10 (se arreglo con poner 9.9 en el segundo else if)

if (promedio === 10){
    console.log ('Excelente ' +promedio);
}else if (promedio >7 && promedio <=9.9){
    console.log ('Bueno ' +promedio);
}else if (promedio <7){
    console.log ('Insuficiente ' +promedio);
//si lo dejo con perseInt el resultado del promedio me saldra un numero entero, pero con perseFloat me saldra el resultado en decimales
} */


//Punto 3 taller

/*let estatura = prompt ('Ingrese su Estatura');
let velocidad = prompt ('Ingrese su Velocidad');
let edad = prompt ('Ingrese su Edad');

if (estatura >= 180 && velocidad >= 10 && edad >= 18){
    console.log ('Pasara al equipo profesional de mayores');
}else if (estatura >= 180 && velocidad >= 10 && edad <= 17){
    console.log ('Pasara a las divisiones menores');
}else if (estatura < 180 || velocidad < 10 || edad <= 18 || edad >= 18){
    console.log ('No puedes ingresar')
} */

//Punto 4 taller

/*let cantidad, precio, compra, descuento1, descuento2, descuento3, pagar1, pagar2, pagar3;

precio = 250000;
cantidad = prompt ('Ingrese la cantidad de escritorios');
compra = precio*cantidad;
descuento1 = compra*(10/100);
descuento2 = compra*(20/100);
descuento3 = compra*(40/100);
pagar1 = (parseFloat (compra-descuento1));
pagar2 = (parseFloat (compra-descuento2));
pagar3 = (parseFloat (compra-descuento3));
if (cantidad >=1 && cantidad <=5){
    console.log ('El descuento es: '+descuento1);
    console.log ('El total a pagar es: '+pagar1);
}else if (cantidad >=6 && cantidad <=9){
    console.log ('El descuento es: '+descuento2);
    console.log ('El total a pagar es: '+pagar2);
}else if (cantidad >= 10){
    console.log ('El descuento es: '+descuento3);
    console.log ('El total a pagar es: '+pagar3);
}*/


//Punto 5 taller
alert ("estas son las frutas existentes en catalogo: papaya, pera, mango, fresa, durazno, maracuya");
let papaya, pera, mango, fresa, durazno, maracuya;

nombre= prompt ('Ingrese el nombre de la fruta que desea llevar');
cantidad= prompt('Ingrese la cantidad que desea llevar');
papaya=1000;
pera=1500;
mango=500;
fresa=1100;
durazno=1500;
maracuya=2000;
/* pedido= (papaya|| pera||mango||fresa||durazno||maracuya)*cantidad;
precioUnitario= (papaya||pera||mango||fresa||durazno||maracuya);
precioTotal = (parseFloat (precioUnitario*cantidad)); */


if (nombre === "papaya"){
    console.log ('El pecio de la papaya por unidad es: ' +papaya + 'y el pecio total es:' + (papaya*cantidad));
}else if (nombre === "pera"){
    console.log ('El pecio de la pera por unidad es: ' +pera +'y el precio total es:' + (pera*cantidad));
}else if (nombre === "mango"){
    console.log ('El pecio del mango por unidad es: ' +mango +'y el pecio total es:' + (mango*cantidad));
}else if (nombre === "fresa"){
    console.log ('El pecio de la fresa por unidad es: ' +fresa +'y el pecio total es:' + (fresa*cantidad));
}else if (nombre=== "durazno"){
    console.log ('El pecio del durazno por unidad es: ' +durazno +'y el pecio total es:' + (durazno*cantidad));
}
else if (nombre === "maracuya"){
    console.log ('El pecio del maracuya por unidad es: ' +maracuya +'y el pecio total es:' + (maracuya*cantidad));
}
