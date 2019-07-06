let orbits = [];
let angle = 0;
let speed = 0.1;

function setup() {
    createCanvas(640, 640);
    angleMode(DEGREES);

    for (let i = 0; i < 20; i++) {
        orbits.push(new Orbit(50 * (i + 1)));
    }
}

function draw() {
    background(55);
    noStroke();

    for (let i = orbits.length - 1; i >= 0; i--) {
        const orbit = orbits[i];

        orbit.show();
        orbit.move(angle * (i + 1));

        if (orbits[i - 1]) {
            stroke(255, 50);
            strokeWeight(1);
            line(
                orbit.dotX,
                orbit.dotY,
                orbits[i - 1].dotX,
                orbits[i - 1].dotY
            );
        }
    }
    angle += speed;
}
