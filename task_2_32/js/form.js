function Form(config){
	this.config = config || {};
	this.parent = config.parent || document.querySelector("html");
	this.label = config.label || "名称";
	this.type = config.type || "text";
	this.validator = config.validator || {"max":16,"min":4,"reg":"^[0-9a-zA-Z]+$"};
	this.rules = config.rules || "必填，4-16个汉字、英文字母或数字";
	this.success = config.success || "格式正确";
	this.lengthFail = config.lengthFail || "名称为4-16个字符";
	this.charFail = config.charFail || "请输入汉字、英文字母或数字";
	this.input = null;
	this.commend = null;
	this.init();
}
Form.prototype.createElement = function(){
	var node = document.createElement("div");
	node.className = "item";
	node.innerHTML = "<span class='name'>" + this.label + "</span><input class='in' type=" + this.type + "><span class='commend'>" + this.rules + "</span>"
	this.input = node.querySelector("input");
	this.commend = node.querySelector(".commend");
	this.commend.style.visibility = "hidden";
	this.input.style.border = "1px solid #ccc";
	// this.parent.appendChild(node);
	this.parent.insertBefore(node,this.parent.querySelector("#submit"))
}
Form.prototype.setMessage = function(msg,color){
	this.input.style.border = "1px solid " + color;
	this.commend.style.color = color;
	this.commend.innerHTML = msg;
}
Form.prototype.validate = function(obj){
	if(!obj.validator.reg){
		var str = eval(obj.validator.str);
		var reg = new RegExp("^" + str + "$");
	}else{
		var reg = new RegExp(obj.validator.reg);
	}
	if(obj.validator.min || obj.validator.max){
		if(obj.input.value.trim().length < obj.validator.min){
			obj.setMessage(this.lengthFail,"red");
			return;
		}
		if(obj.input.value.trim().length > obj.validator.max){
			obj.setMessage(this.lengthFail,"red");
			return;
		}
	}
	if(reg.test(obj.input.value.trim())){
		obj.setMessage(this.success,"green");
	}else{
		obj.setMessage(this.charFail,"red");
	}
}
Form.prototype.init = function(){
	var _this = this;
	this.createElement();
	this.input.onfocus = function(){
		_this.commend.style.visibility = "visible";
	}
	this.input.onblur = function(){
		_this.validate(_this);
	}
}