import http from 'http';
//La req es lo que se esta solicitando del lado del clientes 
//El res es lo que se responde cuando se procesa la req

http.createServer((req, res) =>{
    // res.writeHead(200, {'Content-Type': 'application/json'} );

    // const persona = {
    //     id: 1,
    //     nombre : 'Adrian'
    // }
    // res.write(JSON.stringify(persona));
    // res.end();


    //DESCARGAR UN ARCHIVO CON EXTENCION CSV
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, Adrian\n');
    // res.write('2, Fernando\n');
    // res.write('3, Juan\n');
    // res.write('4, Pedro\n');
    // res.end();

    res.write('Hola mundo');
    res.end();
})
.listen(4200);

console.log('Escuchando el puerto', 4200)