class Rocket {
    constructor(x) {
        this.r = 20;
        this.pos = createVector(x, -100);
        this.vel = createVector();
        this.acc = createVector();
        this.maxForce = random(.1, .3);
        this.maxSpeed = random(1, 5);
    }

    show() {
        fill(155);
        rect(this.pos.x, this.pos.y, this.r, this.r);
    }

    applyForce(f) {
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    seek(target) {
        const desired = p5.Vector.sub(target.pos, this.pos);
        const d = dist(target.pos.x, target.pos.y, this.pos.x, this.pos.y);
        if (d < 100) {
            const speed = map(d, 0, 100, 0, this.maxSpeed * 1.5);
            desired.setMag(speed);
        }
        const seekForce = p5.Vector.sub(desired, this.vel);
        seekForce.limit(this.maxForce);
        this.applyForce(seekForce);
    }
}
