let angle = 0;
const points = [];
let L;
let mySound;

function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('./click_sound.mp3');
}

function setup() {
    createCanvas(640, 480);
    L = new Line();
    mySound.setVolume(1);
    points.push(new Point(floor(width / 2) - 50, floor(height / 4)));
}

function draw() {
    background(55);
    // frameRate(5);
    noStroke();
    // if (Math.abs(angle) % 3 === 0) {
    // if (Math.abs(angle) % 3 === 0) {
    //     console.log('half');
    // }

    // for (let i = 0; i < points.length; i++) {
    //     const p = points[i];
    //     p.draw();
    //     // console.log(
    //     //     'TCL: isBetween(L.topPoint, L.bottomPoint, p)',
    //     //     isBetween(L.topPoint, L.bottomPoint, p)
    //     // );
    //     // if (intersect(L, p)) {
    //     // if (isBetween(L.topPoint, L.bottomPoint, p)) {
    //     if (L.isOnLine(p)) {
    //         console.log('yes!');
    //         // L.setCenter(p.x, p.y);
    //         // p.isCenter = true;
    //         // mySound.play();
    //     }
    // }

    L.draw();
    // if (points.length) {
    // }

    angle -= 0.01;
}

function mouseClicked() {
    const point = new Point(mouseX, mouseY);
    // L.setCenter(mouseX, mouseY);
    points.push(point);
}

// function lineIntersect(L, p) {
//     var x1 = L.topPoint.x,
//         y1 = L.topPoint.y,
//         x2 = L.bottomPoint.x,
//         y2 = L.bottomPoint.y,
//         x3 = p.x + 5,
//         y3 = p.y + 5,
//         x4 = p.x - 5,
//         y4 = p.y - 5;
//     // console.log(x1, y1, x2, y2, x3, y3, x4, y4);

//     var x =
//         ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
//         ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
//     var y =
//         ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
//         ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
//     if (isNaN(x) || isNaN(y)) {
//         return false;
//     } else {
//         if (x1 >= x2) {
//             if (!(x2 <= x && x <= x1)) {
//                 return false;
//             }
//         } else {
//             if (!(x1 <= x && x <= x2)) {
//                 return false;
//             }
//         }
//         if (y1 >= y2) {
//             if (!(y2 <= y && y <= y1)) {
//                 return false;
//             }
//         } else {
//             if (!(y1 <= y && y <= y2)) {
//                 return false;
//             }
//         }
//         if (x3 >= x4) {
//             if (!(x4 <= x && x <= x3)) {
//                 return false;
//             }
//         } else {
//             if (!(x3 <= x && x <= x4)) {
//                 return false;
//             }
//         }
//         if (y3 >= y4) {
//             if (!(y4 <= y && y <= y3)) {
//                 return false;
//             }
//         } else {
//             if (!(y3 <= y && y <= y4)) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// Methods #2
function sameSign(a, b) {
    return Math.sign(a) == Math.sign(b);
}
function intersect(L, p) {
    var x1 = L.topPoint.x,
        y1 = L.topPoint.y,
        x2 = L.bottomPoint.x,
        y2 = L.bottomPoint.y,
        x3 = p.x,
        y3 = p.y,
        x4 = p.x,
        y4 = p.y;

    var a1, a2, b1, b2, c1, c2;
    var r1, r2, r3, r4;
    var denom, offset, num;

    // Compute a1, b1, c1, where line joining points 1 and 2
    // is "a1 x + b1 y + c1 = 0".
    a1 = y2 - y1;
    b1 = x1 - x2;
    c1 = x2 * y1 - x1 * y2;

    // Compute r3 and r4.
    r3 = a1 * x3 + b1 * y3 + c1;
    r4 = a1 * x4 + b1 * y4 + c1;

    // Check signs of r3 and r4. If both point 3 and point 4 lie on
    // same side of line 1, the line segments do not intersect.
    if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
        return 0; //return that they do not intersect
    }

    // Compute a2, b2, c2
    a2 = y4 - y3;
    b2 = x3 - x4;
    c2 = x4 * y3 - x3 * y4;

    // Compute r1 and r2
    r1 = a2 * x1 + b2 * y1 + c2;
    r2 = a2 * x2 + b2 * y2 + c2;

    // Check signs of r1 and r2. If both point 1 and point 2 lie
    // on same side of second line segment, the line segments do
    // not intersect.
    if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
        return 0; //return that they do not intersect
    }

    //Line segments intersect: compute intersection point.
    denom = a1 * b2 - a2 * b1;

    if (denom === 0) {
        return 1; //collinear
    }

    // lines_intersect
    return 1; //lines intersect, return true
}

function isBetween(a, b, c) {
    const crossproduct = (c.y - a.y) * (b.x - a.x) - (c.x - a.x) * (b.y - a.y);

    // compare versus epsilon for floating point values, or != 0 if using integers
    if (Math.abs(crossproduct) > Number.EPSILON) {
        return false;
    }

    const dotproduct = (c.x - a.x) * (b.x - a.x) + (c.y - a.y) * (b.y - a.y);
    if (dotproduct < 0) {
        return false;
    }

    const squaredlengthba =
        (b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y);
    if (dotproduct > squaredlengthba) {
        return false;
    }

    return true;
}
