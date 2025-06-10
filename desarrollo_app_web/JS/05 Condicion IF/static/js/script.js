console.log("conectado correctamente...");

let productos = ["pan", "leche", "queso"];
let tareas = ["hacer la compra", "limpiar la casa", "estudiar para el examen", "ir al gimnasio", "leer un libro", "preparar la cena"];
let cola = ["sinNombre", "Pedro", "Lucía"];
let stock = ["arroz", "fideos"];
let invitados = ["Ana", "Luis", "Camila"];
let usuarios = ["Admin", "Editor", "Invitado"];

function mayoriaEdad() {
    let edad = parseInt(prompt("Introduce tu edad: "));
    if (edad >= 18) {
        document.getElementById("resultado").innerHTML = `<p>Eres mayor de edad, tienes ${edad} años.</p>`;
    } else if (edad <= 17 && edad >= 0) {
        document.getElementById("resultado").innerHTML = `<p>No eres mayor de edad, tienes ${edad} años.</p>`;
    }
    else {
        document.getElementById("resultado").innerHTML = `<p>El valor <strong>${edad}</strong> es invalido.</p>`;
    }
}

// ✅ Ejercicio 2: Añadir producto si no está
// js
// let productos = ["pan", "leche", "queso"];

// Declara la variable nuevoProducto.
//  Si productos no incluye el nuevo producto, agrégalo con push() y muestra el arreglo.
// sin usar include
//  Si ya está, muestra "Producto ya ingresado"
function nuevoProducto(){
    let nuevoProducto = prompt("Introduce un nuevo producto: ");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado1").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado1").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado1").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
} else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
}

}

// ✅ Ejercicio 3: Control de tareas
// Declara el arreglo tareas con 6 tareas predefinidas.
//  Si el arreglo tiene más de 5 elementos, usa pop() para eliminar la última y muestra el arreglo.
//  Si tiene 5 o menos, muestra "Lista aceptable"

function controlTareas() {
    if (tareas.length > 5) {
        tareas.pop();
        document.getElementById("resultado2").innerHTML = `<p>Lista de tareas actualizada: ${tareas.join(", ")}.</p>`;
    } else if (tareas.length <= 5) {
        document.getElementById("resultado2").innerHTML = `<p>Lista aceptable: ${tareas.join(", ")}.</p>`;
    }
    else {
        document.getElementById("resultado2").innerHTML = `<p>El valor <strong>${tareas.length}</strong> es invalido.</p>`;
    }
}
// ✅ Ejercicio 4: Validar primer elemento
// js
// let cola = ["sinNombre", "Pedro", "Lucía"];

// Si el primer elemento es "sinNombre", elimínalo con shift() y muestra el nuevo arreglo.
//  Si no, muestra "Cola correcta".

function validarCola() {
    if (cola[0] === "sinNombre"){
        cola.shift();
        document.getElementById("resultado3").innerHTML = `<p>Primer elemento eliminado. Nueva cola: ${cola.join(", ")}.</p>`;
    }
    else if (cola[0] !== "sinNombre") {
        document.getElementById("resultado3").innerHTML = `<p>Cola correcta: ${cola.join(", ")}.</p>`;
    }
    else {
        document.getElementById("resultado3").innerHTML = `<p>El valor <strong>${cola[0]}</strong> es invalido.</p>`;
    }
}
// ✅ Ejercicio 5: Saludo condicional
// Declara la variable nombre.
//  Si no está vacío, crea un arreglo saludos y usa push() para añadir "Hola, [nombre]".
//  Si está vacío, muestra "Nombre no válido".
// trim significa que elimina los espacios en blanco al principio y al final de la cadena.
function saludoCondicional() {
    let nombre = prompt("Introduce tu nombre: ");

    if (nombre === null) {
        document.getElementById("resultado4").innerHTML = `<p>Operación cancelada. Nombre no válido.</p>`;
    }
    else if (nombre.trim() !== ""){
        let saludos = [];
        saludos.push(`Hola, ${nombre}`);
        document.getElementById("resultado4").innerHTML = `<p>${saludos.join(", ")}</p>`;
    }
    else if (nombre.trim() === "") {
        document.getElementById("resultado4").innerHTML = `<p>Nombre no válido.</p>`;
    }
    else {
        document.getElementById("resultado4").innerHTML = `<p>El valor <strong>${nombre}</strong> es invalido.</p>`;
    }
}

// ✅ Ejercicio 6: Calificar nota
// Declara la variable nota con un valor entre 1 y 7.
// Si nota >= 6: muestra "Excelente".
// Si nota >= 4: muestra "Aprobado".
// Si nota < 4: muestra "Reprobado".

