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
    }
    document.getElementById("resultado").innerHTML = `<p>Tabla de multiplicar del ${numero}: <br><strong>{<br>${multiplicacion.join("<br>")}<br>    }</strong></p>`;
}

        // <p>🧩 Ejercicio 6: Sumar hasta que se ingrese cero</p>
        // <button class = "btn" onclick = "sumarHastaCero()">Sumar hasta cero</button>
        // <p>🧩 Ejercicio 7: Mostrar letras de una palabra</p>
        // <button class = "btn" onclick = "mostrarLetras()">Mostrar letras</button>
        // <p>🧩 Ejercicio 8: Validar contraseña</p>
        // <button class = "btn" onclick = "validarContrasena()">Validar contraseña</button>
        // <p>🧩 Ejercicio 9: Promedio de notas</p>
        // <button class = "btn" onclick = "promedioNotas()">Calcular promedio</button>
        // <p>🧩 Ejercicio 10: Contar cuántos son mayores de edad</p>
        // <button class = "btn" onclick = "contarMayoresEdad()">Contar mayores de edad</button>

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

// ✅ Ejercicio 7: Mostrar letras de una palabra
// Pide al usuario una palabra y usa un for para mostrar cada letra por separado en el HTML.
let letrasPalabra = [];
function mostrarLetras() {
    let palabra = prompt("Introduce una palabra:");
    if (!palabra) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, introduce una palabra válida.</p>";
        return;
    }
    letrasPalabra = []; // Reiniciar el array letrasPalabra
    document.getElementById("resultado").innerHTML = ""; // Limpiar el contenido previo del elemento con id "resultado"
    
    for (let i = 0; i < palabra.length; i++) {
        letrasPalabra.push(palabra[i]);
    }
    document.getElementById("resultado").innerHTML = `<p>Letras de la palabra "${palabra}": <strong>{${letrasPalabra.join(" - ")}}</strong></p>`;
}

// ✅ Ejercicio 8: Validar contraseña
// Pide una contraseña al usuario y sigue pidiendo con while hasta que escriba "admin123". Luego, muestra "Acceso concedido".

contraseña = ["admin123"];
function validarContraseña() {
    while (true) {
        let inputContraseña = prompt("Introduce la contraseña:");
        if (inputContraseña === contraseña[0]) {
            document.getElementById("resultado").innerHTML = "<p>Acceso concedido.</p>";
            break; // Terminar el bucle si la contraseña es correcta
        } else {
            document.getElementById("resultado").innerHTML = "<p>Contraseña incorrecta. Inténtalo de nuevo.</p>";
        }
    }
}

// ✅ Ejercicio 9: Promedio de notas
// Pide con prompt() cuántas notas va a ingresar. Usa un for para pedir cada nota, calcula el promedio y lo muestra.
let notas = [];
function promedioNotas() {
    let cantidadNotas = parseInt(prompt("¿Cuántas notas vas a ingresar?"));
    if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, introduce un número válido mayor que 0.</p>";
        return;
    }
    
    notas = []; // Reiniciar el array notas
    let suma = 0;
    
    for (let i = 1; i <= cantidadNotas; i++) {
        let nota = parseFloat(prompt(`Introduce la nota ${i}:`));
        if (isNaN(nota)) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, introduce una nota válida.</p>";
            return;
        }
        notas.push(nota);
        suma += nota;
    }
    
    let promedio = suma / cantidadNotas;

    document.getElementById("resultado").innerHTML = `<p>El promedio de las notas es: <strong>${promedio}</strong></p>`;
    document.getElementById("resultado").innerHTML += `<p>Notas ingresadas: <strong>{${notas.join(", ")}}</strong></p>`;
}


// ✅ Ejercicio 10: Contar cuántos son mayores de edad
// Pide con prompt() cuántas personas vas a ingresar. Por cada persona, pide la edad y muestra al final cuántas son mayores de edad (18+).

let edades = [];
function contarMayoresEdad() {
    let cantidadPersonas = parseInt(prompt("¿Cuántas personas vas a ingresar?"));
    if (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, introduce un número válido mayor que 0.</p>";
        return;
    }
    
    edades = []; // Reiniciar el array edades
    let mayoresEdad = 0;
    
    for (let i = 1; i <= cantidadPersonas; i++) {
        let edad = parseInt(prompt(`Introduce la edad de la persona ${i}:`));
        if (isNaN(edad) || edad < 0) {
            document.getElementById("resultado").innerHTML = "<p>Por favor, introduce una edad válida.</p>";
            return;
        }
        edades.push(edad);
        if (edad >= 18) {
            mayoresEdad++;
        }
    }
    
    document.getElementById("resultado").innerHTML = `<p>Hay <strong>${mayoresEdad}</strong> personas mayores de edad.</p>`;
    document.getElementById("resultado").innerHTML += `<p>Edades ingresadas: <strong>{${edades.join(", ")}}</strong></p>`;
}