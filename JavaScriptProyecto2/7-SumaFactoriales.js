/*
 - Fecha de publicación: 19 de abril de 2024 
 - Hora de Publicacion: 12:30 p.m
 - Version de su codigo: 1
 - Autores. Ing(c): Juan Jose Posada
 - Nombre del lenguaje utilizado: ECMAScript 6.0 (javascript 6.0 )
 - Version del lenguaje utilizado: 6.0
 - Presentado a: Juan Diego Rincon Franco, Javier Enrique Gomez Carrasquilla, Juan Manuel Morales Santacruz, Julian David Bolivar Agudelo.
 - Universidad Tecnologica de Pereira
 - Programa de Ingenieria de Sistemas y Computación
 - Descripcion del programa:
    Este programa permite que el usuario ponga un número positivo y sepa la suma de los factoriales de ese numero.
        Salvedades:No ingrese números negativos, ni letras ya que no se le garantiza un correcto funcionamiento
 */
 const prompt = require('prompt-sync')(); //Esta variable es para que el usuario pueda interactuar con la consola y nos pueda dar datos

 function SumaFactoriales() {
     let numero = parseInt(prompt('Si n es igual a: ')); // Se lee un número entero no negativo
     while (numero < 0) {
         numero = parseInt(prompt('El número no debe ser negativo, Si n es igual a: '));
     }
 
     let suma = 0; // Se declara una variable para guardar la suma de los factoriales de los números desde 0 hasta N
     let factorial = 1; // Se declara una variable para guardar el factorial de cada número
 
     for (let i = 0; i <= numero; i++) // Se recorre desde 0 hasta el número ingresado
      {
         for (let j = 1; j <= i; j++) // Se calcula el factorial de cada número
         {
             factorial = j * factorial;
         }
         suma += factorial;
         factorial = 1;
     }
 
     console.log(`La suma de sus factoriales es: ${suma}`);
 }
 
 SumaFactoriales();

