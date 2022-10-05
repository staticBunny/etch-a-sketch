const CONTAINER = document.querySelector('#container');
const RESET_BUTTON = document.querySelector('#reset');
const CLEAR_GRID_BUTTON = document.querySelector('#clear');
const GRID_SIZE_INPUT = document.querySelector('#input');
const CLASSIC_OPTION_BUTTON = document.querySelector('#classic');
const VIBRANT_OPTION_BUTTON = document.querySelector('#rgb');

const ROW_CLASS = 'row';
const GRID_SQUARE_CLASS = 'gridSquare';
const ACTIVE_CLASS = 'active';
const DEFAULT_SQUARE_COLOR = 'white';
const CLASSIC_COLOR = 'black';

let latestColor = 'classic';

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(ROW_CLASS);
        for (let j = 0; j < gridSize; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add(GRID_SQUARE_CLASS);
            rowDiv.appendChild(squareDiv);
        }
        CONTAINER.appendChild(rowDiv);
    }

    if (latestColor === 'classic') setClassicColor();
    else setVibrantColor();
}

function deleteGrid() {
    let child = CONTAINER.firstElementChild;
    while(child) {
        child.remove();
        child = CONTAINER.firstElementChild;
    }
}

function updateGrid(event) {
    if (event.key === 'Enter'){
        let value = GRID_SIZE_INPUT.value;
        if (value > 101 || value < 1) return;
        deleteGrid();
        makeGrid(value);
    } 
}

function setClassicColor() {
    latestColor = 'classic';
    const gridSquares = document.querySelectorAll(`.${GRID_SQUARE_CLASS}`);
    gridSquares.forEach(square => square.addEventListener('mouseover', () => {
        square.style['background-color'] = CLASSIC_COLOR;
    }))
}

function setVibrantColor() {
    latestColor = 'vibrant';
    const gridSquares = document.querySelectorAll(`.${GRID_SQUARE_CLASS}`);
    gridSquares.forEach(square => square.addEventListener('mouseover', () => {
        square.style['background-color'] = generateRandomColor();
    }))
}

function clearGrid() {
    const gridSquares = document.querySelectorAll(`.${GRID_SQUARE_CLASS}`);
    gridSquares.forEach(square => square.style['background-color'] = DEFAULT_SQUARE_COLOR);
}

function resetGrid() {
    window.location.reload();
}

function generateRandomColor() {
    const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}

function checkForEvents() {
    GRID_SIZE_INPUT.addEventListener('keydown', e => updateGrid(e));
    RESET_BUTTON.addEventListener('click', () => resetGrid());
    CLASSIC_OPTION_BUTTON.addEventListener('click', () => setClassicColor());
    VIBRANT_OPTION_BUTTON.addEventListener('click', () => setVibrantColor());
    CLEAR_GRID_BUTTON.addEventListener('click', () => clearGrid());
}

function runApp() {
    makeGrid(16);
    checkForEvents();
}

runApp();