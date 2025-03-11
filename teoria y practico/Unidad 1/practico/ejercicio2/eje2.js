const txtfecha = document.querySelector("pre #fecha");
const txthora = document.querySelector("pre #hora");
const actual = new Date();

function actualizarFecha() {
  const personalizarFecha = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const fecha = actual.toLocaleDateString("es-ES", personalizarFecha);
  txtfecha.innerHTML = `Hoy es ${fecha}`;
}

function actualizarHora() {
    const actual2 = new Date();
  const personalizarHora = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
  };
  const hora = actual2.toLocaleTimeString("es-ES", personalizarHora);
  txthora.innerHTML = `La hora actual es ${hora}`;
}

actualizarFecha()


setInterval(actualizarHora,1000)
