import process from 'node:process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import {type Sesion} from '../types/sesion.ts';

const path = 'src/data/info.json';


export function entrada(): string[] {
    return process.argv.slice(2);
}

export  const readList = (): Sesion[] =>{
    const exist  = existsSync(path);

    if (!exist){
        return [];   
    }
    const readinglist = readFileSync(path, 'utf-8');
    const readlist:Sesion[] = JSON.parse(readinglist);
    console.log(readlist);
    return readlist;
}

export const writeList=(list:Sesion[]): void  => {
     writeFileSync(path, JSON.stringify(list, null, 2));
}



export function resumen(registros: any[]): void {
    let tiempoTotal = 0;

    for (const reg of registros) {
        if (reg.fin && reg.inicio) {
            tiempoTotal += (reg.fin - reg.inicio);
        }
    }

    console.log(`Tiempo total acumulado: ${tiempoTotal} ms`);
}