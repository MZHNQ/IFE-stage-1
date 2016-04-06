function Controller(){
	this.spaceshipGroup = [];
}
Controller.prototype.publish = function(mediator){

	var _this = this;
	var date = new Date()
	setTimeout(function(){
		if(Math.random()<0.3){
			document.querySelector(".message").innerHTML += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "------丢包<br>";
			return;
		}
		if(mediator.commond === "create"){
			new Spaceship({"id":mediator.id})
			document.querySelector(".message").innerHTML += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "------创建" + mediator.id + "号飞船<br>";
		}else{
			_this.spaceshipGroup.forEach(function(item){
				item.listen(mediator);
			})
		}

	},1000);
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