import colors from 'colors';
import {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist
} from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js'
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';

console.clear();

const main = async () => {
  let opt = '';
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {//Cargar tareas
    tareas.cargarTareasFromArray(tareasDB);
  }



  do {
    //Esta opcion imprime el menu
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        //Crear una opcion
        const desc = await leerInput('Descripción: ');
        tareas.crearTarea(desc);
        break;
      case '2':
        tareas.listadoCompleto();
        // console.log( tareas.listadoArr);
        break;
      case '3':
        tareas.listarPendientesCompletadas(true);
        break;
      case '4':
        tareas.listarPendientesCompletadas(false);
        break;
      case '5':
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case '6':
        const id=await listadoTareasBorrar(tareas.listadoArr);
        const ok = await confirmar('¿Estas seguro?');
        if(id !=='0'){
          if(ok){
            tareas.borrarTarea(id);
            console.log('Tarea borrada correctamente.')
          }
          console.log({id});
        }        
    }

    // guardarDB(tareas.listadoArr);
    console.log({ opt });
    await pausa();
  } while (opt !== '');
};

main();