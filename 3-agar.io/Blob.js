class Blob {
    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.r = r;
        this.vel = createVector();
    }

    show() {
        fill(240);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    update() {
        let newVel = createVector(mouseX - width / 2, mouseY - height / 2);
        newVel.setMag(3);
        this.vel.lerp(newVel, 0.2);
        this.pos.add(this.vel);
    }

    eats(blob) {
        let d = dist(this.pos.x, this.pos.y, blob.pos.x, blob.pos.y);
        if (
            d < this.r + blob.r
        ) {
            return true;
        }
        return false;
    }

    grows(r) {
        let sum = PI * this.r * this.r + PI * r * r;
        this.r = sqrt(sum / PI);
    }
}
