/*
 - Fecha de publicación: 19 de abril de 2024 
 - Hora de Publicacion: 12:30 p.m
 - Version de su codigo: 1
 - Autores. Ing(c): Juan Jose Posada, Jose Angel Mejia, Juan Esteban Ortiz
 - Nombre del lenguaje utilizado: ECMAScript 6.0 (javascript 6.0 )
 - Version del lenguaje utilizado: 6.0
 - Presentado a: Juan Diego Rincon Franco, Javier Enrique Gomez Carrasquilla, Juan Manuel Morales Santacruz, Julian David Bolivar Agudelo.
 - Universidad Tecnologica de Pereira
 - Programa de Ingenieria de Sistemas y Computación
 - Descripcion del programa:
    Este es un programa le presenta al usuario la serie de Fibonacci sin pasar el numero 100, la serie de Fibonacci
    es una serie en la cual sus dos primeros números son el 0 y 1, y despues se suman los dos ultimos numeros de la serie.
    Output: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765 y su suma es 232.
 */

function FibonacciSuma(){
    let primerNumeroFibonacci = 0; // Esta variable es el primer número de la funcion fibonacci y la usaremos para sumarla con el segundo número
    let segundoNumeroFibonacci = 1; // Esta variabls es el segundo número de la funcion fibonacci
    let tercer = 1; //Esta variable es el resultado de sumar el primer y segundo número de fibonacci
    let sumaC = []; //Creamos un array donde almacenaremos los datos del .push
    let sumaFibo = 0; //Esta variable nos va a dar la suma total de los numeros de fibonacci
    sumaC.push(primerNumeroFibonacci);
    sumaC.push(segundoNumeroFibonacci);
    sumaFibo = primerNumeroFibonacci + segundoNumeroFibonacci

    for(let i = 0; primerNumeroFibonacci + segundoNumeroFibonacci <= 100; i++){
        tercer = primerNumeroFibonacci + segundoNumeroFibonacci;
        sumaFibo = tercer + sumaFibo;
        sumaC.push(tercer)
        primerNumeroFibonacci = segundoNumeroFibonacci;
        segundoNumeroFibonacci = tercer;
    }
    console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.")
    console.log("Los números a sumar son:")
    console.log(sumaC + " y su suma es:" + sumaFibo)
}
FibonacciSuma();
