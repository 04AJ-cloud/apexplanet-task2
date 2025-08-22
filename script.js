// Form validation and submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    
    // Basic validation
    if (!name) {
        formMessage.textContent = "Please enter your name.";
        formMessage.style.color = "red";
        return;
    }
    if (!validateEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }
    formMessage.textContent = "Thank you for contacting us!";
    formMessage.style.color = "green";
    contactForm.reset();
});

function validateEmail(email) {
    // Simple email regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// To-Do List functionality
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const task = todoInput.value.trim();
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
    todoInput.focus();
}
