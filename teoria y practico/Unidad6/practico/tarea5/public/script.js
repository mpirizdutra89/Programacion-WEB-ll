const form = document.querySelector("#formData")

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    inputs = event.target
    const data = {
        nombre: inputs.nombre.value,
        apellido: inputs.apellido.value,
        sexo: inputs.sexo.value,
        email: inputs.email.value,
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