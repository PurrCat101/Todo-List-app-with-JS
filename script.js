// Get DOM elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to create a new task item
function addTask() {
  if (taskInput.value === "") {
    alert("You must write something!");
  } else {
    // Create a new list item
    const li = document.createElement("li");
    li.innerHTML = taskInput.value;

    // Append the list item to the task list
    taskList.appendChild(li);

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    // Add a click event listener to the delete button to remove the task item
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    // Append the task text and delete button to the list item
    li.appendChild(deleteButton);

    // Clear the input field after adding the task
    taskInput.value = "";
  }
}
