class Lamp {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        for (let i = 0; i < 360; i += 1) {
            this.rays.push(new Ray(this.pos, radians(i)));
        }
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        this.rays.forEach(ray => {
            ray.show();
        });
    }

    look(walls) {
        this.rays.forEach(ray => {
            let closest = null;
            let record = Infinity;
            walls.forEach(wall => {
                let pt = ray.cast(wall);
                if (pt) {
                    const dist = p5.Vector.dist(this.pos, pt);
                    // record = min(dist, record);

                    // fill(255);
                    // ellipse(pt.x, pt.y, 8, 8);
                    if (dist < record) {
                        record = dist;
                        closest = pt;
                    }
                }
            });
            if (closest) {
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        });
    }
}
