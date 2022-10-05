const container = document.querySelector('#container');
const RESET_BUTTON = document.querySelector('#reset');

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

function resetGrid(resetButton) {
    resetButton.addEventListener('click', () => window.location.reload());
}

makeGrid(container, ROW_CLASS, GRID_SQUARE_CLASS);
changeSquareColor(GRID_SQUARE_CLASS, ACTIVE_CLASS);
resetGrid(RESET_BUTTON);