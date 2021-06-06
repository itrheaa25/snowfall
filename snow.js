class SNOW {
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 20;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow.gif")
        World.add(world, this.body);
    }

    display(){
        
        imageMode(RADIUS);
        image(this.image, this.body.position.x,this.body.position.y,20,20);




   }

}