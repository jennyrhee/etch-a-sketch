function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addHoverShading() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', () => {
    let squareColor = '';
    switch (mode) {
      case 'rainbow':
        squareColor = getRandomColor();
        break;
      case 'eraser':
        squareColor = 'white';
        break;
      default:
        squareColor = mode;
    }
    square.style.backgroundColor = squareColor;   
  }));
}

function makeGrid(size) {
  const container = document.querySelector('.container');
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);  
    }
    container.appendChild(row);
  }
  addHoverShading();
}

function clearGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.style.backgroundColor = 'white');
}

function deleteGrid() {
  const container = document.querySelector('.container');
  container.textContent = '';
}

let mode = 'black';

const slider = document.getElementById('my-slider');
const output = document.getElementById('slider-value');
output.textContent = `${slider.value} x ${slider.value}`;
makeGrid(slider.value);
slider.oninput = () => {
  deleteGrid()
  makeGrid(slider.value)
  output.textContent = `${slider.value} x ${slider.value}`;
}

const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearGrid);

const styleButtons = document.querySelectorAll('.style-btn');
styleButtons.forEach(btn => btn.addEventListener('click', () => {
  mode = btn.textContent.toLowerCase();
}));