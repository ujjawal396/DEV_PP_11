let canvas=document.querySelector("#canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight-100;


window.addEventListener("resize",function(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight-100; 
})



// a context object which provides fun for 2d drawing

let ctx=canvas.getContent("2d");
