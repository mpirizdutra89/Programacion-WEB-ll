const url = require('url')

function route(rutas, resq, resp) {
    const urlParseada = url.parse(resq.url, true)
    const ruta = urlParseada.pathname

    if (typeof rutas[ruta] === 'function') {

        rutas[ruta](resq, resp);
    } else {
        resp.writeHead(404, { 'Content-Type': 'text/html' });
        resp.end('<h1>404 No encontrado</h1>');
    }
}

module.exports = {

    route
}