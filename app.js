const container = document.querySelector('#container');
const ROW_CLASS = 'row';
const GRID_SQUARE_CLASS = 'gridSquare';
const ACTIVE_CLASS = 'active';

function makeGrid(container, rowClass, gridSquareClass) {
    for (let i = 0; i < 16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(rowClass);
        for (let j = 0; j < 16; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add(gridSquareClass);
            rowDiv.appendChild(squareDiv);
        }
        container.appendChild(rowDiv);
    }
}

function changeSquareColor(gridSquareClass, activeClass) {
    const gridSquares = document.querySelectorAll(`.${gridSquareClass}`);
    gridSquares.forEach(square => square.addEventListener('mouseover', () => {
        square.classList.add(activeClass);
    }))
}

makeGrid(container, ROW_CLASS, GRID_SQUARE_CLASS);
changeSquareColor(GRID_SQUARE_CLASS, ACTIVE_CLASS);
console.log(container);