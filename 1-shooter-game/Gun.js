class Gun {
    constructor(player) {
        this.player = player;
        this.angle = 0;
        this.w = 25;
        this.h = 3;
    }

    show() {
        push();
        fill(200);
        translate(
            this.player.pos.x + this.player.w / 2,
            this.player.pos.y + this.player.h / 4
        );
        rotate(this.angle);
        rect(0, 0, this.w, this.h);
        pop();
    }

    move(angle) {
        this.angle = angle;
    }
}
