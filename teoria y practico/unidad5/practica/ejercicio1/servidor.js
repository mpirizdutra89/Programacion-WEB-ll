const http = require('http')
const url = require('url');

const contentType = 'text/html'




const html = (msj, titulo) => {
    const style = `<style>
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: 100vh;
            background-color: #f4f4f4;
        }

        h1 {
            text-align: center;
            margin: 20px 0;
            color: #333;
        }

        #info-container {
            width: 80%;
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        #info-container p {
            line-height: 1.6;
            margin-bottom: 15px;
            color: #555;
        }

        #info-container p:first-child {
            font-weight: bold;
            font-size: 1.1em;
        }

        #info-container p:last-child {
            margin-bottom: 0;
        }

        #info-container p:nth-child(even) {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 5px;
        }
    </style>`;

    return `<!DOCTYPE html>
                <html lang="es">

                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${titulo}</title>
                        ${style}
                    </head>

                    <body>
                    <h1>Bienvenido a su primera aplicación web</h1>
                    ${msj}
                    </body>

                </html>`;
}



const server = http.createServer(function (request, resp) {
    resp.writeHead(200, { 'content-type': contentType })
    const metodo = request.method;
    const host = request.headers.host;
    const urlParseada = url.parse(request.url, true);
    const ruta = urlParseada.pathname;
    const recurso = ruta.split('/').pop();

    const msj = ` <p>Metodo HTTP: ${metodo}</p>
      <p>Host: ${host}</p>
      <p>Ruta: ${ruta}</p>
      <p>Recurso: ${recurso}</p>
      <p> <a href='http://localhost:3000/index/usuarios'>prueba esta url</a></p>
      `

    resp.write(html(msj, 'ejercicio1'))
    resp.end()
    requerimientosServer(request)
})


function requerimientosServer(request) {
    console.log('--- Nueva Solicitud ---');
    console.log('Método:', request.method);
    console.log('URL:', request.url);
    console.log('Cabeceras:', request.headers);
    console.log('Cliente IP:', request.socket.remoteAddress);
    console.log('Cliente Puerto:', request.socket.remotePort);
}


server.listen(3000);
console.log("Servidor iniciado")
