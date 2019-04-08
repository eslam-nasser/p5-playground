class Circle {
    constructor(x, y, color, r = 1) {
        this.pos = createVector(x, y);
        this.r = r;
        this.growing = true;
        this.color = color;
    }

    show() {
        fill(this.color);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    grow() {
        if (this.growing) this.r += 0.1;
    }

    hitsTheEdge() {
        return this.pos.x + this.r > width || this.pos.x - this.r < 0 || this.pos.y + this.r > height || this.pos.y - this.r < 0;
    }
}