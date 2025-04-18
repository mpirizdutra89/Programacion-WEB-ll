const form = document.querySelector("#formData")

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    inputs = event.target
    const provincia = event.target.querySelector('select[name="provincia"]')
    const localidad = event.target.querySelector('select[name="localidad"]')
    let provinciaValue = 0
    let localidadValue = 0
    let valoresSeleccionados = {}
    if (provincia) {
        provinciaValue = provincia.value
    }
    if (localidad) {
        localidadValue = localidad.value
    }
    if (document.querySelector('input[name="profesiones"]')) {
        const checkboxes = event.target.querySelectorAll('input[name="profesiones"]:checked');
        valoresSeleccionados = Array.from(checkboxes).map(cb => cb.value);
    }


    const data = {
        nombre: inputs.nombre.value,
        dni: inputs.dni.value,
        profesion: valoresSeleccionados,
        provincia: provinciaValue,
        localidad: localidadValue,

        fecha: inputs.fecha.value,
        nacionalidad: inputs.nacionalidad.value
    }

    try {
        const respuesta = await fetch('/formulario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        });
        const resultado = await respuesta.json();
        console.log('Respuesta del servidor:', resultado.msj);

        mostrarDatosEnLista(resultado.data);

    } catch (error) {
        console.error('Error al enviar el formulario:', error);

    }


})

const select = document.querySelector('select[name="provincia"]');
const selectLocalidad = document.querySelector("#localidad")

select.addEventListener('change', (event) => {

    try {
        const selectedOption = event.target.options[event.target.selectedIndex]

        const valorSeleccionado = JSON.parse(selectedOption.dataset.id)
        selectLocalidad.innerHTML = ''
        valorSeleccionado.forEach(element => {
            selectLocalidad.innerHTML += `<option value='${element}'>${element}</option>`
        });
    } catch (error) {

        selectLocalidad.innerHTML = ''
        selectLocalidad.innerHTML = "<option value='0'>No hay datos</option>"
    }


});



function mostrarDatosEnLista(datos) {

    const ul = document.getElementById('lista-datos');
    ul.innerHTML = ''
    ul.innerHTML = '<li>Datos vuelven del servidor:</li>';

    for (const clave in datos) {
        const li = document.createElement('li');
        li.textContent = `${clave}: ${datos[clave]}`;
        ul.appendChild(li);
    }
}