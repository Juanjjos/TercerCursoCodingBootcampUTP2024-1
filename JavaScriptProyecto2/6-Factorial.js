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
    Este programa permite que el usuario ingresar un número para que sepa cual su factorial.
        Salvedades: No ingrese números negativos, ni letras ya que no se le garantiza un correcto funcionamiento
 */

const prompt = require('prompt-sync')();//Esta variable es para que el usuario pueda interactuar con la consola y nos pueda dar datos

function factorial(numero){
    while (numero < 0) { // Se lee el numero para que no sea negativo
        numero = parseInt(prompt('El número no debe ser negativo, Si n es igual a: '));
    }
    if (numero === 0 || numero === 1){
        return 1;
    } else {
        let resultado = 1; // Se declara una variable para guardar el factorial de cada número
        for (let i = 2; i<=numero; i++){ // Se calcula el factorial de cada número
        resultado *= i;
        }
        return resultado;
    }
}
let numero = parseInt(prompt("Ingrese el numero:")); //Esta variable es para que el usuario nos de un número entero positivo
const resultadoFac = factorial(numero); //Esta variables es para llamar a la función
console.log(`El factorial de`, numero, `es`, resultadoFac);