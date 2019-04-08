class Tile {
    constructor(x, y, size, cellData) {
        this.target = createVector(x, y);
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.maxSpeed = 10;
        this.maxForce = 1;

        this.w = size || 4;
        this.h = size || 4;
        this.rgb = [255, 255, 255];
        this.cellData = cellData;
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    show() {
        // fill(...this.rgb);
        // noStroke();
        // rectMode(CENTER);
        // rect(this.pos.x, this.pos.y, this.w, this.h);

        let cell = createImage(this.w, this.h);
        for (var i = 0; i < img.width; i++) {
            for (var j = 0; j < img.height; j++) {
                let c = this.cellData[i + j * cell.width];
                console.log(c);

                // img.set(i, j, color());
            }
        }
    }

    behaviors() {
        var arrive = this.arrive(this.target);
        var mouse = createVector(mouseX, mouseY);
        var flee = this.flee(mouse);

        arrive.mult(1);
        flee.mult(5);

        this.applyForce(arrive);
        this.applyForce(flee);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    arrive(target) {
        var desired = p5.Vector.sub(target, this.pos);
        var d = desired.mag();
        var speed = this.maxSpeed;
        if (d < 100) {
            speed = map(d, 0, 100, 0, this.maxSpeed);
        }
        desired.setMag(speed);
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);
        return steer;
    }

    flee(target) {
        var desired = p5.Vector.sub(target, this.pos);
        var d = desired.mag();
        if (d < 50) {
            desired.setMag(this.maxSpeed);
            desired.mult(-1);
            var steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxForce);
            return steer;
        } else {
            return createVector(0, 0);
        }
    }
}
