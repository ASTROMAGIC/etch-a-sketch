// restarting js file from scratch since previous loop and logic did not work for what I was trying to do. 

let board = document.querySelector('.board')
board.style.gridTemplateColumns = "repeat (16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

// note that when I create create variables and styles for certain elements, they should be grouped together for better readablity

// I created a variable for my baord and styled it with gridTemplateRows and Columns to repeat 16 times. 

for(let i =0; i<256; i++) {
    let sqaure = document.createElement('div')
    sqaure.style.backgroundColor= 'blue'
    board.insertAdjacentElement('beforeend', sqaure)
}

// this is a for loop to create the square divs for the baord up to a limit of 256, which is essentially a 16x16 grid. The style elements are for you to see each style