//Переменные
cells = 30;
cellSize = 20;

//Позиция еды
foodX = 20;
foodY = 20;


//движение
trail = [];

//хвост
tail = 3;

scoreBlock = document.querySelector("h2 span");

window.onload = function(){
    canv = document.querySelector("#canv");
    ctx = canv.getContext("2d");
    
    start();
}

function start(){
    //Позиция игрока 
playerX = 15;
playerY = 15;

//Направление движения
moveX = 0;
moveY = 0;
    
 scoreBlock.innerText = 0;
    
let background = new Image();
    background.src = "Imag/snake.jpg";
    background.onload = function(){
        ctx.drawImage(background, 0, 0);
        ctx.fillStyle = "black";
        ctx.font = "50px monospace";
        ctx.fillText("Start", 230, 580);
    }
    canv.onclick = function(){
      document.addEventListener("keydown", move);
      gameTimer = setInterval(game, 65);
        canv.onclick = null;
}
  
  }

/*
1.Отрисовка игры
2.Движение змейки
3.Проверка если произошло столкновение
*/

function game(){
   playerX += moveX;
    playerY += moveY;
    
   if(playerX < 0 || playerY < 0 || playerY > cells || playerX > cells){
        endGame();
   }
  
    ctx.fillStyle = "#9D91B4";
    ctx.fillRect(0, 0, canv.width, canv.height);
  
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(foodX * cellSize, foodY * cellSize, cellSize, cellSize);
    
    ctx.fillStyle = "#36CA23";
    for(let i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x * cellSize, trail[i].y * cellSize, cellSize, cellSize);
        
     if(playerX == trail[i].x && playerY == trail[i].y){
            tail = 3;
         scoreBlock.innerText = 0;
     }
    }
         trail.push({x: playerX, y: playerY});
    
    if(playerX == foodX && playerY == foodY){
        tail++;
        scoreBlock.innerText = +scoreBlock.innerText + 1;
        foodX = Math.floor(Math.random() * cells);
        foodY = Math.floor(Math.random() * cells);
    }
        while(trail.length > tail){
        trail.shift();
           
        }               
}
    
//Окончание игры

function endGame(){
    clearInterval(gameTimer);
    setTimeout(function(){
    ctx.fillStyle = "#00F929";
    ctx.fillRect(0, 0, canv.width, canv.height);
        
    ctx.fillStyle = "#fff";    
    ctx.font = "50px monospace";
    ctx.fillText("End Game!", 160, 300);
    }, 100)
    
    canv.onclick = start;
       
}

function move(e){
    switch(e.keyCode){
        case 37:
            moveX = -1;
            moveY = 0;
            break;
        case 38:
            moveX = 0;
            moveY = -1;
            break;
        case 39:
            moveX = 1;
            moveY = 0;
            break;
        case 40:
            moveX = 0;
            moveY = 1;
            break;
    }
}




