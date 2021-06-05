import { Vector } from "../types.js";
export class Ball{
    constructor(speed,ballSize,position,image){
        this.ballImage=new Image();
        this.ballImage.src=image;
        this.ballSize=ballSize;
        this.position=position;
        this.speed={
            x:speed,
            y:-speed
        };
    }
    //getters
    get width(){
        return this.ballSize;
    }
    get height(){
        return this.ballSize;
    }
    get pos(){
        return this.position;
    }
    get image(){
        return this.ballImage;
    }
    //Methods
    changeYDirection(){
        this.speed.y=-this.speed.y;
    }
    changeXDirection(){
        this.speed.x=-this.speed.x;
    }
    moveBall(){
        this.pos.x+=this.speed.x;
        this.pos.y+=this.speed.y;
    }
}