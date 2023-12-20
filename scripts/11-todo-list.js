const todoList = JSON.parse(localStorage.getItem('todo')) || [];

renderTodoList();

function renderTodoList() {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++){
  const todoObject = todoList[i];
  const {name, dueDate} = todoObject;
  
  const html = `  
  <div>${name}</div> 
  <div>${dueDate}</div>
  <button onclick="
  todoList.splice(${i}, 1);
  renderTodoList();
  " class="delete-button">Delete
  </button>   
  `;
  todoListHTML += html;
}
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const dueDateElement = document.querySelector('.js-due-date-input');
 const name = inputElement.value;
 const dueDate = dueDateElement.value;
 todoList.push({
  //name: name,
  //dueDate: dueDate
  name,
  dueDate
 });
 console.log(todoList);
 localStorage.setItem('todo', JSON.stringify(todoList));
 inputElement.value ='';
 renderTodoList();
}