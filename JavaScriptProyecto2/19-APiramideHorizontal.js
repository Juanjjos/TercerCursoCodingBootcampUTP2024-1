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
    Este programa le muestra al usuario un medio rombo creado por letras A, desde una posicion alejada al inicio
 */
 function piramideHorizontal() {
    let totalFilas = 11; // Se declara una variable para el número máximo de filas
    let totalColumnas = 40; // Se declara una variable para el número máximo de columnas
    let letra = 'Z'; // Se declara una variable para guardar la letra inicial
    let output = ''; // Se declara una variable para guardar la salida

    for (let fila = 2; fila <= totalFilas - 4; fila++) {
        output = '                                   '; //Se declara una variable para poner un espacio
        for (let columna = 0; columna <= totalColumnas; columna++) {
            if (columna >= totalFilas + 1 - fila && columna < totalFilas ) {
                output += `${letra}`;
            } else {
                output += ' ';
            }
        }
        console.log(output);
    }

    for (let fila2 = totalFilas - 5; fila2 >= 2; fila2--) {
        output = '                                   ';
        for (let columna = 0; columna <= totalColumnas; columna++) {
            if (columna >= totalFilas + 1 - fila2 && columna < totalFilas ) {
                output += `${letra}`;
            } else {
                output += ' ';
            }
        }
        console.log(output);
    }
}
piramideHorizontal();