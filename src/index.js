import { CanvasView } from "./view/CanvasView.js";
import './style/style.css';
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
function gameLoop(view, bricks) {
  view.clear();
  view.drawBricks(bricks);
  requestAnimationFrame(() => {
    gameLoop(view, bricks);
  });
}

function startGame(view) {
  //reset display
  score = 0;
  view.drawInfo("");
  view.drawScore(0);
  //create all bricks

  const bricks = createBricks();
  gameLoop(view, bricks);
}

//create a new View

const view = new CanvasView("#playField");
view.initStartButton(startGame);
