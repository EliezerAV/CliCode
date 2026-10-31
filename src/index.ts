import process from 'node:process';
import {entrada, leerRegistros} from './commands/input.ts';

const arg = process.argv[2];

if (arg === 'iniciar'){
    entrada();
}

//ANTES DE HACER CUALQUIER COSA PRIMERO HACER TESTEOS PARA NO SATURAR ABSOLUTAMENTE NADA    