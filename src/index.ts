import { subtract } from "../dependedOnBySrc/subtracter"
import { logHello } from "./helpers/hello"

console.log("This is the index")
console.log(`9 - 8 is ${subtract(9, 8)}`)
console.log("irrelevant change")
logHello()