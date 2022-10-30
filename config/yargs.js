const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla por la consola'
    })   
    .option('h',{
        alias: 'hasta',
        type: 'boolean',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Es el límite por el cual se realizan las multiplicaciones'
    }) 
    .check( (argv,options) => {
        if ( isNaN(argv.b) ) {
            throw 'Base tiene que ser numérica';
        } 

        if ( isNaN(argv.h) ) {
            throw 'Hasta debe ser numérico';
        } 

        if (argv.h < 1 || argv.h > 50) {
            throw 'Hasta debe ser un número entre 1 y 50 (incluidos)';
        }

        return true;
    })
    .argv;
const { number, boolean } = require('yargs');

module.exports = argv;