import process = require('node:process');

process.argv.forEach((value, index) => {
    console.log({ index, value });
});