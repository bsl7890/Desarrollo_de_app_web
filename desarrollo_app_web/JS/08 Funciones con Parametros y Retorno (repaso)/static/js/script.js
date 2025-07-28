// Ejercicio 1 (Seguimiento con Diagrama de T y Return)
// Instrucción:
//  Analiza el siguiente código, realiza el diagrama de seguimiento de variables (tabla T) para las variables i, acumulador y resultado, y determina qué valor retorna la función para la cadena "javascript".
// Objetivo de aprendizaje:
// Comprender cómo una función manipula datos paso a paso.


// Seguir el cambio de variables dentro de bucles y condicionales.


// Analizar el flujo de ejecución con return.


// Código:
// function contarVocales(texto) {
//     let acumulador = 0;
//     for (let i = 0; i < texto.length; i++) {
//         if (
//             texto[i] === "a" ||
//             texto[i] === "e" ||
//             texto[i] === "i" ||
//             texto[i] === "o" ||
//             texto[i] === "u"
//         ) {
//             acumulador++;
//         }
//     }
//     return acumulador;
// }

// let resultado = contarVocales("javascript");
// alert(resultado);


// Diagrama en T: Representación gráfica de seguimiento de variables.
//
// simulacion:
// texto   →  "javascript"

//  |--------------------------------------------------------------------------|
//  | Variable  |  valores                                                     |      
//  |-----------|--------------------------------------------------------------|
//  |i          |   0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10       |   
//  |-----------|--------------------------------------------------------------|
//  |acumulador |   0 -> 1 -> 2 --> 3                                          |  
//  |-----------|--------------------------------------------------------------|
//  |texto      |  "javascript"                                                |   
//  |-----------|--------------------------------------------------------------|
//  |resultado  |   3                                                          |  
//  |-----------|--------------------------------------------------------------|

// Resultado esperado:
// 3


// Ejercicio 2 (Función con Parámetros y Return)
// Instrucción:
//  Crea una función llamada filtrarMultiples que:
// Reciba dos parámetros: un número limite y otro número multiplo.


// Retorne un arreglo con todos los números desde 1 hasta limite que sean divisibles por multiplo.


// Muestra el resultado con html (formateado como cadena).


// Usa input para pedir limite y multiplo.


// Objetivo de aprendizaje:
// Diseñar una función que use parámetros y retorne un valor.


// Practicar bucles for y condicionales if para filtrar datos.


// Aplicar lógica de divisibilidad y construir arreglos dinámicos.


// Ejemplo esperado:
//  Si el usuario ingresa limite = 10 y  multiplo = 3, el resultado será:
// Números encontrados: 3, 6, 9



function filtrarMultiples(numeroLimite, numeroMultiplo){
    let resultado = []
    for(let i = 1; i <= numeroLimite ; i++)
    {
        if (i % numeroMultiplo === 0) 
        {
            resultado.push(i);
        }    
    }
    return resultado
}

function multiplos(){
    inputLimite = document.getElementById("limite")
    inputMultiplo = document.getElementById("multiplo")
    limite = parseInt(inputLimite.value)
    multiplo = parseInt(inputMultiplo.value)

    let numeros = filtrarMultiples(limite, multiplo);

    if (numeros.length === 0) {
        document.getElementById("resultado1").innerText = "No se encontraron múltiplos.";
    } else {
        document.getElementById("resultado1").innerText = "Números encontrados: " + numeros.join(", ");
    }

    inputLimite.value = "";
    inputMultiplo.value = "";
    inputMultiplo.focus()
}