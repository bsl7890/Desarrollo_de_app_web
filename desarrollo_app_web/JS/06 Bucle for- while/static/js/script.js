console.log("conectado correctamente...");

// ✅ Ejercicio 1: Contador del 1 al N
// Pide al usuario un número con prompt() y usa un for para mostrar los números del 1 hasta ese número.
let numeros = []
function contadorHastaN() {
    let n = parseInt(prompt("Entroduce un numero:"));
// Mostar la lista numero hasta n y que se guarde en una lista
    if (isNaN(n) || n <= 0) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, introduce un número válido mayor que 0.</p>";
        return;
    }
    else{
        numeros = []; // Reiniciar el array numeros
        // Limpiar el contenido previo del elemento con id "resultado"
        document.getElementById("resultado").innerHTML = ""; 
        for (let i = 1; i <= n; i++) {
            numeros.push(i);
        }
        document.getElementById("resultado").innerHTML = `<p>Contador del 1 al ${n}: <br><strong>{${numeros.join(", ")}}</strong></p>`;
    }
}

// ✅ Ejercicio 2: Suma de 5 números
// Con un while, pide 5 números al usuario (uno por uno con prompt()) y los numeros deben estar guardado en un arrays y muestra la suma total en pantalla.
let numeroUsuario = [];
function sumar5Numeros(){
    let suma = 0;
    let contar = 1;
    while (contar <= 5){
        let numero = parseFloat(prompt(`Introduce el número ${contar}:`));
        if (isNaN(numero)) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, introduce un número válido.</p>";
            return;
        }
        numeroUsuario.push(numero); 
        suma += numero;
        contar++;
    }

    document.getElementById("resultado").innerHTML = `<p>La suma de los números introducidos es: <strong>${suma}</strong></p>`;
    document.getElementById("resultado").innerHTML += `<p>Los números introducidos son: <strong>{${numeroUsuario.join(", ")}}</strong></p>`;
}

// ✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
// Usa un for para mostrar en pantalla solo los números pares del 1 al 20.
numerosPares = [];
function Pares(){
    numerosPares = []; // Reiniciar el array numerosPares
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    document.getElementById("resultado").innerHTML = `<p>Números pares del 1 al 20: <strong>{${numerosPares.join(", ")}}</strong></p>`;
}

// ✅ Ejercicio 4: Contador regresivo con condición
// Pide un número al usuario y, usando un while, cuenta regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".
numerosRegresivos = [];
function contadorRegresivo(){
    let numero = parseInt(prompt("Introduce un número para contar regresivamente:"));
    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").innerHTML = "<p>Número no válido. Por favor, introduce un número mayor o igual a 0.</p>";
        return;
    }
    numerosRegresivos = []; // Reiniciar el array numerosRegresivos
    document.getElementById("resultado").innerHTML = ""; // Limpiar el contenido previo del elemento con id "resultado"
    while (numero >= 0) {
        numerosRegresivos.push(numero);
        numero--;
    }
    document.getElementById("resultado").innerHTML = `<p>Contador regresivo: <strong>{${numerosRegresivos.join(", ")}}</strong></p>`;
}

// ✅ Ejercicio 5: Mostrar la tabla de multiplicar de un número
// Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10.

multiplicacion = [];
function tablaMultiplicar(){
    let numero = parseInt(prompt("Introduce un número para mostrar su tabla de multiplicar:"));
    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, introduce un número válido.</p>";
        return;
    }
    multiplicacion = []; // Reiniciar el array multiplicacion
    document.getElementById("resultado").innerHTML = ""; // Limpiar el contenido previo del elemento con id "resultado"
    for (let i = 1; i <= 10; i++) {
        multiplicacion.push(`${numero} x ${i} = ${numero * i}`);
        console.log(multiplicacion.join(", "));
    }
    document.getElementById("resultado").innerHTML = `<p>Tabla de multiplicar del ${numero}: <br><strong><br>${multiplicacion.join("<br>")}<br></strong></p>`;
}
// Diagrama en T: Representación gráfica de seguimiento de variables.
//
// simulacion:
// numero -> 2: Input)Ingreso de valores
//  |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
//  |Varibale        |     Valores                                                                                                                                                                                         |
//  |----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
//  |multiplicacion  |	["2 x 1 = 2"]-> ["2 x 1 = 2", "2 x 2 = 2"]-> [.....] -> ["2 x 1 = 2", "2 x 2 = 4", "2 x 3 = 6", "2 x 4 = 8", "2 x 5 = 10", "2 x 6 = 12", "2 x 7 = 14", "2 x 8 = 16", "2 x 9 = 18", "2 x 10 = 20"]  |   
//  |----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
//  |numero          |    2                                                                                                                                                                                                |
//  |----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

