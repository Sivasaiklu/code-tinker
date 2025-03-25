const challengesData = [
    {
      id: 1,
      title: "Simple Profile Card",
      description:
        "Create a basic profile card with an image, a heading for the name, a short description, and social media links. Add a button to toggle the description visibility.",
      challenge: {
        html: `<div class="profile-card">
    <img src="profile.jpg" alt="Profile Picture" class="profile-img" />
    <h1>John Doe</h1>
    <p class="description">A passionate web developer.</p>
    <div class="social-links">
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
    </div>
    <button onclick="toggleDescription()">Toggle Description</button>
  </div>`,
        css: `.profile-card {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    max-width: 300px;
    margin: auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  .social-links a {
    margin: 0 5px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
  }
  .social-links a:hover {
    color: #007bff;
  }`,
        js: `function toggleDescription() {
    const desc = document.querySelector('.profile-card .description');
    if (desc.style.display === 'none') {
      desc.style.display = 'block';
    } else {
      desc.style.display = 'none';
    }
  }`,
      },
      solution: {
        html: `<!-- Profile Card Solution -->
  <div class="profile-card">
    <img src="profile.jpg" alt="Profile Picture" class="profile-img" />
    <h1>John Doe</h1>
    <p class="description">A passionate web developer.</p>
    <div class="social-links">
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
    </div>
    <button onclick="toggleDescription()">Toggle Description</button>
  </div>`,
        css: `/* Profile Card CSS Solution */
  .profile-card {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    max-width: 300px;
    margin: auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  .social-links a {
    margin: 0 5px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
  }
  .social-links a:hover {
    color: #007bff;
  }`,
        js: `// Profile Card JS Solution
  function toggleDescription() {
    const desc = document.querySelector('.profile-card .description');
    desc.style.display = (desc.style.display === 'none' ? 'block' : 'none');
  }`,
      },
    },
    {
      id: 2,
      title: "To-Do List",
      description:
        "Create an input field to add tasks, a button to add them, and a list to display tasks. Allow marking tasks as completed and deleting tasks.",
      challenge: {
        html: `<div class="todo-app">
    <input type="text" id="taskInput" placeholder="Add a new task" />
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
  </div>`,
        css: `.todo-app {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
  #taskInput {
    width: 70%;
    padding: 10px;
    margin-right: 5px;
  }
  button {
    padding: 10px 15px;
  }
  #taskList {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }
  #taskList li {
    padding: 10px;
    background: #e0e0e0;
    margin-bottom: 10px;
  }`,
        js: `function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;
      li.onclick = function() {
        this.classList.toggle('completed');
      };
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = function(e) {
        e.stopPropagation();
        li.remove();
      };
      li.appendChild(deleteBtn);
      document.getElementById('taskList').appendChild(li);
      input.value = '';
    }
  }`,
      },
      solution: {
        html: `<!-- To-Do List Solution -->
  <div class="todo-app">
    <input type="text" id="taskInput" placeholder="Add a new task" />
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
  </div>`,
        css: `/* To-Do List CSS Solution */
  .todo-app {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
  #taskInput {
    width: 70%;
    padding: 10px;
    margin-right: 5px;
  }
  button {
    padding: 10px 15px;
  }
  #taskList {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }
  #taskList li {
    padding: 10px;
    background: #e0e0e0;
    margin-bottom: 10px;
  }
  #taskList li.completed {
    text-decoration: line-through;
    opacity: 0.6;
  }`,
        js: `// To-Do List JS Solution
  function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;
      li.onclick = function() {
        this.classList.toggle('completed');
      };
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = function(e) {
        e.stopPropagation();
        li.remove();
      };
      li.appendChild(deleteBtn);
      document.getElementById('taskList').appendChild(li);
      input.value = '';
    }
  }`,
      },
    },
    {
      id: 3,
      title: "Basic Calculator",
      description:
        "Create a simple calculator with buttons for numbers and operators. Implement basic arithmetic operations and error handling.",
      challenge: {
        html: `<div class="calculator">
    <input type="text" id="calcDisplay" readonly />
    <div class="calc-buttons">
      <button onclick="clearDisplay()">C</button>
      <button onclick="appendValue('7')">7</button>
      <button onclick="appendValue('8')">8</button>
      <button onclick="appendValue('9')">9</button>
      <button onclick="appendValue('/')">/</button>
      <button onclick="appendValue('4')">4</button>
      <button onclick="appendValue('5')">5</button>
      <button onclick="appendValue('6')">6</button>
      <button onclick="appendValue('*')">*</button>
      <button onclick="appendValue('1')">1</button>
      <button onclick="appendValue('2')">2</button>
      <button onclick="appendValue('3')">3</button>
      <button onclick="appendValue('-')">-</button>
      <button onclick="appendValue('0')">0</button>
      <button onclick="calculateResult()">=</button>
      <button onclick="appendValue('+')">+</button>
    </div>
  </div>`,
        css: `.calculator {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background: #f4f4f4;
    border-radius: 8px;
    text-align: center;
  }
  #calcDisplay {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    text-align: right;
    font-size: 1.2em;
    padding: 5px;
  }
  .calc-buttons button {
    width: 60px;
    height: 60px;
    margin: 5px;
    font-size: 1.1em;
    border: none;
    border-radius: 4px;
    background: #e0e0e0;
    cursor: pointer;
  }
  .calc-buttons button:hover {
    background: #ccc;
  }`,
        js: `function clearDisplay() {
    document.getElementById('calcDisplay').value = '';
  }
  
  function appendValue(val) {
    document.getElementById('calcDisplay').value += val;
  }
  
  function calculateResult() {
    try {
      const result = eval(document.getElementById('calcDisplay').value);
      document.getElementById('calcDisplay').value = result;
    } catch (error) {
      alert('Error in calculation');
    }
  }`,
      },
      solution: {
        html: `<!-- Calculator Solution -->
  <div class="calculator">
    <input type="text" id="calcDisplay" readonly />
    <div class="calc-buttons">
      <button onclick="clearDisplay()">C</button>
      <button onclick="appendValue('7')">7</button>
      <button onclick="appendValue('8')">8</button>
      <button onclick="appendValue('9')">9</button>
      <button onclick="appendValue('/')">/</button>
      <button onclick="appendValue('4')">4</button>
      <button onclick="appendValue('5')">5</button>
      <button onclick="appendValue('6')">6</button>
      <button onclick="appendValue('*')">*</button>
      <button onclick="appendValue('1')">1</button>
      <button onclick="appendValue('2')">2</button>
      <button onclick="appendValue('3')">3</button>
      <button onclick="appendValue('-')">-</button>
      <button onclick="appendValue('0')">0</button>
      <button onclick="calculateResult()">=</button>
      <button onclick="appendValue('+')">+</button>
    </div>
  </div>`,
        css: `/* Calculator CSS Solution */
  .calculator {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background: #f4f4f4;
    border-radius: 8px;
    text-align: center;
  }
  #calcDisplay {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    text-align: right;
    font-size: 1.2em;
    padding: 5px;
  }
  .calc-buttons button {
    width: 60px;
    height: 60px;
    margin: 5px;
    font-size: 1.1em;
    border: none;
    border-radius: 4px;
    background: #e0e0e0;
    cursor: pointer;
  }
  .calc-buttons button:hover {
    background: #ccc;
  }`,
        js: `// Calculator JS Solution
  function clearDisplay() {
    document.getElementById('calcDisplay').value = '';
  }
  
  function appendValue(val) {
    document.getElementById('calcDisplay').value += val;
  }
  
  function calculateResult() {
    try {
      const result = eval(document.getElementById('calcDisplay').value);
      document.getElementById('calcDisplay').value = result;
    } catch (error) {
      alert('Error in calculation');
    }
  }`,
      },
    },
    {
      id: 4,
      title: "Simple Image Gallery",
      description:
        "Create an image gallery with a grid layout. Implement previous/next buttons to navigate and a lightbox effect to enlarge an image when clicked.",
      challenge: {
        html: `<div class="gallery">
    <div class="gallery-grid">
      <img src="img1.jpg" alt="Image 1" />
      <img src="img2.jpg" alt="Image 2" />
      <img src="img3.jpg" alt="Image 3" />
      <img src="img4.jpg" alt="Image 4" />
    </div>
    <button onclick="prevImage()">Previous</button>
    <button onclick="nextImage()">Next</button>
  </div>`,
        css: `.gallery {
    text-align: center;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 15px;
  }
  .gallery-grid img {
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
  }`,
        js: `let currentIndex = 0;
  const images = document.querySelectorAll('.gallery-grid img');
  
  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  // Initialize gallery
  if(images.length) showImage(0);`,
      },
      solution: {
        html: `<!-- Image Gallery Solution -->
  <div class="gallery">
    <div class="gallery-grid">
      <img src="img1.jpg" alt="Image 1" />
      <img src="img2.jpg" alt="Image 2" />
      <img src="img3.jpg" alt="Image 3" />
      <img src="img4.jpg" alt="Image 4" />
    </div>
    <button onclick="prevImage()">Previous</button>
    <button onclick="nextImage()">Next</button>
  </div>`,
        css: `/* Image Gallery CSS Solution */
  .gallery {
    text-align: center;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 15px;
  }
  .gallery-grid img {
    width: 100%;
    border-radius: 8px;
    cursor: pointer;
  }`,
        js: `// Image Gallery JS Solution
  let currentIndex = 0;
  const images = document.querySelectorAll('.gallery-grid img');
  
  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  if(images.length) showImage(0);`,
      },
    },
    {
      id: 5,
      title: "Responsive Navigation Bar",
      description:
        "Build a responsive navigation bar with a logo and links. Use media queries to display a hamburger menu on mobile and a horizontal menu on desktop.",
      challenge: {
        html: `<nav class="navbar">
    <div class="logo">MySite</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button class="hamburger" onclick="toggleMenu()">☰</button>
  </nav>`,
        css: `.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: #333;
    color: #fff;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  .nav-links li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }
  .nav-links li a:hover {
    color: #f0a500;
  }
  .hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 1.5em;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      gap: 10px;
    }
    .hamburger {
      display: block;
    }
  }`,
        js: `function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
    }
  }`,
      },
      solution: {
        html: `<!-- Responsive Navigation Bar Solution -->
  <nav class="navbar">
    <div class="logo">MySite</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button class="hamburger" onclick="toggleMenu()">☰</button>
  </nav>`,
        css: `/* Responsive Navigation Bar CSS Solution */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: #333;
    color: #fff;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  .nav-links li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }
  .nav-links li a:hover {
    color: #f0a500;
  }
  .hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 1.5em;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      gap: 10px;
    }
    .hamburger {
      display: block;
    }
  }`,
        js: `// Responsive Navigation Bar JS Solution
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
    }
  }`,
      },
    },
  ];
  
  export default challengesData;