// Global values for the gun
let gunWidth = 25;
let gunHeight = 60;
let bullets = [];
let rocks = [];

function setup() {
    createCanvas(640, 480);

    let rock = new Rock(
        // random(0, 1) > 0.5 ? 40 : width - 40, // x
        width / 2, // x
        50, // y
        40, // width
        1000 // number of hits
    );
    rocks.push(rock);
}

function draw() {
    frameRate(10);
    background(55);
    fill(255);

    if (mouseIsPressed) {
        let bullet = new Bullet(mouseX + gunWidth / 2, height - gunHeight - 5);
        bullets.push(bullet);
    }

    // Render bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        bullet.moveUp();
        bullet.drawYourself();

        if (bullet.checkIfOffScreen()) {
            bullets.splice(i, 1);
        }
    }

    // Create gravity force
    // let gravity = createVector(0, 0.2);

    // Render rocks
    rocks.forEach(rock => {
        rock.drawYourself();
        rock.checkForHit(bullets);
        // rock.applyForce(gravity);
        // rock.checkForEdges();
    });

    // Render Gun
    rect(mouseX, height - gunHeight, gunWidth, gunHeight);
}
