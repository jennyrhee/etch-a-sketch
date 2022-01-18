function addHoverShading(cssClass) {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', () => {
  square.classList.add(cssClass)
  }))
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

  addHoverShading('square-black');
}

function clearGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.classList.remove('square-black'));
}

function deleteGrid() {
  const container = document.querySelector('.container');
  container.textContent = '';
}

makeGrid(16);
const slider = document.getElementById('my-slider');
const output = document.getElementById('slider-value');
output.textContent = `${slider.value} x ${slider.value}`;
slider.oninput = () => {
  deleteGrid()
  makeGrid(slider.value)
  output.textContent = `${slider.value} x ${slider.value}`;
}

const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearGrid);
clearButton.addEventListener('click', () => {
  deleteGrid();
  makeGrid(slider.value);
})