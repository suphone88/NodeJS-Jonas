//console.log(arguments);
//console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(5, 5));

// exports
//const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(8, 5));
console.log(add(5, 5));
console.log(divide(10, 5));

// Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
