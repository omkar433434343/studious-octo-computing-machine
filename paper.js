class Paper {
    constructor(x, y, radius, maxSides){
      var options = {
        isStatic : false,
          'restitution': 0.3,
          'friction': 0.5,
          'density': 1.2
      }

      this.body = Bodies.circle(x, y, radius, options, maxSides);
      this.radius = radius;
      this.maxSides = maxSides;

      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 30, this.radius, this.maxSides);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      pop();

    }

    Score(){
      if (this.body.position.x > 1180 && this.body.position.y < 600 ){
         score+1;
      }
      }    
 }
  