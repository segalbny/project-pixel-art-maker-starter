// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

var colorPicker = document.getElementById ('colorPicker').value;
var sizePicker = document.getElementById ('sizePicker').value;

sizePicker.addEventListener("submit", function(event){
    event.preventDefault();
   
function addColor(event) {
    var color = document.getElementById ('colorPicker').value;
        event.target.style.backgroundColor = color;
        event.preventDefault();
      };
      grid.addEventListener("click", addColor);
      grid.innerHTML ="" ;

function submitButton() {
    event.preventDefault()
    var height = document.getElementById ('inputWidth').value
    var width = document.getElementById ('inputHeight').value
    var table = document.getElementById("pixelCanvas") 
    makeGrid(height, width)

function makeGrid(height, width) {
    for (let m = 0; m < height;r++) {
        let row = document.createElement ("tr");  }  
        for (let n = 0; n < width; w++) {
            var cell = document.createElement ("td");
            insertRow.appendChild (Cell); 
            cell.addEventListener('click', function (colorclick)  {
                cell.style.backgroundColor = color.value;
        } 