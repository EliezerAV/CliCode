import {entrada, iniciar,terminar,readList, resumen} from './commands/input.ts';

const [command, tema] = entrada();
try{
    if (command === 'iniciar'){
        if(!tema){
            console.error("sin tema");
            process.exit(1);
        }else{
         iniciar(readList(),tema);
        }
    }else if(command === 'terminar'){
        terminar(readList());
    }else if(command === 'resumen'){
        resumen(readList());
    }else{
        console.error("No se ha leído ningún comando, prueba con:\niniciar\nterminar\nresumen\n");
        process.exit(1)
    }
}catch(err){
    if (err instanceof Error) {
        console.error("Ocurrió un error en la aplicación:", err.message);
    } else {
        console.error("Error desconocido:", err);
    }
    process.exit(1);
}
