
const {createFileTable} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');
        
console.clear();
//console.log(process.argv);

createFileTable(argv.b,argv.l,argv.h)
    .then(nameFile => console.log(nameFile.rainbow, 'creado'))
    .catch(err => console.log(err));