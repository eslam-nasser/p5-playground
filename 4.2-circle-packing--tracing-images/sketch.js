let circles = [];
let spots = [];
let image;

function preload() {
    image = loadImage('./images/kitten.jpg');
}

function setup() {
    createCanvas(image.width, image.height);
    pixelDensity(1);
    image.loadPixels();
    // for (let x = 0; x < image.width; x++) {
    //     for (let y = 0; y < image.height; y++) {
    //         let index = x + y * image.width;
    //         let c = image.pixels[index * 4];
    //         var b = brightness([c]);
    //         if (b > 1) {
    //             spots.push(createVector(x, y));
    //         }
    //     }
    // }

    // frameRate(1);
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
    var x = random(0, image.width);
    var y = random(0, image.height);
    let valid = true;
    for (let i = circles.length - 1; i >= 0; i--) {
        let circle = circles[i];
        let d = dist(x, y, circle.pos.x, circle.pos.y);
        if (d < circle.r + 2) {
            valid = false;
            break;
        }
    }
    if (valid) {
        var index = (int(x) + int(y) * image.width) * 4;
        var r = image.pixels[index];
        var g = image.pixels[index + 1];
        var b = image.pixels[index + 2];
        var c = color(r, g, b);

        return new Circle(x, y, color(c));
    }
    return null;
}