/* 2.- Desarrolle un módulo fecha que pueda indicarnos la fecha y hora actual. Cree algún
código que requiera el módulo y pruebe su funcionamiento en el navegador.  */

/* Para este ejercicio voy a usar la libreria Temporal que todavia no es nativa para java script */

//import { fechaActual, horaActual } from './fechas-temporal.js';
//import { Temporal } from "@js-temporal/polyfill";
const fecha = Temporal.Now.plainDateISO();
const horaCompleta = Temporal.Now.plainTimeISO();
const horaMinutos = `${horaCompleta.hour.toString().padStart(2, '0')}:${horaCompleta.minute.toString().padStart(2, '0')}`;

const horaEtiqueta = document.querySelector("#hora")
const fechaEtiqueta = document.querySelector("#fecha")

function fechas() {
    fechaEtiqueta.innerHTML = fecha

}
function horas() {
    horaEtiqueta.innerHTML = horaMinutos
}
fechas()
horas()


setInterval(horas(), 1000)