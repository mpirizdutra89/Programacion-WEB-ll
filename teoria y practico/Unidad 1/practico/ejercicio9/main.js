import {
  intputBuscar,
  lista,
  msjGeneral,
  validarBuscar,
  crearLi,
  baseDatos
} from './variables.js';


intputBuscar.addEventListener('input', () => {
  //msjGeneral.innerHTML = intputBuscar.value; para ver lo que se escribe en el input
  if (!validarBuscar()) {
    return;
  }
  const texto = intputBuscar.value.toLowerCase();
  const sugerencias = baseDatos.filter(palabra => palabra.toLowerCase().startsWith(texto));

  crearLi([... new Set(sugerencias)]);


})