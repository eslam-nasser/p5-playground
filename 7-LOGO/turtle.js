let commands = {
    fd(amount) {
        turtle.forward(amount);
    },
    bd(amount) {
        turtle.forward(-amount);
    },
    rt(angle) {
        turtle.right(angle);
    },
    lt(angle) {
        turtle.right(-angle);
    },
    pu() {
        turtle.pen = false;
    },
    pd() {
        turtle.pen = true;
    }
};

class Turtle {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.pen = true;
    }
    reset() {
        translate(this.x, this.y);
        rotate(this.angle);
        this.pen = true;
    }

    forward(amount) {
        amount = parseInt(amount);
        if (this.pen) {
            stroke(255);
            strokeWeight(2);
            line(0, 0, amount, 0);
        }
        translate(amount, 0);
    }

    right(angle) {
        rotate(angle);
    }
}
