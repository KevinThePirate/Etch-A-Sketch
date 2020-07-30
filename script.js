let gridSize = 16 //Default Grid Size
let elementsArray = document.querySelectorAll(".grid-element"); //Get all of the .grid-elements
for (let index = 0; index < (gridSize*gridSize); index++) { 
    //Draw Initial 16*16 Grid (256 Squares)
    document.getElementById('game').innerHTML += '<div class="grid-element"></div>'
    
}
const sketch = () => {
    elementsArray = document.querySelectorAll(".grid-element"); //Get all of the .grid-elements
    elementsArray.forEach(function(elem) { //Add the event listener to change the block's style on hover
        elem.addEventListener("mouseover", function() {
            if(document.getElementById('checkbox').checked){
                elem.style.backgroundColor = 'rgb(' + Math.ceil(Math.random() * 255)  + ',' + Math.ceil(Math.random() * 255)  + ',' + Math.ceil(Math.random() * 255)  + ')';
            }else{
                elem.style.backgroundColor = '#FFAD1E'
                elem.style.border = '1px solid #874A05;'
        }
        });
    });
}
const reset = () => { //Wipe away the block and make them white again
    elementsArray.forEach(function(elem) {
            elem.style.backgroundColor = 'white'
            elem.style.border = '1px solid black;'
    });
}
const redraw = () => { //Change the grid's size
    gridSize = document.getElementById('myInput').value; //Get what is in the input field

    document.documentElement.style.cssText = `--grid-dimension: ${gridSize};`; //Change the css variable for the grid's size so that the CSS grid functions like it should

    document.getElementById('game').innerHTML = '' //First delete what's in the grid

    for(var i = 0; i < gridSize*gridSize; i++) {
        var div = document.createElement("div");
        div.className = "grid-element";
        document.getElementById('game').appendChild(div);
    }
    //Relink the new <div> tags so that they change colour
    sketch();
}
document.getElementById('myInput').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      redraw()
    }
  });
sketch();