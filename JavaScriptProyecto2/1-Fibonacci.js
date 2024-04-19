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
    Este es un programa le presenta al usuario la serie de Fibonacci sin pasar el numero 10000, la serie de Fibonacci
    es una serie en la cual sus dos primeros números son el 0 y 1, y despues se suman los dos ultimos numeros de la serie.
    Output: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765
 */

function FibonacciDiez(){
    let primerNumeroFibonacci = 0;// Esta variable es el primer número de la funcion fibonacci y la usaremos para sumarla con el segundo número
    let segundoNumeroFibonacci = 1; // Esta variabls es el segundo número de la funcion fibonacci
    let suma = 1; // Esta variable es el resultado de sumar el primer y segundo número de fibonacci
    let serie = []; //Creamos un array donde almacenaremos los datos del .push
    serie.push (primerNumeroFibonacci);
    serie.push (segundoNumeroFibonacci);

    for(let i = 2; primerNumeroFibonacci + segundoNumeroFibonacci <= 10000; i++){
        suma = primerNumeroFibonacci + segundoNumeroFibonacci;
        serie.push(suma)
        primerNumeroFibonacci = segundoNumeroFibonacci
        segundoNumeroFibonacci = suma
    }
    
    console.log("Este programa presenta la serie de Fibonacci como la serie que comienza con los digitos 1 y 0 y va sumando                               progresivamente los dos últimos elementos de la serie, asi: 0 1 1 2 3 5 8 13 21 34...")
    console.log("Para este programa, se presentará la ");
    console.log(`${serie}`);
}
FibonacciDiez();
