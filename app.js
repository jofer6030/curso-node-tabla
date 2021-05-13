const { crearArchivo } = require('./helpers/multiplicar.js');
// const color = require('colors');--> declras constante si quieres usar con metodo es decirr colors.
const argv = require('./config/yargs.js');
require('colors');   //---> solo si quieres usarlo de frente ejemplo plabra.green


console.clear();



crearArchivo(argv.b,argv.l,argv.h)    
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(error => console.log(error));



