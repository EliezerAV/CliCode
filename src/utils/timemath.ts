

const date = Date.now();
const a = Date.now();
const getTime= (date:number):String=>{
    const seg = Math.floor(date / 1000);
    const min = Math.floor(seg / 60);
    const hour = Math.floor(min / 60);
    return `${hour}h : ${min % 60}m : ${seg % 60}s`;
}

const test = (inicio: number, alTerminar: (resultado: number) => void) => {
    setTimeout(() => {
        const b = Date.now();
        const resta = b - inicio;
        
        console.log("pasaron 3 segundos");
        console.log("Milisegundos exactos:", resta);

        // Acá, cuando YA pasaron los 3 segundos, llamamos al callback y le pasamos 'resta'
        alTerminar(resta);
    }, 3000);
};


test(a, (restaCalculada) => {
    console.log("--->", getTime(restaCalculada));
});