let drops = [];

function setup() {
    createCanvas(640, 480);
    for (let i = 0; i < 50; i++) {
        drops.push(new Drop(random(0, width), random(0, height)));
    }
}

function draw() {
    background(55);

    drops.forEach(drop => {
        drop.show();
        drop.move();
        drop.checkForFloor();
    });
}
