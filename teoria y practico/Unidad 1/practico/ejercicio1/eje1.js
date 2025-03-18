/* Escriba una función flecha que permita comparar si un objeto tiene todas sus
propiedades contenidas en un segundo objeto.  */
const txtPre1 = document.querySelector("#obj1")
const txtPre2 = document.querySelector("#obj2")
const txtSpan = document.querySelector("#resultado span")
const btnVerificar = document.querySelector("button#verificar")
const btnInvertir = document.querySelector("button#invertir")


persona1 = {
    name: 'martin',
    apellido: 'piriz',
    dni: '34877112',
    pelo: 'corto'


}

persona2 = {
    name: 'pablo',
    apellido: 'dutra',
    dni: '34877568',
    edad: 30,


}

function printObjet() {
    txtPre1.innerText = "PERSONA1 = " + JSON.stringify(persona1, null, 2);
    txtPre2.innerText = "PERSONA2 = " + JSON.stringify(persona2, null, 2);
}

/* const resultado= (obj1,obj2)=>{
    const val1=Object.keys(obj1)
    const val2=Object.keys(obj2)
     const res= val1.every(elem => val2.includes(elem))
   return res
} */

const resultado = (obj1, obj2) =>
    Object.keys(obj1).every(key => key in obj2);

btnVerificar.addEventListener('click', function () {
    txtSpan.innerHTML = ''
    txtSpan.innerHTML = "resultado(persona1,persona2) = "
    txtSpan.innerHTML += resultado(persona1, persona2)
})

btnInvertir.addEventListener('click', function () {
    txtSpan.innerHTML = ''
    txtSpan.innerHTML = "resultado(persona2,persona1) = "
    txtSpan.innerHTML += resultado(persona2, persona1)
})

printObjet()

console.log(resultado(persona1, persona2))



