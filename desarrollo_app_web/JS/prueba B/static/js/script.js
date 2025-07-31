// Ejercicio 2: Crear función con parámetro y lógica con botón
// Instrucción:
// Crea un programa que incluya un archivo HTML con los siguientes elementos:
// Un input type="text" para ingresar una frase.
// Un botón que ejecute una función llamada contarPalabrasLargas(frase).
// La función debe:
// Recibir una frase como parámetro.
// Recorrer palabra por palabra (puedes usar .split(" ")).
// Contar cuántas palabras tienen más de 5 letras.
// Retornar la cantidad y mostrar el resultado con alert y console.log.

// Ejemplo esperado:
// Frase ingresada: "Estamos practicando lógica en JavaScript"
// Resultado:
// Hay 4 palabras con más de 5 letras.

// Entrega:
// Sube tu código a GitHub.
// Adjunta una captura de pantalla de la ejecución del programa.

function contarPalabrasLargas(frase){
    // Dividir la frase en palabras
    const palabras = frase.split(" ");
    // Contador de palabras largas
    let contador = 0;
    // Recorrer las palabras
    for (let i = 0; i < palabras.length; i++) {
        // Comprobar si la palabra tiene más de 5 letras
        if (palabras[i].length > 5) {
            contador++;
        }
    }
    // Retornar el contador
    return contador;
}

function frase(){
    // Obtener el valor del input
    const inputFrase = document.getElementById("inputFrase").value;
    const frase = inputFrase.trim();
    // Llamar a la función contarPalabrasLargas
    const resultado = contarPalabrasLargas(frase);
    // Mostrar el resultado
    console.log(`Hay ${resultado} palabras con más de 5 letras.`);
    document.getElementById("resultado1").innerText = `Hay ${resultado} palabras con más de 5 letras.`;
}