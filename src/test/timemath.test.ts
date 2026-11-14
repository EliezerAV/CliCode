import {test} from "node:test"
import assert from "node:assert"
import {getTime} from "../utils/timemath.ts"

test("h,m,s", ()=>{
    assert.strictEqual(getTime(3725000), "1h:2m:5s");
})