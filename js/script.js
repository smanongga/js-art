var myCanvas;

window.onload = loadCanvas;

  function loadCanvas() {
  myCanvas = document.getElementById("myCanvas");
  canvasContext = myCanvas.getContext("2d");
  setIntervalTime();

 }
  function squareBox() {
    for (var i = 0; i <=400; i+=100) {
      for(var k=0; k <=400; k+=100) {
          canvasContext.fillStyle=getRandomColor();
          canvasContext.fillRect(i,k,100,100);
      }
    }
 }

 function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
 }

 function setIntervalTime() {
      squareBox();
      setTimeout(function(){
        setIntervalTime();},1000
      );
 }
