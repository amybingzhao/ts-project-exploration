import { add } from "adder";
import { logHello } from "helpers/hello";
import { dummy_result } from "helpers/dummy-json" 

console.log("This is the index");
console.log(`9 + 8 is ${add(9, 8)}`);
console.log("irrelevant change");
console.log(dummy_result())
logHello();
