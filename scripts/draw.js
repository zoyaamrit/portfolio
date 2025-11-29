let isDrawing = false;
let shapes = [];


function generateRandomShapes() {
    shapes = [];
    const numberOfShapes = 20;

    for (let i = 0; i < numberOfShapes; i++) {
        const shapeType = floor(random(3));
        const x = random(width);
        const y = random(height);
        const size = random(10, 60);
        const rotation = random(TWO_PI);
        const col = getRandomColor();

        // for motion
        const vx = random(-0.2, 0.2);
        const vy = random(-0.2, 0.2);

        shapes.push({ shapeType, x, y, size, rotation, col, vx, vy});


    }
}

// generateRandomShapes();

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    generateRandomShapes();
    redrawShapes();
}

function draw() {
   
  

     for (let shape of shapes) {
        shape.x += shape.vx;
        shape.y += shape.vy;
    }

    //   background(255);
    redrawShapes();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redrawShapes();
}

// function mousePressed() {
//     if (mouseX >= 0 && mouseX <= width && 
//         mouseY >= 0 && mouseY <= height) {
//         isDrawing = true;
//     }
// }

// function mouseDragged() {
//     if (isDrawing) {
//         stroke(0);
//         strokeWeight(0.5);
//         line(pmouseX, pmouseY, mouseX, mouseY);
//     }
// }

// function mouseReleased() {
//     isDrawing = false;
// }

function doubleClicked() {
    clear(); 
    generateRandomShapes();
    redrawShapes();
}



function redrawShapes() {
    background("#f5f5f5");
    
    for (let shape of shapes) {
        push();
        translate(shape.x, shape.y);
        rotate(shape.rotation);
        stroke(shape.col);
        noFill();

        switch (shape.shapeType) {
            case 0:
                strokeWeight(3);
                circle(0, 0, shape.size * 2);
                break;
            case 1:
                strokeWeight(3);
                rectMode(CENTER);
                rect(0, 0, shape.size, shape.size);
                break;
            case 2:
                strokeWeight(3);
                triangle(0, -shape.size / 2, 
                        shape.size / 2, shape.size / 2, 
                        -shape.size / 2, shape.size / 2);
                break;
        }

        pop();
    }
}

function getRandomColor() {
    return color(200, 
                floor(random(256)), 
                floor(random(256)), 80);
}



// function doubleClicked() {
//     clear()
// }
