document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const btnStart = document.getElementById("start");
  const contenido = document.getElementById("contenido");
  const seccionInfo = document.querySelector(".informacion-inicial");
  const tarjetas = document.querySelectorAll(".tarjeta-info");
  const imagenInferior = document.getElementById("imagen-inferior");


  function animarTarjetas() {
    if (seccionInfo) seccionInfo.style.display = "flex";
    tarjetas.forEach((tarjeta, index) => {
      setTimeout(() => {
        tarjeta.classList.add("mostrar");
      }, index * 200);
    });
  }


  function mostrarImagenInferior() {
    if (imagenInferior) {
      imagenInferior.classList.remove("oculto");
      imagenInferior.classList.add("mostrar-animado");
    }
  }


  function cargarVistaPrincipal(conTransicion = false) {
    if (conTransicion) {

      intro.style.transition = "opacity 0.8s ease";
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.style.display = "none";
        if (contenido) contenido.style.display = "block";
        animarTarjetas();
        mostrarImagenInferior();
      }, 800);
    } else {

      if (intro) intro.style.display = "none";
      if (contenido) contenido.style.display = "block";
      animarTarjetas();
      mostrarImagenInferior();
    }
  }


  if (sessionStorage.getItem("introVista") === "si") {
    cargarVistaPrincipal(false);
  }


  if (btnStart) {
    btnStart.addEventListener("click", () => {

      sessionStorage.setItem("introVista", "si");


      cargarVistaPrincipal(true);
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".imagen-animada");

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {

        entrada.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 }); 

  imagenes.forEach((img) => observador.observe(img));
});

document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const btnStart = document.getElementById("start");
  const contenido = document.getElementById("contenido");
  const seccionInfo = document.querySelector(".informacion-inicial");
  const tarjetas = document.querySelectorAll(".tarjeta-info");
  const imagenInferior = document.getElementById("imagen-inferior");

  function animarTarjetas() {
    if (seccionInfo) seccionInfo.style.display = "flex";
    tarjetas.forEach((tarjeta, index) => {
      setTimeout(() => {
        tarjeta.classList.add("mostrar");
      }, index * 200);
    });
  }

  function mostrarImagenInferior() {
    if (imagenInferior) {
      imagenInferior.classList.remove("oculto");
      imagenInferior.classList.add("mostrar-animado");
    }
  }

  function cargarVistaPrincipal(conTransicion = false) {
    if (conTransicion) {
      intro.style.transition = "opacity 0.8s ease";
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.style.display = "none";
        if (contenido) contenido.style.display = "block";
        animarTarjetas();
        mostrarImagenInferior();
      }, 800);
    } else {
      if (intro) intro.style.display = "none";
      if (contenido) contenido.style.display = "block";
      animarTarjetas();
      mostrarImagenInferior();
    }
  }

  if (sessionStorage.getItem("introVista") === "si") {
    cargarVistaPrincipal(false);
  }

  if (btnStart) {
    btnStart.addEventListener("click", () => {
      sessionStorage.setItem("introVista", "si");
      cargarVistaPrincipal(true);
    });
  }


  const elementosAnimados = document.querySelectorAll(".imagen-animada, .bloque-animado");

  if (elementosAnimados.length > 0) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada, index) => {
        if (entrada.isIntersecting) {

          setTimeout(() => {
            entrada.target.classList.add("visible");
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });

    elementosAnimados.forEach((el) => observador.observe(el));
  }
});


const startBtn = document.getElementById('start');
const introDiv = document.getElementById('intro');

if (startBtn && introDiv) {
    startBtn.addEventListener('click', () => {
        introDiv.style.opacity = '0';
        introDiv.style.transition = 'opacity 0.8s ease';
        setTimeout(() => {
            introDiv.style.display = 'none';
        }, 800);
    });
}


