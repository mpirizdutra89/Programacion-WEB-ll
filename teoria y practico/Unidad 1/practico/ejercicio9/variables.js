const formulario = document.querySelector("#formulario");
const inputYear = document.querySelector("#year");
const inputSuceso = document.querySelector("#suceso");
const inputInflacion = document.querySelector("#inflacion");
const btnYear = document.querySelector("#btnYear");
const btnSuceso = document.querySelector("#btnSuceso");
const btnInflacion = document.querySelector("#btnInflacion");
const msjGeneral = document.querySelector("#msjGeneral");
const msjYear = document.querySelector("#msjYear");
const msjSuceso = document.querySelector("#msjSuceso");
const msjInflacion = document.querySelector("#msjInflacion");
const encabezado = document.querySelector("#listado thead")
let datos = [];

const validarYear = (year) => year >= 1900 && year <= 2020
const validarSuceso = (suceso) => suceso.length >= 1 && suceso.length <= 20
const validarInflacion = (inflacion) => {

    const mayorCero = inflacion > 0;
    const tieneDosDecimales = /^\d+(\.\d{1,2})?$/.test(inflacion);

    return mayorCero && tieneDosDecimales;
}

const esVacio = (input) => {
    const valor = input.value.trim();
    return valor === "";
};
function ValidarFormulario() {
    let err = false;
    const year = inputYear.value;
    const suceso = inputSuceso.value;
    const inflacion = inputInflacion.value;
    limpiarErrores()
    if (esVacio(inputYear) || esVacio(inputSuceso) || esVacio(inputInflacion)) {
        errores(4);
        err = true;

    } else {
        if (!validarYear(year)) {
            errores(1);
            err = true;
        }
        if (!validarSuceso(suceso)) {
            errores(2);
            err = true;
        }
        if (!validarInflacion(inflacion)) {
            errores(3);
            err = true;
        }
    }

    if (err) {

        return false;
    }

    return true

}


function errores(opcion) {

    switch (opcion) {
        case 1:

            msjYear.innerHTML = "*El año debe ser entre 1900 y 2020"
            msjYear.classList.toggle("error")
            break
        case 2:

            msjSuceso.innerHTML = "*El suceso debe tener entre 1 y 20 caracteres"
            msjSuceso.classList.toggle("error")
            break
        case 3:

            msjInflacion.innerHTML = "*La inflacion debe tener dos decimales"
            msjInflacion.classList.toggle("error")
            break
        default:
            msjGeneral.innerHTML = "*Todo los campos son obligatorios"
            msjGeneral.classList.toggle("error")
            break
    }

}

function limpiarErrores() {
    msjGeneral.innerHTML = ""
    msjGeneral.classList.remove("error")
}

function cargarDatos() {
    const year = inputYear.value;
    const suceso = inputSuceso.value;
    const inflacion = inputInflacion.value;
    const datos = {
        year,
        suceso,
        inflacion
    }
    return datos
}

function cargarTabla() {
    const tabla = document.querySelector("#listadoBody")
    tabla.innerHTML = ''
    let html = ""
    datos.forEach((dato) => {
        html += `
        <tr>
            <td>${dato.year}</td>
            <td>${dato.suceso}</td>
            <td>${dato.inflacion}</td>
        </tr>
        `
    })
    tabla.innerHTML = html
}

function valorePorDefecto() {
    datos.push({ year: 1990, suceso: "Caída del Muro de Berlín", inflacion: 5.2 });
    datos.push({ year: 2001, suceso: "Atentados del 11 de septiembre", inflacion: 2.8 });
    datos.push({ year: 2008, suceso: "Crisis financiera mundial", inflacion: 4.1 });
    datos.push({ year: 2016, suceso: "Brexit: Reino Unido vota por salir de la UE", inflacion: 1.6 });
    datos.push({ year: 2020, suceso: "Pandemia de COVID-19", inflacion: 3.2 });
}

export {
    formulario,
    ValidarFormulario,
    encabezado,
    datos,
    cargarDatos,
    cargarTabla,
    valorePorDefecto
    /*  inputYear,
     inputSuceso,
     inputInflacion,
     
     msjGeneral,
     msjYear,
     msjSuceso,
     msjInflacion */
};