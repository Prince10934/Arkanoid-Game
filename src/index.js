import { CanvasView } from "./view/CanvasView.js";
import "./style/style.css";
import { Ball } from "./sprities/Ball.js";
import { Brick } from "./sprities/Brick.js";
import { Paddle } from "./sprities/Paddle.js";

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
function gameLoop(view, bricks, paddle) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  //Move paddle and check so it won't exit the playField
  if(
    (paddle.isMovingLeft &&paddle.pos.x>0)||
    (paddle.isMovingRight &&paddle.pos.x<view.canvas.width-paddle.width)
  ){
    paddle.movePaddle();
  }

  requestAnimationFrame(() => {
    gameLoop(view, bricks, paddle);
  });
}

function startGame(view) {
  //reset display
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  //create all bricks
  const bricks = createBricks();
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_START_X,
      y: view.canvas.height - PADDLE_HEIGHT - 5
    },
    PADDLE_IMAGE
  );
  gameLoop(view, bricks, paddle);
}

//create a new View

const view = new CanvasView("#playField");
view.initStartButton(startGame);
