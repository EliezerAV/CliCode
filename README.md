# CLIcode

A small command-line tool, written in TypeScript and Node.js, that tracks how much time I spend programming. No web, no frameworks: just a CLI that reads and writes a JSON file.

I built it to practice the fundamentals of backend development: parsing command-line arguments, working with the file system, modeling data with types, handling errors, and writing tests.

Commands
Command	What it does
iniciar "<topic>"	Starts a session with the given topic. Fails if a session is already open.
terminar	Closes the open session and shows how long it lasted. Fails if there is none.
resumen	Shows the total time of all closed sessions.

An unknown command prints the list of valid ones and exits with code 1.

Usage
bash
npm install

npx tsx ./src/index.ts iniciar "learning fs"
# ...time passes while you code...
npx tsx ./src/index.ts terminar
npx tsx ./src/index.ts resumen

Run it from the project root: the data file path is relative to where you run the command.

How it works

Each execution of the program is independent, so there is no running timer. Instead, the state lives in a JSON file (src/data/info.json) holding a list of sessions:

json
[
  { "tema": "learning fs", "inicio": 1794608996961, "fin": 1794610891082 },
  { "tema": "arrays", "inicio": 1794612060475 }
]
iniciar reads the list, checks that no session is open, adds a new one with Date.now() and saves.
terminar finds the session without a fin field (the open one), sets it and saves.
resumen adds up fin - inicio for every closed session.

A session without fin is, by definition, an open session.

Design decisions:

Raw milliseconds are stored, not formatted text. Durations are calculated with numbers and only converted to 0h : 35m : 5s when displayed.
File reading and writing are separate from the commands. readList and writeList don't know anything about sessions being open or closed, so changing the storage later (for example to SQLite) only touches those functions.
Synchronous fs calls. The program runs one command and exits, so waiting for the file has no cost and the code stays easy to follow.
Project structure
src/
  index.ts            entry point: reads the command and dispatches it
  commands/input.ts   argument reading, file read/write, iniciar, terminar, resumen
  types/sesion.ts     the Sesion type (tema, inicio, fin?)
  utils/timemath.ts   getTime: converts milliseconds to "xh : xm : xs"
  test/               tests for getTime
  data/info.json      stored sessions
Tests

Tests use the built-in node:test and node:assert modules, with no extra dependencies:

bash
npx tsx ./src/test/timemath.test.ts

They currently cover getTime, including boundary values (999 ms, 59 999 ms, 3 600 000 ms).

Stack

TypeScript, Node.js, node:fs, node:test, run with tsx.


Roadmap
[ ] Group the summary by day and calculate streaks
[ ] Install it as a real sesion command
[ ] Move storage to SQLite
[ ] Expose it as an API
[ ] Telegram bot with a daily reminder
About

Built by Eliezer as a learning project while studying Computer Engineering.