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
   Este programa permite que el usuario elija un valor para y que es altura y x que es anchura, y con ello se genere una figura por * y /
 */
 const prompt = require('prompt-sync')();//Esta variable es para que el usuario pueda interactuar con la consola y nos pueda dar datos

 const rush = (x, y) => { // Declaramos una función llamada "rush" que toma dos parámetros, x e y.
    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) { 
      console.log("Los valores de x e y deben ser enteros positivos."); 
      return; 
    }
    const ancho = Math.max(x, 2); // Calcula el ancho máximo como el máximo entre x y 2.
    const topBottom = `/${'*'.repeat(ancho - 2)}\\`; // Crea una cadena que representa la parte superior.
    const topBottom2 = `\\${'*'.repeat(ancho - 2)}/`; // Crea una cadena que representa la parte inferior.
    const middle = `*${' '.repeat(ancho - 2)}*`; // Crea una cadena que representa la parte media del patrón.
    console.log(topBottom); // Imprime la parte superior del patrón.
    for (let i = 0; i < y - 2; i++) { // Bucle para imprimir la parte media del patrón (si y es mayor que 1).
      console.log(middle); // Imprime la parte media del patrón.
    }
    if (y > 1) { // Comprueba si y es mayor que 1.
        console.log(topBottom2);
    } else { 
        console.log("/"); 
    }
  }
  const x = Number(prompt("Ingrese el ancho: ")); // Solicita al usuario que ingrese el ancho del rectángulo.
  const y = Number(prompt("Ingrese el alto: ")); // Solicita al usuario que ingrese el alto del rectángulo.

  rush(x, y); 
