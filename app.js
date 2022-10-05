const container = document.querySelector('#container');
const ROW_CLASS = 'row';
const GRID_SQUARE_CLASS = 'gridSquare';

function makeGrid(container) {
    for (let i = 0; i < 16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(ROW_CLASS);
        for (let j = 0; j < 16; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add(GRID_SQUARE_CLASS);
            rowDiv.appendChild(squareDiv);
        }
        container.appendChild(rowDiv);
    }
}

makeGrid(container);
console.log(container);