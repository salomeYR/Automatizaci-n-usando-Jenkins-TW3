const Cliente = require('../models/Cliente');

const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const createCliente = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        req.body.fechaActualizacion = new Date();
        const cliente = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({ msg: e.message });
    }
}

module.exports = { getClientes, createCliente, updateCliente };
