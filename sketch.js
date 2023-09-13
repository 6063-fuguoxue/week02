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
    eyeY = rectY + rectWidth/5*2;
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
    

    // Free circle
    strokeWeight(10);
    fill(14,135,204, 150);
    ellipse(x, y, 30, 30); 
}
