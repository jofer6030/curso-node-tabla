const argv = require('yargs')
    .option('b',{
        alias : 'base',
        type : 'number',
        demandOption: true,
        describe : 'Es la base de la tabla de multiplicar',
    })
    .option('l',{
        alias : 'listar',
        type : 'boolean',
        default : false,
        describe : 'Es la opcion si se desea ver la lista de la tabla',
    })
    .option('h',{
        alias : 'hasta',
        type : 'number',
        default : 10,
        describe : 'Para determinar el limite de la multiplicacion',
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){//si argv.b "es un not a number"---> isNaN
            throw 'La base tiene que ser un número';
        }
        if(isNaN(argv.h)){//si argv.b "es un not a number"---> isNaN
            throw 'El limite debe de ser un número';
        }
        return true;
    })
    .argv;


module.exports = argv;