function Cube(selector){
	this.node = document.querySelector(selector);
	this.dir = "t";
	this.deg = 0;
	this.x = 5;
	this.y = 5;
	this.timer = null;
	this.sideLength = 50;
	this.init();
}
//接受指令后运动
Cube.prototype.receive = function(order){
	switch(order.toLowerCase()){
		case "go": this.move(); break;
		case "tun lef": this.turn("l"); break;
		case "tun rig": this.turn("r"); break;
		case "tun bac": this.turn("b"); break;
		default: break;
	}
}
//方块转身
Cube.prototype.turn = function(dir){
	switch(dir){
		case "l": this.deg -= 90; break;
		case "r": this.deg += 90; break;
		case "b": this.deg += 180; break;
		default: break;
	}
	if (this.deg > 0) this.dir = this.deg % 360 === 0 ? "t" : this.deg % 360 === 180 ? "b" : this.deg % 360 === 90 ? "r" : "l";
	if (this.deg <= 0) this.dir = this.deg % 360 === 0 ? "t" : this.deg % 360 === -180 ? "b" : this.deg % 360 === -90 ? "l" : "r";
	this.node.style.transform = "rotate(" + this.deg + "deg)";
}
//方块移动
Cube.prototype.move = function(dir){//若不传参就按照方块方向往前走，若传参就按参数方向走
	dir = dir || this.dir;
	switch(dir){
		case "t": this.y = this.y === 1 ? 1 : this.y - 1; break;
		case "r": this.x = this.x === 10 ? 10 : this.x + 1; break;
		case "b": this.y = this.y === 10 ? 10 : this.y + 1; break;
		case "l": this.x = this.x === 1 ? 1 : this.x - 1; break;
		default: break;
	}
	this.setPos();
}
Cube.prototype.setPos = function(){
	this.node.style.left = (this.x - 1) * this.sideLength + "px";
	this.node.style.top = (this.y - 1) * this.sideLength + "px";
}
Cube.prototype.init = function(){
	this.setPos();
}