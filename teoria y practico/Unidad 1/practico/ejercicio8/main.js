import {
  formulario,
  ValidarFormulario,
  encabezado,
  datos,
  cargarDatos,
  cargarTabla,
  valorePorDefecto

} from './variables.js';

valorePorDefecto()
cargarTabla()

formulario.addEventListener("submit", (event) => {
  event.preventDefault()
  if (ValidarFormulario()) {
    //formulario.submit() al formulario por el momento no lo voy a enviar hasta que entinda mas sobre node js

    datos.push(cargarDatos())
    cargarTabla()
    formulario.reset()

  }

});

encabezado.addEventListener("click", (event) => {

  if (event.target.tagName === "TH") {
    const idBoton = event.target.dataset.id;
    //1 es año 2 suceso 3 inflacion
    datos.sort((a, b) => {
      if (idBoton == 1) {
        return a.year - b.year
      }
      if (idBoton == 2) {
        return a.suceso.localeCompare(b.suceso)
      }
      if (idBoton == 3) {
        return a.inflacion - b.inflacion
      }
    })
    cargarTabla()
  }
})




