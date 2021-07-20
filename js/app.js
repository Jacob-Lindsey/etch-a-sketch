const resetButton = document.querySelector('.reset');
const mainDisplay = document.querySelector('#container');
const gridSquare = document.querySelector('.grid-square');
const gridRow = document.createElement('div');
gridRow.classList = 'grid-container';

function buildGridRow(gridSize) {
    for ( let i=0; i < gridSize; i++ ) {
        const gridSquare = document.createElement('div');
        gridSquare.classList = 'grid-square';
        gridRow.appendChild(gridSquare);
    }
}

function stackGridRow(gridSize) {
    if (gridSize > 128 || gridSize < 1 || gridSize % 1 != 0) {
        resetBoard();
    }
    buildGridRow(gridSize);
    for ( let i=0; i < gridSize; i++ ) {
        let gridRowClone = gridRow.cloneNode(true);
        mainDisplay.appendChild(gridRowClone);
    }
}

function resetBoard() {
    location.reload();
}

let hslValue = 95;

document.body.addEventListener('mouseover', function(event) {
    if(event.target.className=='grid-square') {
        event.target.style.backgroundColor=`hsl(0,0%,${hslValue=hslValue-0.3}%`;
    }
})

resetButton.addEventListener('click', resetBoard);

window.onload = stackGridRow(prompt("Enter how large you want your grid. The number entered will be the WIDTH and HEIGHT. Enter a number between 1-128."));



