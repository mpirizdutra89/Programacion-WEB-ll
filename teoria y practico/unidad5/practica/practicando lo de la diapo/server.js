var http = require("http");


function start(route, handle) {
    /*  function requestListener(request, response) {
    route(handle, request, response);
  }

  http.createServer(requestListener).listen(8888);requestListener seria como hacer (request,response)=>{algo}
  console.log("Servidor iniciado.");*/

    http.createServer((request, response) => {
        console.log("Que hay?", handle)
        route(handle, request, response);
    }).listen(3000);
    console.log("Servidor iniciado.");
}

exports.start = start;