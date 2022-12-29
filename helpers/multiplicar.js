const fs = require('fs')

const crearArchivo = async (base = 1, listar) => {


    try {
        let salida = "";
        let consola = "";

        for (let index = 1; index <= 10; index++) {
          const multiplicando = base;
          const multiplicador = index;
      
          consola += `${multiplicando} ${'x'.green} ${multiplicador} = ${multiplicando * multiplicador}\n`;
          salida += `${multiplicando} x ${multiplicador} = ${multiplicando * multiplicador}\n`;
        }
      
        if(listar) console.log( consola );
        
        const nombreArchivo = `tabla-${base}.txt`
      
        fs.writeFile(`./outputs/${nombreArchivo}`, salida, (err) => {
          if (err) throw err;
      
          //console.log("Archivo creado");
        });
      
        return `El Archivo ${nombreArchivo} ha sido creado.`

    } catch (error) {
        throw error
    }
};

module.exports = { crearArchivo }