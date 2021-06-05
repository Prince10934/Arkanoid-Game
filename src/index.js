import { CanvasView } from "./view/CanvasView.js";
import "./style/style.css";
import { Ball } from "./sprities/Ball.js";
import { Brick } from "./sprities/Brick.js";
import { Paddle } from "./sprities/Paddle.js";
import { Collision } from "./collision.js";
//Images
import PADDLE_IMAGE from "./images/paddle.png";
import BALL_IMAGE from "./images/ball.png";

//level and colors
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_START_X,
  BALL_SPEED,
  BALL_SIZE,
  BALL_START_X,
  BALL_START_Y,
} from "./setup.js";

//helpers

import { createBricks } from "./helpers.js";

let gameOver = false;
let score = 0;
function setGameOver(view) {
  view.drawInfo("Game Over!");
  gameOver = false;
}
function setGameWin(view) {
  view.drawInfo("Game Won!");
  gameOver = false;
}
function gameLoop(view, bricks, paddle, ball, collision) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);
  //Move Ball
  ball.moveBall();
  //Move paddle and check so it won't exit the playField
  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }
  collision.checkBallCollision(ball, paddle, view);
  const collidingBrick = collision.isCollisionBricks(ball, bricks);
  if (collidingBrick) {
    score += 1;
    view.drawScore(score);
  }
  //game over when ball leaves playField
  if(ball.pos.y>view.canvas.height){
    gameOver=true;
  }
  //if game won, set gameOver and display win
  if(bricks.length===0){
    return setGameWin(view);
  }
  //return if gameOver and don't run the requestAnimationFrame
  if(gameOver){
    return setGameOver(view);
  }
  requestAnimationFrame(() => {
    gameLoop(view, bricks, paddle, ball, collision);
  });
}

function startGame(view) {
  //reset display
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  //collision
  const collision = new Collision();
  //create all bricks
  const bricks = createBricks();
  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    {
      x: BALL_START_X,
      y: BALL_START_Y,
    },
    BALL_IMAGE
  );
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_START_X,
      y: view.canvas.height - PADDLE_HEIGHT - 5,
    },
    PADDLE_IMAGE
  );
  gameLoop(view, bricks, paddle, ball, collision);
}

//create a new View

const view = new CanvasView("#playField");
view.initStartButton(startGame);
