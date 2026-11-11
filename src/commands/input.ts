import process from 'node:process';
import { read, readFileSync, writeFileSync } from 'node:fs';

const path = 'src/data/info.json';


export function entrada(): string[] {
    return process.argv.slice(2);
}

export  const readLits = (): string =>{
    let readlist = readFileSync(path, 'utf-8');
    readlist = JSON.parse(readlist);
    return readlist;
}

export function resumen(registros: any[]): void {
    let tiempoTotal = 0;

    for (const reg of registros) {
        if (reg.timestampFin && reg.timestampInicio) {
            tiempoTotal += (reg.timestampFin - reg.timestampInicio);
        }
    }

    console.log(`Tiempo total acumulado: ${tiempoTotal} ms`);
}