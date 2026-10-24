import isOdd from "is-odd"

export function parity(value) {
  return isOdd(value) ? "odd" : "even"
}
