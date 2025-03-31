
// marca, modelo y tipo de combustible
const rutaArmada = document.querySelector("pre#resultado small span")
const cantidadAutos = document.querySelector("#cantidadAutos")
const autoBuscado = document.querySelector("#autoBuscado")
const btnBuscar = document.querySelector("#btnBuscar")
const apiKey = "v3Q3eMYH8rVhceqGb5u6hb0TgdFeuRuF4FxHIegL"

const params = new URLSearchParams();


const url = () => {
    const marca = document.querySelector("#marca").value
    const modelo = document.querySelector("#modelo").value
    const combustible = document.querySelector("#combustible").value
    if (marca.trim()) params.append("make", marca)
    if (modelo.trim()) params.append("model", modelo)
    if (combustible.trim()) params.append("fuel_type", combustible)

    return params.toString()
}

//La api siempre devuelve una auto ya que pide ser prmiun para mas que se logra con el parametro limit=5 
//error al usar limit es {"error": "The limit parameter is for premium users only."}
function buscarAuto(parametros) {
    const url = `https://api.api-ninjas.com/v1/cars?${parametros}`
    rutaArmada.innerHTML = url
    if (parametros) {
        fetch(url, {
            method: 'GET', // También puede ser 'POST', 'PUT', 'DELETE'
            headers: { 'X-Api-Key': apiKey }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText} - ${parametros}`);
                }
                return response.json();
            })
            .then(data => {

                if (data.length > 0) {
                    let auto = data[0];

                    cantidadAutos.innerHTML = `${data.length}   `
                    autoBuscado.innerHTML = `Marca: ${auto.make}, Modelo: ${auto.model}, Año: ${auto.year}, combutible ${auto.fuel_type}`;
                } else {
                    console.log('No se encontraron autos de la marca especificada.');
                }
            })
            .catch(error => {
                console.error("Ocurrió un error:", error.message);


            })
    }

}




btnBuscar.addEventListener("click", function () {
    buscarAuto(url())


})

