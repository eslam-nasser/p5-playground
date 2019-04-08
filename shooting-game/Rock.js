class Rock {
    constructor(x, y, size, numberOfHits) {
        // this.x = x;
        // this.y = y;
        this.size = size;
        this.numberOfHits = numberOfHits;

        this.position = createVector(x, y);
        this.acc = createVector();
        this.vel = createVector();
    }

    drawYourself() {
        ellipse(this.position.x, this.position.y, this.size);

        fill(0);
        textSize(15);
        text(this.numberOfHits, this.position.x - 7, this.position.y + 6);
        fill(255);
    }

    checkForHit(listOfBullets) {
        listOfBullets.forEach(bullet => {
            let distance = dist(
                bullet.x,
                bullet.y,
                this.position.x,
                this.position.y
            );
            distance = distance - this.size / 2;
            distance = distance - bullet.size / 2;
            distance = floor(distance);
            // console.log(distance);

            if (distance === 0) {
                // we need the hit logic
                bullet.size = 0;
                bullet.y = -10;
                this.numberOfHits = this.numberOfHits - 1;
                // bullet.enabled = false;
                // console.log('yeah we have a hit!!!');
            }
        });
    }

    // General function that apply a given force to this object
    // applyForce(f) {
    //     this.acc.add(f);
    //     this.vel.add(this.acc);
    //     // console.log(this.vel.y);
    //     this.position.add(this.vel);
    //     this.position.x *= -0.99;
    //     this.acc.mult(0);
    // }

    // checkForEdges() {
    //     if (this.position.y > height) {
    //         this.vel.y *= -0.99;
    //     }

    //     if (this.position.x > width) {
    //         this.vel.x *= -0.99;
    //     }
    //     if (this.position.x < 0) {
    //         this.vel.x *= -0.99;
    //     }
    // }
}
