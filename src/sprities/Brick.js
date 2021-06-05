import { Vector } from "../types.js";
export class Brick {
    constructor(brickWidth,brickHeight,position,brickEnergy,image)
    {
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
        this.brickImage=new Image();
        this.brickImage.src = image;
    }

    //canvas
    get width() {
        return this.brickWidth;
    }
    get height() {
        return this.brickHeight;
    }
    get pos() {
        return this.position;
    }
    get image() {
        return this.brickImage;
    }
    get energy() {
        return this.brickEnergy;
    }
    //
    set energy(energy) {
        this.brickEnergy = energy;
    }
}