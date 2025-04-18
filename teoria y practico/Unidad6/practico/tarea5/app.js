const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

/* Si querés mantener todo limpio y compatible con navegadores que acceden a / o a /index.html, podés usar la opción de la expresión regular, o directamente servir public/ como carpeta estática: */
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'))

app.use(express.json());//para que funcione console.log con console.log(req.body); si no da undefined

app.post('/formulario', (req, res) => {
    /*  try { */
    console.log(req.body);
    const datosResibidos = req.body
    res.json({
        ok: true,
        msj: 'Formulario recibido correctamente',
        data: datosResibidos
    });
    /*   } catch (error) {
          console.error('Error en /formulario:', error.message);
          res.status(500).json({
              exito: false,
              mensaje: "Ocurrió un error en el servidor",
              error: error.message
          });
      } */

})

/* app.get(/^\/(index\.html)?$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

/* app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: true,
        mensaje: 'Error interno del servidor'
    });
}); */
app.use((err, req, res, next) => {
    console.error('Error global:', err.message);
    res.status(500).json({ mensaje: 'Error en el servidor Martin', error: err.message });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
//para evitar error de que no esta ese recurso hasta que ponga un icono
/* app.get('./favicon.ico', (req, res) => res.status(204).end()); */