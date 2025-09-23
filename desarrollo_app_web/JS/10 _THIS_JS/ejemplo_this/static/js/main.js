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

function example(elemento){
    console.log("elemento clickeado", elemento);
}

function turnOff(elemento){
    if (elemento.innerText == "On"){
        elemento.innerText = "Off"
    }else{
        elemento.innerText = "On"
    }
}

function remove(element){
    element.remove();
}