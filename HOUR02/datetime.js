var now = new Date();
var localtime = now.toString();
var utctime = now.toGMTString();

document.write("<b>Local time:</b> " + localtime + "<br>");
document.write("<b>UTC time:</b> " + utctime);

var hours = now.getHours();
var mins = now.getMinutes();
var secs = now.getSeconds();

document.write("<h1>");
document.write(hours + ":" + mins + ":" + secs);
document.write("</h1>");
