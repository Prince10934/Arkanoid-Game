//types
import { Brick } from "../sprities/Brick.js";
import { Paddle } from "../sprities/Paddle.js";
import { Ball } from "../sprities/Ball.js";
import { BRICK_IMAGES } from "../setup.js";

export class CanvasView {
    constructor(canvasName) {
        this.canvas = document.querySelector(canvasName);
        this.context = this.canvas.getContext("2d");
        this.scoreDisplay = document.querySelector("#score");
        this.start = document.querySelector("#start");
        this.info = document.querySelector("#info");
    }
    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    initStartButton(startFunction){
        this.start.addEventListener("click", () => {
            startFunction(this);
        });
    }
    drawScore(score){
        if (this.scoreDisplay != null) {
            this.scoreDisplay.innerHTML = score.toString();
        }
    }
    drawInfo(text) {
        if (this.info != null) {
            this.info.innerHTML = text;
        }
    }
    drawSprite(brick) {
        if (brick===undefined) {
            return;
        }
        this.context.drawImage(
            brick.image,
            brick.pos.x,
            brick.pos.y,
            brick.width,
            brick.height
        );
    }
    drawBricks(brick) {
        brick.forEach(  (brick) => { 
            this.drawSprite(brick)
        });
    }
}
