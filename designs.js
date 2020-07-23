var colorPicker = document.getElementById ('colorPicker');
var setColor =colorPicker.value;
var sizePicker = document.getElementById ('sizePicker');

colorPicker.addEventListener('change', function () {
    setColor = document.getElementById ('colorPicker').value;
});

sizePicker.addEventListener('submit', function () {
    event.preventDefault()
    var height = document.getElementById ('inputWidth').value
    var width = document.getElementById ('inputHeight').value
    makeGrid(height, width)
});
function makeGrid(height, width) {
    var table = document.getElementById('pixelCanvas')
    table.innerHTML = '';
    
    for (var m = 0; m < height; m++) {
        var row = document.createElement('tr');  
        
        for (var n = 0; n < width; n++) {
            var cell = document.createElement ('td');
            row.appendChild (cell); 

            cell.addEventListener('click', function ()  {
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