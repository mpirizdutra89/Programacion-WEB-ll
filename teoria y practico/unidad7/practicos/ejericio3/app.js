/* 3- Realice una plantilla que muestre un formulario para cargar los datos de una persona.
Los datos a considerar són: Nombre, DNI, Sexo, Profesión, Provincia de Nacimiento,
Localidad de Nacimiento y Fecha de Nacimiento.

El campo Profesión debe ser un checkbox.
El campo Provincia y localidad debe ser un select

Los datos de las Profesiones, Provincias y Localidades deben ser pasados como datos
locals desde el script a la plantilla.
En el caso de no contener datos de Provincias ni Localidades debe mostrarse un select
desactivado con un valor “No existen datos”.
En el caso de no existir profesiones no debe mostrarse ningún elemento de entrada.  */

const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const { notFound, errorHandler } = require('./middlewares/errorHandler');



// Public : archivos estáticos accesibles desde el navegador
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());//para que funcione console.log con console.log(req.body); si no da undefined



//configuro pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


/* 
app.get(/^\/(inicio)?$/, (req, res) => {
    res.render('inicio');
});

app.get('/nueva-persona', (req, res) => {
    res.render('formulario', {
        title: 'Nueva Persona',
        profesiones: ['Médico', 'Ingeniero', 'Profesor', 'Abogado', 'Diseñador'],
        provincias_localidades: {
            'Buenos Aires': ['La Plata', 'Mar del Plata', 'Bahía Blanca'],
            'Cordoba': ['Córdoba Capital', 'Villa Carlos Paz'],
            'Santa Fe': ['Rosario', 'Santa Fe Capital']
        }
    });
});

app.post('/formulario', (req, res) => {

    console.log(req.body);
    const datosResibidos = req.body
    res.json({
        ok: true,
        msj: 'Formulario recibido correctamente',
        data: datosResibidos
    });

})


 */

// Middleware 404
app.use(notFound);

// Middleware de errores generales (opcional)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})



/* function datos() {
    const profesiones = ['Médico', 'Ingeniero', 'Profesor', 'Abogado', 'Diseñador'];
    const provincias = ['Buenos Aires', 'Córdoba', 'Santa Fe'];
    const localidades = {
        'Buenos Aires': ['La Plata', 'Mar del Plata', 'Bahía Blanca'],
        'Córdoba': ['Córdoba Capital', 'Villa Carlos Paz'],
        'Santa Fe': ['Rosario', 'Santa Fe Capital']
    };
} */
