const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
    //    await mongoose.connect(process.env.MONGODB_CNN, {
    //     // useNewUrlParser:true,
    //     // useUnifiedTopology:true,
    //     // useCreateIndex:true,
    //     // useFindAndModify:false
    //    }); 
    await mongoose.connect(process.env.MONGODB_CNN); 

       console.log('Base de datos conectada');     
    } catch (error) {
        console.log('ERROR AL CONECTAR A LA BASE DE DATOS')
        console.log(error)
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}


module.exports ={
    dbConnection
}