class Player {
    constructor() {
        this.w = 15;
        this.h = 30;

        this.pos = createVector(30, height - 150 - this.h);
        this.vel = createVector();
        this.acc = createVector();
    }

    show() {
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(f) {
        this.acc.add(f);
    }
}
