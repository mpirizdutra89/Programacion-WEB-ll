const intputBuscar = document.querySelector('#inputBuscar');
const lista = document.querySelector('ul#lista');
const msjGeneral = document.querySelector('#msjGeneral');

const palabras = {
    personas: ["Juan", "María", "Carlos", "Ana", "Pedro", "Luis", "Sofía", "Gabriel", "Elena", "Martín"],
    autos: ["Toyota", "Ferrari", "BMW", "Mercedes", "Audi", "Ford", "Chevrolet", "Honda", "Nissan", "Lamborghini"],
    frutas: ["Manzana", "Banana", "Naranja", "Pera", "Uva", "Sandía", "Melón", "Kiwi", "Cereza", "Mango"],
    paises: ["Argentina", "España", "Japón", "Brasil", "Francia", "Italia", "Alemania", "México", "Canadá", "China"],
    javascript: ["Variable", "Evento", "Promise", "Callback", "Array", "Objeto", "Fetch", "Async", "Await", "DOM"]
};

const baseDatos = Object.values(palabras).flat();

function validarBuscar() {
    if (intputBuscar.value === '') {
        lista.innerHTML = '';
        return false;
    }
    return true;
}


function crearLi(palabras) {
    lista.innerHTML = "";
    palabras.forEach(palabra => {
        const li = document.createElement("li");
        li.textContent = palabra;
        li.addEventListener("click", function () {
            intputBuscar.value = palabra;
            lista.innerHTML = "";
        });
        lista.appendChild(li);
    });
}

export {
    intputBuscar,
    lista,
    msjGeneral,
    validarBuscar,
    baseDatos,
    crearLi
};