let sketch = function(p) {
    p.setup = function() {
        p.createCanvas(100, 100);
        p.background(0);
    };

    p.draw = function() {
        //
    };
};
new p5(sketch, window.document.getElementById('canvas-wrapper'));

// function setup() {
//     createCanvas(640, 480);
// }

// function draw() {
//     background(55);
// }
