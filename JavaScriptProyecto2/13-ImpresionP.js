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
   Este programa le muestra al usuario una piramide de letras P en una posicion alejada del comienzo
 */
 let maxFilas = 6; // Se declara una variable para el número máximo de filas
 let maxColumnas = 46; // Se declara una variable para el número máximo de columnas
 let minColumnas = 34; // Se declara una variable para el número minimo de columnas
 let letra = "P"; // Se declara una variable para guardar la letra inicial
 for (let fila = 1; fila <= maxFilas; fila++) { 
      let output = '                                   '; //Se declara una variable para poner un espacio
     for (let espaciados = 0; espaciados <= (fila)*2; espaciados++) {
        output += ' '
     }
     for(let columnas = minColumnas; columnas <= maxColumnas - (fila)*2; columnas++){
        output += letra + ' '
    }    
    console.log(output);
}