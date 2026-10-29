// 1. Primero defines la "forma" del dato (el contrato)
interface Usuario {
    nombre: string;
    edad: number;
}

// 2. Le dices explícitamente a la función qué tipo de dato acepta
function saludar(usuario: Usuario): string {
    return "Hola, " + usuario.nombre.toUpperCase();
}

// Si intentas hacer esto, VS Code se pondrá en rojo de inmediato:
console.log(saludar({ nombre: "eliezer", edad: 25 })); // ✅ Correcto
// ❌ Error: El argumento de tipo 'number' no es asignable al parámetro de tipo 'Usuario'.