let video;
let poseNet;
let nose = { x: 0, y: 0 };
let leftEye = { x: 0, y: 0 };

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);

    // Create a new poseNet method with a single detection
    poseNet = ml5.poseNet(video, () => console.log('Model Loaded'));

    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function(results) {
        if (results.length > 0) {
            // Nose
            let noseX = results[0].pose.keypoints[0].position.x;
            let noseY = results[0].pose.keypoints[0].position.y;

            // Eye
            let leftEyeX = results[0].pose.keypoints[1].position.x;
            let leftEyeY = results[0].pose.keypoints[1].position.y;

            // Lerping
            nose.x = lerp(noseX, nose.x, 0.5);
            nose.y = lerp(noseY, nose.y, 0.5);

            leftEye.x = lerp(leftEyeX, leftEye.x, 0.5);
            leftEye.y = lerp(leftEyeY, leftEye.y, 0.5);
        }
    });

    // Hide the video element, and just show the canvas
    video.hide();
}

function draw() {
    background(55);
    image(video, 0, 0);

    let d = dist(nose.x, nose.y, leftEye.x, leftEye.y);

    fill(255, 0, 0);
    stroke(0);
    ellipse(nose.x, nose.y, d);

    // We can call both functions to draw all keypoints and the skeletons
    // drawKeypoints();
    // drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
    // Loop through all the poses detected
    for (let i = 0; i < poses.length; i++) {
        // For each pose detected, loop through all the keypoints
        for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
            // A keypoint is an object describing a body part (like rightArm or leftShoulder)
            let keypoint = poses[i].pose.keypoints[j];
            // Only draw an ellipse is the pose probability is bigger than 0.2
            if (keypoint.score > 0.2) {
                fill(255, 0, 0);
                noStroke();
                ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
            }
        }
    }
}

// A function to draw the skeletons
function drawSkeleton() {
    // Loop through all the skeletons detected
    for (let i = 0; i < poses.length; i++) {
        // For every skeleton, loop through all body connections
        for (let j = 0; j < poses[i].skeleton.length; j++) {
            let partA = poses[i].skeleton[j][0];
            let partB = poses[i].skeleton[j][1];
            stroke(255, 0, 0);
            line(
                partA.position.x,
                partA.position.y,
                partB.position.x,
                partB.position.y
            );
        }
    }
}
