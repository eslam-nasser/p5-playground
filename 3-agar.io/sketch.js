let blob;
let blobs = [];
let zoom = 1;

function setup() {
    createCanvas(640, 480);
    blob = new Blob(0, 0, 64);
    for (let i = 0; i < 20; i++) {
        let x = random(-width, width);
        let y = random(-height, height);
        blobs[i] = new Blob(x, y, 16);
    }
}

function draw() {
    background(55);
    translate(width / 2, height / 2);
    let newZoom = 64 / blob.r;
    zoom = lerp(zoom, newZoom, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);

    blob.update();
    blob.show();

    for (let i = blobs.length - 1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blob.grows(blobs[i].r);
            blobs.splice(i, 1);
        }
    }
}
