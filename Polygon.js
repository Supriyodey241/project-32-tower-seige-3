class Polygon{
    constructor(x,y,r){
        var options = {
            restitution:0.1,
            isStatic:false,
            density:2.4,
            friction:0.1
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image=loadImage("polygon.png");
        this.body = Bodies.circle(x,y,(this.r-10)/2,options);
        World.add(world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}