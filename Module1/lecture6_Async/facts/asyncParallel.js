const fs= require("fs");
//multiple files
//async code
//simultaneously read all the files
console.log("start");

fs.readFile("./f1.txt" ,function(error,data){
    console.log(data+ "");

})

fs.readFile("./f2.txt" ,function(error,data){
    console.log(data+ "");
    
})


fs.readFile("./f3.txt" ,function(error,data){
    console.log(data+ "");
    
})

console.log("end");


