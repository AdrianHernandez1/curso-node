const { response , request} = require('express');

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

const usuariosPost = (req, res) => {
    //res.send('Hello world');
    const {nombre, edad} = req.body;

    res.status(201).json({
        'msg':'post API - controlador',
        'nombre': nombre,
        'edad':edad
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