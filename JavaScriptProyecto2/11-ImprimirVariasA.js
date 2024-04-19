/*
 - *Fecha de publicación: 19 de abril de 2024 
 - Hora de Publicacion: 12:30 p.m
 - Version de su codigo: 1
 - Autores. Ing(c): Juan Jose Posada
 - Nombre del lenguaje utilizado: ECMAScript 6.0 (javascript 6.0 )
 - Version del lenguaje utilizado: 6.0
 - Presentado a: Juan Diego Rincon Franco, Javier Enrique Gomez Carrasquilla, Juan Manuel Morales Santacruz, Julian David Bolivar Agudelo.
 - Universidad Tecnologica de Pereira
 - Programa de Ingenieria de Sistemas y Computación
 - Descripcion del programa:
    Este programa le muestra al usuario un triangulo de varias A
 */

let maximoFilas = 25 //Se declara el maximo de filas de la impresión
let maximoColumnas = 80; //Se declara el maximo de columnas para la impresión

for (let fila = 1; fila <= maximoFilas; fila++){
    let espacio = ''; //Se declara una variable para poner un espacio
    for (let columna = 1; columna <= fila; columna++){
        espacio += 'A'
    }
    console.log(espacio.padStart(maximoColumnas));
}