// Detalle del for paso a paso:

//  |------------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
//  |i  | Expresión    |           Resultado             |  Estado de multiplicacion                                                                                |
//  |---|--------------|--------------------------------------------------------------------------------------------------------------------------------------------|
//  |1  |   2 x 1 = 2  |   "2 x 1 = 2"                   | ["2 x 1 = 2"]                                                                                            |
//  |---|--------------|--------------------------------------------------------------------------------------------------------------------------------------------|
//  |2  |   2 x 2 = 4  |   "2 x 2 = 4"                   | ["2 x 2 = 4"]                                                                                            |
//  |---|--------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
//  |3  |   2 x 3 = 6  |   "2 x 3 = 6"                   | ["2 x 3 = 6"]                                                                                            |
//  |---|--------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
//  |4  |   2 x 4 = 8  |   "2 x 4 = 8"                   | ["2 x 4 = 8"]                                                                                            |
//  |---|--------------|--------------------------------------------------------------------------------------------------------------------------------------------|
//  |5  |   2 x 5 = 10 |   "2 x 5 = 10"                  | ["2 x 5 = 10"]                                                                                           |
//  |---|--------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
//  |6  |   2 x 6 = 12 |   "2 x 6 = 12"                  | ["2 x 6 = 12"]                                                                                           |
//  |---|--------------|--------------------------------------------------------------------------------------------------------------------------------------------|
//  |7  |   2 x 7 = 14 |   "2 x 7 = 14"                  | ["2 x 7 = 14"]                                                                                           |
//  |---|--------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
//  |8  |   2 x 8 = 16 |   "2 x 8 = 16"                  | ["2 x 8 = 16"]                                                                                           |
//  |---|--------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
//  |9  |   2 x 9 = 18 |   "2 x 9 = 18"                  | ["2 x 9 = 18"]                                                                                           |
//  |---|--------------|--------------------------------------------------------------------------------------------------------------------------------------------|
//  |10 |   2 x 10 = 20|   "2 x 10 = 20"                 | ["2 x 10 = 20"]                                                                                          |
//  |---|--------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
//
//
// Resultado esperado:
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20




// ✅ Ejercicio 6: Sumar hasta que se ingrese cero
// Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado.
let sumaAcumulada  = [];
function sumarHastaCero() {
    let suma = 0;
    let numero;
    sumaAcumulada = []; // Reiniciar el array sumaAcumulada
    document.getElementById("resultado").innerHTML = ""; // Limpiar el contenido previo del elemento con id "resultado"
    
    while (true) {
        numero = parseFloat(prompt("Introduce un número para sumar (0 para terminar):"));
        if (isNaN(numero)) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, introduce un número válido.</p>";
            return;
        }
        if (numero === 0) {
            break; // Terminar el bucle si el usuario ingresa 0
        }
        suma += numero;
        sumaAcumulada.push(numero);
    }
    document.getElementById("resultado").innerHTML = `<p>Total acumulado: <strong>${suma}</strong></p>`;
    document.getElementById("resultado").innerHTML += `<p>Números sumados: <strong>{${sumaAcumulada.join(", ")}}</strong></p>`;
}

