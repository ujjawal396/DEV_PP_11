//multiple files
//async code
//F1data->F2data->F3data

const fs = require("fs");

console.log("start");

fs.readFile("./f1.txt", function(error,data){
console.log(data+"");

fs.readFile("./f2.txt" ,function(error,data){
    console.log(data+ "");
    
    fs.readFile("./f3.txt" ,function(error,data){
        console.log(data+ "");
        
    })


   })

})

console.log("end");

