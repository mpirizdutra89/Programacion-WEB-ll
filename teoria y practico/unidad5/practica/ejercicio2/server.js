/* Cree una aplicación web que atienda las rutas index, contacto y about.
La aplicación debe retornar el 404 para atender una ruta no considerada y un 500 en el
caso de que exista un error al procesar el requerimiento.
El contenido de la respuesta del 404 debe ser una imagen que haga referencia al código
de status.
a) Modifique su servidor. Use console.log() para mostrar en la consola todos los
requerimientos que le llegan al servidor. 
 */


const http = require('http');
const fs = require('fs');
const url = require('url');


const contentTypeHtml = 'text/html'
const contentTypePlain = 'text/plain'
const contentTypeImagen = 'image/jpeg'
const rutasDisponibles = ['/', '/index', '/about', '/contacto']
const img404 = './public/404.jpg'


// resp.writeHead(200, { 'content-type': contentType })
const server = http.createServer(function (request, resp) {

    const urlParseada = url.parse(request.url, true);
    const ruta = urlParseada.pathname;


    try {

        msjRequestServidor(request)

        if (request.method === 'GET') {
            //ruta no disponible error 404

            if (!rutasDisponibles.includes(ruta)) {
                error404(resp)

            } else {
                enRutar(ruta, resp)
            }

        }


    } catch (error) {

        console.error('Error:', error);
        resp.writeHead(500, { 'Content-Type': 'text/html' });
        resp.end('<h1>500: Error interno del servidor</h1>');
    }



});

server.listen(3000)
console.info("Servidor iniciado correctamente")



function error404(resp) {
    fs.readFile(img404, (err, imagen) => {
        if (err) {
            resp.writeHead(404, { 'content-type': contentTypePlain })
            resp.end("404: Recurso no encontrado")
        } else {
            resp.writeHead(404, { 'content-type': contentTypeImagen })
            resp.end(imagen)
        }

    })
}

function enRutar(ruta, resp) {
    resp.writeHead(200, { 'content-type': contentTypeHtml })
    let msj = ``;
    switch (ruta) {
        case '/index':
            msj = `<h1>Bienvenido a la pagina de [${ruta}] </h1>`
            //aca podria haber mas html

            break;
        case '/about':
            msj = `<h1>Bienvenido a la pagina de [${ruta}] </h1>`

            break;
        case '/contacto':
            msj = `<h1>Bienvenido a la pagina de [${ruta}] </h1>`

            break;


    }
    resp.end(htmlEdit(ruta, msj))
}


function htmlEdit(titulo, body) {
    return `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/public/favicons/favicon-16x16.png" type="image/x-icon">
     <link rel="stylesheet" href=" href="/public/style.css"">
    <title>${titulo}</title>
    
</head>

<body>
    ${body}
</body>

</html>`;
}


function msjRequestServidor(request) {
    console.log('--- Nueva Solicitud ---');
    console.log('Método:', request.method);
    console.log('URL:', request.url);
    console.log('Cabeceras:', request.headers);
    console.log('Cliente IP:', request.socket.remoteAddress);
    console.log('Cliente Puerto:', request.socket.remotePort);
}