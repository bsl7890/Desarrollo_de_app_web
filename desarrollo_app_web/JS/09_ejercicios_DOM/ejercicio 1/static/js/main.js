    // Fondo estrellado animado
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
    function animate(){
      ctx.clearRect(0,0,w,h);
      stars.forEach(s=>s.draw());
      requestAnimationFrame(animate);
    }
    animate();


// ----------------------------
// 📌 Arreglo global de registros
// ----------------------------
const registros = [];

function validarFormulario() {
    // Obtener elementos
    const inputNombre = document.getElementById("nombre");
    const inputEdad = document.getElementById("edad");
    const inputCurso = document.getElementById("curso");
    const inputJornada = document.querySelector("input[name='jornada']:checked");
    const inputReglamento = document.querySelector("input[name='reglamento']");
    const resultado = document.getElementById("resultado");
    const resumen = document.getElementById("resumen");
    const resultCard = document.getElementById("resultCard");

    // Valores
    let nombre = inputNombre.value.trim();
    const edad = parseInt(inputEdad.value, 10);
    const curso = inputCurso.value;
    const jornada = inputJornada;

    // Validaciones
    if (nombre.length < 2) {
        resultCard.style.display = "block";
        resultado.textContent = "El nombre debe tener al menos 2 caracteres.";
        return;
    }
    if (isNaN(edad) || edad < 14 || edad > 100) {
        resultCard.style.display = "block";
        resultado.textContent = "La edad debe estar entre 14 y 100.";
        return;
    }
    if (!curso) {
        resultCard.style.display = "block";
        resultado.textContent = "Debes seleccionar un curso.";
        return;
    }
    if (!jornada) {
        resultCard.style.display = "block";
        resultado.textContent = "Debes seleccionar una jornada.";
        return;
    }
    if (!inputReglamento.checked) {
        resultCard.style.display = "block";
        resultado.textContent = "Debes aceptar el reglamento.";
        return;
    }

    // Normalizar nombre
    nombre = nombre.replace(/\b\w/g, c => c.toUpperCase());

    // Texto del curso
    let cursoTexto;
    if (curso === "3medio") cursoTexto = "3° Medio";
    else if (curso === "4medio") cursoTexto = "4° Medio";
    else cursoTexto = "Curso desconocido";

    // ----------------------------
    // 📌 Guardar registro en el arreglo
    // ----------------------------
    registros.push({
        nombre: nombre,
        edad: edad,
        curso: cursoTexto,
        jornada: jornada.value
    });

    // Mostrar saludo
    resultado.innerHTML = `Bienvenido/a <strong>${nombre}</strong><br>${edad} años<br>Curso: ${cursoTexto}<br>Jornada: ${jornada.value}`;

    // Contar por jornada
    const mañana = registros.filter(r => r.jornada === "mañana").length;
    const tarde = registros.filter(r => r.jornada === "tarde").length;
    resumen.textContent = `Registrados: ${mañana} en Mañana, ${tarde} en Tarde.`;

    // Mostrar panel
    resultCard.style.display = "block";

    // Limpiar campos
    inputNombre.value = "";
    inputEdad.value = "";
    inputCurso.value = "";
    if (inputJornada) inputJornada.checked = false;
    inputReglamento.checked = false;    
}  

function limpiarTodo() {
    const resultado = document.getElementById("resultado");
    const resumen = document.getElementById("resumen");
    const resultCard = document.getElementById("resultCard");

    registros.length = 0; // vaciar arreglo
    resultado.textContent = "";
    resumen.textContent = "";
    resultCard.style.display = "none";

    document.querySelector("form").reset();
}
