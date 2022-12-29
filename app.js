const { crearArchivo } = require('./helpers/multiplicar')
const color = require('colors')
const yargs = require('./config/yargs')

console.clear();
// console.log( yargs );

crearArchivo(yargs.base, yargs.listar)
    .then(msg => console.log(msg.green))
    .catch(err => console.log(err))

