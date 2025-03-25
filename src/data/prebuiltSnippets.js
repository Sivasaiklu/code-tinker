
const prebuiltSnippets = [
  
  {
    id: "2",
    image: 'https://blog.stackfindover.com/wp-content/uploads/2021/05/pure-css-button-hover-effect.gif',
    title: "Button with Hover Effect",
    description: "A styled button with a hover effect.",
    html: `<button class="btn">Hover me</button>`,
    css: `.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}`,
    js: ``,
  },
  {
    id: "3",
    image: 'https://cdn.dribbble.com/userupload/24163672/file/original-221177cb0dc9c17422162903294ae94a.gif',
    title: "Simple Counter",
    description: "A basic counter using JavaScript.",
    html: `<div>
  <p id="count">0</p>
  <button onclick="increaseCount()">Increase</button>
</div>`,
    css: `p {
  font-size: 20px;
  font-weight: bold;
}`,
    js: `function increaseCount() {
  let countElement = document.getElementById("count");
  let count = parseInt(countElement.innerText);
  countElement.innerText = count + 1;
}`,
  },
  {
    id: "4",
    image: 'https://cdn.dribbble.com/userupload/19607251/file/original-c6fa56dcebf57300f5baec40d2b30eda.gif',
    title: "Animated Loading Spinner",
    description: "A simple CSS-based loading spinner.",
    html: `<div class="spinner"></div>`,
    css: `.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
    js: ``,
  },
  {
    id: "5",
    image: 'https://onaircode.com/wp-content/uploads/2020/01/Navigation-with-Sub-Navigation.jpg',
    title: "Responsive Navigation Bar",
    description: "A responsive navigation bar with hamburger menu for mobile.",
    html: `<nav class="navbar">
  <div class="logo">CodeTinker</div>
  <div class="hamburger" onclick="toggleMenu()">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,
    css: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #007bff;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 1rem;
  }
  
  .nav-links.active {
    display: flex;
  }
  
  .nav-links li {
    margin: 0.5rem 0;
  }
  
  .hamburger {
    display: block;
  }
}`,
    js: `function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}`,
  },
  {
    id: "6",
    image: 'https://alvaromontoro.com/images/blog/gallery-0a.jpeg',
    title: "Image Gallery with Lightbox",
    description: "A simple image gallery with lightbox functionality.",
    html: `<div class="gallery">
  <img src="https://via.placeholder.com/150" onclick="openLightbox(this.src)">
  <img src="https://via.placeholder.com/150" onclick="openLightbox(this.src)">
  <img src="https://via.placeholder.com/150" onclick="openLightbox(this.src)">
  <img src="https://via.placeholder.com/150" onclick="openLightbox(this.src)">
</div>

<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <img id="lightbox-img" src="">
  <span class="close">&times;</span>
