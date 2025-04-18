
const fs = require('fs');

//leer un archivo
const poema = fs.readFileSync('poema.txt', 'utf-8')

//
const poemaModificado = poema.replace(/node.js/ig, 'NodeJs')

fs.writeFileSync('poema-modificado.txt', poemaModificado)


console.log(poemaModificado)