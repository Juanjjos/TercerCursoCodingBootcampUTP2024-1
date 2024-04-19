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
    Este programa le muestra al usuario una serie ordenada de 10 ternarios con numeros < 10
 */
 function ternasEnteros() {
    let j = 0; // Se declara una variable para guardar el segundo número de la terna
    let k = 0; // Se declara una variable para guardar el tercer número de la terna

    while (j < 3) // Se recorre hasta llegar a 3
    {
        for (let i = 1; i < 10; i++) // Se recorre desde 1 hasta 9
        {
            if (j === 3) // Si j es igual a 3, se reinicia en 0
            {
                j = 0;
            }
            if (k === 3) // Si k es igual a 3, se reinicia en 0
            {
                k = 0;
            }
            console.log(`${i} ${j + 1} ${k + 1}`);
            k++;
            if (i % 3 === 0) // Si el residuo de i entre 3 es igual a 0, se aumenta j
            {
                j++;
            }
        }
    }
}

ternasEnteros();