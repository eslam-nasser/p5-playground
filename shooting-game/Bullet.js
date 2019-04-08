class Bullet {
    constructor(valueX, valueY) {
        // console.log('creating new bulleat ...');
        this.x = valueX;
        this.y = valueY;
        this.size = 5;
        // this.enabled = true;
    }

    moveOnXAxis(valueOfMouseX) {
        this.x = valueOfMouseX;
    }

    drawYourself() {
        ellipse(this.x, this.y, this.size);
    }

    moveUp() {
        this.y = this.y - 10;
    }

    checkIfOffScreen() {
        if (this.y < 0) {
            return true;
        } else {
            return false;
        }
    }
}
