

// this is a for loop to create the square divs for the baord up to a limit of 256, which is essentially a 16x16 grid. The style elements are for you to see each style.

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr))`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr))`;

    let amount = size * size;
    for(let i =0; i<amount; i++) {
        let sqaure = document.createElement('div')
        sqaure.style.backgroundColor= 'blue';
        board.insertAdjacentElement('beforeend', sqaure);
    }
}

// The create of the board divs have now been consolidated into a function that can be accessed whereever placed in this program.
// created squares variable with a small for each function to remove the divs when decreasing the size of the board 

populateBoard(16);

// now we call the function to ensure all of our divs are created before we put our variables and loops into our function

function changeSize(input){
    if (input >= 2 && input <= 100){
        populateBoard(input); 
    } else {
        console.log("Too many Squares!");
    }    
}

// if else conditional written to ensure the sketch board doesn't crash when the input is too high.

// we have created a function to change the size of our board which can be attached to the html file with a button onlick attachment. 