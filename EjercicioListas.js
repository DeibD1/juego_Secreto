/*
1. Crea una lista vacía llamada "listaGenerica".
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6. Crea una función que calcule el promedio de los elementos en una lista de números.
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8. Crea una función que devuelva la suma de todos los elementos en una lista.
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

//1. 
let listaGenerica = [];
//2.
let lenguajesDeProgramacion = ['JS', 'C', 'C++', 'Kotlin', 'Python'];
//3.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//4.
function mostrarLista() {
    console.log(lenguajesDeProgramacion);
}
//5.
function mostrarListaInversa(){
//El .reverse() nos ayuda a mostrar los elementos de la lista en orden inverso
    console.log(lenguajesDeProgramacion.reverse());
}
//6.
function promedioLista(listaNumeros){
    let promedio = listaNumeros.reduce((sumado,actual)=> sumado + actual,0)
    return promedio / listaNumeros.length;
}
//7.
function numMaxMin(listaNumeros){
    let numMax = Math.max(listaNumeros);
    let numMin = Math.min(listaNumeros);
    console.log(`El numero maximo es ${numMax} y el minimo es ${numMin}`);
}
//8.
function sumarNumerosLista(listaNumeros) {
    return listaNumeros.reduce((sumado, actual) => sumado + actual, 0);
}
//9.
function verificarElemento(listaNumeros,elemento){
   return listaNumeros.indexof(elemento);
}
//10.
function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}
//11.
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}