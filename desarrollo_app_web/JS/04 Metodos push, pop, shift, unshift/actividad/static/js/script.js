console.log("conectado correctamente...");

// Creacion de arreglos
let compras = [];
let colores = ["rojo", "azul"];
let numeros = [10, 20, 30];
let orden =[]
let historial = [];
let cola = ["Cliente1", "Cliente2", "Cliente3"];
let nombres = ["Pedro", "Juan", "Luis"];
let pila = [];
let colaNueva = [];
let dias = ["lunes", "miércoles", "jueves"];
let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];
let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];



// Creacion de la lista compras
function mostrarLista_compras() {
    let mensaje = "Lista actual:\n";
    for (let i = 0; i < compras.length; i++) {
        mensaje += (i + 1) + "° " + compras[i] + "\n";
    }
    alert(mensaje);
}


// Creacion de la lista colores
function mostrarLista_colores() {
    let mensaje = "Lista actual:\n";
    for (let i = 0; i < colores.length; i++) {
        mensaje += (i + 1) + "° " + colores[i] + "\n";
    }
    alert(mensaje);
}

// Creacion de la lista numeros
function mostrarLista_numeros() {
    let mensaje = "Lista actual:\n";
    for (let i = 0; i < numeros.length; i++) {
        mensaje += (i + 1) + "° " + numeros[i] + "\n";
    }
    alert(mensaje);
}
// Creacion de la lista orden
function mostrarLista_orden() {
    let mensaje = "Lista actual:\n";
    for (let i = 0; i < orden.length; i++) {
        mensaje += (i + 1) + "° " + orden[i] + "\n";
    }
    alert(mensaje);
}
// Creacion de la lista historial
function mostrarLista_historial() {
    let mensaje = "Historial de mensajes:\n";
    for (let i = 0; i < historial.length; i++) {
        mensaje += (i + 1) + "° " + historial[i] + "\n";
    }
    alert(mensaje);
}
// Creacion de la lista cola
function mostrarLista_cola() {
    let mensaje = "Cola de atención:\n";
    for (let i = 0; i < cola.length; i++) {
        mensaje += (i + 1) + "° " + cola[i] + "\n";
    }
    alert(mensaje);
}
// Creacion de la lista nombres
function mostrarLista_nombres() {
    let mensaje = "Lista de nombres:\n";
    for (let i = 0; i < nombres.length; i++) {
        mensaje += (i + 1) + "° " + nombres[i] + "\n";
    }
    alert(mensaje);
}
// Creacion de la lista pila
function mostrarLista_pila() {
    let mensaje = "Pila actual:\n";
    for (let i = 0; i < pila.length; i++) {
        mensaje += (i + 1) + "° " + pila[i] + "\n";
    }
    alert(mensaje);
}
// Creacion de la lista colaNueva
function mostrarLista_colaNueva() {
    let mensaje = "Cola nueva:\n";
    for (let i = 0; i < colaNueva.length; i++) {
        mensaje += (i + 1) + "° " + colaNueva[i] + "\n";
    }
    alert(mensaje);
}

// Ceacion de la lista dias
function mostrarLista_dias() {
    let mensaje = "Lista de días:\n";
    for (let i = 0; i < dias.length; i++) {
        mensaje += (i + 1) + "° " + dias[i] + "\n";
    }
    alert(mensaje);
}
// creacion de la lista personas
function mostrarLista_personas() {
    let mensaje = "Lista de personas:\n";
    for (let i = 0; i < personas.length; i++) {
        mensaje += (i + 1) + "° " + personas[i] + "\n";
    }
    alert(mensaje);
}
// Creacion de la lista tareas
function mostrarLista_tareas() {
    let mensaje = "Lista de tareas:\n";
    for (let i = 0; i < tareas.length; i++) {
        mensaje += (i + 1) + "° " + tareas[i] + "\n";
    }
    alert(mensaje);
}

// 🧠 Ejercicio 1: Agregar elementos
function comprasPush() {
    compras.push("pan", "leche", "huevos");
    alert("Presione enter para mostrar la lista completa...");
    // Creamos el mensaje numerado
    mostrarLista_compras();
    let entrada = prompt("Agregar un producto :");
    compras.push(entrada);
    alert(`Usted agrego el siguiente producto: ${entrada}`);
    alert("Agregado exitosamente");
    alert("Presione enter para mostrar la lista completa...");
    // Creamos el mensaje numerado
    mostrarLista_compras();
}

