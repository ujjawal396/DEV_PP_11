let undo=document.querySelector("#undo");

undo.addEventListener("click",undoLine);


function undoLine(){
    linesDb.pop();

    //clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawLinesFromDB();

}
function drawLinesFromDB(){
    for(let i=0;i<linesDb.length;i++){
        let line=linesDb[i];
        for(let i=0;i<line.length;i++){
            let pointObject=line[i];
            if(pointObject.type=="md"){
                ctx.beginPath();
                ctx.moveTo(pointObject.x , pointObject.y);
            }
            else{
                ctx.lineTo(pointObject.x , pointObject.y);
                ctx.stroke();
            }
        }
    }
}