// Diagrama en T: Representación gráfica de seguimiento de variables.
//
// simulacion:
// numero → 5, 10, 6, 0 : (Input)Ingreso de valores
//  |---------------------------------------|
//  |Varibale        |     Valores          |
//  |----------------|----------------------|
//  |sumaAcumulada   |[],[5],[5,10],[5,10,6]|   
//  |----------------|----------------------|
//  |suma            |0, 5, 15, 21          |
//  |----------------|----------------------|
//  |número          |undefined, 5, 10, 6, 0|
//  |----------------|----------------------|
//
// mostrar salidas esperadas:
// Números sumados: 5, 10, 6
// Total acumulado: 21

// ✅ Ejercicio 7: Mostrar letras de una palabra
// Pide al usuario una palabra y usa un for para mostrar cada letra por separado en el HTML.

function mostrarLetras() {
    let palabra = prompt("Introduce una palabra:");
    if (!palabra) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, introduce una palabra válida.</p>";
        return;
    }

    let letras = palabra.split("");
    document.getElementById("resultado").innerHTML = `<p>Letras de la palabra "${palabra}": <strong>${letras.join(" - ")}</strong></p>`;
}

// Diagrama en T: Representación gráfica de seguimiento de variables.
//
// simulacion:
// palabra -> parangariturimicuaro: Input)Ingreso de valores
//  |-------------------------------------------------------------------------------------------------------------------------|
//  |Varibale        |     Valores                                                                                            |
//  |----------------|--------------------------------------------------------------------------------------------------------|
//  |letrasPalabra   |[] → ["p"] → ["p", "a"] → ["p", "a", "r"] → ... → ["p", "a", "r", "a", "n", ..., "o"]                   |   
//  |----------------|--------------------------------------------------------------------------------------------------------|
//  |palabra         |parangariturimicuaro                                                                                    |
//  |----------------|--------------------------------------------------------------------------------------------------------|

// Detalle del for paso a paso:

//  |------------------|---------------------------------|
//  |i  |     palabra  |letrasPalabra después del push   |
//  |---|--------------|---------------------------------|
//  |0  |   "p"        |   ["p"]                         |
//  |---|--------------|---------------------------------|
//  |1  |   "a"        |   ["p", "a"]                    |
//  |---|--------------|---------------------------------|
//  |2  |   "r"        |   ["p", "a", "r"]               |
//  |---|--------------|---------------------------------|
//  |3  |   "a"        |   ["p", "a", "r", "a"]          |
//  |---|--------------|---------------------------------|
//  |...|  ...         |   ...                           |
//  |---|--------------|---------------------------------|
//  |19 |   "o"        |   ["p", "a", "r", "a" ..., "o"] |                         
//  |---|--------------|---------------------------------|

// Resultado esperado 
// Letras de la palabra parangariturimicuaro: ["p" - "a" - "r" - "a" - "n" - "g" - "a" - "r" - "i" - "t" - "u" - "r" - "i" - "m" - "i" - "c" - "u" - "a" - "r" - "o"]    

// ✅ Ejercicio 8: Validar contraseña
// Pide una contraseña al usuario y sigue pidiendo con while hasta que escriba "admin123". Luego, muestra "Acceso concedido".

// ✅ Ejercicio 8: Validar contraseña
function validarContraseña() {
    const contraseñaCorrecta = "admin123";

    while (true) {
        let intento = prompt("Introduce la contraseña:");
        if (intento === contraseñaCorrecta) {
            document.getElementById("resultado").innerHTML = "<p>Acceso concedido.</p>";
            break;
        } else {
            document.getElementById("resultado").innerHTML = "<p>Contraseña incorrecta. Inténtalo de nuevo.</p>";
        }
    }
}


// Diagrama en T: Representación gráfica de seguimiento de variables.
//
// simulacion:
// inputContraseña → "admin1234" -> "admin123": (Input)Ingreso de valores
//  |----------------|--------------------------------|-----------------------------------------------------------------|
//  |Varibale        |     Valores                    | resultado                                                       |
//  |----------------|--------------------------------|-----------------------------------------------------------------|   
//  |contraseña      | ["admin123"]                   |                                                                 |
//  |----------------|--------------------------------|-----------------------------------------------------------------|
//  |inputContraseña |  ["admin1234"], ["admin123"]   |  Contraseña incorrecta. Inténtalo de nuevo, Acceso concedido.   |
//  |----------------|--------------------------------|-----------------------------------------------------------------|

