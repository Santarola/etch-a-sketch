const grid = document.querySelector('#grid');



for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.height = '0';
    square.style.width = '5%';
    square.style.paddingBottom = '5%';
    square.style.border = '1px solid black';
    
    grid.appendChild(square);
}
