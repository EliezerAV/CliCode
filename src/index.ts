import process from 'node:process';
import {entrada, iniciar,terminar,readList, resumen} from './commands/input.ts';
const tema = process.argv[3];
const arg = process.argv[2];

try{
    if (arg === 'iniciar'){
        if(!tema){
            console.error("sin tema");
        }else{
        entrada();
         iniciar(readList(),tema);
        }
    }

    if(arg === 'terminar'){
        terminar(readList());
    }

    if(arg === 'resumen'){
        (resumen(readList()));
    }
}catch(err){
    if (err instanceof Error) {
        console.error("Ocurrió un error en la aplicación:", err.message);
    } else {
        console.error("Error desconocido:", err);
    }
    process.exit(1);
}
