function setup() {
    // Only run once: define the canvas, open some files, define the colors, ...
    createCanvas(600, 600); // w, h
    background(123,30,90,120); // rgba
}

function draw() {
    stroke(0, 23, 90, 150);
    strokeWeight(4);
    x = mouseX;
    y = mouseY;
    fill(255, 165, 0, 150);
    rect(30, 20, 55, 55);
    stroke(255, 165, 0, 150);
    strokeWeight(10);
    fill(0, 23, 90, 150);
    ellipse(x, y, 30, 30);   
}
