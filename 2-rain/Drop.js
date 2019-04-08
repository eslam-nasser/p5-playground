class Drop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = random(1, 4);
    }

    show() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, 5);
    }

    move() {
        this.y += this.speed;
    }

    checkForFloor() {
        if (this.y > height) {
            this.y = -7;
            this.x = random(0, width);
        }
    }
}
