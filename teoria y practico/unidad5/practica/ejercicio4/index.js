
const { route } = require('./dis/route')
const { start } = require('./dis/server')
const view = require('./dis/view')

const rutas = {
    '/': view.manejarInicio,
    '/index': view.manejarInicio,
    '/contacto': view.manejoContacto,
};


start(route, rutas)