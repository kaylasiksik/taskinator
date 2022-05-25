// assign button element object representation to a variable in file
var buttonEl = document.querySelector("#save-task");
// task list 
var tasksToDoEl = document.querySelector("#tasks-to-do");



var createTaskHandler = function() {
    // Create task item. ??
    var itemEl = document.createElement("li");
    // Style new task item.
    itemEl.className = "task-item"
    // Add text
    itemEl.textContent = "This is a new task.";
    // Append element to task list 
    tasksToDoEl.appendChild(itemEl);
};

buttonEl.addEventListener("click", createTaskHandler);