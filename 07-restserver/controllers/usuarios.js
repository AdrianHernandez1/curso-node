const { response , request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario.js');
const { validationResult } = require('express-validator');

const usuariosGet = (req=request, res=response)=>{
    const {q, nombre= 'No nombre', apikey, page = "1", limit} = req.query;

    res.json({
        'msg':'put API - controlador',
        "q":q,
        "nombre":nombre,
        "apikey":apikey,
        "page":page,
        "limit":limit
    });
}

const usuariosPut =  (req, res = response) => {

    const {id} = req.params;
    //res.send('Hello world');
    res.json({
        'msg':'put API - controlador',
        'id':id
    });
}

const usuariosPost = async (req, res) => {
    //res.send('Hello world');
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    // //Verificar si el correo existe
    // const existeEmail = await Usuario.findOne({correo});
    // if(existeEmail){
    //     return res.status(400).json({
    //         msg: 'El correo ya esta registrado'
    //     });
    // }

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);

    await usuario.save();

    res.status(201).json({
        'msg':'post API - controlador',
        usuario
    });
}

const usuariosPatch = (req, res) => {
    //res.send('Hello world');
    res.json({
        'msg':'patch API - controlador'
    });
}

const usuariosDelete = (req, res) => {
    //res.send('Hello world');
    res.json({
        'msg':'delets API - controlador'
    });
}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}