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

  // Función principal
function validarFormulario() {

    // Obtener valores
    let nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value, 10);
    const curso = document.getElementById("curso").value;
    const jornada = document.querySelector("input[name='jornada']:checked");
    const aceptaReglamento = document.querySelector("input[name='reglamento']").checked;

    // Validaciones
    if (nombre.length < 2) {
      resultado.textContent = "El nombre debe tener al menos 2 caracteres.";
      return;
    }
    if (isNaN(edad) || edad < 14 || edad > 100) {
      resultado.textContent = "La edad debe estar entre 14 y 100.";
      return;
    }
    if (!curso) {
      resultado.textContent = "Debes seleccionar un curso.";
      return;
    }
    if (!jornada) {
      resultado.textContent = "Debes seleccionar una jornada.";
      return;
    }
    if (!aceptaReglamento) {
      resultado.textContent = "Debes aceptar el reglamento.";
      return;
    }

    // Normalizar nombre (primera letra de cada palabra en mayúscula)
    nombre = nombre.replace(/\b\w/g, c => c.toUpperCase()).toLowerCase();

    let cursoTexto;
    if (curso === "3medio") {
    cursoTexto = "3° Medio";
    } else if (curso === "4medio") {
    cursoTexto = "4° Medio";
    } else {
    cursoTexto = "Curso desconocido";
    }

    resultado.textContent = `Bienvenido/a ${nombre},\n${edad} años,\ncurso ${cursoTexto},\njornada: ${jornada.value}.`;
}
