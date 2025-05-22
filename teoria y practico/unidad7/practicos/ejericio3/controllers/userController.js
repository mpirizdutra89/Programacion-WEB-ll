exports.formulario = (req, res) => {
    console.log(req.body);
    const datosResibidos = req.body
    res.json({
        ok: true,
        msj: 'Formulario recibido correctamente',
        data: datosResibidos
    })
}

exports.nuevoUsuario = (req, res) => {
    res.render('formulario', {
        title: 'Nueva Persona',
        profesiones: ['Médico', 'Ingeniero', 'Profesor', 'Abogado', 'Diseñador'],
        provincias_localidades: {
            'Buenos Aires': ['La Plata', 'Mar del Plata', 'Bahía Blanca'],
            'Cordoba': ['Córdoba Capital', 'Villa Carlos Paz'],
            'Santa Fe': ['Rosario', 'Santa Fe Capital']
        }
    })
}

