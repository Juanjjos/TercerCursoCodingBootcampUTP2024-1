/*
 - *Fecha de publicación: 19 de abril de 2024 
 - Hora de Publicacion: 12:30 p.m
 - Version de su codigo: 1
 - Autores. Ing(c): Juan Jose Posada, Jose Angel Mejia, Juan Esteban Ortiz
 - Nombre del lenguaje utilizado: ECMAScript 6.0 (javascript 6.0 )
 - Version del lenguaje utilizado: 6.0
 - Presentado a: Juan Diego Rincon Franco, Javier Enrique Gomez Carrasquilla, Juan Manuel Morales Santacruz, Julian David Bolivar Agudelo.
 - Universidad Tecnologica de Pereira
 - Programa de Ingenieria de Sistemas y Computación
 - Descripcion del programa:
    Este programa le muestra al usuario un reloj de arena de A's de manera horizontal, desde una parte alejada del comienzo
 */
function filasColumnas() {
    let filas = 4; // Se declara una variable para el número máximo de filas
    let columnas = 7; // Se declara una variable para el número máximo de columnas
    let letra = 'A'; // Se declara una variable para guardar la letra inicial
    let output = ''; // Se declara una variable para guardar la salida

    for (let fila = 1; fila <= filas; fila++) {
        output = '                            '; //Se declara una variable para poner un espacio
        for (let columna = 1; columna <= columnas; columna++) {
            if (columna <= fila || columna >= columnas - fila + 1) {
                output += `${letra}`;
            } else {
                output += ' ';
            }
        }
        console.log(output);
    }

    for (let fila = filas - 1; fila >= 1; fila--) {
        output = '                            ';
        for (let columna = 1; columna <= columnas; columna++) {
            if (columna <= fila || columna >= columnas - fila + 1) {
                output += `${letra}`;
            } else {
                output += ' ';
            }
        }
        console.log(output);
    }
}
filasColumnas();