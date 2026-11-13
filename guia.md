# Proyecto: sesion (CLI de registro de sesiones de código)

## Objetivo
CLI en Node + TypeScript, sin web. Guarda cuánto programo cada día.
Comandos: `sesion iniciar "<tema>"`, `sesion terminar`, `sesion resumen`.

## Cómo funciona (concepto clave)
No hay temporizador corriendo. `iniciar` guarda la hora en un archivo;
`terminar` la lee, calcula la diferencia y guarda un registro.

## Fases
1. [ x ] Leer process.argv y distinguir comandos
2. [ x ] Guardar/leer datos en un archivo JSON (módulo fs)
3. [ x ] Implementar iniciar y terminar (fechas con Date) //queda pendiente
4. [ ] Implementar resumen (minutos por día, racha)
5. [ ] Manejo de errores (terminar sin iniciar, doble iniciar)
6. [ ] Tests básicos
7. [ ] Pasar a SQLite
8. [ ] Exponer como API
9. [ ] Bot de Discord/Telegram con recordatorio

## Estado actual
tengo que tener en cuenta que funciones usar para las integraciones combinadas.

## Preguntas abiertas
(dudas que me quedaron)






