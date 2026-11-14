import process from 'node:process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import {type Sesion} from '../types/sesion.ts';
import { Session } from 'node:inspector';
import {getTime} from '../utils/timemath.ts'

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
    return readlist;
}

export const writeList=(list:Sesion[]): void  => {
     writeFileSync(path, JSON.stringify(list, null, 2));
}


export const iniciar = (list:Sesion[], tema:string): void =>{
    
    const isOpen = list.find((s) => s.fin === undefined);
    if (isOpen){
        return console.error("la sesion esta abierta");
    }else{
        console.log("la sesion esta cerrada");
        list.push({tema, inicio: Date.now()})
         writeList(list);
    }
}

export const terminar = (list:Sesion[]): void =>{
    const isOpen = list.find((s)=>s.fin === undefined);
    if (isOpen){
        isOpen.fin = Date.now();
        writeList(list);
        const res = isOpen.fin - isOpen.inicio;
        const time = getTime(res);
        console.log(`tuvo una sesión de :  ${time}\n`);
    }else{
        console.error('no hay sesión abierta');
    }
}




export function resumen(list: Sesion[]): void {
    let tiempoTotal = 0;
    for (const reg of list) {
        if (reg.fin && reg.inicio) {
            tiempoTotal += (reg.fin - reg.inicio);
        }
    }
    const total = getTime(tiempoTotal);
    console.log(`Tiempo total acumulado: ${total}`);
   
}