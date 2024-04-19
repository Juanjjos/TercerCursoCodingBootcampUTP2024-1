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
 Para este programa descargamos una extension llamada "prompt-sync", que muestra un dialogo con mensaje que nos permite que el usuario pueda ingresar un dato o 
 informacion que se le pida en ese dialogo, en pocas palabras es para que el usuario pueda interacturar con el programa.
 La instalacion de este programa se realizo con el comando "npm i prompt -sync" desde la terminal de Git Bash.
 Ahora sí, este es un programa que le puede invertir un número entero positivo que usted le proporcione.
    Ejemplo:
    Input: 4359
    Output: 9534
        Salvedades: No ingrese numeros negativos, ni caracteres especiales, ni letras, ya que no se le garantiza un correcto funcionamiento del problema.
 */

const prompt = require('prompt-sync')(); //Esta variable es para que el usuario pueda interactuar con la consola y nos pueda dar datos

console.log('Este programa lee desde el teclado un número entero y lo imprime al revés');
let numero = prompt("Ingrese un número: "); // Se lee un número
let numeroInvertido = ""; // Se declara una variable para guardar el número invertido
let longitud = numero.length; // Se guarda la longitud del número
        
for (let i = longitud - 1; i >= 0; i--) {// Se recorre el número de atrás hacia adelante
            numeroInvertido += numero[i];
    }
        
console.log(`El número invertido es: ${numeroInvertido}`);