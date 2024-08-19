const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('.task-list');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const getTask = taskInput.value.trim();

    if(getTask==="" || !isNaN(getTask)){
        Toastify({
            text: "Enter a valid input",
            className: "error",
            style: {
              background: "red",
            }
          }).showToast();
          return;
    }

    const tasks = document.createElement('div');
    tasks.innerHTML = `<div class="flex justify-between items-center p-2 my-2 bg-purple-300 rounded-md">
                <p>${getTask}</p>
                <i id="delete" class="fa-solid fa-trash"></i>
             </div>`
    taskList.append(tasks)

    taskInput.value = ''

    Toastify({
        text: "Task added successfully",
        className: "success",
        style: {
          background: "green",
        }
      }).showToast();

    //   removing a task 

    tasks.querySelector('#delete').addEventListener('click' , ()=>{
        taskList.removeChild(tasks)

        Toastify({
            text: "Task deleted successfully",
            style:{
                background : "red"
            }
        }).showToast();
    })
})