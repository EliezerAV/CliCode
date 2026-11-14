# Proyecto: sesion (CLI de registro de sesiones de código)

## Objetivo
CLI inciar y terminar tienen que tener una integracion en busqueda de array para poder combinarlo con las funciones del input. 

## Cómo funciona (concepto clave)
No hay temporizador corriendo. `iniciar` guarda la hora en un archivo;
`terminar` la lee, calcula la diferencia y guarda un registro.

## Fases
1. [ x ] Leer process.argv y distinguir comandos
2. [ x ] Guardar/leer datos en un archivo JSON (módulo fs)
3. [ x ] Implementar iniciar y terminar (fechas con Date) //queda pendiente
4. [ x ] Implementar resumen (minutos por día, racha)
5. [ x ] Manejo de errores (terminar sin iniciar, doble iniciar)
6. [ ] Tests básicos
7. [ ] Pasar a SQLite
8. [ ] Exponer como API
9. [ ] Bot de Discord/Telegram con recordatorio

## Estado actual
voy a tener que usar test y assert para poder testear las funciones ya hechas.

## Preguntas abiertas
como integrar un metodo de direccion de carpetas mas simple o práctico.





