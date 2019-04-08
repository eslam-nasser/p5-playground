let tiles = [];
let scl = 1.2;
let cellSize = 15;
let img;
let imgOffseX;
let imgOffsetY;

function preload() {
    img = loadImage('./images/1.jpg');
}

function setup() {
    createCanvas(img.width * scl, img.height * scl);
    pixelDensity(1);
    imgOffsetX = width / 2 - img.width / 2;
    imgOffsetY = height / 2 - img.height / 2;

    img.loadPixels();
    console.log(img.pixels);

    for (let x = 0; x < img.width; x += cellSize) {
        for (let y = 0; y < img.height; y += cellSize) {
            let index = x + y * img.width;
            let red = img.pixels[index];
            let green = img.pixels[index + 1];
            let blue = img.pixels[index + 2];
            let alpha = img.pixels[index + 3];
            let cellData = Array.from(
                img.pixels.slice(index, index + cellSize * cellSize * 4)
            );
            // for (let cellX = 0; cellX < cellSize; cellX++) {
            //     for (let cellY = 0; cellY < cellSize; cellY++) {

            // 	}
            // }

            console.log(
                `Index ${index}: [${red}, ${green}, ${blue}, ${alpha}]`
            );
            console.log(`Cell Data: ${cellData.length}`);
            // console.log(cellData);
            console.log('-------------');
            tiles.push(new Tile(x, y, cellSize, cellData));
            break;
        }
    }
    noLoop();
}

function draw() {
    background(55);

    translate(imgOffsetX, imgOffsetY);
    image(img, 0, 0);

    tiles.forEach((tile, i) => {
        tile.behaviors();
        tile.update();
        tile.show();
    });
}
