const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 800;

let x_init = true;
let y_init = true;

let x_pos = 0;
let y_pos = 0;
let z_pos = 0;

let X_ROWS = 11;
let Y_ROWS = 11;
let Z_ROWS = 11;

let X_SIZE = 20; 
let Y_SIZE = 20; 
let Z_SIZE = 20;

let X_GAP = 5;
let Y_GAP = 5;
let Z_GAP = 5;
//debugger;
function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT, WEBGL);	
};

function draw() { 
	scale(0.5,0.5,0.5)
	background(16, 25, 110);
	//debugger;
	let col = color(100, mouseY,255, 255);
	fill(col)
	
	let dirY = (mouseY / float(height) - 0.5) * 2;
    let dirX = (mouseX / float(width) - 0.5) * 2;
	
	//directionalLight(204, 204, 204, -dirX, -dirY, -1);
	stroke(20)
	line(0, -SCREEN_HEIGHT / 2, 0 , SCREEN_HEIGHT / 2 )
	let s =1.2;

	stroke(20)

	line(0, SCREEN_HEIGHT, SCREEN_WIDTH *2, SCREEN_HEIGHT)
	line(SCREEN_WIDTH, 0, SCREEN_WIDTH, SCREEN_HEIGHT * 2)

	for(let x = 0; x < 20; x++) {
		ellipse(SCREEN_WIDTH + (x * 20), 800 + (sin((x/19) * PI) * 200), 20, 20);
	}

	strokeWeight(5);
	//rotateY(millis() / 21500);
	//rotateZ(millis() / 1500);
	rotateY(mouseY/ 150);
	rotateX(mouseX/ 150);
	//rotateY(34)
	translate(-((X_ROWS * X_SIZE) / 2) + (X_SIZE / 2) - ((X_GAP * X_ROWS) / 2) + (X_GAP / 2), 
			   ((Y_ROWS * Y_SIZE) / 2) - (Y_SIZE / 2) + ((Y_GAP * Y_ROWS) / 2) - (Y_GAP / 2), 
			   ((Z_ROWS * Z_SIZE) / 2) - (Z_SIZE / 2) + ((Z_GAP * Z_ROWS) / 2) - (Z_GAP / 2)
			 )
	let sc = sin(millis() / 400);
	

	//box(50, sc* 500, 50)
	

	for (let x = 0; x < X_ROWS; x++) {
		for (let y = 0; y < Y_ROWS; y++) { 
			for (let z = 0; z < Z_ROWS; z++) {
				let zm = 0;
				let xm = 0;
				
				if (isFrontWall(x, y, z)) {
					// L
					// if (x >= 1 && x < (X_ROWS - 1) / 2) 
					// {
					// 	if (y >= 1 && y < (Y_ROWS - 1) / 2) 
					// 	{
					// 		_z = sq(s * sc * x * y)
					// 	} else 
					// 	if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
					// 	{
					// 		_z = sq(s * sc * x * ((Y_ROWS - 1) - y))
					// 	}
					// 	//_z =0; // sq(s * sc * x * sin(y))
					// } else 
					// // R
					// if (x >= (X_ROWS -1) / 2 && x < (X_ROWS -1)) 
					// {
					// 	if (y >= 1 && y < (Y_ROWS - 1) / 2) 
					// 	{
					// 		_z = sq(s * sc * ((X_ROWS - 1)- x) * y);
					// 	}

					// 	if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
					// 	{ 
					// 		_z = sq(s * sc * ((X_ROWS - 1)- x) * ((Y_ROWS - 1) - y));
					// 	}
					// }
					_z = sq(sc * sin((x / (X_ROWS - 1)) * PI) * sin((y / (Y_ROWS - 1)) * PI)  * 20)
					setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, 0, _z);
					drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, 0, _z)
				} else 
				// BACK WALL
				if (isBackWall(x, y, z)) {
					// L
					if (x >= 1 && x < (X_ROWS - 1) / 2) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							_z = sq(s * sc * x * y);
						} else 
						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{
							_z = sq(s * sc * x * ((Y_ROWS - 1) - y));
						}
					} else 
					// R
					if (x >= (X_ROWS -1) / 2 && x < (X_ROWS -1)) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							_z = sq(s * sc * ((X_ROWS - 1)- x) * y);
						}

						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{ 
							_z = sq(s * sc * ((X_ROWS - 1)- x) * ((Y_ROWS - 1) - y));
						}
					}
					setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, 0, -_z);
					drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, -Z_SIZE, 0, 0, -_z)
				} else 
				 // LEFT WALL
				if (isLeftWall(x, y, z)) 
				{
					// if (y >= 1 && y < (Y_ROWS - 1) / 2) 
					// 	{
					// 		if (z >= 1 && z < (Z_ROWS - 1) / 2) {

					// 		}
					// 		if (z >= (Z_ROWS -1) / 2 && z < (Z_ROWS -1))  {

					// 		}
					// 	}


					// if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
					// {
					// 	if (z >= 1 && z < (Z_ROWS - 1) / 2) {

					// 		}
					// 		if (z >= (Z_ROWS -1) / 2 && z < (Z_ROWS -1))  {
								
					// 		}
					// }

					if (z >= 1 && z < (Z_ROWS - 1) / 2) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							_x = sq(s * sc * z * y)
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, -_x , 0, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, -_x, 0, 0)
						} 
						else 
						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{
							_x = sq(s * sc * z * ((Y_ROWS - 1) - y))
							
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, -_x, 0, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE, Y_SIZE, Z_SIZE, _x, 0, 0)
						}
					} else 
					// R
					if (z >= (Z_ROWS -1) / 2 && z < (Z_ROWS -1)) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							_x = sq(s * sc * ((Z_ROWS - 1) - z) * y)
							
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, -_x, 0, 0);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, _x, 0, 0)
						}

						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{ 
							_x = sq(s * sc * ((Z_ROWS - 1) - z) * ((Y_ROWS - 1) - y))
							
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, -_x, 0, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, -_x, 0, 0)
						}
								
					}
				} else 
				// RIGHT WALL 
				if (isRightWall(x, y, z))
				{
					if (z >= 1 && z < (Z_ROWS - 1) / 2) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							xm = s * sc * z * y
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, -xm, 0, 0)
								
						} else 
						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{
							xm = s * sc * z * ((Y_ROWS - 1) - y)
							xm = (xm * xm);
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE, Y_SIZE, Z_SIZE, xm, 0, 0)
						}
					} else 
					// R
					if (z >= (Z_ROWS -1) / 2 && z < (Z_ROWS -1)) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							xm = s * sc * ((Z_ROWS - 1) - z) * y
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, xm, 0, 0)
						}

						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{ 
							xm = s * sc * ((Z_ROWS - 1) - z) * ((Y_ROWS - 1) - y)
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, -xm, 0, 0)
						}
					}
				} else 
				// TOP WALL
				if (isTopWall(x, y, z)) 
				{
					if (z >= 1 && z < (Z_ROWS - 1) / 2) 
					{
						if (x >= 1 && x < (X_ROWS - 1) / 2) 
						{
							xm = s * sc * z * x
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, -xm, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, Z_SIZE, 0, -xm, 0)
						} else 
						if (x >= (X_ROWS - 1) / 2 && x < (X_ROWS - 1)) 
						{
							xm = s * sc * z * ((X_ROWS - 1) - x)
							xm = (xm * xm);
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, -xm, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE, Y_SIZE, Z_SIZE, 0, -xm, 0)
						}
					} else 
					if (z >= (Z_ROWS -1) / 2 && z < (Z_ROWS -1)) 
					{
						if (x >= 1 && x < (X_ROWS - 1) / 2) 
						{
							xm = s * sc * ((Z_ROWS - 1) - z) * x
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, -xm, 0);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, -xm, 0)
						} else 
						if (x >= (X_ROWS - 1) / 2 && x < (X_ROWS - 1)) 
						{ 
							xm = s * sc * ((Z_ROWS - 1) - z) * ((X_ROWS - 1) - x)
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, -xm, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, 0 , -xm, 0)
						}
					}	
				} else 
				// BOTTOM WALL 
				if (isBottomWall(x, y, z)) {
					if (z >= 1 && z < (Z_ROWS - 1) / 2) 
					{
						if (x >= 1 && x < (X_ROWS - 1) / 2) 
						{
							xm = s * sc * z * x
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, xm, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, Z_SIZE, 0, -xm, 0)
						} else 
						if (x >= (X_ROWS - 1) / 2 && x < (X_ROWS - 1)) 
						{
							xm = s * sc * z * ((X_ROWS - 1) - x)
							xm = (xm * xm);
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, xm, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE, Y_SIZE, Z_SIZE, 0, -xm, 0)
						}
					} else 
					if (z >= (Z_ROWS -1) / 2 && z < (Z_ROWS -1)) 
					{
						if (x >= 1 && x < (X_ROWS - 1) / 2) 
						{
							xm = s * sc * ((Z_ROWS - 1) - z) * x
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, xm, 0);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, -xm, 0)
						} else 
						if (x >= (X_ROWS - 1) / 2 && x < (X_ROWS - 1)) 
						{ 
							xm = s * sc * ((Z_ROWS - 1) - z) * ((X_ROWS - 1) - x)
							xm = xm * xm;
							setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, xm, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, 0 , -xm, 0)
						}
					}	
				// EDGES
				} else {
					setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, 0, 0, 0);
					drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, 0, 0)
				}
			}
		}
	}
}

