# Proyecto: sesion (CLI de registro de sesiones de código)

## Objetivo
CLI en Node + TypeScript, sin web. Guarda cuánto programo cada día.
Comandos: `sesion iniciar "<tema>"`, `sesion terminar`, `sesion resumen`.

## Cómo funciona (concepto clave)
No hay temporizador corriendo. `iniciar` guarda la hora en un archivo;
`terminar` la lee, calcula la diferencia y guarda un registro.

## Fases
1. [ ] Leer process.argv y distinguir comandos
2. [ ] Guardar/leer datos en un archivo JSON (módulo fs)
3. [ ] Implementar iniciar y terminar (fechas con Date)
4. [ ] Implementar resumen (minutos por día, racha)
5. [ ] Manejo de errores (terminar sin iniciar, doble iniciar)
6. [ ] Tests básicos
7. [ ] Pasar a SQLite
8. [ ] Exponer como API
9. [ ] Bot de Discord/Telegram con recordatorio

## Estado actual
(actualizar al final de cada sesión: qué hice, qué me trabó)

## Preguntas abiertas
(dudas que me quedaron)






