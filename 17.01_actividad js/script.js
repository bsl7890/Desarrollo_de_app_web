console.log("conectado correctamente...");

let arreglo = [10, 20, 30, 40, 50, 60];

// Funcion para mostrar el promedio de los 3 primeros elementos
function promedioTresPrimeros() {
    let promedio = (arreglo[0] + arreglo[1] + arreglo[2]) / 3;
    alert("El promedio de los tres primeros elementos es: " + promedio);
}

// Funcion para mostar la suma de los 2 extremos
function sumaExtremos() {
    let suma = arreglo[0] + arreglo[arreglo.length - 1];
    alert("La suma del primer y último elemento es: " + suma);
}
// Funcion para mostrar diferencias centro y extremos
function diferenciaCentroExtremos() {
    let centro = arreglo[Math.floor(arreglo.length / 2)];
    let extremos = arreglo[0] + arreglo[arreglo.length - 1]; 
    let diferencia = centro - extremos;
    alert("La diferencia entre el centro y los extremos es: " + diferencia);
}

// Funcion para mostar la multiplicacion pares
function multiplicaPares() {
    let resultado = arreglo[0] * arreglo[2] * arreglo[4];
    alert("La multiplicación de las posiciones pares es: " + resultado);
}

// Funcion para mostrar mensaje concatenado
function mensajeConcatenado() {
    let suma = arreglo[1] + arreglo[3];
    let mensaje = "El resultado de la operación es: " + suma;
    alert(mensaje);
}

// Función para mostrar un día de la semana
function mostrarDia() {
    let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    alert("El día jueves es: " + dias[3]);
}
