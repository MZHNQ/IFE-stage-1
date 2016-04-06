function Controller(){
	this.spaceshipGroup = [];
}
Controller.prototype.publish = function(bus){
	// console.log(bus.slice(4,8))
	var emitter = new Emitter(bus);
	var id = parseInt(bus.slice(0,4),2);
	var line = document.querySelector(".num" + id);
	// if(bus.slice(4,8) === "0010"){
	// 	line.innerHTML = "<td>" + id + "号</td><td>未创建</td><td></td><td></td><td></td>"
	// }
	if(bus.slice(4,8) === "0001"){
		line.children[1].innerHTML = "停止";
		line.children[4].innerHTML = "100%";
		var restore = Number(arguments[2]);
		var expend = 0;
		var speed = 0;
		switch(arguments[1]){
			case "slow":
				expend = 5;
				speed = 3;
				line.children[2].innerHTML = "前进号";
				break;
			case "normal":
				expend = 7;
				speed = 5;
				line.children[2].innerHTML = "奔腾号";
				break;
			case "fast":
				expend = 9;
				speed = 8;
				line.children[2].innerHTML = "超越号";
				break;
			default:
				break;
		}
		switch(restore){
			case 2:
				line.children[3].innerHTML = "劲量型";
				break;
			case 3:
				line.children[3].innerHTML = "光能型";
				break;
			case 4:
				line.children[3].innerHTML = "永久型";
				break;
			default:
				break;
		}
		emitter.createShip(expend,speed,restore);
	}else{
		emitter.sendMessage();
	}
}
Controller.prototype.deal = function(mes){
	var id = parseInt(mes.slice(0,4),2);
	var flying = mes.slice(4,8) === "0001" ? "飞行" : "静止";
	var energy = parseInt(mes.slice(9,16),2) + "%";
	var line = document.querySelector(".num" + id);
	line.children[1].innerHTML = flying;
	line.children[4].innerHTML = energy;
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