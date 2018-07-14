document.addEventListener("DOMContentLoaded", function() {
context = document.querySelector('#drawingCanvas').getContext("2d");

  let originalImage = new Image();
  originalImage.src = document.querySelector('#imageSource').src;
  console.log(originalImage);
  context.drawImage(originalImage, 0, 0);

  });
