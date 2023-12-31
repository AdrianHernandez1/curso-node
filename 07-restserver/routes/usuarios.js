const { Router } = require("express");
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares/validar-campos.js')
const {esRoleValido, emailExiste} = require('../helpers/db-validators.js')

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch } = require('../controllers/usuarios')
const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/',
[
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser mas de 6 letras').isLength({min:6}),
        check('correo').custom(emailExiste),
        check('correo', 'El correo ingresado, no es un correo. Intenta de nuevo').isEmail(),
        // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('rol').custom(esRoleValido),

        validarCampos
]
,usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
