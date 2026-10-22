import test from "node:test"
import assert from "node:assert/strict"
import { parity } from "./index.js"

test("classifies parity", () => {
  assert.equal(parity(3), "odd")
  assert.equal(parity(4), "even")
})
