// new Spaceship({"id":2});
// new Spaceship({"id":1});
// new Spaceship({"id":3});

// controller.publish({"id":2,"commond":"fly"});
// setTimeout(function(){
// 	controller.publish({"id":3,"commond":"destroy"});
// },1000);
(function(){
	document.onclick = function(e){
		var index = parseInt(e.target.parentNode.className.charAt(4)).toString(2);
		index = index === "1" ? "0001" : index === "10" ? "0010" : index === "11" ? "0011" : "0100";
		var bus = null;
		switch(e.target.className){
			case "create":
				e.target.style.display = "none";
				e.target.parentNode.querySelector(".destroy").style.display = "inline";
				e.target.parentNode.querySelector(".fly").disabled = false;
				e.target.parentNode.querySelector(".stop").disabled = false;
				bus = index + "0001";
				controller.publish(bus,e.target.parentNode.querySelector(".expend").value,e.target.parentNode.querySelector(".restore").value)
				// var mediator = new Mediator(Number(e.target.parentNode.className.charAt(4)),"create");
				// controller.publish(mediator,e.target.parentNode.querySelector(".expend").value,e.target.parentNode.querySelector(".restore").value);
				break;
			case "destroy":
				e.target.style.display = "none";
				e.target.parentNode.querySelector(".create").style.display = "inline";
				e.target.parentNode.querySelector(".fly").disabled = true;
				e.target.parentNode.querySelector(".fly").style.display = "inline";
				e.target.parentNode.querySelector(".stop").disabled = true;
				e.target.parentNode.querySelector(".stop").style.display = "none";
				bus = index + "0010";
				controller.publish(bus);
				// var mediator = new Mediator(Number(e.target.parentNode.className.charAt(4)),"destroy");
				// controller.publish(mediator);
				break;
			case "fly":
				e.target.style.display = "none";
				e.target.parentNode.querySelector(".stop").style.display = "inline";
				bus = index + "0011";
				controller.publish(bus);
				// var mediator = new Mediator(Number(e.target.parentNode.className.charAt(4)),"fly");
				// controller.publish(mediator);
				break;
			case "stop":
				e.target.style.display = "none";
				e.target.parentNode.querySelector(".fly").style.display = "inline";
				bus = index + "0100";
				controller.publish(bus);
				// var mediator = new Mediator(Number(e.target.parentNode.className.charAt(4)),"stop");
				// controller.publish(mediator);
				break;
			default:
				break;
		}
	}
})()