let editor;
let turtle;

function setup() {
    createCanvas(640, 480);
    background(55);
    angleMode(DEGREES);
    turtle = new Turtle(0, 0, 0);
    translate(0, 0);
    editor = select('#editor');

    runLOGO();
    editor.input(runLOGO);
}

function runLOGO() {
    console.log('running');
    push();
    turtle.reset();
    translate(width / 2, height / 2);
    background(55);
    let code = editor.value();
    let tokens = code.split(' ').map(token => token.trim());

    let index = 0;
    while (index < tokens.length) {
        let command = tokens[index];

        if (commands[command]) {
            if (command.charAt(0) === 'p') {
                commands[command]();
                console.log('pen command');
            } else {
                let value = tokens[++index];
                commands[command](value);
                console.log(command, value);
            }
        }
        index++;
    }
    pop();
}
