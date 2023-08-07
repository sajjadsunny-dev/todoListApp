let todoApp = document.querySelector('#todoApp');
let todoInput = todoApp.querySelector('.todoInput');
let todoBtn = todoApp.querySelector('.todoBtn');
let ul = todoApp.querySelector('ul');
//console.log(inputValue)

function inputField() {
  let inputValue = todoInput.value;
  let ul = todoApp.querySelector('ul');

  if (inputValue - 50 || inputValue == "") {
    alert('Please fill the task');
    return;
  }
  // console.log(todoInput.value);
  // inputValue = '';

  const taskLiEl = document.createElement("li");
  taskLiEl.classList.add("task-container");


  const taskInputEl = document.createElement("input");
  taskInputEl.classList.add("task-input");
  taskInputEl.type = 'text';
  taskInputEl.value = inputValue;
  taskInputEl.setAttribute('readonly', 'readonly');

  taskLiEl.appendChild(taskInputEl);

  const taskBtnEL = document.createElement('div');
  taskBtnEL.classList.add('task-btns');

  const taskEditEl = document.createElement('button');
  taskEditEl.classList.add('edit');
  taskEditEl.innerHTML = 'Edit';

  const taskDeleteEl = document.createElement('button');
  taskDeleteEl.classList.add('delete');
  taskDeleteEl.innerHTML = 'Delete';

  taskBtnEL.appendChild(taskEditEl);
  taskBtnEL.appendChild(taskDeleteEl);

  taskLiEl.appendChild(taskBtnEL);

  ul.appendChild(taskLiEl);



  taskEditEl.addEventListener('click', () => {
    if (taskEditEl.innerHTML.toLowerCase() == "edit") {
      taskEditEl.innerText = "Save";
      taskInputEl.removeAttribute("readonly");
      taskInputEl.focus();
    } else {
      taskEditEl.innerText = "Edit";
      taskInputEl.setAttribute("readonly", "readonly");
    }
  });

  taskDeleteEl.addEventListener('click', () => {
    // inputValue = '';
    ul.removeChild(taskLiEl);
  })
  todoInput.value = '';

}