function isFrontWall(x, y, z) {
	return z == 0 && y != 0 && y != Y_ROWS - 1 && x != 0 && x != X_ROWS - 1;
}

function isBackWall(x, y, z) {
	return z == Z_ROWS - 1 && y != 0 && y != Y_ROWS - 1 && x != 0 && x != X_ROWS - 1 
}

function isTopWall(x, y, z) {
	return y == 0 && z != 0 && z != Z_ROWS - 1 && x!= 0 && x != X_ROWS - 1
}

function isBottomWall(x, y, z) {
	return y == Y_ROWS - 1 && z != 0 && z != Z_ROWS - 1 && x != 0 && x != X_ROWS-1
}

function isLeftWall(x, y, z) {
	return x == 0 && y != 0 && y!= Y_ROWS - 1 && z != 0 && z!= Z_ROWS - 1
}

function isRightWall(x, y, z) {
	return x == X_ROWS - 1 && y != 0 && y!= Y_ROWS - 1 && z != 0 && z!= Z_ROWS - 1
}

function to() {

}

function setPos(x, y, z, X_GAP, Y_GAP, Z_GAP, _x, _y, _z ) {
	x_pos =  (X_SIZE * x) + (X_GAP * x) + (_x / 2);
	y_pos = -(Y_SIZE * y) - (Y_GAP * y) - (_y / 2);
	z_pos = -(Z_SIZE * z) - (Z_GAP * z) + (_z / 2);	
}

function drawBox(x_pos, y_pos, z_pos, X_SIZE, Y_SIZE, Z_SIZE, _x, _y, _z) {
	push();
		translate(x_pos, y_pos, z_pos);
		box(X_SIZE + _x , Y_SIZE - _y, Z_SIZE + _z);
	pop();
}

