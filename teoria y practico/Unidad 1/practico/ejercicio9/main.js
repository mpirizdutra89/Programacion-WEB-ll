import {
  intputBuscar,
  lista,
  msjGeneral,
  validarBuscar,
  crearLi,
  baseDatos
} from './variables.js';


intputBuscar.addEventListener('input', () => {

  if (!validarBuscar()) {
    return;
  }
  const texto = intputBuscar.value.toLowerCase();
  const sugerencias = baseDatos.filter(palabra => palabra.toLowerCase().startsWith(texto));

  crearLi([... new Set(sugerencias)]);


})