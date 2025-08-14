// let n = 5;
// for(i=0;i<n;i++) {
//     console.log("hello",i)
// }
// console.log("bye")

// let args = process.argv;
// for (i = 2; i < args.length; i++) {
//     console.log(`hello & welcome ${args[i]}`)
// }

// const math = require("./math");
// console.log(math.sum(2,2));

// let fruits = require("./fruits");
// console.log(fruits);


// const figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import {sum, PI} from "./math.js"
import {generate} from 'random-word';
console.log(generate())