import { Vector } from "../types.js";
export class Ball{
    constructor(ballSize,position,speed,image){
        this.ballSize=ballSize;
        this.position=position;
        this.speed={
            x:speed,
            y:-speed
        };
        this.image=new Image();
        this.image.src=image;
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
        return this.image;
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