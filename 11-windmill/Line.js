class Line {
    constructor() {
        this.center = createVector(width / 2, height / 2);
        this.topPoint = createVector(width / 2, 0);
        this.bottomPoint = createVector(width / 2, height);
        this.length = 2500;
    }
    draw() {
        stroke(255);
        strokeWeight(1);

        // calc new x & y
        let x = this.length * cos(angle * 1 - HALF_PI);
        let y = this.length * sin(angle * 1 - HALF_PI);

        // draw top point and update it
        this.topPoint.x = this.center.x + x;
        this.topPoint.y = this.center.y + y;

        // draw bottom point and update it
        this.bottomPoint.x = this.center.x + x * -1;
        this.bottomPoint.y = this.center.y + y * -1;

        line(this.center.x, this.center.y, this.topPoint.x, this.topPoint.y);
        line(
            this.center.x,
            this.center.y,
            this.bottomPoint.x,
            this.bottomPoint.y
        );
    }

    setCenter(x, y) {
        this.center.x = x;
        this.center.y = y;
    }
}
