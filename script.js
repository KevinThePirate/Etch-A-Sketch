let gridSize = 16 //Default Grid Size
for (let index = 0; index < (gridSize*gridSize); index++) { 
    //Draw Initial 16*16 Grid (256 Squares)
    document.getElementById('game').innerHTML += '<div id="grid-element"></div>'
    
}

let elementsArray = document.querySelectorAll("#grid-element"); //Get all of the #grid-elements
elementsArray.forEach(function(elem) { //Add the event listener to change the block's style on hover
    elem.addEventListener("mouseover", function() {
        elem.style.backgroundColor = '#FFAD1E'
        elem.style.border = '1px solid #874A05;'
        
    });
});

const reset = () => { //Wipe away the block and make them white again
    elementsArray.forEach(function(elem) {
            elem.style.backgroundColor = 'white'
            elem.style.border = '1px solid black;'
    });
}
const redraw = () => { //Change the grid's size
    console.time('Whole Redraw');
    console.time('Start Section');
    gridSize = document.getElementById('myInput').value; //Get what is in the input field
    document.documentElement.style.cssText = `--grid-dimension: ${gridSize};`; //Change the css variable for the grid's size so that the CSS grid functions like it should
    document.getElementById('game').innerHTML = '' //First delete what's in the grid
    console.timeEnd('Start Section');
    console.time('For Loop');
    for (let index = 0; index < (gridSize*gridSize); index++) { //Create the amount of <div> tags specified
        document.getElementById('game').innerHTML += '<div id="grid-element"></div>'
        
    }
    console.timeEnd('For Loop')
    //Relink the new <div> tags so that they change colour
    elementsArray = document.querySelectorAll("#grid-element");
    elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        elem.style.backgroundColor = '#FFAD1E'
        elem.style.border = '1px solid #874A05;'
        
    });
});
console.timeEnd('Whole Redraw');
}