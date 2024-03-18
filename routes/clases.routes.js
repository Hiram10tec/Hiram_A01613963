const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/canView');
const canCreate = require('../util/canCreate');
const canEdit = require('../util/canEdit');

const equipoController = require('../controllers/equipo.controller');

router.get('/crear', isAuth, canCreate, equipoController.get_crear);
router.post('/crear', isAuth, canCreate, equipoController.post_crear);
router.get('/editar/:id', isAuth, canEdit, equipoController.get_editar);
router.post('/editar', isAuth, canEdit, equipoController.post_editar);
router.get('/:jugador_id', isAuth, canView, equipoController.get_root);
router.get('/', isAuth, canView, equipoController.get_root);


module.exports = router;
