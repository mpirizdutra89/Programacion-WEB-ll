exports.formulario = (req, res) => {
    console.log(req.body);
    const datosResibidos = req.body
    res.json({
        ok: true,
        msj: 'Formulario recibido correctamente',
        data: datosResibidos
    })
}

