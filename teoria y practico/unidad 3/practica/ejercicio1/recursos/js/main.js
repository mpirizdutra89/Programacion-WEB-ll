/*1)_ Utilice Ajax para consumir la api https://randomuser.me/api/ que retorna en cada
petición los datos de perfil de un usuario fake.

Primero verifique en el navegador la api y compruebe que información retorna.
Utilice el visor de Json del sitio http://jsonviewer.stack.hu/ para pegar el texto plano de
json y con el visor facilitar el análisis de la respuesta.

Realice una página con un botón que permita mostrar los principales datos e imagen
pequeña del perfil recuperado en forma de lista. Agregue a cada entrada un botón para
eliminar esa entrada cuando sea necesario. */

const btnObtnerUsuarios = document.querySelector("button#btnObtnerUsuarios")
const listaUsuarios = document.querySelector("ul#listaUsuarios")

btnObtnerUsuarios.addEventListener("click", () => {

    cargando(true)
    fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
            const usuario = data.results[0]
            const li = document.createElement("li")
            li.innerHTML = `
                <img src="${usuario.picture.thumbnail}" alt="Imagen de perfil">
                <p>Nombre: ${usuario.name.first} ${usuario.name.last}</p>
                <p>Email: ${usuario.email}</p>
                <button class="btnEliminar">Eliminar</button>
            `
            listaUsuarios.appendChild(li)

            const btnEliminar = li.querySelector(".btnEliminar")
            btnEliminar.addEventListener("click", () => {
                listaUsuarios.removeChild(li)
            })
        })
        .catch((error) => console.error("Error:", error))
        .finally(() => {
            console.log("Solicitud completada")

            cargando(false)
        })
});

function cargando(opcion) {


    if (opcion) {
        btnObtnerUsuarios.classList.add("disabled");
        btnObtnerUsuarios.innerHTML = "cargando..."
    } else {
        btnObtnerUsuarios.classList.remove("disabled");
        btnObtnerUsuarios.innerHTML = "Obtener Usuarios"
    }
    btnObtnerUsuarios.disabled = opcion;

}


