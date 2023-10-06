const fs = require('fs');
const argv = require('./config/yargs');
const colors = require('colors');
// const argv = require('yargs').argv;
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();
//OBTENER DATOS DE CONSOLA 
// console.log(process.argv);
//const base = 6;
// crearArchivo(base)
// .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
// .catch(error => console.log(error));

//RECIBIR INFORMACION DESDE LA LINEA DE COMONDOS 
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(error => console.log(error));

//USO DE YARGS
// console.log(argv);
// console.log('base: yargs', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(error => console.log(error));