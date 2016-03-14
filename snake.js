;var Snake = (function(){

  var directionX = 0,
      directionY = 0,
      boardHeight,
      boardWidth,
      playing = false,
      headPositionX,
      headPositionY;


  var snake = function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");


    ctx.beginPath();
    // ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    ctx.moveTo(headPositionX-5,headPositionY);
    ctx.lineTo(headPositionX, headPositionY);
    // ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
    // ctx.moveTo(65,65);
    // ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    // ctx.moveTo(95,65);
    // ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke();
  };

  var moveSnake = function(){
    setTimeout(function(){

    },10);
  };

	return {
    begin: function(width, height){
      boardHeight = height;
      boardWidth = width;
      headPositionX = Math.floor(width/2);
      headPositionY = Math.floor(height/2);
      snake();
    }
	};

})(document);