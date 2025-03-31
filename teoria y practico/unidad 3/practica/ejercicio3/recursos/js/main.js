const carts = document.querySelector("div#carts")
const genero = document.querySelector("input.genero")
const selectSpecie = document.querySelector("#species")
const defaultImg = "recursos/img/default.png"

cargarEspecies()



selectSpecie.addEventListener("change", function (event) {


    const listaGenero = listadoGeneros()

    buscarPersonajes(event.target.value, listaGenero)

})


function buscarPersonajes(especieSelec, generoSelec) {
    fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("carts")
            container.innerHTML = ""



            const personajesFiltrados = data.filter(personaje => {
                let cumpleEspecie = true;
                let cumpleGenero = true;

                // Si hay especie seleccionada, filtrar por especie
                if (especieSelec) {
                    cumpleEspecie = personaje.species === especieSelec;
                }

                // Si hay género seleccionado, filtrar por género
                if (generoSelec.length > 0 && !generoSelec.every(op => op === "")) {
                    cumpleGenero = generoSelec.includes(personaje.gender);

                    return cumpleEspecie && cumpleGenero;

                } else {

                    return cumpleEspecie
                }


            });
            personajesFiltrados.forEach(personaje => {

                const card = document.createElement("div")
                card.classList.add("card");


                if (!personaje.alive) {
                    card.classList.add("muerto")
                }


                card.innerHTML = `
                <img src="${personaje.image || defaultImg}" alt="${personaje.name}">
                <h3>${personaje.name}</h3>
                <p>Casa: ${personaje.house || "Desconocida"}</p>
                <p>Estado: ${personaje.alive ? "Vivo 🟢" : "Muerto 🔴"}</p> `


                container.appendChild(card)
            });
        })
        .catch(error => console.error("Mensaje de la falla:", error))
}


function cargarEspecies() {
    toggleSelect(selectSpecie, true)
    fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(data => {



            const option = document.createElement("option")
            option.value = "Seleccione"
            option.textContent = "Seleccione especie"
            selectSpecie.appendChild(option);

            const especies = [...new Set(data.map(personaje => personaje.species))]
            especies.forEach(especie => {
                const option = document.createElement("option")
                option.value = especie;
                option.textContent = especie.charAt(0).toUpperCase() + especie.slice(1)
                selectSpecie.appendChild(option)
            });
            toggleSelect(selectSpecie, false)
            return data
        })
        .catch(error => {
            toggleSelect(selectSpecie, false)
            console.error("Error al obtener los datos:", error)

        })
}


function toggleSelect(select, estado) {

    if (select) {
        select.disabled = estado;
    }
}





function listadoGeneros() {
    const checkboxes = document.querySelectorAll(`input[name="genero"]:checked`);
    const valores = Array.from(checkboxes).map(checkbox => checkbox.value);


    if (valores.length === 0) return ["", ""];
    if (valores.length === 1) return [valores[0], ""];

    return valores;
}