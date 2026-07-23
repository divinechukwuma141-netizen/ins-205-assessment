This HTML file is a complete To-Do List web application. It contains three main parts in one file:

1. HTML – creates the structure.


2. CSS – styles the page.


3. JavaScript – makes the app interactive. 



1. HTML (Structure)

This section creates what appears on the webpage.

<head> contains information about the page, including the title "To-Do List App".

<body> contains:

A container (div) with the class app.

A heading (<h1>My To-Do List</h1>).

A text input where users type tasks.

An Add button.

An empty unordered list (<ul>) where tasks will be displayed. 



2. CSS (Styling)

The CSS controls the appearance.

The page uses the Arial font.

The app is centered both vertically and horizontally.

The background color is light gray.

The to-do box has:

Blue-gray background

Rounded corners

Shadow effect


The Add button is blue and changes to a darker blue when hovered over.

Completed tasks appear with:

Gray text

A line through the text.


Delete buttons are red. 


3. JavaScript (Functionality)

This is what makes the app work.

Step 1: Listen for the Add button

document.getElementById("addBtn").addEventListener("click", addTask);

When the Add button is clicked, the addTask() function runs. 

Step 2: Get the task

const taskInput = document.getElementById("taskInput");
const taskText = taskInput.value.trim();

This gets the text the user typed and removes extra spaces. 

Step 3: Prevent empty tasks

if (taskText === "") return;

If nothing was typed, the function stops without adding a task. 

Step 4: Create a new task

const li = document.createElement("li");
li.textContent = taskText;

A new list item (<li>) is created and the task text is placed inside it. 

Step 5: Mark task as completed

li.addEventListener("click", () => {
    li.classList.toggle("completed");
});

Clicking on a task adds or removes the completed class, which draws a line through the task. 

Step 6: Create the delete button

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";

A red X button is created for deleting the task. 

Step 7: Delete the task

deleteBtn.addEventListener("click", () => {
    li.remove();
});

Clicking the X removes the task from the list. 

Step 8: Display the task

document.getElementById("taskList").appendChild(li);

The completed task item is added to the list displayed on the page. 

Step 9: Clear the input

taskInput.value = "";

After adding the task, the input box is emptied so the user can type another task. 

How the app works overall

1. The user types a task.


2. The user clicks Add.


3. The task appears in the list.


4. Clicking the task marks it as completed or incomplete.


5. Clicking the red X deletes the task.



This is a simple beginner-friendly project that demonstrates key JavaScript concepts such as DOM manipulation, event listeners, functions, creating elements dynamically, adding CSS classes, and removing elements.