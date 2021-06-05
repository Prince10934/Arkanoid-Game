import { Vector } from "../types.js";
export class Paddle{
    constructor(speed,paddleWidth,paddleHeight,position,image){
        this.paddleImage=new Image();
        this.paddleImage.src=image;
        this.moveLeft=false;
        this.moveRight=false;
        this.speed=speed;
        this.paddleHeight=paddleHeight;
        this.paddleWidth=paddleWidth;
        this.position=position;
        //event listeners
        document.addEventListener('keydown',this.handleKeyDown.bind(this),false);
        document.addEventListener('keyup',this.handleKeyUp.bind(this),false);
    }
    
    //getters
    get width(){
        return this.paddleWidth;
    }
    get height(){
        return this.paddleHeight;
    }
    
    get pos(){
        return this.position;
    }
    get image(){
        return this.paddleImage;
    }
    get isMovingLeft(){
        return this.moveLeft;
    }
    get isMovingRight(){
        return this.moveRight;
    }
    movePaddle(){
        if(this.moveLeft){
            this.pos.x-=this.speed;
        }
        if(this.moveRight){
            this.pos.x+=this.speed;
        }
    }
    handleKeyUp(e){
        if(e.code==="ArrowLeft"||e.key==="ArrowLeft"){
            this.moveLeft=false;
        }
        if(e.code==="ArrowRight"||e.key==="ArrowRight"){
            this.moveRight=false;
        }
    }
    handleKeyDown(e)
    {
        if(e.code==="ArrowLeft"||e.key==="ArrowLeft"){
            this.moveLeft=true;
        }
        if(e.code==="ArrowRight"||e.key==="ArrowRight"){
            this.moveRight=true;
        }
    }

}