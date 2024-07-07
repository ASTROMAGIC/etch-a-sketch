let color = "black";
let click = true;

// this is a for loop to create the square divs for the baord up to a limit of 256, which is essentially a 16x16 grid. The style elements are for you to see each style.

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i =0; i < amount; i++) {
        let sqaure = document.createElement("div");
        sqaure.addEventListener("mouseover", colorSquare);
        sqaure.style.backgroundColor= 'white';
        board.insertAdjacentElement("beforeend", sqaure);
    }
}

// so somehow, putting double quotes in my grid template columns made the squares appear as lines. i'm truly not sure why, but i need to be careful how i write my syntax and structure of my code. 

// The create of the board divs have now been consolidated into a function that can be accessed whereever placed in this program.
// created squares variable with a small for each function to remove the divs when decreasing the size of the board 

populateBoard(16);

// now we call the function to ensure all of our divs are created before we put our variables and loops into our function

function changeSize(input) {
    if (input >= 2 && input <= 100){
        document.querySelector('.error').style.display = "none";
        populateBoard(input); 
    } else {
        document.querySelector('.error').style.display = "flex";
    }    
}

// if else conditional written to ensure the sketch board doesn't crash when the input is too high.

// we have created a function to change the size of our board which can be attached to the html file with a button onlick attachment. 

//july 3rd continuation: adding drawing functionality to populate board function. How can we manipulate the DOM to recognize the sqaures being "drawn" upon? Initially I believe there are a couple of ways to do this. One is adding an event listener into the board populate to recognize the mouse going over the board and changing the color of the squares the mouse will go over. Another idea that I have is an adding an event listener that responds to the mouse going over the board and then changing the color. I think it would be a good idea to try both versions. 

// let's add a function to color that squares that will integrate into our populate board function 

function colorSquare() {
    if (click) { 
        if(color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
    }    
}

// with this function in particular, it is being added to each new square that you create to shift its color, since each square div is being made through the dom.

// to create random colors with the pen, the background color needs to be randomized. I think I should take the time out to understand this piece of code at a later point. 

// A hard equality (===) is needed, otherwise it will always be random

function changeColor(choice) {
    color = choice;
}

// after adding a variable and a function to change color, my "pen" is no longer working. 

// i did not change my function in color sqaure to take in the new variable of "color" that I had just created, hence why the coloring stopped working 

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

// as of now, the MVP of the project is 100% finished and now we just need to style the project. 

// will now add clicking functionality so specific shapes can be drawn 


document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.tagName != "BUTTON") {
    if(click) {
        document.querySelector('.mode').textContent = "Mode: Coloring"
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring"
    }
   }
});

// clicking on and off can now be toggled on the board so specific shapes can be drawn. 

// we have no readjusted our click function to not change the mode of the etch a sketch board upon clicking buttons, only clicking the board will change the mode. 

// click function has stopped working for some reason, will need to look at it again. 