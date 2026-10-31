import process from 'node:process';
import {entrada, salida} from './commands/input.ts';

const arg = process.argv[2];

if (arg === 'iniciar'){
    entrada();
}