// handlerRequest.js
function index(response, request) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(' Hello World <br>');
    response.end();
}

function about(response, request) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(' Welcome to about us page <br>');
    response.end();
}

function contacto(response, request) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(' Welcome to contact us page <br>');
    response.end();
}

exports.index = index;
exports.about = about;
exports.contacto = contacto;