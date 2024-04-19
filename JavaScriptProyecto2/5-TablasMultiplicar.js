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
    Este programa le muestra al usuario las tablas de multiplicar del 1 hasta el 10.
 */

 function mostrarTablasMultiplicar() {
    // La variable multiplicador la usaremos para indicar la tabla del numero en concreto
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) 
    {
        console.log(`Tabla del ${multiplicador}`);
        // La variable multiplicando se usa para crear las multiplicaciones del 1 al 10 para las tablas
        for (let multiplicando = 1; multiplicando <= 10; multiplicando++) 
         {
            // La variable resultado se crea para saber el resultado de la multiplicacion del número de tabla y cualquier número del 1 al 10
            let resultado = multiplicador * multiplicando; 
            console.log(`${multiplicador} * ${multiplicando} = ${resultado}`);
        }
    }
}
mostrarTablasMultiplicar();