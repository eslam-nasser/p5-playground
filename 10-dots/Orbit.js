class Orbit {
    constructor(r = 100) {
        this.center = createVector(width / 2, width / 2);
        this.dotX = 0;
        this.dotY = 0;
        this.r = r;
        this.angle = 0;
    }

    show() {
        // draw the orbit
        push();
        translate(this.center.x, this.center.y);
        noFill();
        stroke(255, 7);
        strokeWeight(1);
        ellipse(0, 0, this.r);
        pop();

        // draw the dot
        fill(255);
        ellipse(this.dotX, this.dotY, 5);
    }

    move(angle) {
        // calculate the new dot position
        this.dotX = this.center.x + (this.r / 2) * cos(angle);
        this.dotY = this.center.y + (this.r / 2) * sin(angle);
    }
}
