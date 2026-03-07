const Universidad = require('../models/Universidad');

const getUniversidades = async (req, res) => {
    try {
        const universidades = await Universidad.find();
        return res.json(universidades);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const createUniversidad = async (req, res) => {
    try {
        const universidad = new Universidad(req.body);
        await universidad.save();
        return res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const updateUniversidad = async (req, res) => {
    try {
        const { id } = req.params;
        req.body.fechaActualizacion = new Date();
        const universidad = await Universidad.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

module.exports = { getUniversidades, createUniversidad, updateUniversidad };
