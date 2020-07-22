// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
   event.preventDefault();  
   height = $('#inputHeight').val();
   width =  $('#inputWidth').val();
   makeGrid(height, width)
   console.log('Height: ' + height+ 'add width: ' + width);

})

function makeGrid(n,m) {
    $('tr').remove();

// Your code goes here!
   for (var d = 1; d <= n; d++) {
       $('#pixelCanvas').append('<tr id=table'+ d + '</tr>')
   for (var e = 1; e <=m; e++) { 
        $('#table' + d).append('<td>/td>');
   }
}
$('td').click(function addColor() {
  color = $('#colorPicker').val();
  
  if  (this.attr('style')){
      this.removeAttr('style')
    } else {
      this.attr('style', 'background-color;' + color)
    }
  })
}


