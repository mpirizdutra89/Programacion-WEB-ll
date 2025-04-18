const express = require('express')
/* const pug = require('pug') */
const app = express()
const PORT = 3000

app.set('view engine', 'pug')
app.set('views', './views')


app.get('/', function (req, res) {
    //console.log("Hola mundo el servidor responde")
    // res.send("Hola mundo")
    res.render('index', { titulo: 'Mi pug', msj: 'Mi primer plantilla de Pug' })
})



app.listen(PORT, () => {
    console.log(`Server iniciado ${PORT}`)

})