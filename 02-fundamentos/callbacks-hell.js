

const empleados = [
    {
        id:1,
        nombre: 'Adrian'
    },
    {
        id:2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre: 'Karen'
    },
];

const salarios =[
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
];

const getEmpleado = (id, callback) =>{
    const empleado = empleados.find(e => e.id === id);
    if(empleado){
        callback(null,empleado.nombre);
    }else{
        callback(`Empleado con id ${id} no existe`);
    }
    return empleado;
}

const getSalario = (id, callback)=>{
    const salario = salarios.find(s => s.id === id)?.salario;
    if(salario){
        callback(null, salario);
    }else{
        callback(`El salario con id ${id} no existe`);
    }
    return salario;
}

const id=1;

getEmpleado(id, (err, empleado)=>{
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    getSalario(id, (err, salarios)=>{
        if(err){
            return console.log(err);
        }
        console.log('El empleado: ', empleado, ' tiene un salario de: '+salarios);
    });
})

// getSalario(id, (err, salarios)=>{
//     if(err){
//         console.log('ERROR!');
//         return console.log(err);
//     }
//     console.log('Salario existe!');
//     console.log(salarios);
// });
// console.log(getEmpleado(5));