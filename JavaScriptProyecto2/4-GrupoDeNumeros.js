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
    Este programa es para que el usuario ingrese 15 números diferentes y pueda saber cual es el mayor, cual es el menor, 
    cuantos son negativos, y el promedio de los numeros encontrados. 
        Salvedades: No puede ingresar el número cero, ni letras ya que no se le garantiza un correcto funcionamiento del programa
 */
 const prompt = require('prompt-sync')(); //Esta variable es para que el usuario pueda interactuar con la consola y nos pueda dar datos

 function DiferentesCero() {
     let cantidadMayores150 = 0; // Se declara una variable para guardar la cantidad de números mayores a 150
     let numeroMayor = 0; // Se declara una variable para guardar el número mayor
     let numeroMenor = 0; // Se declara una variable para guardar el número menor
     let cantidadNegativos = 0; // Se declara una variable para guardar la cantidad de números negativos
     let promedioPositivos = 0; // Se declara una variable para guardar el promedio de los números positivos
     let sumaPositivos = 0; // Se declara una variable para guardar la suma de los números positivos
     let cantidadPositivos = 0; // Se declara una variable para guardar la cantidad de números positivos
 
     for (let i = 0; i < 15; i++) 
     {
         let numero = parseFloat(prompt(`Ingrese el número ${i + 1}: `)); // Se lee un número dado por el usuario
         while (numero === 0) {
             numero = parseFloat(prompt(`El número no puede ser cero, ingrese el número ${i + 1}: `));
         }
 
         if (numero > 150) {
             cantidadMayores150++;
         }
     
         if (i === 1) {
             numeroMayor = numero;
             numeroMenor = numero;
         } else {
             if (numero > numeroMayor) {
                 numeroMayor = numero;
             }
             if (numero < numeroMenor) {
                 numeroMenor = numero;
             }
         }
     
         if (numero < 0) {
             cantidadNegativos++;
         } else {
             sumaPositivos += numero;
             cantidadPositivos++;
         }
     }
     promedioPositivos = sumaPositivos / cantidadPositivos;

     console.log(`Cantidad de números Mayores a 150: ${cantidadMayores150}`);
     console.log(`Número mayor: ${numeroMayor}`);
     console.log(`Número menor: ${numeroMenor}`);
     console.log(`Cantidad de Números negativos encontrados: ${cantidadNegativos}`);
     console.log(`Promedio de los Positivos Encontrados: ${promedioPositivos}`);
 }
 
 DiferentesCero();
