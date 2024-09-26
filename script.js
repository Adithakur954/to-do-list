function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");

        // Create a new list item
        var listItem = document.createElement("li");
        listItem.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

function deleteTask(button) {
    // Get the parent element (list item) and remove it
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}
