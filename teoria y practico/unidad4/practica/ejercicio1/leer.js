/*1 Realice el programa utilizando la función síncrona readFileSync
2Realice el programa utilizando la función asíncrona readFile con callback
3 Realice el programa utilizando la función asíncrona readFile usando la
versión con promesas
4 Realice el programa utilizando la función asíncrona readFile usando
async/await  */

// Usando readFileSync (síncrono)
function usandoReadFileSync(fs, archivo) {
    try {
        const contenido = fs.readFileSync(archivo, 'utf8');
        console.log(contenido);
        console.log('Fin de contenido del archivo');
    } catch (err) {
        console.error('Error al leer el archivo:', err);
    }
}


//. Usando readFile con callback (asíncrono)
function usandoReadFileCallback(fs, archivo) {
    fs.readFile(archivo, 'utf8', (err, contenido) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        console.log(contenido);
        console.log('Fin de contenido del archivo');
    });
}

//Usando readFile con promesas (asíncrono)
function usandoReadFilePromesas(archivos) {
    const fs = require('fs').promises;

    fs.readFile(archivos, 'utf8')
        .then((contenido) => {
            console.log(contenido);
            console.log('Fin de contenido del archivo');
        })
        .catch((err) => {
            console.error('Error al leer el archivo:', err);
        });
}

//Usando readFile con async/await (asíncrono)

async function usandoReadFileAsync(archivo) {
    const fs = require('fs').promises;
    try {
        const contenido = await fs.readFile(archivo, 'utf8');
        console.log(contenido);
        console.log('Fin de contenido del archivo');
    } catch (err) {
        console.error('Error al leer el archivo:', err);
    }
}



module.exports = {
    usandoReadFileAsync
}