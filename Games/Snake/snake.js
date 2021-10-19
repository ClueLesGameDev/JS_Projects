const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

let snakes;
let snakeW, snakeH;
let interval;

InitVar();

DrawSnake();
MoveSnake();
//CollisionDetection();
NavControll();

function DrawSnake()
{
    snakes.forEach(snake => {
        
        ctx.beginPath();
        ctx.rect(snake.x, snake.y, snakeW, snakeH);
        ctx.fillStyle = "#EC7D10";
        ctx.fill();
        ctx.closePath();

    }
    );
}

function MoveSnake()
{
    interval = setInterval(() => {
        
        snakes.forEach(snake => snake.x += 2.5);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        DrawSnake();
        //CollisionDetection();
    },
    20
    );
}

/*function CollisionDetection()
{
    snakes.forEach(snake => {

        if(snake.x > canvas.width)
        {
            snake.x = 0;
        }
    })

}*/

function InitVar()
{
    snakes = [
        { x:10, y:10 },
        { x:30, y:10 }
    ]

    snakeW = 20;
    snakeH = 10;
}