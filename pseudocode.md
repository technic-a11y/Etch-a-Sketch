let box = 0;

const squares = function squares() {
    for (let i =0; i < 100; i++) {
        let userInput = prompt ('Insert a number.')
        userInput = '';
        if (userInput === 0) {
            return;
        } else if (userInput <= 100)
            box++;
            return;
    };
}
console.log(squares());

const container = document.querySelector('#container');
const containerSize = 800;

function createGrid (size) {
    const squareSize = containerSize / size;
    for (let i =0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('squares')

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
    };
    container.appendChild(square);
}

const container = document.querySelector('#container');

function createGrid (size) {
container.innerHTML = '';
const squareSize = 960 / size;
const square = document.createElement ('div');
for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add ('square');
    square.addEventListener ('mouseover', ()=> {
        square.style.backgroundColor = 'orange';
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}`
    });
    container.appendChild (square)
}
}
// The number 256 is the result of 16*16.

const popBtn = document.querySelector ('button');
popBtn.addEventListener ('click', () => {
    let size = Number( prompt ('Choose a number between 1 to 100'));
    if (size < 100) {
        return size=100
    }
    if (size < 1) {
        return NaN;
    }
    createGrid (16);
});
