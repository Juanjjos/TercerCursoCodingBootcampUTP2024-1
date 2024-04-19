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
    Este programa le muestra al usuario una serie ordenada de 10 parejas con números < 10
 */
 function parejasEnteros() {
    let j = 0; // Se declara una variable para guardar el segundo número de la pareja

    while (j < 2) {
        for (let i = 0; i < 10; i++) // Se recorre desde 0 hasta 9
        {
            if (i % 2 === 0) {
                j++;
            } 
            console.log(`${i} ${j}`);
        } 

    }
}

parejasEnteros();

