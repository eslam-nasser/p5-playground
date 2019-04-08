class Circle {
    constructor(x, y, r = 1) {
        this.pos = createVector(x, y);
        this.r = r;
        this.growing = true;
    }

    show() {
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    grow() {
        if (this.growing) this.r += 0.5;
    }

    hitsTheEdge() {
        return this.pos.x + this.r > width || this.pos.x - this.r < 0 || this.pos.y + this.r > height || this.pos.y - this.r < 0;
    }
}