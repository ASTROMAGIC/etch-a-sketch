document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('grid-container');
    const gridSize = 16;

    for (let i=0; i < gridSize * gridSize; i++) {
        const gridItem = document.getElementById('grid-item');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }
})