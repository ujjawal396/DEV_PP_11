let photoDiv=document.querySelector("#photo");

let photoUploadInput=document.querySelector("#photo-upload");


photoDiv.addEventListener("click",function(){
    photoUploadInput.click();
});



photoUploadInput.addEventListener("change",function(event){
    console.log(event);
    let fileObj=event.target.files[0];
    console.log(fileObj);
    let filepath=URL.createObjectURL(fileObj);
    let img=document.createElement("img");
    img.setAttribute("src",filepath);
    img.classList.add("sticky-image");
    addSticky(img);
});