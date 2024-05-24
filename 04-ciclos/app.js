/*EJERCICIO 1
let index = 0;
while (index <=12) {
    console.log (index);
    index++; // ++ significa sumar de a 1, entonces van apareciendo los numeros hasta que se cumplan todas las condiciones
}; */

//EJERCICIO 2
//GUARDA UN ARREGLO DE VALORES INTRODUCIDOS
//SI EL USUARIO NO INTRODUCE UN VALOR TERMINA EL CICLO


//buscar que es un archivo jason o jameson
//ciclos y arrays
/* let materias = ['matematicas', 'sociales', 'español', 'fisica']

//juntando datos con + (concatenar)
console.log ("tu materia es:" + materias[2]) //español
console.log ('materia 1:' + materias [0] + 'materia 2:' + materias [1] + 'materia 3:' + materias[2])

//Template literals
//cnt + alt +)
console.log ('materia 1: ${materias[2]} y despues ${materias[0]}');
console.log(materias[4]);
materias[4] = 'deporte';
console.log(materias)
console.log('El array materias tiene ${materias.length} elementos')
console.log(materias[5]);
console.log (Boolean(materias.length >=6)); ////false
//quiero imprimir un elemento al final del array con length
materias [materias.length]='pintura';
materias[materias.length]='ciencias';
materias.push('lo que sea');
materias.push('mùsica')
materias.pop()
console.log(materias) */

//ciclos y arrays
//primera practica: IMPRIMIR EN UNA LISTA NUMERADA TODOS LOS ELEMENTOS DE UN ARRAY 'peliculas' CON AYUDA DEL CICLO FOR

let peliculas = ['Harry Potter', 'back to the future', 'Batman', 'los 4 fantasticos', 'rapidps y furiosos', 'el chavo', 'avatar', 'el chapulin'];
//inicializacion, condicion, incremento
for(let i =0; i<peliculas.length; i++){
console.log(`${i+1}, ${peliculas[i]}`)
}
/* ////Realizar un programa que le pida artistas o bandas musicales al usuario con ayuda  del ciclo while, cuando el usuario escriba"salir" se 
debe imprimir la lista de artistas que el usuario ingreso. Cada artista añadido se debe guardar en un array.*/
let artistas =[];
let inputusuario = prompt ('dime un artista o "salir" para terminar')

while(inputusuario != 'salir'){
artistas.push(inputusuario)
inputusuario = promp ('dime un artista o "salir" para terminar')
}
for(let i=0; i<artistas.length; i++){
    console.log (`${i+1}.${artistas [i]}`)
}
