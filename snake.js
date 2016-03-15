;var SnakeGame = (function(){
		
  var directionX = 1,
      directionY = 0,
      boardHeight,
      boardWidth,
      playing = false,
      headPositionX,
      headPositionY,
      interval,
      canvas,
      ctx,
      snake;      

  function SinglyList(){
  	this._length = 0;
  	this.head = null;
  }
  function snakeNode(x,y){
  	this.xPos = x;
  	this.yPos = y;
  	this.next = null;
  }
  SinglyList.prototype.add = function(x,y){
  	var node = new snakeNode(x,y),
  			currentNode = this.head;

  	//Empty List
  	if(!currentNode){
  		this.head = node;
  		this._length++;
  		return node;
  	}
  	//Non-empty list
  	while(currentNode.next){ 
  		currentNode = currentNode.next;
  	}

  	currentNode.next = node;
  	this._length++;
  	return node;
  };
  SinglyList.prototype.traverse = function(callback){
  	var currentNode = this.head;
  		while(currentNode){
  			callback(currentNode);
  			currentNode = currentNode.next;
  		}
  };

  var slither = function(){
  	var canvas = document.getElementById("gameBoard");	
  	ctx = canvas.getContext("2d");

  	snake = new SinglyList();
  	snake.add(headPositionX, headPositionY);
  	snake.add(headPositionX, headPositionY-5);
    run(true);
  };

  function run(playing){	  
   	if(playing){
   		interval = setInterval(function(){
	      printSnake();
	    },1000);
   	}else{
   		clearInterval(interval);
   	}   	
  }

  var printSnake = function(){
  	console.log('Moving!');
  	ctx.clearRect(0,0,boardWidth, boardHeight);
    ctx.beginPath();
    ctx.moveTo(snake.head.xPos+5, snake.head.yPos);
    snake.traverse(function(node){
    	ctx.lineTo(node.xPos, node.yPos);
    	ctx.stroke();
    });
  };

	return {
    begin: function(width, height){
      boardHeight = height;
      boardWidth = width;
      headPositionX = Math.floor(width/2);
      headPositionY = Math.floor(height/2);
      slither();
    },
    end: function(){
    	console.log('end it!');
    	run(false);
    }
	};

})(document);