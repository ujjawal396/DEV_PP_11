let fs = require("fs");

let obj = [{
    "Runs" : "10" ,
    "Balls" : "2"
}]

// let jsonObj = JSON.stringify(obj) // stringify just before creating the file
// fs.writeFileSync("./a.json" , jsonObj);


let jsobj = JSON.parse(fs.readFileSync("./a.json"));//getting back to object form
console.log(jsobj);
