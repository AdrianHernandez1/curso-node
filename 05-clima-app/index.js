import 'dotenv/config'
import { leerInput, inquirerMenu, pausa , listarLugares} from "./helpers/inquirer.js";
import { Busquedas } from "./models/busquedas.js";

const main = async()=>{
    let opt;
    const busquedas = new Busquedas()
    do{
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                //Mostrar mensaje
                const termino  = await leerInput('Ciudad: ');
                //Buscar lugares
                const lugares = await busquedas.ciudad(termino);
                 //Seleccionamos el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(l => l.id === id);
                // console.log(lugarSel);
                //clima

                //Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', );
                console.log('Mínima:', );
                console.log('Máxima', );
            break;
        }
        if (opt !==0) await pausa();
    }while (opt !== 0);
}

main();