function Spaceship(config){
	this.energy = 100;
	this.expend = 5;
	this.restore = 2;
	this.speed = 4;
	this.pos = 0;
	this.flying = false;
	this.node = null;
	this.id = config.id || 0;
	this.init();
}

Spaceship.prototype.create = function(){
	this.node = document.createElement("div");
	this.node.className = "spaceship";
	this.node.innerHTML = "<div><span class='content'>" + this.id + "号-100%</span><span class='energy'></span></div>";
	document.getElementById('circle' + this.id).appendChild(this.node);
	controller.spaceshipGroup.push(this);
}
Spaceship.prototype.move = function(){
	var _this = this;
	this.timer = setInterval(function(){
		if(_this.flying === true){
			_this.energy -= (_this.expend - _this.restore)/5;
			_this.pos += _this.speed;
			_this.node.style.transform = "rotate(" + _this.pos + "deg)";
			if(_this.energy <= 0) {
				_this.energy = 0;
				_this.flying = false;
			}
		}else {
			if(_this.energy >= 100){
				_this.energy = 100;
				return;
			}
			_this.energy += _this.restore/5;
		}
		_this.node.querySelector(".energy").style.width = _this.energy + "%";
		_this.node.querySelector(".content").innerHTML = _this.id + "号-" + parseInt(_this.energy) + "%";
	},200)
}
Spaceship.prototype.listen = function(mediator){
	if (mediator.id !== this.id) return;
	var date = new Date();
	switch(mediator.commond){
		case "fly":
			this.flying = true;
			document.querySelector(".message").innerHTML += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "------" + this.id + "号飞船开始飞行<br>";
			break;
		case "destroy":
			this.node.parentNode.removeChild(this.node);
			controller.remove(this);
			document.querySelector(".message").innerHTML += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "------摧毁" + this.id + "号飞船<br>";
			// delete this;
			break;
		case "stop":
			this.flying = false;
			document.querySelector(".message").innerHTML += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "------" + this.id + "号飞船停止飞行<br>";
			break;
	}
	// if (mediator.commond === "fly") {
	// 	this.flying = true;
	// }
	// if (mediator.commond === "destroy") {
	// 	console.log(this.node.parentNode)
	// 	this.node.parentNode.removeChild(this.node);
	// 	controller.remove(this);
	// 	// delete this;
	// }

}
Spaceship.prototype.init = function(){
	this.create();
	this.move();
}
