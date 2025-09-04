// 🌌 Fondo estrellado animado (igual que antes)
const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");
let w,h,stars=[];
function resize(){w=canvas.width=innerWidth; h=canvas.height=innerHeight;}
window.onresize=resize; resize();
class Star{
  constructor(){this.reset();}
  reset(){this.x=Math.random()*w; this.y=Math.random()*h; this.r=Math.random()*1.5; this.alpha=Math.random();}
  draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle="rgba(255,255,255,"+this.alpha+")";ctx.fill();}
}
for(let i=0;i<200;i++)stars.push(new Star());
function animate(){ctx.clearRect(0,0,w,h); stars.forEach(s=>s.draw()); requestAnimationFrame(animate);}
animate();

// ----------------------------
// 📌 Arreglo global de notas
// ----------------------------
const notas = [];

function agregarNota() {
  const inputNota = document.getElementById("nota");
  const resultado = document.getElementById("resultado");
  const resultCard = document.getElementById("resultCard");

  const nota = parseFloat(inputNota.value);

  if (isNaN(nota) || nota < 1 || nota > 7) {
    resultCard.style.display = "block";
    resultado.textContent = "⚠️ La nota debe estar entre 1.0 y 7.0.";
    return;
  }

  notas.push(nota);

  resultado.innerHTML = `Notas registradas: [ ${notas.join(", ")} ]`;
  resultCard.style.display = "block";
  inputNota.value = "";
}

function calcularPromedio() {
  const resultado = document.getElementById("resultado");
  const resultCard = document.getElementById("resultCard");

  if (notas.length === 0) {
    resultCard.style.display = "block";
    resultado.textContent = "⚠️ No hay notas registradas.";
    return;
  }

  let suma = 0;
  for (let n of notas) {
    suma += n;
  }
  const promedio = (suma / notas.length).toFixed(2);

  const estado = promedio >= 4 ? "✅ Aprobado" : "❌ Reprobado";

  resultado.innerHTML = `
    Total de notas: ${notas.length}<br>
    Listado: [ ${notas.join(", ")} ]<br>
    Promedio: <strong>${promedio}</strong><br>
    Estado: <strong>${estado}</strong>
  `;

  resultCard.style.display = "block";
}

function eliminarUltima() {
  const resultado = document.getElementById("resultado");
  if (notas.length > 0) {
    notas.pop();
    resultado.innerHTML = `Notas restantes: [ ${notas.join(", ") || "vacío"} ]`;
  } else {
    resultado.textContent = "⚠️ No hay notas para eliminar.";
  }
}

function limpiarNotas() {
  notas.length = 0;
  document.getElementById("resultado").textContent = "";
  document.getElementById("resultCard").style.display = "none";
}
