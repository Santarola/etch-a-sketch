const grid = document.querySelector('#grid');
const changeGrid = document.querySelector('.change');

function createGrid() {
    
    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        square.style.height = `15.63px`;
        square.style.width = `15.63px`;
        square.style.border = '1px solid black';
        
        grid.appendChild(square);

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'red';
            })
    }
    
}

function newGrid() {
    let newSize;
    newSize = prompt("Enter a size of grid within 100 (for example: 16x16 = 16)");
    square = document.querySelectorAll('.square');

    square.forEach(square => {
        square.remove();
    })

    for (i = 0; i < newSize * newSize; i++) {
        square = document.createElement('div');
        square.classList.add("square");
        let squareSize = 250 / newSize;
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        square.style.border = '1px solid black';
        
        grid.appendChild(square);

        
       
    }
    
    square = document.querySelectorAll('.square');

    square.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'red';
            })
    })
    
}

createGrid();

changeGrid.addEventListener('click', () => {
    newGrid();
 })







