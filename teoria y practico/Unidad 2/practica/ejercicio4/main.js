const lista = ['jose', 'juan', 'ana', 'jose', 'carlos', 'rosa', 'ana'];
const listaSinDuplicados = [];

for (let elemento of lista) {
    if (!listaSinDuplicados.includes(elemento)) {
        listaSinDuplicados.push(elemento);
    }
}


console.log(listaSinDuplicados);
console.log(lista); 
