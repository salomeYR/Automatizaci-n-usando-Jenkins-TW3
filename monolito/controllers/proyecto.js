const Proyecto = require('../models/Proyecto');

const getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find()
            .populate('cliente', 'nombre email')
            .populate('tipoProyecto', 'nombre')
            .populate('universidad', 'nombre direccion')
            .populate('etapa', 'nombre');
        return res.json(proyectos);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const createProyecto = async (req, res) => {
    try {
        const proyecto = new Proyecto(req.body);
        await proyecto.save();
        return res.status(201).json(proyecto);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const updateProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        req.body.fechaActualizacion = new Date();
        const proyecto = await Proyecto.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json(proyecto);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

module.exports = { getProyectos, createProyecto, updateProyecto };
