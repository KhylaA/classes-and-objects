class Bird{

    constructor(x,y){
        this.height = 50
        this.width = 50

        var options = {
            isStatic: true,
            density: 1,
            restitution: 1,
            friction:1
        }
        this.body = Bodies.rectangle(x, y, this.width,this.height, options)
        World.add(world,this.body)


    }

    showBird(){
        var pos = this.body.position
        pos.x = mouseX
        pos.y = mouseY
        fill ("yellow")
        rect(pos.x,pos.y,this.width,this.height)
    }
}

