


function manejarInicio(req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    resp.end('<h1>Página de inicio</h1>');

}

function manejoContacto(req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    resp.end('<h1>Página de Contacto</h1>');
}




module.exports = {

    manejarInicio,
    manejoContacto
}

