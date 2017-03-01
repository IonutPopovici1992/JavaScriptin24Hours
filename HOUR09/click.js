function mousestatus(e) {
	if (!e) {
		e = window.event;
	}
	var btn = e.button;
	var whichone = (btn < 2) ? "Left" : "Right";
	var message = e.type + " : " + whichone + "\n";
	document.form1.info.value += message;
}

var obj = document.getElementById("testlink");
obj.onmousedown = mousestatus;
obj.onmouseup = mousestatus;
obj.onclick = mousestatus;
obj.ondblclick = mousestatus;
