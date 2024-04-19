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
    Este programa le muestra al usuario Dos A que estan separadas y se van juntando poco a poco
 */
 const columnas = 8; // Se declara una constante para guardar el número de columnas
 const velocidad = 600; // Se declara una constante para guardar la velocidad de impresión
 
 function imprimirLetras() 
 {
     let posicionA1 = 0; // Se declara una variable para guardar la posición de la letra A1
     let posicionA2 = columnas - 1; // Se declara una variable para guardar la posición de la letra A2
 
     const intervalo = setInterval(() => // Se declara un intervalo para imprimir las letras
     { 
         console.clear(); // Se limpia la consola
 
         for (let i = 0; i < posicionA1; i++) // Se recorre el número de columnas
         {
             process.stdout.write(" "); 
         }
 
         process.stdout.write("A");
 
         for (let i = posicionA1 + 1; i < posicionA2; i++) // Se recorre el número de columnas
         {
             process.stdout.write(" "); 
         }
 
         process.stdout.write("A\n"); 
 
         posicionA1++; 
         posicionA2--; 
 
         if (posicionA1 >= posicionA2) clearInterval(intervalo);
     }, velocidad);
 }
 
 imprimirLetras();