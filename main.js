$(document).ready(function(){

var wordArray = [];


$('#btn').on('click', function(){
    // wordArray.push(inputVal);



    var inputVal = $('#inpt').val();
    $('#yourWord').append("<li>"+inputVal+"</li>")
    var splitInputVal = inputVal.split('');
    var reverseinput = splitInputVal.reverse()
    $('#reversedWord').append("<li>"+reverseinput+"</li>")
    console.log(reverseinput)



})



})