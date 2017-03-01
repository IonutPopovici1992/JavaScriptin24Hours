// define the functions
function PrintCard() {
	line1 = "<b>Name: </b>" + this.name + "<br>\n";
	line2 = "<b>Address: </b>" + this.address + "<br>\n";
	line3 = "<b>Work Phone: </b>" + this.workphone + "<br>\n";
	line4 = "<b>Home Phone: </b>" + this.homephone + "<br>\n";
	line5 = "<b>E-mail: </b>" + this.email + "<hr>\n";
	document.write(line1, line2, line3, line4, line5);
}

function Card(name, address, work, home, email) {
	this.name = name;
	this.address = address;
	this.workphone = work;
	this.homephone = home;
	this.email = email;
	this.PrintCard = PrintCard;
}

// create the objects
var sue = new Card("Sue Suthers", "123 Elm Street", "555-1234", "555-9876", "suesuthers@gmail.com");
var phred = new Card("Phred Madson", "233 Oak Lane", "555-2222", "555-4444", "phredmadson@gmail.com");
var henry = new Card("Henry Tillman", "233 Walnut Circle", "555-1299", "555-1344", "henrytillman@gmail.com");

// and print them
sue.PrintCard();
phred.PrintCard();
henry.PrintCard();