function calcularResultado() {
    const form = document.getElementById("quizForm");
    if (!form) return;


    let p1 = form.querySelector('input[name="p1"]:checked');
    let p2 = form.querySelector('input[name="p2"]:checked');
    let p3 = form.querySelector('input[name="p3"]:checked');


    if (!p1 || !p2 || !p3) {
        alert("Por favor, responde a todas las preguntas antes de consultar tu resultado.");
        return;
    }


    let puntaje = parseInt(p1.value) + parseInt(p2.value) + parseInt(p3.value);
    let contenedorResultado = document.getElementById("resultadoQuiz");

    contenedorResultado.style.display = "block";
    
    if (puntaje === 3) {
        contenedorResultado.style.backgroundColor = "#e8f5e9";
        contenedorResultado.style.color = "#2e7d32";
        contenedorResultado.style.border = "1px solid #a5d6a7";
        contenedorResultado.innerHTML = "🎉 ¡Puntaje Perfecto (3/3)! Tienes un dominio excelente de la neurociencia.";
    } else if (puntaje === 2) {
        contenedorResultado.style.backgroundColor = "#fffde7";
        contenedorResultado.style.color = "#f57f17";
        contenedorResultado.style.border = "1px solid #fff59d";
        contenedorResultado.innerHTML = `👍 ¡Casi perfecto! Obtuviste ${puntaje} de 3 respuestas correctas.`;
    } else {
        contenedorResultado.style.backgroundColor = "#ffebee";
        contenedorResultado.style.color = "#c62828";
        contenedorResultado.style.border = "1px solid #ef9a9a";
        contenedorResultado.innerHTML = `Obtuviste ${puntaje} de 3 respuestas correctas. ¡Repasa el contenido de las otras páginas y vuelve a intentarlo!`;
    }
}


const consejos = [

    "Tomarte una pausa de 5 minutos también es avanzar.",
    "El sueño reparador de 7-8 horas elimina toxinas y consolidación la memoria profunda en tu cerebro.",
    "Expresar lo que sientes con palabras disminuye la hiperactividad de la amígdala cerebral.",
    "El ejercicio aeróbico estimula la liberación de BDNF, una proteína que favorece la neuroplasticidad y el aprendizaje.",
    "El estrés crónico incrementa los niveles de cortisol, afectando temporalmente el área del hipocampo.",
    "Practicar la gratitud activa los circuitos dopaminérgicos y seratoninérgicos de recompensa cerebral.",
    "Meditar solo 10 minutos al día ayuda a engrosar la corteza prefrontal, responsable del autocontrol.",
    "Tu cerebro no distingue completamente entre una amenaza real y una imaginada: aprende a cuestionar tus pensamientos catastróficos.",
    "Escribir en un diario ayuda a externalizar pensamientos confusos y reduce la carga cognitiva sobre el cerebro.",
    "Comer rico en Omega-3 y antioxidantes fortalece la membrana celular de las neuronas.",


    "No creas todo lo que piensas; la mente a menudo magnifica lo negativo bajo estados de estrés.",
    "Sentir ansiedad no te hace débil; es simplemente el sistema de alarma de tu cuerpo funcionando en exceso.",
    "Aprender a decir 'no' sin culpa es una de las mayores muestras de autocuidado.",
    "La salud mental no es la ausencia de problemas, sino la capacidad de lidiar con ellos progresivamente.",
    "Pedir ayuda profesional no es rendirse, es negarse a rendirse solo.",
    "Comparar tu vida con el contenido seleccionado de las redes sociales perjudica tu autovaloración.",
    "Tus emociones son señales informativas, no órdenes definitivas sobre cómo actuar.",
    "Aceptar lo que no puedes controlar ahorra una cantidad enorme de energía mental.",
    "Es normal no estar bien todo el tiempo; permítete procesar tus emociones sin juzgarte.",
    "Establecer límites claros en tus relaciones es fundamental para preservar tu estabilidad emocional.",


    "Desconectarte de las pantallas 1 hora antes de dormir mejora drásticamente la calidad de tu ciclo circadiano.",
    "La respiración diafragmática lenta estimula el nervio vago y activa la respuesta de relajación corporal.",
    "Rodearte de personas que validan tus sentimientos fortalece tu resiliencia emocional.",
    "Cambiar el 'tengo que hacer' por 'elijo hacer' modifica la percepción mental de obligación a autonomía.",
    "El autocuidado no siempre es de lujo; a veces es beber agua, ducharse y tender la cama.",
    "Pequeños pasos sostenidos en el tiempo construyen grandes cambios a nivel neuronal.",
    "Un espacio de trabajo limpio y ordenado reduce los estímulos innecesarios y la fatiga mental.",
    "Pasar tiempo en espacios verdes o al aire libre reduce la presión arterial y la hormona del estrés.",
    "El perfeccionismo extremo suele ser una máscara del miedo al fracaso o al rechazo.",
    "La amabilidad hacia ti mismo cuando cometes un error acelera la recuperación emocional."
];

