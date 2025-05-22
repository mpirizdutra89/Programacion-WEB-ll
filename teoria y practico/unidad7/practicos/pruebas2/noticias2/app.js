const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const { notFound, errorHandler } = require('./middlewares/errorHandler');

const inicioRouter = require('./routes/inicio')

// Public : archivos estáticos accesibles desde el navegador
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());//para que funcione console.log con console.log(req.body); si no da undefined



//configuro pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


/* app.use('/usuarios', acaRouterNuevos) Rutas mas espesificas van arriba de las generales para evitar problemas */

app.use('/', inicioRouter)
//

// Middleware 404 Maneja ruta que no exiten por eso va abajo
app.use(notFound);

// Middleware de errores generales 
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

