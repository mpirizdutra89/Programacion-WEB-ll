
const saludar = () => console.log("Hola buenos")
const saludar2 = (msj) => {
    msj = `hola señor,${msj}`

    return msj
}


export {
    saludar,
    saludar2
}