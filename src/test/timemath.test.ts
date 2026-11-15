import {test} from "node:test"
import assert from "node:assert"
import {getTime} from "../utils/timemath.ts"

test("5999 no llega al minuto", ()=>{
    assert.strictEqual(getTime(59999), "0h : 0m : 59s");
})

test("999 no llega al segundo.", ()=>{
    assert.strictEqual(getTime(999), "0h : 0m : 0s");
})

test("3600000 deberia ser 1 hora exacta", ()=>{
    assert.strictEqual(getTime(3600000), "1h : 0m : 0s");
})