let gridSize = 16
for (let index = 0; index < (gridSize*gridSize); index++) {
    document.getElementById('game').innerHTML += '<div id="grid-element"></div>'
    
}
let elementsArray = document.querySelectorAll("#grid-element");

elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        elem.style.backgroundColor = '#FFAD1E'
        elem.style.border = '1px solid #874A05;'
        
    });
});

const reset = () => {
    elementsArray.forEach(function(elem) {
            elem.style.backgroundColor = 'white'
            elem.style.border = '1px solid black;'
    });
}
const redraw = () => {
    gridSize = document.getElementById('myInput').value;
    document.getElementById('game').innerHTML = ''
    for (let index = 0; index < (gridSize*gridSize); index++) {
        document.getElementById('game').innerHTML += '<div id="grid-element"></div>'
        
    }
    elementsArray = document.querySelectorAll("#grid-element");

elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        elem.style.backgroundColor = '#FFAD1E'
        elem.style.border = '1px solid #874A05;'
        
    });
});
}