function calificarNota() {
    let nota = parseInt(prompt("Introduce una nota entre 1 y 7: "));
    if (nota >= 6 && nota <= 7) {
        document.getElementById("resultado5").innerHTML = `<p>Excelente, tu nota es ${nota}.</p>`;
    } else if (nota >= 4 && nota < 6) {
        document.getElementById("resultado5").innerHTML = `<p>Aprobado, tu nota es ${nota}.</p>`;
    } else if (nota < 4 && nota >= 1) {
        document.getElementById("resultado5").innerHTML = `<p>Reprobado, tu nota es ${nota}.</p>`;
    } else {
        document.getElementById("resultado5").innerHTML = `<p>El valor <strong>${nota}</strong> es invalido.</p>`;
    }
}

// ✅ Ejercicio 7: Registro de visitantes
// Crea un arreglo vacío visitas y una variable persona.
//  Si el nombre no está vacío, usa unshift() para añadirlo al inicio.
//  Si está vacío, muestra "Error: nombre vacío".
function RegistroVisitas(){
    let visitas = [];
    let personas = prompt("Introduce tu nombre: ");
    if (personas === null) {
        document.getElementById("resultado6").innerHTML = `<p>Operación cancelada. Nombre no válido.</p>`;
    }
    else if (personas.trim() !== "") {
        visitas.unshift(personas);
        document.getElementById("resultado6").innerHTML = `<p>Registro exitoso: ${visitas.join(", ")}.</p>`;
    }
    else if (personas.trim() === "") {
        document.getElementById("resultado6").innerHTML = `<p>Error: nombre vacío.</p>`;
    }
    else {
        document.getElementById("resultado6").innerHTML = `<p>El valor <strong>${personas}</strong> es invalido.</p>`;
    }
}

// ✅ Ejercicio 8: Control de stock
// js
// let stock = ["arroz", "fideos"];
// Declara la variable productoSolicitado.
//  Si stock incluye el producto, muestra "Producto disponible".
//  Si no, agrégalo con push() y muestra "Producto agregado al stock".
// sin icnlude

function controlStock() {
    let productoSolicitado = prompt("Introduce el producto solicitado: ");
    if (stock[0] === productoSolicitado) {
        document.getElementById("resultado7").innerHTML = `<p>Producto disponible: ${productoSolicitado}.</p>`;
    }
    else if (stock[1] === productoSolicitado) {
        document.getElementById("resultado7").innerHTML = `<p>Producto disponible: ${productoSolicitado}.</p>`;
    }
    else {
        stock.push(productoSolicitado);
        document.getElementById("resultado7").innerHTML = `<p>Producto agregado al stock: ${productoSolicitado}. Nueva lista de productos: ${stock.join(", ")}.</p>`;
    }
}

// ✅ Ejercicio 9: Lista de invitados
// js
// let invitados = ["Ana", "Luis", "Camila"];

// Declara la variable persona.
//  Si la persona está en el arreglo, muestra "Bienvenido, [nombre]".
//  Si no, muestra "No estás en la lista".
// sin usar includes
function listaInvitados() {
    let persona = prompt("Introduce tu nombre: ");
    if (invitados[0] === persona) {
        document.getElementById("resultado8").innerHTML = `<p>Bienvenido, ${persona}.</p>`;
    }
    else if (invitados[1] === persona) {
        document.getElementById("resultado8").innerHTML = `<p>Bienvenido, ${persona}.</p>`;
    }
    else if (invitados[2] === persona) {
        document.getElementById("resultado8").innerHTML = `<p>Bienvenido, ${persona}.</p>`;
    }
    else {
        document.getElementById("resultado8").innerHTML = `<p>No estás en la lista, ${persona}.</p>`;
    }
}

// ✅ Ejercicio 10: Evaluar rol de usuario
// js
// let usuarios = ["Admin", "Editor", "Invitado"];
// Declara la variable rol.
// Si rol === "Admin", agrégalo al inicio con unshift() y muestra "Rol prioritario agregado".
// Si es otro rol, usa push() y muestra "Rol agregado".

function evaluarRolUsuario() {
    let rol = prompt("Introduce tu rol (Admin, Editor, Invitado): ");
    if (rol === "Admin") {
        usuarios.unshift(rol);
        document.getElementById("resultado9").innerHTML = `<p>Rol prioritario agregado: ${usuarios.join(", ")}.</p>`;
    } else if (rol === "Editor" || rol === "Invitado") {
        usuarios.push(rol);
        document.getElementById("resultado9").innerHTML = `<p>Rol agregado: ${usuarios.join(", ")}.</p>`;
    } else {
        document.getElementById("resultado9").innerHTML = `<p>El valor <strong>${rol}</strong> es invalido.</p>`;
    }
}