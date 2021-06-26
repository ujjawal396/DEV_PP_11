let canvas=document.querySelector("#canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight-100;


window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight-100; 
})



// a context object which provides fun for 2d drawing

let ctx=canvas.getContext("2d");


let linesDb=[];
let isPenDown=false;
let line=[];


canvas.addEventListener("mousedown",function(e){
    isPenDown=true;
    let x=e.clientX;
    let y=e.clientY-100;
    ctx.beginPath();
    ctx.moveTo(x,y);

    let pointObject = {
        x:x ,
        y:y ,
        type :"md"
    }
    line.push(pointObject);
})
canvas.addEventListener("mousemove",function(e){
    if(isPenDown){
    let x=e.clientX;
    let y=e.clientY-100;
    ctx.lineTo(x,y);
    ctx.stroke();



    let pointObject = {
        x:x ,
        y:y ,
        type :"mm"
       }
       line.push(pointObject);

    }
    
    
})
canvas.addEventListener("mouseup",function(e){
    isPenDown=false;

    linesDb.push(line);
    line=[];

    console.log(linesDb)

})

