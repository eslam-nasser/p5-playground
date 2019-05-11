let walls = [];
let lamp;
let xoff = 0;
let yoff = 0;

function setup() {
    createCanvas(640, 480);
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);

        walls.push(new Wall(x1, y1, x2, y2));
    }
    lamp = new Lamp();

    // world borders
    walls.push(new Wall(0, 0, width, 0));
    walls.push(new Wall(width, 0, width, width));
    walls.push(new Wall(width, height, 0, height));
    walls.push(new Wall(0, height, 0, 0));
}

function draw() {
    background(55);
    walls.forEach(wall => {
        wall.show();
    });

    lamp.update(mouseX, mouseY);
    lamp.show();
    lamp.look(walls);
}
