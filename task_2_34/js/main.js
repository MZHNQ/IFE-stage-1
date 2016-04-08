var cube = new Cube("#cube");

document.onclick = function(e){
	if(e.target.className === "quickBtn")  cube.receive(e.target.innerHTML);
	if(e.target.id === "do") cube.receive(document.getElementById('commend').value);
}