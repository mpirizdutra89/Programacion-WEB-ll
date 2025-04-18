// router.js
var url = require("url");

function route(handle, request, response) {
    let pathname = url.parse(request.url).pathname;
    if (typeof handle[pathname] === 'function') {

        handle[pathname](response, request);// llamada a las funciones handlerRequest (index,about, contacto ,etc)
        //handle[pathname] es el handle -> objeto y  pathname-> tien el name de la funcion y con type of identifica que es una funcion. La variable pathname obtuvo solo el name y esto internamente dice funciont index()

    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("404 Not found");
        response.end();
    }

}

exports.route = route;