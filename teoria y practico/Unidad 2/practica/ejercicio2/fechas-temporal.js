//import { Temporal } from '@js-temporal/polyfill';
const fecha = Temporal.Now.plainDateISO();
const horaCompleta = Temporal.Now.plainTimeISO();
const horaMinutos = `${horaCompleta.hour.toString().padStart(2, '0')}:${horaCompleta.minute.toString().padStart(2, '0')}`;


export const fechaActual = fecha;
export const horaActual = horaMinutos;//