console.log("conectado correctamente...");

let arreglo = [10, 20, 30, 40, 50, 60];


// Funcion para mostrar diferencias centro y extremos
function diferenciaCentroExtremos() {
    let centro = arreglo[Math.floor(arreglo.length / 2)];
    let extremos = arreglo[0] + arreglo[arreglo.length - 1]; 
    let diferencia = centro - extremos;
    alert("La diferencia entre el centro y los extremos es: " + diferencia);
}
