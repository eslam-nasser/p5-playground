class Line {
    constructor() {
        // this.pivotX = width / 2;
        // this.pivotY = height / 2;
        this.center = createVector(width / 2, height / 2);
        this.w = 2;
        this.topRight = createVector(width / 2 + this.w, 0);
        this.topLeft = createVector(width / 2 - this.w, 0);
        this.bottomRight = createVector(width / 2 + this.w, height);
        this.bottomLeft = createVector(width / 2 - this.w, height);
        this.length = 100;
    }
    draw() {
        stroke(255);
        strokeWeight(1);

        // calc new x & y
        let x = this.length * cos(angle * 1 - HALF_PI);
        let y = this.length * sin(angle * 1 - HALF_PI);

        // draw top point and update it
        // stroke(0, 255, 0);
        // ellipse(this.topPoint.x, this.topPoint.y, 5);
        this.topRight.x = this.center.x + this.w + x;
        this.topRight.y = this.center.y + y;
        this.topLeft.x = this.center.x - this.w + x;
        this.topLeft.y = this.center.y + y;

        // this.center.x = this.center.x + x;

        // draw bottom point and update it
        // stroke(0, 0, 255);
        // ellipse(this.bottomPoint.x, this.bottomPoint.y, 5);
        // this.bottomPoint.x = this.center.x + x * -1;
        // this.bottomPoint.y = this.center.y + y * -1;

        // Draw the bar
        fill(255);
        beginShape();
        // top bar
        vertex(this.topLeft.x, this.topLeft.y);
        vertex(this.topRight.x, this.topRight.y);
        vertex(this.center.x + this.w, this.center.y);
        vertex(this.center.x - this.w, this.center.y);
        // bottom bar
        // vertex(this.center.x - this.w, this.center.y);
        // vertex(this.center.x + this.w, this.center.y);
        // vertex(this.bottomRight.x, this.bottomRight.y);
        // vertex(this.bottomLeft.x, this.bottomLeft.y);
        endShape(CLOSE);
        stroke(0, 255, 0);
        point(this.topLeft.x, this.topLeft.y);
        stroke(0, 0, 255);
        point(this.topRight.x, this.topRight.y);
        stroke(255);

        // rect(this.top);
        // line(
        //     this.center.x,
        //     this.center.y,
        //     this.bottomPoint.x,
        //     this.bottomPoint.y
        // );
    }

    setCenter(x, y) {
        this.center.x = x;
        this.center.y = y;
    }

    isOnLine(p) {
        var lowerXBound = Math.min(this.topPoint.x, this.bottomPoint.x);
        var upperXBound = Math.max(this.topPoint.x, this.bottomPoint.x);
        var lowerYBound = Math.min(this.topPoint.y, this.bottomPoint.y);
        var upperYBound = Math.max(this.topPoint.y, this.bottomPoint.y);
        return (
            p.x >= lowerXBound &&
            p.x <= upperXBound &&
            p.y >= lowerYBound &&
            p.y <= upperYBound
        );
    }
}
