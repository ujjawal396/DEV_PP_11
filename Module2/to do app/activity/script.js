// console.log("i ran in browser");

// console.log(document);




//keyboard input press
// TodoInput.addEventListener("keypress", addToDo);

// function addToDo(e){
//     if(e.key=="Enter"){
//         let todoinputvalue=TodoInput.value;

//         console.log(todoinputvalue);
//         TodoInput.value="";
//     }
// }



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
let addToDoButton=document.querySelector(".add-todo");
let TodoInput=document.querySelector(".todo-input");

let todosList = document.querySelector(".todos-list-container")

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
        appendTodo(todoInputValue);
      // it will empty the todoInput
      TodoInput.value = "";
    }
  }
  
  function appendTodo(todo){
     
    // <div class="todo-item">
    //        <p class="todo">learn css</p>
    //        <button class="delete-todo">delete</button>
    //    </div
      let todoitemDiv=document.createElement("div");
      todoitemDiv.classList.add("todo-item");

      let pTag=document.createElement("p");
      pTag.classList.add("todo");
      pTag.textContent=todo;
      // <p class="todo-input">Learn Css</p>

      let buttonTag=document.createElement("button");
      buttonTag.classList.add("delete-todo");
      buttonTag.textContent="Delete";
       // <button class="delete-todo">Delete</button>
       buttonTag.addEventListener("click",deleteToDo);

      todoitemDiv.append(pTag);
      todoitemDiv.append(buttonTag);

      todosList.append(todoitemDiv);
  }
  
 function deleteToDo(e){
     e.target.parentNode.remove();
 }

