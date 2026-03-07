const Etapa = require('../models/Etapa');

const getEtapas = async (req, res) => {
    try {
        const etapas = await Etapa.find();
        return res.json(etapas);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const createEtapa = async (req, res) => {
    try {
        const etapa = new Etapa(req.body);
        await etapa.save();
        return res.status(201).json(etapa);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const updateEtapa = async (req, res) => {
    try {
        const { id } = req.params;
        req.body.fechaActualizacion = new Date();
        const etapa = await Etapa.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json(etapa);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

module.exports = { getEtapas, createEtapa, updateEtapa };
