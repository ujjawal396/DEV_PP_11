// fs => file System

const fs = require("fs");

// console.log(fs);

// utf-8 => format for plain text !!

let f1KaData = fs.readFileSync("./f1.txt");
console.log(f1KaData + "");
//buffer -> computer known data binary type


fs.writeFileSync("index.html" , "Hello world !!!");
fs.writeFileSync("index.txt" , "Hello world !!!");
fs.writeFileSync("../activity/activity.js" , "akjsbfkjabsf");