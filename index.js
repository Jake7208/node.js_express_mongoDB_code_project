const fs = require("fs");

// blocking synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `this is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

// Non-Blocking, asynchronous way
