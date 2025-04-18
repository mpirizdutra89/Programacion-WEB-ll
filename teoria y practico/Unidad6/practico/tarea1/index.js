const express = require('express')
const path = require('path');
const app = express()
const port = 3000


app.use(express.static('public'))

app.use((req, res, next) => {
    console.log(`Petición recibida: ${req.method} ${req.url}`);
    next();
});





app.get('/', (req, res) => {
    res.sendFile(__dirname, './public/index.html')
})
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/otro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'otro.html'));
})
app.get('/lobo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/img', 'lobo.jpg'));
})



app.use((req, res,) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));

});




app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    // solo para el dev

});
