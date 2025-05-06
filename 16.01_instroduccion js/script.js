console.log("Conexion establecida")

// Paso 1: Declaración de variables
let numeroEntero = 10;
let numeroDecimal = 3.14;
let cadenaTexto = "Hola mundo";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Benjamín", edad: 17 };
let valorIndefinido;
let valorNulo = null;
let identificadorUnico = Symbol("id");
let numeroGrande = BigInt(1234567890123456789012345678901234567890);
let numeroGranden = 1234567890123456789012345678901234567890n;
const mes = "Mayo";

// Paso 2: Crear funciones para mostrar cada variable
function mostrarNumeroEntero() {
  console.log("Número Entero:", numeroEntero);
}

function mostrarNumeroDecimal() {
  console.log("Número Decimal:", numeroDecimal);
}

function mostrarCadenaTexto() {
  console.log("Cadena de Texto:", cadenaTexto);
}

function mostrarValorBooleano() {
  console.log("Valor Booleano:", valorBooleano);
}

function mostrarArregloNumeros() {
  console.log("Arreglo de Números:", arregloNumeros);
}

function mostrarObjetoPersona() {
  console.log("Objeto Persona:", objetoPersona);
}

function mostrarValorIndefinido() {
  console.log("Valor Indefinido:", valorIndefinido);
}

function mostrarValorNulo() {
  console.log("Valor Nulo:", valorNulo);
}

function mostrarIdentificadorUnico() {
  console.log("Identificador Único (Symbol):", identificadorUnico);
}

function mostrarNumeroGrande() {
  console.log("Número Grande (BigInt):", numeroGrande);
}
function mostrarNumeroGranden() {
  console.log("Número Grande (n):", numeroGranden);
}
function mostrarMes() {
  console.log("Mes (constante):", mes);
}

// Paso 3: Crear la función 'operacion'
function operacion(a, b) {
  const resultado = a + b;
  console.log("Resultado de la operación (suma):", resultado);
  return resultado;
}

// Paso 4: Ejecutar todas las funciones
mostrarNumeroEntero();
mostrarNumeroDecimal();
mostrarCadenaTexto();
mostrarValorBooleano();
mostrarArregloNumeros();
mostrarObjetoPersona();
mostrarValorIndefinido();
mostrarValorNulo();
mostrarIdentificadorUnico();
mostrarNumeroGrande();
mostrarNumeroGranden();
mostrarMes();
operacion(5, 3); 