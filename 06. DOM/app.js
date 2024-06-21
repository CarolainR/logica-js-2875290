/* //Hacer un contador con un boton menos y un mas, debe de tener: condicionales, 2 funciones, 4 variables, inner text y ++. 
Contador que incremente solo hasta 20.No puede mostrar numeros por debajo del 0 */
//1. variables
const numero= document.getElementById ('pantalla');
const menos= document.getElementById ('menos');
const mas= document.getElementById ('mas');
let i=0;

//2. Funciones
function incrementar (){
    if(i<20){
        i++;
        numero.innerText = i;
    }
}
function decrementar (){
    if (i>0){
        i--;
        numero.innerText = i;
    }
}
//3. Llasmado y eventos
mas.addEventListener('click', incrementar);
menos.addEventListener('click', decrementar);
