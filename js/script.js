const botones = document.querySelectorAll('.boton-jugada');
const resultados = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

let puntosUsuario = 0;
let puntosOrdenador = 0;

resultados.style.display = "none";

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const jugadaUsuario = boton.querySelector(".button_top").dataset.jugada;
    const jugadaOrdenador = obtenerJugadaOrdenador();
    const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);
    mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado);
    actualizarPuntuacion(resultado);
  });
});

function obtenerJugadaOrdenador() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const jugadaAleatoria = Math.floor(Math.random() * opciones.length);
  return opciones[jugadaAleatoria];
}

function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
  if (jugadaUsuario === jugadaOrdenador) {
    return 'Empate';
  }
  if (
    (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
    (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
    (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
  ) {
    return 'Ganaste';
  }
  return 'Perdiste';
}

function mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado) {
  resultados.innerHTML = `Tu jugada: <strong>${jugadaUsuario}</strong> | Jugada de la máquina: <strong>${jugadaOrdenador}</strong> | Resultado: <strong>${resultado}</strong>`;
  resultados.style.display = "flex";
}


function actualizarPuntuacion(resultado) {
  if (resultado === 'Ganaste') {
    puntosUsuario++;
  } else if (resultado === 'Perdiste') {
    puntosOrdenador++;
  }
  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}