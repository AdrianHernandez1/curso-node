//UN CALLBACK ES UNA FUNCION QUE SE VA A EJECUTAR EVENTUALMENTE, CUANDO LA FUNCION DE LA ORDEN DE 
//EJECUTARSE. 
// setTimeout(function(){
//     console.log('Hola Mundo')
// },1000)

const getUsuarioById = (id, callback)=>{
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(()=>{
        callback(usuario);
    },1500)
}

getUsuarioById(10, (usuario) =>{
    console.log(usuario);
    console.log(usuario.id);
    console.log(usuario.nombre);
});