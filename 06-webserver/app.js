import  express from "express";
import doteenv from "dotenv/config"

import * as url from 'url';

//Los miderware son funciones que se ejecutan desoues de realizar otra accion 
const app= express();
const port=process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//TODO: requiere('hbs')
app.set('view engine', 'hbs');

//Servir contenido estatico
app.use(express.static('public'));

// app.get('/', (req, res)=>{
//     res.send('Home page');
// });
app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Adrian Hernandez',
        titulo: 'Curso de node'
    })
});


app.get('/hola-mundo', (req, res)=>{
    res.send('Hola mundo en su respectiva ruta')
});

app.get('/generic', (req, res)=>{
    res.sendFile( __dirname+'/public/generic.html')
});

app.get('/elements', (req, res)=>{
    res.sendFile( __dirname+'/public/elements.html')
});

app.get('*', (req, res)=>{
    res.sendFile( __dirname+'/public/404.html')
});

app.listen(port, ()=>{
    console.log(`Example app listening at thhp://localhost:${port}`)
});