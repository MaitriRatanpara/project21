
class Ground
{
   constructor(x,y,width,height)
   {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    

   }
   display()
   {
    this.body = Bodies.rectangle()
    rectMode(CENTER)
    rect(this.x,this.y,this.width,this.height)
   }
}