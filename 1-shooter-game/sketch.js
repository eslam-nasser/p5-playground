let player;
let gun;
let bullets = [];
let rockets = [];
let speed = 5;

function setup() {
    createCanvas(640, 480);
    player = new Player();
    gun = new Gun(player);
    for (let i = 0; i < 1; i++) {
        rockets[i] = new Rocket(width - i * 100, -1);
    }
    frameRate(3)
}

function draw() {
    background(55);

    // Bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].update();
        bullets[i].show();
        for (let j = rockets.length - 1; j >= 0; j--) {
            // console.log(bullets[i].hits(rockets[j]));

            if (bullets[i].hits(rockets[j]) && !bullets[i].landed) {
                rockets.splice(j, 1);
                bullets[i].landed = true;
            }
        }
        if (bullets[i].isOffScreen()) {
            bullets.splice(i, 1);
        }
    }

    // Gun
    let angle = angleFromTwoPoints(
        {
            x: mouseX,
            y: mouseY
        },
        {
            x: player.pos.x,
            y: height - 150
        }
    );
    gun.show(player);
    gun.move(angle);

    // Player
    player.update();
    player.show();

    // Rockets
    for (let i = rockets.length - 1; i >= 0; i--) {
        rockets[i].seek(player);
        rockets[i].update();
        rockets[i].show();
    }

    // Floor
    fill(50);
    noStroke();
    rect(0, height - 150, width, 150);

    if (keyIsDown(68)) {
        player.pos.x += speed;
    }
    if (keyIsDown(65)) {
        player.pos.x -= speed;
    }
}

function angleFromTwoPoints(p1, p2) {
    return Math.atan2(p1.y - p2.y, p1.x - p2.x);
}

function mouseClicked() {
    let bullet = new Bullet(gun);
    let vFromAngle = p5.Vector.fromAngle(gun.angle);
    bullet.shoot(vFromAngle);
    bullets.push(bullet);
}
