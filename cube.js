const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 800;
let x_init = true;
let y_init = true;
function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT, WEBGL);	

};
var i = 0;

	
let x_pos = 0;
let y_pos = 0;
let z_pos = 0;

function draw() { 
	i++;
	background(16, 25, 110);
	//fill(200, 100, 50)
	scale(0.7,0.7,0.7)
	let col = color(100, mouseY,255, mouseX);
	fill(col)
	let dirY = (mouseY / float(height) - 0.5) * 2;
    let dirX = (mouseX / float(width) - 0.5) * 2;
	//blendMode(MULTIPLY);
	directionalLight(204, 204, 204, -dirX, -dirY, -1);
	let X_SIZE = 20; 
	let Y_SIZE = 20; 
	let Z_SIZE = 20; 

	let X_ROWS = 12;
	let Y_ROWS = 9;
	let Z_ROWS = 9;

	let X_GAP = 4;
	let Y_GAP = 5;
	let Z_GAP = 7;

	let s =2;

    //stroke(25, 25, 25, 20);
	
	line(0, -SCREEN_HEIGHT / 2, 0 , SCREEN_HEIGHT / 2 )
	//stroke(25);
	strokeWeight(5);
	//rotateY(millis() / 21500);
	//rotateZ(millis() / 1500);
	rotateY(mouseY/ 180);
	rotateZ(mouseX/ 180);

	//rotateY(34)
	translate(-((X_ROWS * X_SIZE) / 2) + (X_SIZE / 2) - ((X_GAP * X_ROWS) / 2) + (X_GAP / 2), 
			   ((Y_ROWS * Y_SIZE) / 2) - (Y_SIZE / 2) + ((Y_GAP * Y_ROWS) / 2) - (Y_GAP / 2), 
			   ((Z_ROWS * Z_SIZE) / 2) - (Z_SIZE / 2) + ((Z_GAP * Z_ROWS) / 2) - (Z_GAP / 2)
			 )
	let sc = sin(millis() / 400);

	for (let x = 0; x < X_ROWS; x++) {
		for (let y = 0; y < Y_ROWS; y++) { 
			for (let z = 0; z < Z_ROWS; z++) {
				
				let zm = 0;
				let xm = 0;
				// CHECKS FOR EDGES
				// FRONT WALL
				if (z == 0 && y != 0 && y != Y_ROWS - 1 && x != 0 && x != X_ROWS - 1) {
					// L
					if (x >= 1 && x < (X_ROWS - 1) / 2) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							xm = s * sc * x * y
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, 0, xm);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, 0, xm)
								
						} else 
						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{
							xm = s * sc * x * ((Y_ROWS - 1) - y)
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, 0, xm);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, 0, xm)
						}
					} else 
					// R
					if (x >= (X_ROWS -1) / 2 && x < (X_ROWS -1)) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							xm = s * sc * ((X_ROWS - 1)- x) * y
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, 0, xm);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, 0, xm)
						}

						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{ 
							xm = s * sc * ((X_ROWS - 1)- x) * ((Y_ROWS - 1) - y)
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, 0, xm);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, 0, xm)
						}
								
					}
					
				} else 
				// BACK WALL
				if (z == Z_ROWS - 1 && y != 0 && y != Y_ROWS - 1 && x != 0 && x != X_ROWS - 1 ) {
					// L
					if (x >= 1 && x < (X_ROWS - 1) / 2) 
					{
							if (y >= 1 && y < (Y_ROWS - 1) / 2) 
							{
								xm = s * sc * x * y
								xm = -(xm * xm);
								setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, 0, xm);
								drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, -Z_SIZE, 0, 0, xm)
								
							} else 
							if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
							{
								xm = s * sc * x * ((Y_ROWS - 1) - y)
								xm = -(xm * xm);
								setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, 0, xm);
								drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, -Z_SIZE, 0, 0, xm)
							}
							
					} else 
					// R
					if (x >= (X_ROWS -1) / 2 && x < (X_ROWS -1)) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							xm = s * sc * ((X_ROWS - 1)- x) * y
							xm = -(xm * xm);
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, 0, xm);
							drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, -Z_SIZE, 0, 0, xm)
						}

						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{ 
							xm = s * sc * ((X_ROWS - 1)- x) * ((Y_ROWS - 1) - y)
							xm = -(xm * xm);
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, 0, xm);
							drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, -Z_SIZE, 0, 0, xm)
						}
					}
					//drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, xm)
				} else 
				 // LEFT WALL
				if (x == 0 && y != 0 && y!= Y_ROWS - 1 && z != 0 && z!= Z_ROWS - 1) 
				{
					if (z >= 1 && z < (Z_ROWS - 1) / 2) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							xm = s * sc * z * y
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, -xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, -xm, 0, 0)
								
						} else 
						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{
							xm = s * sc * z * ((Y_ROWS - 1) - y)
							xm = (xm * xm);
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, -xm, 0, 0);
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
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, -xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, xm, 0, 0)
						}

						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{ 
							xm = s * sc * ((Z_ROWS - 1) - z) * ((Y_ROWS - 1) - y)
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, -xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, -xm, 0, 0)
						}
								
					}
				} else 
				// RIGHT WALL 
				if (x == X_ROWS - 1 && y != 0 && y!= Y_ROWS - 1 && z != 0 && z!= Z_ROWS - 1)
				{
					if (z >= 1 && z < (Z_ROWS - 1) / 2) 
					{
						if (y >= 1 && y < (Y_ROWS - 1) / 2) 
						{
							xm = s * sc * z * y
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, -xm, 0, 0)
								
						} else 
						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{
							xm = s * sc * z * ((Y_ROWS - 1) - y)
							xm = (xm * xm);
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, xm, 0, 0);
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
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, xm, 0, 0)
						}

						if (y >= (Y_ROWS - 1) / 2 && y < (Y_ROWS - 1)) 
						{ 
							xm = s * sc * ((Z_ROWS - 1) - z) * ((Y_ROWS - 1) - y)
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, xm, 0, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, -xm, 0, 0)
						}
					}
				} else 
				// TOP WALL
				if (y == 0 && z != 0 && z != Z_ROWS - 1 && x!= 0 && x != X_ROWS - 1) 
				{
					if (z >= 1 && z < (Z_ROWS - 1) / 2) 
					{
						if (x >= 1 && x < (X_ROWS - 1) / 2) 
						{
							xm = s * sc * z * x
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, -xm, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, Z_SIZE, 0, -xm, 0)
						} else 
						if (x >= (X_ROWS - 1) / 2 && x < (X_ROWS - 1)) 
						{
							xm = s * sc * z * ((X_ROWS - 1) - x)
							xm = (xm * xm);
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, -xm, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE, Y_SIZE, Z_SIZE, 0, -xm, 0)
						}
					} else 
					if (z >= (Z_ROWS -1) / 2 && z < (Z_ROWS -1)) 
					{
						if (x >= 1 && x < (X_ROWS - 1) / 2) 
						{
							xm = s * sc * ((Z_ROWS - 1) - z) * x
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, -xm, 0);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, -xm, 0)
						} else 
						if (x >= (X_ROWS - 1) / 2 && x < (X_ROWS - 1)) 
						{ 
							xm = s * sc * ((Z_ROWS - 1) - z) * ((X_ROWS - 1) - x)
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, -xm, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, 0 , -xm, 0)
						}
					}	
				} else 
				// BOTTOM WALL 
				if (y == Y_ROWS - 1 && z != 0 && z != Z_ROWS - 1 && x != 0 && x != X_ROWS-1) {
					if (z >= 1 && z < (Z_ROWS - 1) / 2) 
					{
						if (x >= 1 && x < (X_ROWS - 1) / 2) 
						{
							xm = s * sc * z * x
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, xm, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE , Y_SIZE, Z_SIZE, 0, -xm, 0)
						} else 
						if (x >= (X_ROWS - 1) / 2 && x < (X_ROWS - 1)) 
						{
							xm = s * sc * z * ((X_ROWS - 1) - x)
							xm = (xm * xm);
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, xm, 0);
							drawBox(x_pos, y_pos, z_pos, X_SIZE, Y_SIZE, Z_SIZE, 0, -xm, 0)
						}
					} else 
					if (z >= (Z_ROWS -1) / 2 && z < (Z_ROWS -1)) 
					{
						if (x >= 1 && x < (X_ROWS - 1) / 2) 
						{
							xm = s * sc * ((Z_ROWS - 1) - z) * x
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, xm, 0);
							drawBox(x_pos, y_pos, z_pos,X_SIZE , Y_SIZE, Z_SIZE, 0, -xm, 0)
						} else 
						if (x >= (X_ROWS - 1) / 2 && x < (X_ROWS - 1)) 
						{ 
							xm = s * sc * ((Z_ROWS - 1) - z) * ((X_ROWS - 1) - x)
							xm = xm * xm;
							setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, 0, xm, 0);
							drawBox(x_pos, y_pos, z_pos, -X_SIZE , Y_SIZE, Z_SIZE, 0 , -xm, 0)
						}
					}	
				// EDGES
				} else {
					//setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, xm);
				}


