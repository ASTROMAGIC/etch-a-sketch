document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('grid-container');
    const gridSize = 16;

    for (let i=0; i < gridSize * gridSize; i++) {
        const gridItem = document.getElementById('grid-item');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }
})

// I understand this code in principle, an event listener that waits for the dom to load and uses a for loop to create a 16x16 grid system. The grid system should stop when it reaches a certain size indicated by the gridSize variable, these grid items created by the the foor loop are then appended to the grid-container element. 

// there is a way to create these grids by creating a function that facilitates their creation. 

// in theory I could have a function to create the grid, clear the grid and refresh the grid