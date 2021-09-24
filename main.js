var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var car_width = 95;
var car_height = 95;
var car_x = 5;
var car_y = 225;
background_image = "parkingLot.jpg";
car_image = "car2.png";


function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	car_imageTag = new Image();
	car_imageTag.onload = uploadcar;
	car_imageTag.src = car_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
	ctx.drawImage(car_imageTag, car_x, car_y, car_height, car_width);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
}

	function up() {
		if(car_y >=0) 
		{
	car_y-=10;
	console.log("When Up arrow is pressed = " + car_x + "-" + car_y);
	uploadBackground();
	uploadcar();
		}
	}
	
	function down() {
		if(car_y <=500) 
		{
		car_y+= 10;
	console.log("When Down arrow is pressed = " + car_x + "|" + car_y);
	uploadBackground();
	uploadcar();
		}
	}
	
	function left() {
		if(car_x >=0) 
		{
		car_x-= 10;
	console.log("When Left arrow is pressed = " + car_x + "-" + car_y);
	uploadBackground();
	uploadcar();
		}
	}
	
	function right() {
		if(car_x <=700) 
		{
		car_x+= 10;
	console.log("When Right arrow is pressed = " + car_x + "|" + car_y);
	uploadBackground();
	uploadcar();
		}
	}