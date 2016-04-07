(function(){
			var validate = {
				name: function(){
					var node = document.querySelector("#name");
					var str = node.value.trim();
					var len = 0;
					var arr = str.split("");
					var twoReg = new RegExp("[^\\x00-\\xff]","g");
					for (var i = 0; i < arr.length; i++) {
						if(twoReg.test(arr[i])){
							len += 2;
						}else{
							len ++;
						}
					}
					if(len > 16 || len < 4){
						setMessage(node.parentNode,"姓名长度为4-16个字符","red");
						return;
					}
					setMessage(node.parentNode,"名称格式正确","#00cd00")
				},
				pass: function(){
					var node = document.querySelector("#pass");
					var str = node.value;
					var reg = new RegExp("^[0-9a-zA-Z]+$");
					if(str.length < 6 || str.length > 16) {
						setMessage(node.parentNode,"密码为6~16位","red");
						return;
					}
					if(reg.test(str)){
						setMessage(node.parentNode,"密码格式正确","#00cd00");
					}else{
						setMessage(node.parentNode,"密码为英文字母或数字","red");
					}
				},
				repass: function(){
					var node = document.querySelector("#repass");
					if(node.value === document.querySelector("#pass").value){
						setMessage(node.parentNode,"密码输入一致","#00cd00");
					}else{
						setMessage(node.parentNode,"请输入相同密码","red");
					}
				},
				email: function(){
					var node = document.querySelector("#email");
					var str = node.value;
					var reg = new RegExp("^\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}$");
					if(reg.test(str)){
						setMessage(node.parentNode,"邮箱格式正确","#00cd00")
					}else{
						setMessage(node.parentNode,"邮箱格式错误","red");
					}
				},
				mobile: function(){
					var node = document.querySelector("#mobile");
					var str = node.value;
					var reg = new RegExp("^[1]\\d{10}$");
					if(reg.test(str)){
						setMessage(node.parentNode,"手机号码格式正确","#00cd00")
					}else{
						setMessage(node.parentNode,"手机号码格式错误","red");
					}
				}
			}
			function setMessage(obj,str,color){
				obj.querySelector("p").innerHTML = str;
				obj.querySelector("p").style.color = color;
				obj.querySelector("input").style.borderColor = color;
			}
			function setEvent(id){
				var node = document.querySelector("#" + id);
				node.onfocus = function(){
					node.parentNode.querySelector("p").style.visibility = "visible";
				};
				node.onblur = validate[id];
			}
			setEvent("name");
			setEvent("pass");
			setEvent("mobile");
			setEvent("email");
			setEvent("repass");
			document.querySelector("#validate").onclick = function(){
				for(var i = 0; i < document.querySelectorAll("p").length; i++){
					if(document.querySelectorAll("p")[i].style.color !== "rgb(0, 205, 0)"){
						alert("验证失败");
						return;
					}
				}
				alert("验证成功");
			}
		})()