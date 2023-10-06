const deapoll = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

// const nombre = deapoll.nombre;
// const apellido = deapoll.apellido;
// const poder = deapoll.poder;

// const {nombre, apellido, poder, edad=50} = deapoll;
// console.log(nombre, apellido, poder, edad);

function imprimeHeroe({nombre, apellido, poder, edad=50}){
    nombre = 'Adrian';
    console.log(nombre, apellido, poder, edad)
}

// imprimeHeroe(deapoll);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [,,h3] = heroes;

// console.log(h1,h2,h3);
console.log(h3);