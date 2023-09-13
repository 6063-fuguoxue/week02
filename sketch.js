let rectWidth = 150;
let rectHeight = 150;

function setup() {
    // Only run once: define the canvas, open some files, define the colors, ...
    createCanvas(windowWidth, windowHeight); // w, h
    // background(123,30,90,120); // rgba
}

function mousePressed() {
    stroke(0, 23, 90, 150);
    strokeWeight(10);
    fill(14,135,204, 150);
    ellipse(x, y, 50, 50); 
    // prevent default
    return false;
  }

function draw() {
    clear();
    background(123,30,90,120); // rgba
    stroke(0, 23, 90, 150);
    strokeWeight(4);
    x = mouseX;
    y = mouseY;
    rectX = windowWidth/2; 
    rectY = windowHeight/3;
    eyeX1 = rectX + rectWidth/4;
    eyeX2 = rectX + rectWidth/4*3;
    eyeY = rectY + rectHeight/5*2;
    mouthX = rectX + rectWidth/2;
    mouthY = rectY + rectWidth/5*3;

    // Draw a rectangle face
    fill(255, 165, 0, 150);
    
    rect(rectX, rectY, rectWidth, rectWidth);
    // Draw eyes
    stroke(0, 23, 90, 150);
    fill(0);
    ellipse(eyeX1, eyeY, 30, 30); 
    ellipse(eyeX2, eyeY, 30, 30); 

    // Draw a mouth
    fill(255, 0, 0, 150);
    arc(mouthX, mouthY, 50, 50, 0, PI);

    // Draw a body
    fill(255);
    triangle(mouthX, rectY + rectWidth, rectX, rectY + rectHeight * 2, rectX + rectWidth, rectY + rectHeight * 2)

    // Draw legs
    strokeWeight(4);
    line(eyeX1, rectY + 2*rectHeight, eyeX1, rectY + 2*rectHeight + 100);
    line(eyeX2, rectY + 2*rectHeight, eyeX2, rectY + 2*rectHeight + 100);

    // Draw limbs
    line(eyeX1 - 50, rectY + 1.5*rectHeight, eyeX1, rectY + 1.5*rectHeight);
    line(eyeX2, rectY + 1.5*rectHeight, eyeX2 + 50, rectY + 1.5*rectHeight);

    // Free circle
    strokeWeight(10);
    fill(14,135,204, 150);
    ellipse(x, y, 30, 30); 
}
