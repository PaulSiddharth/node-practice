const fs = require("fs");

// Write to a file in synchronous mode
// fs.writeFileSync("./test.txt", "Hey there!");

// Read from a file in asynchronous mode
// fs.writeFile("./test.txt", "Hey there!", (err) => { });

// Read from a file in synchronous mode
// const result = fs.readFileSync("./contact.txt", "utf8");
// console.log(result);

// Read from a file in asynchronous mode
// fs.readFile("./contact.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// append file
// fs.appendFileSync("./test.txt", `${Date.now()} Hey there!\n`);

//copy file
// fs.copyFileSync("./test.txt", "./copy.txt");

//delete file
fs.unlinkSync("./copy.txt");