// new Spaceship({"id":2});
// new Spaceship({"id":1});
// new Spaceship({"id":3});

// controller.publish({"id":2,"commond":"fly"});
// setTimeout(function(){
// 	controller.publish({"id":3,"commond":"destroy"});
// },1000);
(function(){
	document.onclick = function(e){
		switch(e.target.className){
			case "create":
				e.target.style.display = "none";
				e.target.parentNode.querySelector(".destroy").style.display = "inline";
				e.target.parentNode.querySelector(".fly").disabled = false;
				e.target.parentNode.querySelector(".stop").disabled = false;
				var mediator = new Mediator(Number(e.target.parentNode.className.charAt(4)),"create");
				controller.publish(mediator)
				break;
			case "destroy":
				e.target.style.display = "none";
				e.target.parentNode.querySelector(".create").style.display = "inline";
				e.target.parentNode.querySelector(".fly").disabled = true;
				e.target.parentNode.querySelector(".fly").style.display = "inline";
				e.target.parentNode.querySelector(".stop").disabled = true;
				e.target.parentNode.querySelector(".stop").style.display = "none";
				var mediator = new Mediator(Number(e.target.parentNode.className.charAt(4)),"destroy");
				controller.publish(mediator);
				break;
			case "fly":
				e.target.style.display = "none";
				e.target.parentNode.querySelector(".stop").style.display = "inline";
				var mediator = new Mediator(Number(e.target.parentNode.className.charAt(4)),"fly");
				controller.publish(mediator);
				break;
			case "stop":
				e.target.style.display = "none";
				e.target.parentNode.querySelector(".fly").style.display = "inline";
				var mediator = new Mediator(Number(e.target.parentNode.className.charAt(4)),"stop");
				controller.publish(mediator);
				break;
			default:
				break;
		}
	}
})()