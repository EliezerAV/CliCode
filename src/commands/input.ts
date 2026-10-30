import process = require('node:process');

function entrada(): string | undefined {
    return process.argv[2];
}

console.log(entrada());
module.exports = entrada;
