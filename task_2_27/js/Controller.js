function Controller(){
	this.spaceshipGroup = [];
}
Controller.prototype.publish = function(bus){
	// console.log(bus.slice(4,8))
	var emitter = new Emitter(bus);
	if(bus.slice(4,8) === "0001"){
		var restore = Number(arguments[2]);
		var expend = 0;
		var speed = 0;
		switch(arguments[1]){
			case "slow":
				expend = 5;
				speed = 3;
				break;
			case "normal":
				expend = 7;
				speed = 5;
				break;
			case "slow":
				expend = 9;
				speed = 8;
				break;
			default:
				break;
		}
		emitter.createShip(expend,speed,restore);
	}else{
		emitter.sendMessage();
	}
}
Controller.prototype.remove = function(spaceship){
	for (var i = 0; i < this.spaceshipGroup.length; i++) {
		if(this.spaceshipGroup[i].id === spaceship.id){
			this.spaceshipGroup.splice(i,1);
			i--;
		}
	}
}
var controller = new Controller();