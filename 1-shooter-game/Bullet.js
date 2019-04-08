class Bullet {
    constructor(gun) {
        this.gun = gun;
        this.pos = createVector(gun.player.pos.x, gun.player.pos.y);
        this.vel = createVector();
        this.acc = createVector();
        this.r = 3;
        this.landed = false;
    }

    show() {
        if (!this.landed) {
            push();
            fill(255, 0, 0);
            translate(
                this.pos.x + this.gun.player.w / 2 + this.r / 2,
                this.pos.y + this.gun.player.h / 4 + this.r / 2
            );
            ellipse(0, 0, this.r);
            pop();
        }
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(f) {
        this.acc.add(f);
    }

    shoot(f) {
        f.mult(10);
        this.applyForce(f);
    }

    isOffScreen() {
        if (
            this.pos.x > width ||
            this.pos.x < 0 ||
            this.pos.y > height ||
            this.pos.y < 0
        ) {
            return true;
        }
        return false;
    }

    hits(rocket) {
        console.log(
            this.pos.x > rocket.pos.x ,
            this.pos.x < rocket.pos.x + rocket.w ,
            this.pos.y > rocket.pos.y ,
            this.pos.y < rocket.pos.y + rocket.h
        )
        if (
            // x axis
            this.pos.x > rocket.pos.x &&
            this.pos.x < rocket.pos.x + rocket.w &&
            // y axis
            this.pos.y > rocket.pos.y &&
            this.pos.y < rocket.pos.y + rocket.h
        ) {
            return true;
        }
        // let d = dist(this.pos.x, this.pos.y, rocket.pos.x, rocket.pos.y);
        // if (d <= this.r / 2) {
        //     return true;
        // }
        return false;
    }
}
