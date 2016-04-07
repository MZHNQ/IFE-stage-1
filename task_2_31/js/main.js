(function(){
	function $(str){
		return document.querySelector(str);
	}
	function setEvent(obj,event,func){
		obj["on" + event] = function(){
			func(obj);
		}
	}
	function setSchool(){
		$("#school").innerHTML = "";
		school[$("#area").value].forEach(function(data){
			$("#school").innerHTML += "<option>" + data + "</option>";
		})
	}
	function setCity(){
		for(var i in school){
			$("#area").innerHTML += "<option>" + i + "</option>";
		}
	}
	function init(){
		setCity();
		setSchool();
	}
	setEvent($("#area"),"change",setSchool);
	setEvent($("#in-school"),"click",function(item){
		if(item.checked === true){
			$("#school-wrap").style.display = "block";
			$("#emplorer-wrap").style.display = "none";
		}
	})
	setEvent($("#out-school"),"click",function(item){
		if(item.checked === true){
			$("#school-wrap").style.display = "none";
			$("#emplorer-wrap").style.display = "block";
		}
	})
	init();
})()