

const date = Date.now();
const a = Date.now();
export const getTime= (date:number):String=>{
    const seg = Math.floor(date / 1000);
    const min = Math.floor(seg / 60);
    const hour = Math.floor(min / 60);
    return `${hour}h : ${min % 60}m : ${seg % 60}s`;
}


