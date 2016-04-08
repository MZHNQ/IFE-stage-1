function Cube(selector){
	this.node = document.querySelector(selector);
	this.dir = "t";
	this.deg = 0;
	this.x = 5;
	this.y = 5;
	this.orderQuere = [];
	this.timer = null;
	this.sideLength = 50;
	this.init();
}
//接受指令后运动
Cube.prototype.startMove = function(order){
	switch(order.toLowerCase()){
		case "go": this.move(); break;
		case "tun lef": this.turn("l"); break;
		case "tun rig": this.turn("r"); break;
		case "tun bac": this.turn("b"); break;
		case "tra lef": this.move("l"); break;
		case "tra rig": this.move("r"); break;
		case "tra top": this.move("t"); break;
		case "tra bot": this.move("b"); break;
		case "mov lef": this.setDir("l"); this.move(); break;
		case "mov rig": this.setDir("r"); this.move(); break;
		case "mov top": this.setDir("t"); this.move(); break;
		case "mov bot": this.setDir("b"); this.move(); break;
		default: break;
	}
}
//处理获取到的指令，添加到动画队列当中
Cube.prototype.receive = function(str){
	var arr = str.split("\n");
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === "") continue;
		var list = arr[i].split(" ");
		if(list[0] === "go"){
			if(list.length ===1) {
				this.orderQuere.push("go");
			}else{
				for (var j = 0; j < Number(list[1]); j++) {
					this.orderQuere.push("go");
				}
			}
		}else{
			if(list.length === 2){
				this.orderQuere.push(list[0] + " " + list[1]);
			}else{
				order = list[0] + " " + list[1];
				for (var j = 0; j < Number(list[2]); j++) {
					this.orderQuere.push(order);
				}
			}
		}
	}
	this.animate();
}
//动画
Cube.prototype.animate = function(){
	var _this = this;
	if(this.orderQuere.length !== 0){
		var order = this.orderQuere[0];
		this.orderQuere.shift();
		setTimeout(function(){
			_this.startMove(order);
			_this.animate();
		},400)
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
Cube.prototype.setDir = function(dir){
	if (this.dir === dir) return;
	var b = {"t":0,"r":1,"b":2,"l":3}
	switch(b[this.dir] - b[dir]){
		case 1: case -3: this.deg -= 90; break;
		case -1: case 3: this.deg += 90; break;
		case 2: case -2: this.deg += 180; break;
		default: break;
	}
	this.dir = dir;
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