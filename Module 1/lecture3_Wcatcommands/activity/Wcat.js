let fs =require("fs");
//const { argv } = require("node:process");
//console.log(process);
//console.log(process.argv);

let contents=process.argv.slice(2);
const flag=[];
const files=[];

for(let i=0;i<contents.length;i++){
  if(contents[i].startsWith("-")){
    flag.push(contents[i]);

  }else{
    files.push(contents[i]);

  }
}

console.log(flag);
console.log(files);