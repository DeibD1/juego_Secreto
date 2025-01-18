//---------------------------------------------
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerMax = 10;
//---------------------------------------------
//console.log(numeroSecreto);
//---------------------------------------------
//Aqui estoy asignandole un elemento a una variable
//En este caso el queryselector mira que elementos hay y lo selecciona y lo trae
//Es un objeto
//ESTO SE LLAMA DOCUMENT MODEL OBJECT
//---------------------------------------------
//let titulo = document.querySelector('h1');
//---------------------------------------------
//InnerHTML nos ayuda a insertal texto a nuestro objeto H1
//---------------------------------------------
//titulo.innerHTML = 'Juego del numero secreto';
//---------------------------------------------
//let parrafo = document.querySelector('p');
//---------------------------------------------
//parrafo.innerHTML = 'Selecciona un numero de 1 a 10';
//---------------------------------------------
//EVENTOS (UX) Todos los eventos comienzan con ON
//---------------------------------------------
//Creacion de funciones (CamelCase)
//Toda funcion tiene parametros que son ()
//---------------------------------------------
//elemento: elementoHTML
//texto: texto al que deseamos cambiar
//siempre poner el return asi no devuelva nada
//---------------------------------------------
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//---------------------------------------------
//Lo hacemos para buscar por ID en la etiqueta input
//---------------------------------------------
function verificacionDelValor() {
    let numeroUsuario = parseInt(document.getElementById('numero').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    //console.log(typeof (numeroUsuario));
    //console.log(numeroUsuario);
    //console.log(numeroSecreto);
    //console.log(typeof (numeroSecreto));
    //el === tiene que ser igual en valor y tipo de dato sino retorna false
    // console.log(numeroUsuario === numeroSecreto);
    return;
}
//---------------------------------------------
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numerMax) + 1;
    //Si el numero generado esta en la lista
    //Metodo para chequear la lista si esta el parametro
    //Includes
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numerMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {

    }
    //---------------------------------------------
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        //Recursividad, una funciona se puede llamar a si misma dentro de esta
        return generarNumeroSecreto();
        //Hay que tener cuidado con la condicion de salida
        //Ya que la recursividad causa bugs 
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
//---------------------------------------------
function limpiarCaja() {
    // con el simbolo de # podemos ubicar el elemento por id
    let valorCaja = document.querySelector('#numero').value = '';
    return;
}
//---------------------------------------------
function nuevoJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar de nuevo el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    return;
}
//---------------------------------------------
function condicionesIniciales() {
    //---------------------------------------------
    asignarTextoElemento('h1', 'Juego del numero secreto');
    //---------------------------------------------
    asignarTextoElemento('p', `Selecciona un numero de 1 a ${numerMax}`);
    //---------------------------------------------
    intentos = 1;
    //---------------------------------------------
    numeroSecreto = generarNumeroSecreto();
    //---------------------------------------------
}
//---------------------------------------------
//Hoisting: No importa si la funcion esta al incio
//aun asi funciona
condicionesIniciales();
//---------------------------------------------
//Listas
//Push: para poner un elemento al final de la lista
//length: para saber el tamaño de la lista
//Acceder a un elemento en particular se usan los [pongo el numero del indice]
// El ultimo elemento es el tamaño del arreglo -1
// En dado caso si tenemos una lista que sea demasiado grade
// para estos casos usamos el [nombredelafuncion.length-1]
// Si quiero eliminar un elemento uso .pop();
//---------------------------------------------
