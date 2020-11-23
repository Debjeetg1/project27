class Rope
{
    constructor(bodyA , pointB)
    {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          length: 500.0,
          stiffness: 0.5
      }

      this.rope = Constraint.create(options);
      World.add(world , this.rope)
    }

    display()
    {
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.pointB;

       line(pointA.x , pointA.y , pointB.x , pointB.y);
    }
}