function Emitter(bus){
	this.bus = bus;
}
Emitter.prototype.sendMessage = function(){
	var date = new Date();
	var _this = this;
	setTimeout(function(){
		if(Math.random()<0.1){
			document.querySelector(".message").innerHTML += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "------丢包<br>";
			_this.sendMessage();
		}else{
			controller.spaceshipGroup.forEach(function(item){
					item.listen(_this.bus);
			})
		}
	},300)
}
Emitter.prototype.createShip = function(expend,speed,restore){
	var date = new Date();
	var _this = this;
	var id = parseInt(this.bus.slice(0,4),2);
	setTimeout(function(){
		if(Math.random()<0.3){
			document.querySelector(".message").innerHTML += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "------丢包<br>";
			_this.createShip();
		}else{
			new Spaceship({"id":id,"expend":expend,"speed":speed,"restore":restore});
			document.querySelector(".message").innerHTML += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "------创建" + id + "号飞船<br>";
		}
	},300);
}