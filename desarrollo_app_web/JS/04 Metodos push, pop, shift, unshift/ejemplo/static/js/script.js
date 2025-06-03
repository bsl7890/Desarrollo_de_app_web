console.log("conectado correctamente...");

// Creacion de arreglos
let array = ["Xbox", "Nintendo"];

// Creacion de la lista numerico del array
function mostrarLista() {
    let mensaje = "Lista actual:\n";
    for (let i = 0; i < array.length; i++) {
        mensaje += (i + 1) + "° " + array[i] + "\n";
    }
    alert(mensaje);
}

// Creacion de funciones push
function usarPush() {
    let entrada = prompt("Agregar una consola:");
    array.push(entrada);
    alert(`Usted agrego la siguiente consola: ${entrada}`)
    alert("Agregado exitosamente")
    alert("Presione enter para mostrar la lista completa...");
    // Creamos el mensaje numerado
    mostrarLista()

}

// Creacion de funciones pop
function usarPop() {
    // Validaciones pendientes (
    if (array.length === 0) {
        alert("No hay consolas para eliminar.");
        return;
    }
    // Mostrar lista antes de eliminar
    mostrarLista()
   

    // Eliminar el último elemento
    let basurero = array.pop();
    alert(`Elemento eliminado: ${basurero}`);  

    // Mostrar lista actualizada
    mostrarLista()

}
// Creacion de funciones unshift    
function usarUnshift(){
    //Agrega al inicio
    let entrada = prompt("Agregar una consola:");
    array.unshift(entrada);
    alert(`Usted agrego la siguiente consola: ${entrada}`)
    alert("Agregado exitosamente")
    alert("Presione enter para mostrar la lista completa...");
    // Creamos el mensaje numerado
    mostrarLista()
   
}
// Creacion de funciones shift
function usarShift(){
    // Validaciones pendientes (
    if (array.length === 0) {
        alert("No hay consolas para eliminar.");
        return;
    }

    // Mostrar lista antes de eliminar
    mostrarLista()
   

    // Eliminar el último elemento
    let basurero = array.shift();
    alert(`Elemento eliminado: ${basurero}`);  

    // Mostrar lista actualizada
    mostrarLista()
    
}



