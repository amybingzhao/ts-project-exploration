import { add } from "adder"
import { logHello } from "helpers/hello"

console.log("This is the index")
const x = add(9, 8)
console.log("9 - 8 is " + x)
console.log("irrelevant change")
logHello()