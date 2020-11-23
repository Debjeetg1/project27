class Bob
{
    constructor(x , y , radius)
    {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction: 0.1,
          density: 0.01
      }

      this.body = Bodies.circle(x , y , radius , options);
      this.radius = radius
      World.add(world , this.body);


    }

    display()
    {
        var pos = this.body.position;
        
        fill("violet");
        circle(pos.x , pos.y ,this.radius );
    }
}