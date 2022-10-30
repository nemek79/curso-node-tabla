const colors = require('colors');
const fs = require('fs');

/*
const crearArchivo = (base = 5) => {

    let salida = '';
    const inicio = 0;

    console.log('===============================');
    console.log(`Tabla del ${base}`);
    console.log('===============================');
    
    for (let index = inicio; index <= 10; index++) {
    
        salida += `${base} x ${index} = ${index * base}\n`;
        
    }
    
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    console.log(`tabla-${base} creada!`);


}

*/

const crearArchivoPromesa = async (base = 5, listar = false, hasta) => {

        let salida = '';
        const inicio = 0;
    
        for (let index = inicio; index <= hasta; index++) {
        
            salida += `${base} x ${index} = ${index * base}\n`;
            
        }

        if (listar) {
            console.log('==============================='.red);
            console.log(`Tabla del ${base} x PROMESA`.yellow);
            console.log('==============================='.red);
            console.log(salida);
        }

        try {
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            return `tabla-${base}.txt`.green;
        } catch (err) {
            return `Se ha producido un error al crear el fichero: tabla-${base}.txt`.red;
        }

}


module.exports = {
    crearArchivoPromesa
}