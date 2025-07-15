console.log("conectado correctamente...");


// 🟦 Ejercicio 1: Repetir una palabra N veces
// 📌 Solicita al usuario una palabra y un número usando prompt. 
// Luego, crea una función que reciba ambos valores como parámetros, 
// repita la palabra N veces utilizando un bucle, y retorne el resultado completo como una cadena de texto. 
// Muestra el resultado con alert.

function repetirPalabra(palabra, numero) {
    let resultado = "";
    for (let i = 0; i < numero; i++) {
        resultado += palabra + " ";
    }
    return resultado.trim();
}

function repetirHastaN() {
    const inputPalabra = document.getElementById("palabra");
    const inputnumero = document.getElementById("numero");
    const palabra = inputPalabra.value.trim()
    const numero = parseInt(inputnumero.value);

    if (!palabra || isNaN(numero) || numero <= 0) {
        alert("Por favor ingresa una palabra válida y un número mayor a 0.");
        return;
    }

    const resultado = repetirPalabra(palabra, numero);
    document.getElementById("resultado1").innerText = `Resultado: ${resultado}`;
inputPalabra.value = "";
inputPalabra.focus
inputnumero.value = ""
inputnumero.focus
}

// 🟦 Ejercicio 2: Comparar dos números
// 📌 Usa prompt para pedir dos números. Crea una función con dos parámetros que compare los valores y 
// retorne un mensaje indicando cuál número es mayor, menor o si son iguales. Muestra el mensaje con alert.
function comparacionValores(numero1, numero2){
    if (numero1 > numero2){
        return `El numero 1: ${numero1} es mayor al numero 2: ${numero2}`
    }
    if (numero2 > numero1){
        return `El numero 2: ${numero2} es mayor al numero 1: ${numero1}`
    }
    else {
        return `Ambos números son iguales: ${numero1}`;
    }
}

function compracion2Numeros(){
    const inputnumero1 = document.getElementById("numero1");
    const inputnumero2 = document.getElementById("numero2");
    const numero1 = parseInt(inputnumero1.value);
    const numero2 = parseInt(inputnumero2.value);
    if(isNaN(numero1) || isNaN(numero2) || numero1 & numero2 <= 0){
        document.getElementById("resultado2").innerText = "Entrada inválida. ingrese un numero o un número mayor a 0.";
        return;
    }
    const mensaje = comparacionValores(numero1, numero2)
    document.getElementById("resultado2").innerText = `${mensaje}`;
inputnumero1.value = ""
inputnumero1.focus
inputnumero2.value = ""
inputnumero2.focus
}


// 🟦 Ejercicio 3: Verificar si un número es par o impar
// 📌 Solicita un número usando input. Diseña una función que reciba ese número como parámetro, 
// determine si es par o impar, y retorne un mensaje con el resultado. Muestra ese mensaje al usuario
function verificarParImpar(numero){
    if (numero % 2 === 0){
        return `El numero ${numero} es par`;
    }
    else{
        return `El numero ${numero} es impar`; 
    }
}

function verifacionnumeroparOimpar(){
    const numero = parseInt(document.getElementById("numeroParImpar").value);
    if(isNaN(numero) || numero <= 0){
        document.getElementById("resultado3").innerText = "Entrada inválida. ingrese un numero o un número mayor a 0.";
        return;
    }
    resultado = verificarParImpar(numero);
    document.getElementById("resultado3").innerText = `${resultado}`;

}