// Resultado esperado:
// Acceso concedido.

// ✅ Ejercicio 9: Promedio de notas
// Pide con prompt() cuántas notas va a ingresar. Usa un for para pedir cada nota, calcula el promedio y lo muestra.
function promedioNotas() {
    let cantidad = parseInt(prompt("¿Cuántas notas vas a ingresar?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, introduce un número válido mayor que 0.</p>";
        return;
    }

    let notas = [];
    let suma = 0;

    for (let i = 1; i <= cantidad; i++) {
        let nota = parseFloat(prompt(`Introduce la nota ${i}:`));
        if (isNaN(nota)) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, introduce una nota válida.</p>";
            return;
        }
        notas.push(nota);
        suma += nota;
    }

    let promedio = suma / cantidad;
    let mensaje = `<p>El promedio de las notas es: <strong>${promedio.toFixed(2)}</strong></p>`;
    mensaje += `<p>Notas ingresadas: <strong>${notas.join(", ")}</strong></p>`;
    document.getElementById("resultado").innerHTML = mensaje;
}


// Diagrama en T: Representación gráfica de seguimiento de variables.
//
// simulacion:
// cantidadNotas  →  3: (Input)Ingreso de valores
// notas ingresada -> 6.0, 5.5, 7.0 : (Input)Ingreso de valores
//  |------------------------------------------------------------------|
//  |Varibale        |     Valores                                     |
//  |----------------|-------------------------------------------------|
//  |cantidadNotas   |  3                                              |   
//  |----------------|-------------------------------------------------|
//  |notas           | [] → [6.0] → [6.0, 5.5] → [6.0, 5.5, 7.0]       |
//  |----------------|-------------------------------------------------|
//  |suma            |0 → 6.0 → 11.5 → 18.5                            |
//  |----------------|-------------------------------------------------|
//  |promedio        |18.5 / 3 = 6.17                                  |
//  |----------------|-------------------------------------------------|


// Resultado esperado
// El promedio de las notas es: 6.17
// Notas ingresadas: {6.0, 5.5, 7.0}

// ✅ Ejercicio 10: Contar cuántos son mayores de edad
// Pide con prompt() cuántas personas vas a ingresar. Por cada persona, pide la edad y muestra al final cuántas son mayores de edad (18+).

function contarMayoresEdad() {
    let cantidad = parseInt(prompt("¿Cuántas personas vas a ingresar?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, introduce un número válido mayor que 0.</p>";
        return;
    }

    let edades = [];
    let mayores = 0;

    for (let i = 1; i <= cantidad; i++) {
        let edad = parseInt(prompt(`Introduce la edad de la persona ${i}:`));
        if (isNaN(edad) || edad < 0) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, introduce una edad válida.</p>";
            return;
        }
        edades.push(edad);
        if (edad >= 18) mayores++;
    }

    let mensaje = `<p>Hay <strong>${mayores}</strong> personas mayores de edad.</p>`;
    mensaje += `<p>Edades ingresadas: <strong>${edades.join(", ")}</strong></p>`;
    document.getElementById("resultado").innerHTML = mensaje;
}


// Diagrama en T: Representación gráfica de seguimiento de variables.
//
// simulacion:
// cantidadPersonas  →  4: (Input)Ingreso de valores
// edades ingresadas -> 15, 22, 18, 10 : (Input)Ingreso de valores
//  |--------------------------------------------------------------------------------|
//  |Varibale        |     Valores                                                   |
//  |----------------|---------------------------------------------------------------|
//  |cantidadPersonas|  4                                                            |   
//  |----------------|---------------------------------------------------------------|
//  |edades          | [] → [15] → [15, 22] → [15, 22, 18] → [15, 22, 18, 10]        |
//  |----------------|---------------------------------------------------------------|
//  |mayoresEdad     |      0 → 0 → 1 → 2 → 2                                        |
//  |----------------|---------------------------------------------------------------|

// Resultado esperado
// Hay 2 personas mayores de edad.
// Edades ingresadas: {15, 22, 18, 10}