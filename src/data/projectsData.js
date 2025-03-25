const prebuiltSnippets = [
  {
    id: "1",
    image: "https://www.codewithrandom.com/wp-content/uploads/2021/12/Snapshot_21-12-07_06-44-17.png",
    title: "Stopwatch",
    description: "A simple stopwatch with start, stop, and reset functionality.",
    html: `<div id="stopwatch">00:00:00</div>
<button onclick="start()">Start</button>
<button onclick="stop()">Stop</button>
<button onclick="reset()">Reset</button>`,
    css: `#stopwatch {
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
  font-family: 'Courier New', Courier, monospace;
  padding: 10px;
  background: #f4f4f4;
  border: 2px solid #ddd;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button {
  margin: 5px;
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  font-size: 1em;
  box-shadow: 0 2px #3e8e41;
}

button:hover {
  background: #45a049;
}

button:active {
  transform: translateY(2px);
  box-shadow: 0 1px #3e8e41;
}

/* Unique button styles for variety */
button:nth-child(2) {
  background: #f39c12;
  box-shadow: 0 2px #d68910;
}

button:nth-child(2):hover {
  background: #e67e22;
}

button:nth-child(3) {
  background: #e74c3c;
  box-shadow: 0 2px #c0392b;
}

button:nth-child(3):hover {
  background: #c0392b;
}
`,
    js: `let timer;
let seconds = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      document.getElementById('stopwatch').innerText = new Date(seconds * 1000).toISOString().substr(11, 8);
    }, 1000);
  }
}

function stop() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  document.getElementById('stopwatch').innerText = '00:00:00';
  isRunning = false;
}`,
  },
  {
    id: "2",
    image: "https://i.ytimg.com/vi/f0SG2j6d-Kg/maxresdefault.jpg",
    title: "Calculator",
    description: "A basic calculator for addition, subtraction, multiplication, and division.",
    html: `<input id="display" readonly />
<div class="buttons">
  <button onclick="clearDisplay()">C</button>
  <button onclick="append('7')">7</button>
  <button onclick="append('8')">8</button>
  <button onclick="append('9')">9</button>
  <button onclick="append('/')">/</button>
  <button onclick="append('4')">4</button>
  <button onclick="append('5')">5</button>
  <button onclick="append('6')">6</button>
  <button onclick="append('*')">*</button>
  <button onclick="append('1')">1</button>
  <button onclick="append('2')">2</button>
  <button onclick="append('3')">3</button>
  <button onclick="append('-')">-</button>
  <button onclick="append('0')">0</button>
  <button onclick="calculate()">=</button>
  <button onclick="append('+')">+</button>
</div>`,
    css: `#display {
  width: calc(100% - 20px);
  height: 60px;
  margin-bottom: 10px;
  font-size: 1.5em;
  text-align: right;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f5f5f5;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 0.1fr);
  gap: 5px;
  justify-items: center;
}

button {
  width: 60px;
  height: 60px;
  background: #f1c40f;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0 2px #d4ac0d;
}

button:active {
  transform: translateY(2px);
  box-shadow: 0 1px #d4ac0d;
}

/* Style tweaks for the Clear, Equals, and Operator buttons */
button:nth-child(1) {
  background: #e74c3c;
  color: #fff;
}

button:nth-child(15) {
  background: #2ecc71;
  color: #fff;
}

button:nth-child(5),
button:nth-child(9),
button:nth-child(13),
button:nth-child(16) {
  background: #3498db;
  color: #fff;
}
`,
    js: `function clearDisplay() {
  document.getElementById('display').value = '';
}

function append(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  document.getElementById('display').value = eval(document.getElementById('display').value);
}`,
  },
  {
    id: "3",
    image: "https://www.sourcecodester.com/sites/default/files/images/rems/tdle1.jpg",
    title: "To-Do App",
    description: "A minimalistic to-do list app.",
    html: `<input id="task" type="text" placeholder="New Task" />
<button onclick="addTask()">Add</button>
<ul id="tasks"></ul>`,
    css: `#task { 
  padding: 10px; 
  width: 60%; 
}

button { 
  background: #3498db; 
  color: #fff; 
  padding: 10px; 
  border: none; 
  cursor: pointer; 
}

ul { 
  list-style: none; 
  padding: 0; 
}

li { 
  padding: 5px; 
  background: #ecf0f1; 
  margin-top: 5px; 
}`,
    js: `function addTask() {
  const task = document.getElementById('task').value;
  
  if (task) {
    const li = document.createElement('li');
    li.innerText = task;
    document.getElementById('tasks').appendChild(li);
    document.getElementById('task').value = '';
  }
}`,
  },
  {
    id: "4",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*JhkS75vF0ZQFq26Phhv6Fg.gif",
    title: "Tic Tac Toe",
    description: "A classic Tic Tac Toe game.",
    html: `<div class="board">
  <div class="cell" onclick="makeMove(0)"></div>
  <div class="cell" onclick="makeMove(1)"></div>
  <div class="cell" onclick="makeMove(2)"></div>
  <div class="cell" onclick="makeMove(3)"></div>
  <div class="cell" onclick="makeMove(4)"></div>
  <div class="cell" onclick="makeMove(5)"></div>
  <div class="cell" onclick="makeMove(6)"></div>
  <div class="cell" onclick="makeMove(7)"></div>
  <div class="cell" onclick="makeMove(8)"></div>
</div>`,
    css: `.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
}

.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1abc9c;
  font-size: 2em;
  cursor: pointer;
}`,
    js: `let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
      gameActive = false;
      return;
    }
    
    if (checkDraw()) {
      alert('Game ended in a draw!');
      gameActive = false;
      return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];
  
  return winConditions.some(condition => {
    return condition.every(index => board[index] === currentPlayer);
  });
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}`,
  },
  {
    id: "5",
    image: "https://i.imgur.com/5xdLeEr.gif",
    title: "Color Palette Generator",
    description: "Generate a random color palette.",
    html: `<div id="palette">
  <button onclick="generateColors()">Generate Colors</button>
  <br/> <br/>
  <div id="colors"></div>
</div>`,
    css: `#palette {
  text-align: center;
}

#colors {
  display: flex;
  justify-content: center; /* Center the row */
  gap: 5px; /* Space between each color box */
}

#colors div {
  width: 100px;
  height: 100px;
  display: flex;
  margin: 0; /* Remove individual margins */
  border-radius: 5px;
}
`,
    js: `function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateColors() {
  const colorContainer = document.getElementById('colors');
  colorContainer.innerHTML = '';
  
  for (let i = 0; i < 5; i++) {
    const colorDiv = document.createElement('div');
    const randomColor = generateRandomColor();
    
    colorDiv.style.backgroundColor = randomColor;
    colorDiv.textContent = randomColor;
    colorDiv.style.color = '#fff';
    colorDiv.style.textShadow = '1px 1px 1px #000';
    colorDiv.style.display = 'flex';
    colorDiv.style.alignItems = 'center';
    colorDiv.style.justifyContent = 'center';
    
    colorContainer.appendChild(colorDiv);
  }
}

// Generate initial colors when page loads
window.onload = generateColors;`,
  },
  {
    id: "6",
    image: "https://www.bytewebster.com/javascriptprojects/uploads/images/image-carousel-slider-bytewebster.png",
    title: "Image Slider",
    description: "A basic image slider with next and previous buttons.",
    html: `<div id="slider">
  <img id="slide" src="image1.jpg" />
  <br/>
  <button onclick="prevSlide()">Previous</button>
  <button onclick="nextSlide()">Next</button>
</div>`,
    css: `#slider img {
  width: 300px;
  height: 200px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
}`,
    js: `const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5LdBbrok4poW63z3wmfl2PXT_xEDM9-kGw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUmYCyxhpq_tV6kcly0SBYIoDNn-XMh5cqA&s',
  'https://www.filesampleshub.com/download/image/jpg/sample3.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56K1f5z8dnSeJRTioCmDxMrypR3vAw8LobA&s',
  'https://evmarts.github.io/blog//img/figs/texture-synth/balloon.jpg'
];

let currentIndex = 0;

function updateSlide() {
  document.getElementById('slide').src = images[currentIndex];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
}

// Initialize with first image
window.onload = updateSlide;`,
  },
];

export default prebuiltSnippets;