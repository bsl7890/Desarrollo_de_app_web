// Ejercicio 1: Seguimiento de variables y función con retorno
// A partir del siguiente código, realiza el diagrama de T (seguimiento de variables), indicando cómo
// cambian las variables en cada iteración. Debes analizar los valores de i, total y el valor de retorno
// de la función. Luego, responde: ¿cuál es la salida esperada al ejecutar el código con el número
// ingresado por el usuario?

// Código a analizar:

// function calcularSumaHastaN(){
//     let numero = parseInt(prompt("Ingrese un número:"));
//     let total = 0;
//     for (let i = 1; i <= numero; i++)
//     {
//         total +=i;
//         console.log("i:", i, "total:", total);
//     }
//     alert("La suma de 1 hasta  " + numero + " es: " + total);
//     return total;
// }

// let resultado = calcularSumaHastaN();
// console.log("Resultado final:", resultado)

// Tareas:
// 1. Completar el diagrama de T para cada iteración.
// 2. Indicar la salida esperada de alert y console.log si el usuario ingresa el número 5.
// 3. Explicar brevemente qué hace la función y qué valor retorna.


// Diagrama de T: Seguimiento de variables
//
// simulacion:
// numero = 4
// total = 0
// i = 1
// |---------------|--------------------------------------------------------|
// | Variable      |  valores                                               |
// |---------------|--------------------------------------------------------|
// | i             |   1 -> 2 -> 3 -> 4                                     |
// |---------------|--------------------------------------------------------|
// | total         |   1 -> 3 -> 6 -> 10                                    |
// |---------------|--------------------------------------------------------|
// | resultado     |   10                                                   |
// |---------------|--------------------------------------------------------|
// Resultado esperado:
// 10
// Explicación:
// La función calcularSumaHastaN solicita un número al usuario, luego sumar 1 hasta el numero
// que ingreso el usuario. Retorna el resultado final, 
// que en este caso es 10 cuando el usuario ingresa 4



// Ejercicio 2: Seguimiento de variables y función con retorno
// A partir del siguiente código, realiza el diagrama de T (seguimiento de variables) mostrando cómo
// cambian las variables i, multiplicador y resultado en cada iteración. Luego responde: ¿cuál es el
// valor de resultado al finalizar si el usuario ingresa el número 4?

// function calcularProducto() {
//     let numero = parseInt(prompt("Ingresa un número:"));
//     let resultado = 1;
//     for (let i = 1; i <= numero; i++) {
//         let multiplicador = i * 2;
//         resultado *= multiplicador;
//         console.log("i:", i, "multiplicador:", multiplicador, "resultado:", resultado);
//     }
//     alert("El producto es: " + resultado);
//     return resultado;
// }

// let valorFinal = calcularProducto();
// console.log("Valor final:", valorFinal);


// Tareas:
// 1. Completar el diagrama de T para cada iteración.
// 2. Indicar la salida esperada de alert y console.log si el usuario ingresa el número 4.
// 3. Explicar qué hace la función y qué valor retorna.

// Diagrama de T: Seguimiento de variables
//
// simulacion:
// numero = 4
// resultado = 1
// i = 1
// multiplicador = 2
// |---------------|--------------------------------------------------------|
// | Variable      |  valores                                               |
// |---------------|--------------------------------------------------------|
// | i             |   1 -> 2 -> 3 -> 4                                     |
// |---------------|--------------------------------------------------------|
// | multiplicador |   2 -> 4 -> 6 -> 8                                     |
// |---------------|--------------------------------------------------------|
// | resultado     |   2 -> 8 -> 48 -> 384                                  |
// |---------------|--------------------------------------------------------|
// Resultado esperado:
// El producto es: 384
// Valor final: 384
// Explicación:
// La función calcularProducto solicita un número al usuario, luego calcula el producto de los números
// multiplicados por 2 desde 1 hasta el número ingresado. Retorna el resultado final, que en este caso
// es 384 cuando el usuario ingresa 4. El seguimiento de variables muestra cómo cambian los valores
// de i, multiplicador y resultado en cada iteración del bucle for.


// Ejercicio 3: Función con parámetros y botón
// Crea un programa en JavaScript que cumpla con los siguientes requisitos:
//  Debe existir un input de texto en HTML donde el usuario ingrese un número.
//  Un botón debe ejecutar una función llamada contarPares que reciba como parámetro el
// número ingresado y retorne la cantidad de números pares desde 1 hasta ese número.
//  Muestra el resultado con alert y console.log.
//  Usa for, if y return para la lógica.
//  Sube el proyecto a GitHub y adjunta una captura de pantalla de la ejecución.
// Ejemplo esperado:
// Si el usuario ingresa 10, el resultado debe ser:
// Hay 5 números pares entre 1 y 10.

// Preguntas abiertas:
// 1. ¿Qué diferencia existe entre una variable declarada con let y una declarada con var en
// JavaScript?
// 2. ¿Qué es el valor de retorno (return) de una función y qué sucede si no lo usamos?
// 3. ¿Por qué es importante usar parseInt() o parseFloat() al trabajar con datos obtenidos
// mediante prompt?
// 4. ¿Qué es una condición compuesta (ej. if (a &gt; 0 &amp;&amp; b &lt; 10)) y cuándo es necesaria?
// 5. Explica qué es un evento en JavaScript y cómo se utiliza en un botón para ejecutar una
// función.

