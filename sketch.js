const container = document.querySelector('#container');

function randomColor () {
    return Math.floor(Math.random() * 360);
}
// Element for new square.
function createGrid (size) {

container.innerHTML = '';
const squareSize = 960 /size;
// Add a loop for multiple squares.
for (let i = 0; i < size *size; i++) {
    const square = document.createElement ('div');
square.classList.add('square');
square.style.height = `${squareSize}px`;
square.style.width = `${squareSize}px`;

square.addEventListener('mouseover', () => {
     square.style.backgroundColor = `hsl(${randomColor()}, 100%, 50%)`;
});
square.addEventListener ('mouseout', () => {
    square.style.backgroundColor = 'white';
})
container.appendChild(square)
}


}

    const resetBtn = document.querySelector('button');
    resetBtn.addEventListener ('click', () => {
        let size = Number (prompt('Choose a number between 1 and 100'));
        if (size > 100) {
            return size = 100;
        } else if (size < 1 || isNaN (size)) {
            return 
        }
        createGrid(size);
    });




// The number 256 is the multiplication of 16*16 as per instructions.

