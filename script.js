const container = document.querySelector('.container');

//Function to make the right amount of grids, and add the class to fit them within the container
function makeGrids(val){
    
    //Maths for grid amount and dimensions
    let num = val*val;
    let gridDimension = 800/val;
    
    for(let i=0; i<num; i++){
        const makeGrid = document.createElement('div');
        container.appendChild(makeGrid)
        
        makeGrid.classList.add('grid');
        makeGrid.style.height=gridDimension+'px'
        makeGrid.style.width=gridDimension+'px'
    }
    const grids = document.querySelectorAll('.grid');
    grids.forEach(div => div.addEventListener('mouseover', paint));
}

makeGrids(16);

//Painting function
function paint() {
    this.classList.add('draw');
}

//Erase function
const btn = document.querySelectorAll('.button');

btn.forEach(button => button.addEventListener('click',erase));

function erase(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(div => div.classList.remove('draw'))
}

//Resize the grid
const newGrids = document.querySelector('.resize');

newGrids.addEventListener('click',resize);
function resize(){
    let newDimensions=prompt();
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    makeGrids(newDimensions);;
}