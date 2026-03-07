const { Schema, model } = require('mongoose');

const TipoProyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        enum: ['ensayo', 'artículo', 'monografía', 'trabajo final de pregrado', 'trabajo final de especialización']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('TipoProyecto', TipoProyectoSchema);
