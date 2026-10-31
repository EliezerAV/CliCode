import {readFile, writeFile} from 'node:fs/promises';

const path = 'src/data/test.JSON';


async function readData() {
    try{

        const dataPlano = await readFile(path, 'utf-8');
        const dataRegistro = JSON.parse(dataPlano);
        console.log('Datos leídos del archivo:', dataRegistro);
        return dataRegistro;

    }catch (error) {
        console.error('Error al leer el archivo:', error);
        return [];
    }
}

async function writeData(data: any) {
    try {
        const dataPlano = JSON.stringify(data, null, 2);
        await writeFile(path, dataPlano, 'utf-8');
        console.log('Datos escritos en el archivo:', dataPlano);
        return dataPlano;
    }
    catch (error) {
        console.error('Error al escribir en el archivo:', error);
        return [];
    }
}

async function ejecutarPrueba() {
  console.log("1. Leyendo registros iniciales...");
  const actual = await readData();
  console.log("Actuales:", actual);

  console.log("\n2. Agregando un registro nuevo...");
  const datosNuevos = [
    ...actual, 
    { id: 1, tarea: "Estudiar Node.js", timestamp: Date.now() }
  ];

  await writeData(datosNuevos);

  console.log("\n3. Volviendo a leer para comprobar...");
  const final = await readData();
  console.log("Resultado final en memoria:", final);
}

// Ejecutamos la prueba
ejecutarPrueba();