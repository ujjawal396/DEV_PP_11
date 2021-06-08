// console.log("i ran in browser");

// console.log(document);

let addToDoButton=document.querySelector(".add-todo");
let TodoInput=document.querySelector(".todo-input");


//keyboard input press
TodoInput.addEventListener("keypress", addToDo);

function addToDo(e){
    if(e.key=="Enter"){
        let todoinputvalue=TodoInput.value;

        console.log(todoinputvalue);
        TodoInput.value="";
    }
}










// attach click event on addToDoButton
// addToDoButton.addEventListener("click", addToDo);

// function addToDo(e){
// let todoinputvalue=TodoInput.value;
// //falsy value->="",0,false,undefined
//   if(todoinputvalue){
//       console.log(todoinputvalue);
//       //it will empty the todoinput value
//       TodoInput.value="";
//   }
// }
