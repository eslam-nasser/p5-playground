class Point {
    constructor(x, y) {
        this.id = floor(random() * 100000);
        this.x = x;
        this.y = y;
        this.r = 10;
        this.isCenter = false;
        this.used = false;
    }

    draw() {
        fill(255);
        if (this.used) fill(0, 200, 0, 60);
        ellipse(this.x, this.y, this.r);
        line(
            this.x + this.r / 2,
            this.y + this.r / 2,
            this.x - this.r / 2,
            this.y - this.r / 2
        );
    }
}
