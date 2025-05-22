console.log("conectado correctamente...");

// Ejercicio 4: Suma en matriz de tres niveles
function ejercicio4() {
    let datos = [
        [1, 2, 3, 4],
        [5, 6, [7, 8, [9, 10]]]
    ];
    let valor1 = datos[0][2]; // 3
    let valor2 = datos[1][2][2][1]; // 10
    let suma = valor1 + valor2;
    alert("La suma de 3 y 10 es: " + suma);
}
