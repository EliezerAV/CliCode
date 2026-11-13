import process from 'node:process';
import {entrada, iniciar,terminar,readList} from './commands/input.ts';
const tema = process.argv[3];
const arg = process.argv[2];

try{
    if (arg === 'iniciar'){
        if(!tema){
            console.error("sin tema");
        }else{
        entrada();
        const dataI = iniciar(readList(),tema);
        (dataI);
        }
    }

    if(arg === 'terminar'){
        const dataF = terminar(readList());
        (dataF);
    }
}catch{
    console.error(process.exit(1));
}
