import process from 'node:process';
import {entrada, iniciar,readList} from './commands/input.ts';
const tema = process.argv[3];
const arg = process.argv[2];

try{
    if (arg === 'iniciar'){
        if(!tema){
            console.error("sin tema");
        }else{
        entrada();
        const dataI = iniciar(readList(),tema);
        console.log(dataI);
        }
    }
}catch{
    console.error(process.exit(1));
}
