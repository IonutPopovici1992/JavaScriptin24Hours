function cleardesc() {
	var d = document.getElementById("description");
	d.innerHTML = "";
}

function hover(e) {
	if (!e) {
		var e = window.event;
		// which link was the mouse over?
		var whichlink = (e.target) ? e.target.id : e.srcElement.id;
		// choose the appropriate description
		if (whichlink == "order") {
			var desc = "Order a product";
		} else if (whichlink == "email") {
			desc = "Send us a message";
		} else if (whichlink == "complain") {
			desc = "Insult us, our products, or our families";
		}
		// display the description in the H2
		var d = document.getElementById("description");
		d.innerHTML = desc;
	}
}

// set up the event handlers
var orderlink = document.getElementById("order");
orderlink.onmouseover = hover;
orderlink.onmouseout = cleardesc;

var emaillink = document.getElementById("email");
emaillink.onmouseover = hover;
emaillink.onmouseout = cleardesc;

var complainlink = document.getElementById("complain");
complainlink.onmouseover = hover;
complainlink.onmouseout = cleardesc;
