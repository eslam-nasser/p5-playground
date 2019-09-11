class Point {
    constructor(x, y) {
        this.id = floor(random() * 100000);
        this.x = x;
        this.y = y;
        this.r = 10;
        this.isCenter = false;
    }

    draw() {
        fill(255);
        if (this.isCenter) fill(0, 200, 0);
        ellipse(this.x, this.y, this.r);
        // fill(255, 0, 0)
        stroke(255, 0, 0);
        point(this.x, this.y);
        // line(
        //     this.x + this.r / 2,
        //     this.y + this.r / 2,
        //     this.x - this.r / 2,
        //     this.y - this.r / 2
        // );
    }
}
