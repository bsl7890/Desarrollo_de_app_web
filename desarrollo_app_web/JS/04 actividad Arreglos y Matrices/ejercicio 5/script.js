console.log("conectado correctamente...");

// Ejercicio 5: Construir frase usando arreglo + matriz
function ejercicio5() {
    let sujeto = ["El perro", "El gato"];
    let acciones = [
        ["ladra", "corre"],
        ["duerme", "salta"]
    ];
    let frase = sujeto[1] + " " + acciones[1][0] + ".";
    alert(frase);
}
