
const fs = require('fs');
const colors = require('colors');
const createFileTable = async (base = 3, listar = false, hasta = 20) => {

    try {

        let output = '';
        let consola = '';
    
        for (let i = 1; i <= `${hasta}`; i++) {
            // console.log(`${base} X ${i} = ${base * i}`)
            output += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.blue} ${base * i}\n`;
        };
        
        if(listar){
            console.log('====================================='.grey);
            console.log('          TABLA DEL'.gray,base,);
            console.log('====================================='.gray);
            console.log(consola);
            }

        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, output);
        return(`tabla-${base}.txt`)
            
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createFileTable
}
// fs.writeFile(`tabla-${base}.txt`, output,(err) => {
// if (err) throw err;

// console.log(`tabla-${base}.txt creada`);
// })

// console.log(output);
