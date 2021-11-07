
let video = null;
let canvas = null;
let context = null;
//let scaler = 0.8;
let prefSize = { x: 0, y: 0, width: 0, height: 0 , rows : 3, cols : 3};   
let pieces = [];

function main()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let permission = navigator.mediaDevices.getUserMedia({ video : true });
    permission.then( function(signal) { 

        video = document.createElement("video");
        video.srcObject = signal;
        video.play();

        video.onloadeddata = function() {
            
           //handleResize();
           // window.addEventListener('resize', handleResize);

            updateCanvas();
        }
    }).catch( function(err) {
        alert("Camer error : " + err);
    });
    
}

function handleResize()
{
    /*let resizer = scaler * Math.min(window.innerWidth/video.videoWidth,
        window.innerHeight/video.videoHeight);


    prefSize.width = resizer * video.videoWidth;
    prefSize.heigth = resizer * video.videoHeight;
    prefSize.x = window.innerWidth / 2 - prefSize.width / 2;
    prefSize.y = window.innerHeight / 2 - prefSize.heigth / 2;*/

}

function updateCanvas()
{
    //context.drawImage(video, prefSize.x, prefSize.y, prefSize.width, prefSize.height);
    context.drawImage(video, 0,0);

    for(let i = 0; i < pieces.length; i++)
    {
        pieces[i].draw(context);
    }
    window.requestAnimationFrame(updateCanvas);
}

function InitPieces()
{
    pieces = [];
    for(let i = 0; i < prefSize.rows; i++)
    {
        for(let j = 0; j< prefSize.cols; j++)
        {
            pieces.push(new Piece(i,j));
        }
    }

}
class Piece
{
    constructor(rowIndex, colIndex) 
    {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        
        this.x = prefSize.x + prefSize.width * this.colIndex / prefSize.cols;
        this.y = prefSize.y + prefSize.height * this.rowIndex / prefSize.rows;

        this.width = prefSize.width/prefSize.cols;
        this.height = prefSize.height/prefSize.rows;

    }
    draw(context)
    {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
    }
}