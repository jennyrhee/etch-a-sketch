const container = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);  
  }
  container.appendChild(row);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', () => {
  square.classList.add('square-black')
}))