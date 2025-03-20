function add(a, b) {
  return a + b;
}

function subtract(a, b) {
    return a - b;
}

// // module.export if used multiple times
// // modules.export = add;
// // modules.export = subtract;

// // export multiple functions - default export
// module.exports = {
//     add,
//     subtract
// }

// // export multiple functions - named export
module.exports.add = add;
module.exports.subtract = subtract;