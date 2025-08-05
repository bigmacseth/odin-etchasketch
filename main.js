// for readability and frankly my own sanity I've made a function to create the grid, 
// it uses for loops to create the columns and give them a unique ID, then the second
// section uses that id to iterate once over each column until it is full of 'cells'.

function customGrid(number) {
    

    const container = document.querySelector('.container');
    container.replaceChildren();
    
    for (let i = 1; i <= number; i++) {
        let gridRows = document.createElement('div');
        gridRows.id = i;
        container.appendChild(gridRows);
        let children = container.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add('column')
        };

    }

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {
            let gridColumns = document.createElement('div');
            gridColumns.classList.add('cells');
            let gridRowID = document.getElementById(j);
            gridRowID.appendChild(gridColumns);
        };  
    };
};

// initialize a default grid
customGrid(16);

const customBtn = document.querySelector('#customGrid');
customBtn.addEventListener('click', () =>  {
    let userGridSize = prompt('Please pick a grid Size: ')
    customGrid(userGridSize);
});


const cells = document.querySelectorAll('.cells');

cells.forEach(cell => {
    cell.addEventListener('mousemove', (e) => {
        cell.style.backgroundColor = 'black';
    });
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

