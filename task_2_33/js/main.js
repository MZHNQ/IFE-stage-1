var cube = new Cube("#cube");

document.onclick = function(e){
	switch(e.target.id){
		case "do": cube.receive(document.getElementById('commend').value); break;
		case "go": cube.receive("go"); break;
		case "tl": cube.receive("tun lef"); break;
		case "tr": cube.receive("tun rig"); break;
		case "tb": cube.receive("tun bac"); break;
	}
}