const TipoProyecto = require('../models/TipoProyecto');

const getTipoProyectos = async (req, res) => {
    try {
        const tipos = await TipoProyecto.find();
        return res.json(tipos);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const createTipoProyecto = async (req, res) => {
    try {
        const tipo = new TipoProyecto(req.body);
        await tipo.save();
        return res.status(201).json(tipo);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const updateTipoProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        req.body.fechaActualizacion = new Date();
        const tipo = await TipoProyecto.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json(tipo);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

module.exports = { getTipoProyectos, createTipoProyecto, updateTipoProyecto };
