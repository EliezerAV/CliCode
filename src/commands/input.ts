import process from 'node:process';
import { readFile, writeFile } from 'node:fs/promises';

const path = 'src/data/info.json';


export function entrada(): string[] {
    return process.argv.slice(2);
}

export async function leerRegistros(): Promise<any[] | undefined> {
    try {
        const textoPlano = await readFile(path, 'utf-8');
        return JSON.parse(textoPlano);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return [];
    }
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