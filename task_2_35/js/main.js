var cube = new Cube("#cube");

document.onclick = function(e){
	if(e.target.className === "quickBtn")  cube.startMove(e.target.innerHTML);
	if(e.target.id === "do") {
		if(commendCtrl.validate()) cube.receive(document.getElementById('commend').value);
	}
}

document.querySelector("#commend").onfocus = function(){
	window.onkeydown = function(e){
		document.querySelector("#commend").style.height = document.querySelector(".commend-area").scrollHeight + "px";
	}
	window.onkeyup = function(e){
		commendCtrl.setLine();
		document.querySelector("#commend").style.height = document.querySelector(".commend-area").scrollHeight + "px";
	}
}

var commendCtrl = {
	getStr: function(){
		return document.querySelector("#commend").value;
	},
	getLine: function(){
		var str = this.getStr();
		var line = 0;
		for (var i = 0; i < str.length; i++) {
			if(str.charAt(i) === "\n") line++;
		}
		return line;
	},
	setLine: function(){
		document.querySelector("#line").innerHTML = "";
		var line = this.getLine();
		for (var i = 0; i < line + 1; i++) {
			document.querySelector("#line").innerHTML += "<div>" + (i + 1) + "</div>";
		}
	},
	validate: function(){
		var str = this.getStr();
		if(str === "") return false;
		var arr = str.split("\n");
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] === "") continue;
			if(!commendCtrl.strMatch(arr[i])){
				document.querySelector("#line").children[i].style.backgroundColor = "red";
				return false;
			}
		}
		return true;
	},
	strMatch: function(str){
		var arr = str.toLowerCase().split(" ");
		if(arr[0] === "tra" || arr[0] === "mov"){
			if(arr[1] === "lef" || arr[1] === "rig" || arr[1] === "top" || arr[1] === "bot"){
				if(arr[2]){
					if(Number(arr[2]).toString() !== "NaN") return true;
				}else{
					return true;
				}
			}
		}
		if(arr[1] === "lef" || arr[1] === "rig" || arr[1] === "bac") {
			if(arr[0] === "tun" && !arr[2]) return true;
		}
		if(arr[0] === "go" && arr.length < 3){
			if(!arr[1]) return true;
			if(arr[1] && Number(arr[1]).toString() !== "NaN") return true;
		}
		return false;
	}
}