</div>`,
    css: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 10px;
}

.gallery img {
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}

.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}

.lightbox img {
  max-width: 80%;
  max-height: 80%;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: white;
  font-size: 30px;
  cursor: pointer;
}`,
    js: `function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}`,
  },
  {
    id: "7",
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*dLTXVmWpGKoUSrKZCLOEtg.png',
    title: "Accordion Component",
    description: "An expandable accordion component for FAQs or content organization.",
    html: `<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Section 1</div>
    <div class="accordion-content">
      <p>Content for section 1 goes here. This can be any HTML content.</p>
    </div>
  </div>
  
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Section 2</div>
    <div class="accordion-content">
      <p>Content for section 2 goes here. This can be any HTML content.</p>
    </div>
  </div>
  
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Section 3</div>
    <div class="accordion-content">
      <p>Content for section 3 goes here. This can be any HTML content.</p>
    </div>
  </div>
</div>`,
    css: `.accordion {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 5px;
}

.accordion-header {
  padding: 15px;
  background-color: #f4f4f4;
  cursor: pointer;
  position: relative;
  font-weight: bold;
}

.accordion-header::after {
  content: '+';
  position: absolute;
  right: 15px;
  transition: transform 0.3s;
}

.accordion-header.active::after {
  content: '-';
}

.accordion-content {
  padding: 0 15px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.accordion-content.active {
  max-height: 200px;
  padding: 15px;
}`,
    js: `function toggleAccordion(header) {
  header.classList.toggle('active');
  const content = header.nextElementSibling;
  content.classList.toggle('active');
  
  if (content.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = 0;
  }
}`,
  },
  
  {
    id: "9",
    image: 'https://catswhocode.com/wp-content/uploads/2010/10/pure-css-progress-bar.png',
    title: "Progress Bar",
    description: "A customizable progress bar with animation.",
    html: `<div class="progress-container">
  <div class="progress-bar" id="progressBar"></div>
</div>

<div class="controls">
  <button onclick="updateProgress(25)">25%</button>
  <button onclick="updateProgress(50)">50%</button>
  <button onclick="updateProgress(75)">75%</button>
  <button onclick="updateProgress(100)">100%</button>
  <button onclick="updateProgress(0)">Reset</button>
</div>`,
    css: `.progress-container {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 0;
  background-color: #4CAF50;
  border-radius: 10px;
  transition: width 0.5s ease;
}

.controls {
  display: flex;
  gap: 10px;
}

button {
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}`,
    js: `function updateProgress(percentage) {
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = percentage + '%';
  
  // Change color based on percentage
  if (percentage < 25) {
    progressBar.style.backgroundColor = '#FF6B6B';
  } else if (percentage < 50) {
    progressBar.style.backgroundColor = '#FFD166';
  } else if (percentage < 75) {
    progressBar.style.backgroundColor = '#06D6A0';
  } else {
    progressBar.style.backgroundColor = '#118AB2';
  }
}`,
  },
  {
    id: "10",
    image: 'https://user-images.githubusercontent.com/77020164/221394835-eb92ac02-53e3-42bf-96ac-b5114eb543a6.gif',
    title: "Todo List",
    description: "A simple todo list with add, delete, and completion functionality.",
    html: `<div class="todo-app">
  <h2>Todo List</h2>
  <div class="todo-input">
    <input type="text" id="taskInput" placeholder="Add a new task...">
    <button onclick="addTask()">Add</button>
  </div>
  <ul id="taskList" class="task-list"></ul>
</div>`,
    css: `.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.todo-input {
  display: flex;
  margin-bottom: 20px;
}

.todo-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.todo-input button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.task-item.completed {
  opacity: 0.7;
}

.task-item.completed p {
  text-decoration: line-through;
  color: #777;
}

.task-item p {
  flex: 1;
  margin: 0;
}

.delete-btn {
  background-color: #ff5252;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}`,
    js: `// Initialize tasks array
let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if(taskText) {
    // Add task to array
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    
    tasks.push(newTask);
    
    // Clear input
    taskInput.value = '';
    
    // Render tasks
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleComplete(id) {
  tasks = tasks.map(task => 
    task.id === id ? {...task, completed: !task.completed} : task
  );
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item' + (task.completed ? ' completed' : '');
    
    taskItem.innerHTML = \`
      <input type="checkbox" \${task.completed ? 'checked' : ''} 
        onclick="toggleComplete(\${task.id})">
      <p>\${task.text}</p>
      <button class="delete-btn" onclick="deleteTask(\${task.id})">Delete</button>
    \`;
    
    taskList.appendChild(taskItem);
  });
}`,
  },
  {
    id: "11",
    image: 'https://ytimg.googleusercontent.com/vi/AF6vGYIyV8M/maxresdefault.jpg',
    title: "Modal Popup",
    description: "A reusable modal popup component.",
    html: `<button onclick="openModal()">Open Modal</button>

<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <h2>Modal Title</h2>
    <p>This is a modal popup. You can put any content here.</p>
    <button onclick="closeModal()">Close</button>
  </div>
</div>`,
    css: `.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 80%;
  position: relative;
  animation: modalFade 0.3s;
}

@keyframes modalFade {
  from {opacity: 0; transform: translateY(-20px);}
  to {opacity: 1; transform: translateY(0);}
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background-color: #0056b3;
}`,
    js: `function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  
  // Close when clicking outside the modal
  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}`,
  },
  {
    id: "12",
    image: 'https://freefrontend.com/assets/img/css-flip-cards/CSS-Flippy-Cards.gif',
    title: "Card Flip Animation",
    description: "A card with 3D flip animation to reveal content on both sides.",
    html: `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>Front Side</h2>
      <p>Hover to flip</p>
    </div>
    <div class="flip-card-back">
      <h2>Back Side</h2>
      <p>This is the back of the card</p>
    </div>
  </div>
</div>`,
    css: `.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
  margin: 20px auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
}

.flip-card-front {
  background-color: #f7f7f7;
  color: #333;
}

.flip-card-back {
  background-color: #007bff;
  color: white;
  transform: rotateY(180deg);
}`,
    js: ``,
  },
  {
    id: "13",
    image: 'https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhh23zy3ipqs3npixp9lk.gif',
    title: "Draggable Element",
    description: "An element that can be dragged around the screen.",
    html: `<div id="draggable" class="draggable">
  <p>Drag me!</p>
</div>`,
    css: `.draggable {
  width: 150px;
  height: 150px;
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  cursor: move;
  user-select: none;
  position: absolute;
  top: 100px;
  left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}`,
    js: `// Initialize variables
let isDragging = false;
let offsetX, offsetY;
const draggable = document.getElementById('draggable');

// Mouse event handlers
draggable.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDrag);

// Touch event handlers for mobile
draggable.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', stopDrag);

function startDrag(e) {
  isDragging = true;
  
  // Handle both mouse and touch events
  if (e.type === 'mousedown') {
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
  } else if (e.type === 'touchstart') {
    offsetX = e.touches[0].clientX - draggable.getBoundingClientRect().left;
    offsetY = e.touches[0].clientY - draggable.getBoundingClientRect().top;
    e.preventDefault(); // Prevent scrolling while dragging
  }
  
  draggable.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
}

function drag(e) {
  if (!isDragging) return;
  
  let clientX, clientY;
  
  // Handle both mouse and touch events
  if (e.type === 'mousemove') {
    clientX = e.clientX;
    clientY = e.clientY;
  } else if (e.type === 'touchmove') {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
    e.preventDefault(); // Prevent scrolling while dragging
  }
  
  // Calculate new position
  const left = clientX - offsetX;
  const top = clientY - offsetY;
  
  // Apply new position
  draggable.style.left = left + 'px';
  draggable.style.top = top + 'px';
}

function stopDrag() {
  isDragging = false;
  draggable.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
}`,
  },
  {
    id: "14",
    image: 'https://static.snoweb.io/media/switch-light-dark-mode.gif',
    title: "Dark Mode Toggle",
    description: "A toggle switch to change between light and dark themes.",
    html: `<div class="container">
  <h2>Dark Mode Toggle</h2>
  <p>Click the toggle to switch between light and dark modes.</p>
  
  <div class="toggle-container">
    <label class="switch">
      <input type="checkbox" id="themeToggle" onchange="toggleTheme()">
      <span class="slider round"></span>
    </label>
    <span id="themeLabel">Light Mode</span>
  </div>
</div>`,
    css: `body, .container {
  transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
  background-color: #222;
  color: #f0f0f0;
}

.container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.toggle-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}`,
    js: `function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  
  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    themeLabel.textContent = 'Dark Mode';
  } else {
    body.classList.remove('dark-mode');
    themeLabel.textContent = 'Light Mode';
  }
}`,
  },
];


export default prebuiltSnippets;