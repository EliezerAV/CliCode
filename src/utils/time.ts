const time: Date = new Date();

export const  getDate = (): string => {
   const hour = time.getHours();
   const min = time.getMinutes();
   const seg = time.getSeconds();
    return `${hour}h :${min}m :${seg}s`;
}

console.log(getDate());

