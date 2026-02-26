// app.js - Planning Board Functionality

// Task Management
class Task {
    constructor(id, title, start, end, status) {
        this.id = id;
        this.title = title;
        this.start = start; // Date Object
        this.end = end;     // Date Object
        this.status = status; // e.g., 'pending', 'in-progress', 'completed'
    }
}

class TaskManager {
    constructor() {
        this.tasks = []; // Array to hold tasks
    }

    createTask(title, start, end) {
        const id = this.tasks.length + 1; // Simple ID assignment
        const newTask = new Task(id, title, start, end, 'pending');
        this.tasks.push(newTask);
    }

    editTask(id, updatedData) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            Object.assign(task, updatedData);
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}

// Drag-and-Drop Functionality 
class DragAndDrop {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        // Initialize drag-and-drop events
        this.element.addEventListener('dragstart', this.handleDragStart);
        this.element.addEventListener('dragover', this.handleDragOver);
        this.element.addEventListener('drop', this.handleDrop);
    }

    handleDragStart(event) {
        // Logic for handling drag start
        event.dataTransfer.setData("text/plain", event.target.id);
    }

    handleDragOver(event) {
        event.preventDefault(); // Allow drop
    }

    handleDrop(event) {
        const id = event.dataTransfer.getData("text/plain");
        // Logic to position the task based on the dropped location
    }
}

// View Modes Management
class ViewManager {
    constructor() {
        this.currentView = 'month'; // Default view
    }

    switchView(view) {
        this.currentView = view;
        // Logic to render tasks based on selected view
    }
}

// Filtering and Configuration
class FilterManager {
    constructor(tasks) {
        this.tasks = tasks;
    }

    filterTasks(criteria) {
        // Logic to filter tasks based on provided criteria
        return this.tasks.filter(task => task.status === criteria.status);
    }
}

// Initial Setup
const taskManager = new TaskManager();
const viewManager = new ViewManager();
const dragAndDrop = new DragAndDrop(document.getElementById('task-container'));

// Example Usage
taskManager.createTask("New Task", new Date(), new Date());
viewManager.switchView('week');
