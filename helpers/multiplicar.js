const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5,listar = false,hasta = 10) =>{

    try {
        if (listar) {
            console.log('===================='.green);
            console.log('    Tabla del:'.yellow,colors.blue(base)    );
            console.log('===================='.green);
        }
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {    
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        if(listar){           
            console.log(consola);
        }
            
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
            
        return `Tabla-${base}.txt`;  
    
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    // function : crearArchivo          ---> o tabien para que sirva la destructuración
    //crearArchivo : crearArchivo       ---> se puede resumir aun mas este codigo con:
    crearArchivo,
}
