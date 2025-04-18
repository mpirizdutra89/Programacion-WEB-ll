const http = require('http')




function start(route, rutas) {

    http.createServer(function (resq, resp) {
        try {


            route(rutas, resq, resp)

        } catch (error) {
            console.error('Error:', error);
            resp.writeHead(500, { 'Content-Type': 'text/html' });
            resp.end('<h1>500 Error interno del servidor</h1>');
        }

    }).listen(8000, () => {
        console.log('Servidor escuchando en el puerto 8000')
    })
}









module.exports = {

    start
}