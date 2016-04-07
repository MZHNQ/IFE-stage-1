new Form({
	"parent": document.querySelector("form")
});
var pass = new Form({
	"parent": document.querySelector("form"),
	"label": "密码",
	"type": "password",
	"validator": {"max":20,"min":6,"reg":"^[0-9a-zA-Z]+$"},
	"rules": "必填，6-20个汉字、英文字母或数字",
	"lengthFail": "密码为6-20个字符",
	"charFail": "请输入汉字、英文字母或数字"		
});
new Form({
	"parent": document.querySelector("form"),
	"label": "确认密码",
	"type": "password",
	"validator": {"max":20,"min":6,"str":"pass.input.value"},
	"rules": "必填，6-20个汉字、英文字母或数字",
	"lengthFail": "密码为6-20个字符",
	"charFail": "密码输入不一致",
	"success": "密码输入一致"
});
new Form({
	"parent": document.querySelector("form"),
	"label": "邮箱",
	"validator": {"max":20,"min":6,"reg":"^\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}$"},
	"rules": "必填",
	"charFail": "格式不正确"		
});
new Form({
	"parent": document.querySelector("form"),
	"label": "手机",
	"validator": {"max":11,"min":11,"reg":"^[1][356789][0-9]{9}$"},
	"rules": "必填，请输入11位手机号",
	"lengthFail": "格式不正确",
	"charFail": "格式不正确"		
})
document.querySelector("#submit").onclick = function(){
	for(var i = 0; i < document.querySelectorAll(".in").length; i++){
		console.log(document.querySelectorAll(".in")[i].style.borderColor)
		if(document.querySelectorAll(".in")[i].style.borderColor !== "green"){
			alert("验证失败");
			return;
		}
	}
	alert("验证成功");
}

