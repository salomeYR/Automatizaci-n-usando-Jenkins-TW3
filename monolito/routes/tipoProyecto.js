const { Router } = require('express');
const { getTipoProyectos, createTipoProyecto, updateTipoProyecto } = require('../controllers/tipoProyecto');

const router = Router();

router.get('/', getTipoProyectos);
router.post('/', createTipoProyecto);
router.put('/:id', updateTipoProyecto);

module.exports = router;
