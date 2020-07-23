// Select color input
// Select size input

var colorPicker = document.getElementById ('colorPicker');
var setColor =colorPicker.value;
var sizePicker = document.getElementById ('sizePicker');

colorPicker.addEventListener('change', function () {
    setColor = document.getElementById ('colorPicker').value;
});

// When size is submitted by the user, call makeGrid()

sizePicker.addEventListener('submit', function () {
    event.preventDefault()
    var height = document.getElementById ('inputHeight').value
    var width = document.getElementById ('inputWidth').value
    makeGrid(height, width)
});

// Your code goes here!

function makeGrid(height, width) {
    var table = document.getElementById('pixelCanvas')
    table.innerHTML = '';

    for (var m= 0; m <= width; m++) {
        var row = document.createElement('tr');  
        row.appendChild (column)
        
        for (var n = 0; n <= height; n++) {
            var column = document.createElement ('td');
            column.appendChild (row); 

            column.addEventListener('click', function ()  {
               if (this.style.backgroundColor) {
                this.style.backgroundColor = ''
               }  else  { 
                              
                this.style.backgroundColor = setColor; 
                }
        });
    }
            table.appendChild(row);
    }
}