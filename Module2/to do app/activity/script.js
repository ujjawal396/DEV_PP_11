// console.log("i ran in browser");

// console.log(document);

let addToDoButton=document.querySelector(".add-todo");
let TodoInput=document.querySelector(".todo-input");


//keyboard input press
// TodoInput.addEventListener("keypress", addToDo);

// function addToDo(e){
//     if(e.key=="Enter"){
//         let todoinputvalue=TodoInput.value;

//         console.log(todoinputvalue);
//         TodoInput.value="";
//     }
// }


TodoInput.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      addTodo();
    }
  });


  addToDoButton.addEventListener("click", function () {
    addTodo();
  });
  
  // attach click event on addTodoButton
  function addTodo() {
    let todoInputValue = TodoInput.value;
    if (todoInputValue) {
      console.log(todoInputValue)
      // it will empty the todoInput
      TodoInput.value = "";
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
