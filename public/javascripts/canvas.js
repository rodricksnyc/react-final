document.addEventListener("DOMContentLoaded", function() {
  console.log('the fucking document is ready bitch!');

context = document.querySelector('#drawingCanvas').getContext("2d");

//define the canvas
let canvas = document.querySelector('#   ');

//global mousdown variable for when the mouse is pressed
let mouseDown = false;

canvas.addEventListener('mousedown', function(event) {
  mouseDown = true;
  console.log(mouseDown);
})
canvas.addEventListener('mouseup', function(event) {
  mouseDown = false;
  console.log(mouseDown);
})










});
