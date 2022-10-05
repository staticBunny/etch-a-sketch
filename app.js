const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#input');
const RESET_BUTTON = document.querySelector('#reset');

const ROW_CLASS = 'row';
const GRID_SQUARE_CLASS = 'gridSquare';
const ACTIVE_CLASS = 'active';

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(ROW_CLASS);
        for (let j = 0; j < gridSize; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add(GRID_SQUARE_CLASS);
            rowDiv.appendChild(squareDiv);
        }
        container.appendChild(rowDiv);
    }
    changeSquareColor();
}

function deleteGrid() {
    let child = container.firstElementChild;
    while(child) {
        child.remove();
        child = container.firstElementChild;
    }
}

function changeSquareColor() {
    const gridSquares = document.querySelectorAll(`.${GRID_SQUARE_CLASS}`);
    gridSquares.forEach(square => square.addEventListener('mouseover', () => {
        square.classList.add(ACTIVE_CLASS);
    }))
}

function resetGrid() {
    RESET_BUTTON.addEventListener('click', () => window.location.reload());
}

function changeGrid() {
    gridSizeInput.addEventListener('keydown', e => {
        if (e.key === 'Enter'){
            let value = gridSizeInput.value;
            if (value > 101 || value < 1) return;
            deleteGrid();
            makeGrid(value);
        } 
    })
}

makeGrid(16);
changeGrid();
resetGrid();