class Drop extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height,yspeed);
      this.y = y+10;
      this.velocityY = -5;
    }
    display(){
      stroke("rgb(138,43,226")
      line(x,y,x,y+10)
     }
  };
  class Drop {
    constructor(x,y,width,height) {
      this.body = Bodies.rectangle(x,y);
      this.width = 5;
      this.height = height;
      World.add(world, this.body);
      this.velocityY = -5;
    }
    display(){
      fill("purple");
    }
  };