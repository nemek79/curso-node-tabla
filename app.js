const {crearArchivoPromesa} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
// console.log(process.argv);
// console.log(argv);

/* -- SOLO ES UN EJEMPLO PERO NO CONVENIENTE
const [,,baseIn='base=5'] = process.argv;
const [,base=5] = baseIn.split('=');
console.log(base)
*/

// console.log('Base por yargs: ',argv.base)
console.log('Hasta por yargs: ',argv.hasta)

crearArchivoPromesa(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));

