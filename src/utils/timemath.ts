

const date = Date.now();
//fix..
const getTime= (inicio, fin):number=>{
    const seg = Math.floor(date / 1000);
    const min = Math.floor(seg / 60);
    const hour = Math.floor(min / 60);
    return `${hour}h : ${min % 60}m : ${seg % 60}s`;
}

setTimeout(() => {

console.log("pasaron 3 segundos");

const b: number = Date.now();

console.log(b);

const resta = b - date;

console.log(b - date);

  

console.log('--->',getTime(resta/1000)); //salida: 0h : 0m : 23s

}, 3000);


console.log(getTime(date));