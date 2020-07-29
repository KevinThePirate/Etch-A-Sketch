for (let index = 0; index < (16*16); index++) {
    document.getElementById('game').innerHTML += '<div id="grid-element"></div>'
    
}
let elementsArray = document.querySelectorAll("#grid-element");

elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        elem.style.backgroundColor = '#FFAD1E'
        elem.style.border = '1px solid #874A05;'
        
    });
});
const sketch = () => {

}