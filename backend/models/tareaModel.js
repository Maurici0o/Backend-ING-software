const mongoose = require('mongoose')

const TareasSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, 'Por favor ingrese una descripcion'],
    }
},{
        timestamps: true
})

module.exports = mongoose.model('Tarea', TareasSchema)