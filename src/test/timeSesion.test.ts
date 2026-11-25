import {test} from "node:test"
import assert from "node:assert"
import {getSesionTime} from "../utils/timesesion.ts"

test("testeo rapido", ()=>{
    assert.strictEqual(getSesionTime(1794608996961), "(2026-11-13)");
})

test("testeo rapido", ()=>{
    assert.strictEqual(getSesionTime(new Date(2026, 10, 24, 23, 0).getTime()), "(2026-11-24)");
})

test("testeo de 1 digito", ()=>{
    assert.strictEqual(getSesionTime(new Date(2026, 2, 4, 12, 0).getTime()), "(2026-03-04)");
})