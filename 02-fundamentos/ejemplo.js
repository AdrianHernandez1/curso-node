const eliminarCadaTresMesesPrimerDia = () => {
    console.log('Se ejecuta cada 3 meses el primer día del mes');
    // Agrega aquí las acciones que deseas realizar en esa fecha.
  }
  
  const main = () => {
    const hoy = new Date();
    const primerDiaDelProximoMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 1);
    const tiempoHastaPrimerDia = primerDiaDelProximoMes - hoy;
    const intervaloEnMilisegundos = 3 * 30 * 24 * 60 * 60 * 1000; // 3 meses en milisegundos
  
    setTimeout(() => {
    //   eliminarCadaTresMesesPrimerDia(); // Llama a la función una vez para iniciarla.
      setInterval(eliminarCadaTresMesesPrimerDia, intervaloEnMilisegundos); // Llama a la función cada 3 meses a partir del primer día del mes.
    }, tiempoHastaPrimerDia);
  }
  
  main();
  