//console.log(round(Z_SIZE + xm))
				
			}
		}
	}


function setPos(x, y, z, X_SIZE, Y_SIZE, Z_SIZE, X_GAP, Y_GAP, Z_GAP, _x, _y, _z ) {
	x_pos =  (X_SIZE * x) + (X_GAP * x) + (_x / 2);
	y_pos = -(Y_SIZE * y) - (Y_GAP * y) - (_y / 2);
	z_pos = -(Z_SIZE * z) - (Z_GAP * z) + (_z / 2);	
}

function drawBox(x_pos, y_pos, z_pos, X_SIZE, Y_SIZE, Z_SIZE, _x, _y, _z) {
	push();
		translate(x_pos, y_pos, z_pos)
		//box(X_SIZE + zm , Y_SIZE, Z_SIZE);
		box(X_SIZE + _x , Y_SIZE - _y, Z_SIZE + _z);
	pop();
}


















	// for(let x = 0; x < X_ROWS; x++) {
	// 	for(let y = 0; y < Y_ROWS; y++) {
	// 		for(let z = 0; z < Z_ROWS; z++) {
	// 			if(x_init == false) {
	// 				z_translate = (z == 0) ? -(Z_SIZE * (Z_ROWS - 1) ) : Z_SIZE;	
	// 			} 
			
	// 		x_translate = 0;
	// 		if(y_init == false) {
	// 			if(z == 0) {
	// 				y_translate = Y_SIZE;
	// 				if(y == 0) {
	// 					y_translate = -(X_SIZE * (Y_ROWS - 1) );	
	// 					x_translate = X_SIZE;
	// 				}
	// 			} 

	// 			if(z > 0 && z < Z_ROWS) {
	// 				y_translate = 0;
	// 			}
	// 		}

	// 		if(x == 0 ) {
	// 			// var x_scale = sin(i/100);
	// 			// scale(-(x_scale * x_scale), 1, 1)	
	// 			scale(1, 4, 1)
	// 			fill(200, 100, 50)
	// 			console.log('x: ',x)
	// 		} 
	// 		if ( x == 2) {
	// 			scale(1, 0.5, 1)
	// 			translate(0, Y_SIZE /2 , 0)
	// 			fill(100, 200, 50)
	// 			console.log('x: ',x)
	// 		}

	// 		translate(
	// 			x_translate, 
	// 			y_translate, 
	// 			z_translate
	// 		) 

	// 		x_init = false;
	// 		y_init = false;
	// 		stroke(50,50,50, 20);
	// 		box();
	// 		}
	// 	}
	// }
};

