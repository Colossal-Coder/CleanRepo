const cvs = document.GetElementById('canvas');
const ctx = cvs.getContext('2d');

let imageName = new Image();
imageName.src = "IceCream.png";//CHECK
let audioName = new Audio();
audioName.src = "introSound.wav";//CHECK
audioName.Play();
//
//
ctx.drawImage(imageName, X, Y, Width, Height);
ctx.fillStyle = "red";
ctx.fillRect(100, 300, 30, 30);
//
//
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box }

function draw() {
    ctx.drawImage(ground, 0, 0);
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
}
    let game = setInterval(draw, 100);
