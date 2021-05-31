//Serially read contents of f1 f2 and f3 using promisified function


const fs=require("fs");
   

      //promise hell
// let f1kapromise=fs.promises.readFile("./f1.txt");
// let f2kapromise=fs.promises.readFile("./f2.txt");
// let f3kapromise=fs.promises.readFile("./f3.txt");

// f1kapromise.then(function(data){
//     console.log(data+"");
//     f2kapromise.then(function(data){
//         console.log(data+"");

//         f3kapromise.then(function(data){
//             console.log(data+"");
            
//         });
        
//     });
     
// });


// promise hell

let f1KaPromise = fs.promises.readFile("./f1.txt");

f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    f2KaPromise.then(function(data){
        console.log(data+"");
        let f3KaPromise = fs.promises.readFile("./f3.txt");
        f3KaPromise.then(function(data){
            console.log(data+"");
        })
    })
})

//in dono code me difference ye h ki pehle code me hume agar picche wale function ka data chahiye toh hume nhi mil sakta lekin
//dusre code me hum piichle wale function ka data use kar sakte hai




