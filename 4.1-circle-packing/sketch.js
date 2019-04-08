let circles = [];

function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(55);

	let total = 10;
	let count = 0;
	let attempts = 0;

	while (count < total) {
		let newC = newCircle();
		if (newC) {
			circles.push(newC);
			count++;
		}
		attempts++;
		if (attempts > 1000) {
			noLoop();
			break;
		}
	}


	circles.forEach(circle => {
		if (circle.growing) {
			if (circle.hitsTheEdge()) {
				circle.growing = false;
			} else {
				for (let i = circles.length - 1; i >= 0; i--) {
					let other = circles[i];
					if (circle != other) {
						let d = dist(circle.pos.x, circle.pos.y, other.pos.x, other.pos.y);
						if (d - 2 < circle.r + other.r) {
							circle.growing = false;
						}
					}
				}
			}
		}
		circle.show();
		circle.grow();
	});
}

function newCircle() {
	let x = random(width);
	let y = random(height);
	let valid = true;
	for (let i = circles.length - 1; i >= 0; i--) {
		let circle = circles[i];
		let d = dist(x, y, circle.pos.x, circle.pos.y);
		if (d < circle.r) {
			valid = false;
			break;
		}
	}
	if (valid) {
		return new Circle(x, y);
	}
	return null;
}