// 🧠 Ejercicio 2: Quitar el último
function comprasPop() {
    // Mostrar lista antes de eliminar
    mostrarLista_compras();
    // Eliminar el último elemento
    let eliminado = compras.pop();

    alert(`Producto eliminado: ${eliminado}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_compras();

}

// 🧠 Ejercicio 3: Agregar al inicio
function coloresUnshift(){
    colores.unshift("amarillo");
    alert(`Lista de colores actualizada: ${colores.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Creamos el mensaje numerado
    mostrarLista_colores();   
}

// 🧠 Ejercicio 4: Quitar el primero
function coloresShift(){
    colores.shift();
    alert(`Lista de colores actualizada: ${colores.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_colores();
}

// 🧠 Ejercicio 5: Combinación de métodos
function numerosCombinacion() {
    numeros.push(40);
    numeros.shift();
    numeros.unshift(5);
    numeros.pop();
    console.log(`Arreglo final: ${numeros}`);
    alert(`Arreglo final: ${numeros.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_numeros();
}

// 🧠 Ejercicio 6: Agregar elementos en orden inverso
function agregarOrdenInverso() {
    orden.unshift(3, 2, 1);
    console.log(`Arreglo en orden inverso: ${orden}`);
    alert(`Arreglo en orden inverso: ${orden.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_orden();
}

// 🧠 Ejercicio 7: Historial de mensajes
function historialMensajes() {
    historial.push("Hola", "¿Cómo estás?", "Adiós");
    let eliminado = historial.pop();
    alert(`Último mensaje eliminado: ${eliminado}`);
    alert(`Historial de mensajes actualizado: ${historial.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_historial();
}

// 🧠 Ejercicio 8: Cola de atención
function colaAtencion() {

    // Mostrar cola antes de eliminar
    alert(`Cola actual: ${cola.join(", ")}`);
    // Eliminar el primer cliente
    let atendido = cola.shift();
    alert(`Cliente atendido: ${atendido}`);
    // Agregar un nuevo cliente al final
    cola.push("Cliente4");
    alert(`Cola actualizada: ${cola.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_cola();
}

// 🧠 Ejercicio 9: Reordenar nombres
function reordenarNombres() {
    // Quitar el último nombre
    let ultimoNombre = nombres.pop();
    alert(`Último nombre eliminado: ${ultimoNombre}`);
    
    // Agregar "Mateo" al inicio
    nombres.unshift("Mateo");
    
    // Agregar "Ana" al final
    nombres.push("Ana");
    
    alert(`Arreglo de nombres actualizado: ${nombres.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_nombres();
}

// 🧠 Ejercicio 10: Pilas y colas
function pilaYCola() {
    // Simulación de pila
    pila.push("Elemento1", "Elemento2", "Elemento3");
    alert(`Pila inicial: ${pila.join(", ")}`);
    
    // Quitar 2 elementos de la pila
    let elemento1 = pila.pop();
    let elemento2 = pila.pop();
    alert(`Elementos quitados de la pila: ${elemento1}, ${elemento2}`);
    
    // Simulación de cola
    colaNueva.push("Cliente1", "Cliente2", "Cliente3");
    alert(`Cola inicial: ${colaNueva.join(", ")}`);
    
    // Atender (quitar) 2 elementos de la cola
    let atendido1 = colaNueva.shift();
    let atendido2 = colaNueva.shift();
    alert(`Clientes atendidos: ${atendido1}, ${atendido2}`);
    
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_pila();
    mostrarLista_colaNueva();
}

// 🧠 Ejercicio 11: Completar la semana laboral
function completarSemanaLaboral() {
    // Agregar los días que faltan
    dias.splice(1, 0, "martes"); // Agrega "martes" después de "lunes"
    dias.push("viernes"); // Agrega "viernes" al final

    alert(`Semana laboral completa: ${dias.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_dias();
}
// 🧠 Ejercicio 12: Registro de personas en una sala
function modificarRegistroPersonas() {
    // Eliminar "Carlos" del inicio y "Sofía" del final
    personas.shift(); // Elimina "Carlos"
    personas.pop(); // Elimina "Sofía"
    personas.pop(); // Elimina "Ana"
    // Agregar "Pedro" al inicio y "Camila" al final
    personas.unshift("Pedro"); // Agrega "Pedro" al inicio
    personas.push("Camila"); // Agrega "Camila" al final
    alert(`Registro de personas actualizado: ${personas.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_personas();
}

// 🧠 Ejercicio 13: Lista de tareas actualizada
function actualizarListaTareas() {
    // Eliminar las últimas 2 tareas
    tareas.pop(); // Elimina "navegar"
    tareas.pop(); // Elimina "ver TV"
    tareas.pop(); // Elimina "jugar"
    tareas.pop(); // Elimina "dormir"
    // Agregar nuevas tareas
    tareas.push("lavar la ropa", "organizar escritorio");
    alert(`Lista de tareas actualizada: ${tareas.join(", ")}`);
    alert("Presione enter para mostrar la lista completa...");
    // Mostrar lista actualizada
    mostrarLista_tareas();
}