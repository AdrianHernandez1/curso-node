const Role = require('../models/role.js')
const Correo = require('../models/email.js');
const Usuario = require('../models/usuario.js');


const esRoleValido = async(rol='')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error(`El rol ${ rol } no esta registrado en la BD`);
    }
}

const emailExiste = async(correo='')=>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`El correo ${ correo } ya se encuentra registrado`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste
}