let ultimoIndice = -1; 

const btnConsejo = document.getElementById('btnConsejo');
const textoConsejo = document.getElementById('textoConsejo');

if (btnConsejo && textoConsejo) {
    btnConsejo.addEventListener('click', () => {
        let nuevoIndice;
        

        do {
            nuevoIndice = Math.floor(Math.random() * consejos.length);
        } while (nuevoIndice === ultimoIndice && consejos.length > 1);

        ultimoIndice = nuevoIndice;


        textoConsejo.style.opacity = '0';
        textoConsejo.style.transition = 'opacity 0.25s ease';

        setTimeout(() => {
            textoConsejo.innerText = `"${consejos[nuevoIndice]}"`;
            textoConsejo.style.opacity = '1';
        }, 250);
    });
}


const toggleTheme = document.getElementById('toggleTheme');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleTheme) {
        toggleTheme.innerHTML = '☀️ Claro';
    }
}


if (toggleTheme) {
    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Verificar el estado actual y guardarlo en localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleTheme.innerHTML = '☀️ Claro';
        } else {
            localStorage.setItem('theme', 'light');
            toggleTheme.innerHTML = '🌙 Oscuro';
        }
    });
}


const circulo = document.getElementById('circuloRespiracion');

if (circulo) {
    function cicloRespiracion() {

        circulo.innerText = "Inhala...";


        setTimeout(() => {
            if (circulo) circulo.innerText = "Exhala...";
        }, 4000);
    }


    cicloRespiracion();

    
    setInterval(cicloRespiracion, 8000);
}


const rangoEstres = document.getElementById('rangoEstres');
const valorEstres = document.getElementById('valorEstres');
const btnEvaluarEstres = document.getElementById('btnEvaluarEstres');
const mensajeEstres = document.getElementById('mensajeEstres');

if (rangoEstres && valorEstres) {
    rangoEstres.addEventListener('input', (e) => {
        valorEstres.innerText = e.target.value;
    });
}

if (btnEvaluarEstres && mensajeEstres) {
    btnEvaluarEstres.addEventListener('click', () => {
        const nivel = parseInt(rangoEstres.value);
        mensajeEstres.style.display = 'block';

        if (nivel <= 3) {
            mensajeEstres.style.backgroundColor = '#e8f5e9';
            mensajeEstres.style.color = '#2e7d32';
            mensajeEstres.innerText = "🟢 Nivel bajo: Tu sistema nervioso está en equilibrio relativo. ¡Buen momento para concentrarte o estudiar!";
        } else if (nivel <= 7) {
            mensajeEstres.style.backgroundColor = '#fffde7';
            mensajeEstres.style.color = '#f57f17';
            mensajeEstres.innerText = "🟡 Nivel moderado: Empiezas a acumular tensión. Te recomendamos probar el ejercicio de respiración guiada de la pestaña interactivo.";
        } else {
            mensajeEstres.style.backgroundColor = '#ffebee';
            mensajeEstres.style.color = '#c62828';
            mensajeEstres.innerText = "🔴 Nivel alto: Tu amígdala cerebral está sobreactivada. Haz una pausa de 10 minutos, camina o toma agua.";
        }
    });
}

// --- EXPLORADOR DEL CEREBRO ---
const botonesCerebro = document.querySelectorAll('.btn-cerebro');
const infoCerebro = document.getElementById('infoCerebro');

if (botonesCerebro && infoCerebro) {
    botonesCerebro.forEach(boton => {
        boton.addEventListener('click', () => {
            infoCerebro.innerText = boton.getAttribute('data-info');
        });
    });
}