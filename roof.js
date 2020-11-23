class Roof
{
    constructor(x, y)
    {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x , y ,1000, 100 , options)
      this.width = 1000;
      this.height = 100;
    }
    display()
    {
      
     var pos = this.body.position;

     rectMode(CENTER);
     rect(pos.x , pos.y , this.width , this.height);


    }
}