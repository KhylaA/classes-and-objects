class Log{

    constructor(x,y,width,height,angle){
        this.height = height
        this.width = width

        var options = {
            isStatic: true,
            density: 1,
            restitution: 1,
            friction:1
        }
        this.body = Bodies.rectangle(x, y, this.width,this.height, options)
        Matter.Body.setAngle(this.body, angle)
        World.add(world,this.body)


    }

    showLog(){
        var pos = this.body.position
        fill ("brown")
        rect(pos.x,pos.y,this.width,this.height)
    }
}