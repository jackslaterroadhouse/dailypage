

function rectangle() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#4682B4";
	ctx.fillRect(400, 200, 400 , 200);
}
function square() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#4682B4";	
	ctx.fillRect(400, 100, 400 , 400);
}
function circle() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(600, 300, 200, 0, 2 * Math.PI);
	ctx.fillStyle = "#4682B4";
	ctx.fill();
}
function triangle() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(600, 100);
    ctx.lineTo(400, 500);
    ctx.lineTo(800, 500);
    ctx.fillStyle = "#4682B4";
    ctx.fill();
}
function clearShape() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#D1D1D1";	
	ctx.fillRect(0, 0, 1200 , 600);
}