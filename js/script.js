let todoApp = document.querySelector('#todoApp');
let todoInput = todoApp.querySelector('.todoInput');
let todoBtn = todoApp.querySelector('.todoBtn');
let ul = todoApp.querySelector('ul');

function inputField() {
  let inputValue = todoInput.value;
  let ul = todoApp.querySelector('ul');

  if (inputValue - 50 || inputValue == "") {
    alert('Please fill the task');
    return;
  }
  const taskLiEl = document.createElement("li");
  taskLiEl.classList.add("task-container");

  const taskContents = document.createElement("div");
  taskContents.classList.add("task-contents");

  taskLiEl.appendChild(taskContents);


  const taskInputEl = document.createElement("input");
  taskInputEl.classList.add("task-input");
  taskInputEl.type = 'text';
  taskInputEl.value = inputValue;
  taskInputEl.setAttribute('readonly', 'readonly');

  taskContents.appendChild(taskInputEl);

  const taskBtnEL = document.createElement('div');
  taskBtnEL.classList.add('task-btns');

  const taskEditEl = document.createElement('button');
  taskEditEl.classList.add('edit');

  const taskDeleteEl = document.createElement('button');
  taskDeleteEl.classList.add('delete');
  taskDeleteEl.innerHTML = '<i class="fa-solid fa-trash"></i>';

  taskBtnEL.appendChild(taskEditEl);
  taskBtnEL.appendChild(taskDeleteEl);

  taskLiEl.appendChild(taskBtnEL);

  const taskIconEl = document.createElement('i');
  taskIconEl.classList.add('fa-solid', 'fa-pen-to-square');

  taskEditEl.appendChild(taskIconEl);

  ul.appendChild(taskLiEl);

  taskEditEl.addEventListener('click', () => {
    if (taskIconEl.classList.contains("fa-pen-to-square")) {
      taskIconEl.classList.remove("fa-pen-to-square");
      taskIconEl.classList.add("fa-floppy-disk");
      taskInputEl.removeAttribute("readonly");
      taskInputEl.focus();
    } else {
      taskIconEl.classList.remove("fa-floppy-disk");
      taskIconEl.classList.add("fa-pen-to-square");
      taskInputEl.setAttribute("readonly", "readonly");
    }
  });

  taskDeleteEl.addEventListener('click', () => {
    ul.removeChild(taskLiEl);
  })
  todoInput.value = '';

}
