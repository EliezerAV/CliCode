import process from 'node:process';

let Tinicio = 0;
let Tfin = 0;

export  function entrada(): string | undefined {
    Tinicio = Date.now(); //buscar forma de que el resultado de esta funcion se traduzca a lo convencional
    console.log(`Início do processo: ${Tinicio}`);
    return process.argv[2];
}

export  function salida(): string | undefined {
    Tfin = Date.now();
    console.log(`fim  do processo: ${Tfin}`);
    return process.argv[2];
}

export function resumen(): void {
    const tiempoTotal = Tfin - Tinicio;
    console.log(`Tiempo total de ejecución: ${tiempoTotal} ms`);
    //cuestion de prueba porque resumen debe de tener por lo menos variables que anteriormente recidan en un archivo que guarde fs
}


console.log(entrada());
console.log(salida());
console.log(resumen());
