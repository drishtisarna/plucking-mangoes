class Launcher{
	constructor(body,anchor)
	{
		
		var options={
			 bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:10,
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	
    attach(body){
        this.launcher.bodyA = body;
    }

	fly()
	{
		this.launcher.bodyA = null;
		
	}

	display()
	{
        if(this.launcher.bodyA){
			var pointA = this.launcher.bodyA.position
			var pointB = this.pointB
			push();
			strokeWeight(5);
			fill(73, 181, 221);
			stroke(73, 181, 221);
			line(pointA.x,pointA.y,pointB.x,pointB.y);
			pop();
			}
	}
}