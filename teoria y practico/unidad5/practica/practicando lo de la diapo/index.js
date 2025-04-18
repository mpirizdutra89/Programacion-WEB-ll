/* const http = require('http');
http.createServer(function (res, resp) {
  
//resp.writeHead(200, { 'content-type': 'text/plain' })//responde un texto plano
//resp.write("Hola martin como estas")//Escribo un msj
//resp.end();//finalizo la respuesta
//}).listen(3000) //aca ejecuta el codigo con la funcion escuchar en el puerto 3000 */

/* const contentType = 'text/html'
const html = (msj, titulo) => {
    return `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
</head>

<body>
    <h1>${msj}</h1>
</body>

</html>`
} */

/* 
const http = require('http')
const server = http.createServer(function (res, resp) {

    if (res.method === "GET" && res.url === '/home') {
        resp.writeHead(200, { 'content-type': contentType })
        resp.write(html)
    } else {
        resp.statusCode = 404

    }

    resp.end()
})


server.listen(3000);
console.log("Servidor iniciado") */

/* const http = require('http')
const server = http.createServer(function (res, resp) {
    const url = res.url
    if (res.method === "GET") {
        resp.writeHead(200, { 'content-type': contentType })
        if (url === '/home') { resp.write(html("Pagina de inicio", "HOME")) }
        else if (url === '/contacto') { resp.write(html("Pagina de contacto", "Contacto")) }
        else {
            resp.write(html(`La ruta ${url} no esta disponible`, "No exite"))
        }
    } else {
        resp.statusCode = 404

    }

    resp.end()
})


server.listen(3000);
console.log("Servidor iniciado") */



/* const http = require('http')
const server = http.createServer(function (res, resp) {
    resp.writeHead(200, { 'content-type': contentType })
    resp.write(html)
    resp.end()
})


server.listen(8181);
console.log("Servidor iniciado") */


/* Otro ejemplo  de lo que devulve el servidor por el puerto 3000*/
/* const http1 = require("http");
http1.createServer((req, res) => {
    const { method, url, headers } = req;
    res.writeHead(200, { "content-type": "text/plain" });


    res.write(`>>>>>>>Method: ${method} <<<<<<<<<<\n`);
    res.write(`Url: ${url} \n`);
    res.end(`Headers: ${JSON.stringify(headers)}`);


}).listen(3000); */



var server = require("./server");
var router = require("./router");
var requestHandlers = require("./handlerRequest");

var handle = {};
handle["/"] = requestHandlers.index;
handle["/about"] = requestHandlers.about;
handle["/contacto"] = requestHandlers.contacto;

console.log(handle)

server.start(router.route, handle);

