const express = require('express');
const router = express.Router();
const controller = require('../controllers/inventario.controllers');

router.get('/', controller.index);
router.get('/create', controller.create); // <-- Move this above
router.get('/:id', controller.show);
router.post('/', controller.store);

module.exports = router;