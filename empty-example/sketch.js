let topColor, bottomColor; // Global
let greenToBrownColorPosition, yellowToBrownColorPosition, thirdSetColorPosition;
let circleXPositionsGreenToBrown, circleYPositionsGreenToBrown, circleXPositionsYellowToBrown, circleYPositionsYellowToBrown, circleXPositionsYellowToBrown2, circleYPositionsYellowToBrown2;

function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight); // 800, 600
  topColor = color(6, 120, 164); // Dark blue (top color)
  bottomColor = color(118, 196, 226); // Lighter blue (bottom color)
  //drawBackground(topColor, bottomColor);

  //tree
  greenToBrownColorPosition = 0;
  yellowToBrownColorPosition = 1;
  thirdSetColorPosition = 2;
 
  // This loop is for every line of canvas height, starts from the top of the canvas to the bottom of the canvas.
  for (let i = 0; i < windowHeight; i++) { // Up to down (height)
    // Map function scales i values from 0 to canvas height and maps values from 0 to 1.
    m = map(i, 0, windowHeight, 0, 1); // Changes how the gradient looks, DO NOT CHANGE!!

    // lerpColor mixes top and bottom colors to make a color in between them.
    // Mixes colors based on location.
    let newColor = lerpColor(topColor, bottomColor, m);
    stroke(newColor); // Set the new color for the brush.
    line(0, i, windowWidth, i); // Draw a horizontal line for each color in the loop.
  }
  
  // Draw the ground
  stroke(115, 73, 0);
  fill(84, 33, 10);
  rect(0, 700, windowWidth); // Left/right, up/down, "size"

  let trunkLength = 180;
  let trunkWidth = 30;

  // Recursive function to draw trees with trunks and branches 
  // drawTree(left/right (-/+), up/down, size(-/+), , # of recursions,thickness)
  drawTree(width / 4 - 260, height - 230, trunkLength, PI / 2, 4.5, trunkWidth * 0.7);     //1
  drawTree(width / 4 - 20, height - 0, trunkLength, PI / 2, 4.5, trunkWidth * 1.3);        //2
  drawTree(width / 4 + 240, height - 230, trunkLength - 100, PI / 2, 2, trunkWidth * 0.3); //3 
  drawTree(width / 4 + 530, height  - 90, trunkLength, PI / 2, 5, trunkWidth * 0.7);       //4
  drawTree(width / 4 + 630, height - 90, trunkLength - 100, PI / 2, 2, trunkWidth * 0.7);  //5
  drawTree(width / 4 + 1200, height - 0, trunkLength + 80, PI / 2, 5, trunkWidth * 3);     //7
  drawTree(width / 4 + 800, height - 231, trunkLength - 150, PI / 2, 3, trunkWidth * 0.1); //6


}


function draw() {

  // Array defined for custom colors starting from customColors[0]
  let customColors = [
    color(12, 58, 32), // Dark green
    color(53, 88, 47),  // Light green
    color(151, 139, 27), //ugly yellow
    color(251, 191, 7), // Yellow
    color(255, 164, 0), // Orange
    color(156, 40, 6),  // Red
    color(84, 33, 10),  // Brown
    color(51, 16, 0)    //dark brown
  ];
 
  // Calculate the number of colors in the gradient
  let numColors = customColors.length;

  // Calculate the color position based on the horizontal position of the mouse
  let colorPosition = map(mouseX, 0, windowWidth, 0, numColors - 1);

  // Separate color positions for the three sets of circles
  greenToBrownColorPosition = map(mouseX, 0, windowWidth, 0, customColors.length - 1); // Subtract 2 to exclude last color
  yellowToBrownColorPosition = map(mouseX, 0, windowWidth, 1, customColors.length - 1);
  thirdSetColorPosition = map(mouseX, 0, windowWidth, 2, customColors.length - 1);

  let fillColorGreenToBrown = calculateColor(greenToBrownColorPosition, customColors);
  let fillColorYellowToBrown = calculateColor(yellowToBrownColorPosition, customColors);
  let fillColorYellowToBrown2 = calculateColor(thirdSetColorPosition, customColors);

  // Define arrays of custom positions for the circles
   circleXPositionsGreenToBrown = [730, 693, 760, 290, 340, 195, 105, 180, 1100, 1200, 1100, 1580, 1400, 1430, 1630, 1830]; // Left-, right+
   circleYPositionsGreenToBrown = [530, 568, 580, 310, 370, 400, 405, 300, 500, 500, 400, 450, 580, 450, 300, 400]; // Up+, down-

  circleXPositionsYellowToBrown = [713, 1070, 1140, 250, 155, 263, 898, 1810, 1700, 1540]; 
  circleYPositionsYellowToBrown = [570, 690, 670, 360, 430, 445, 465, 530, 480, 600]; 

  circleXPositionsYellowToBrown2 = [738, 1100, 940, 1640, 1730, -20, 60];
  circleYPositionsYellowToBrown2 = [585, 715, 540, 670, 600, 700, 900]; 

  // Draw circles starting from green to brown
  drawCirclesWithColors(circleXPositionsGreenToBrown, circleYPositionsGreenToBrown, fillColorGreenToBrown);

  // Draw circles starting from yellow to brown
  drawCirclesWithColors(circleXPositionsYellowToBrown, circleYPositionsYellowToBrown, fillColorYellowToBrown);

  // Draw circles starting from yellow to brown for the second set of circles
  drawCirclesWithColors(circleXPositionsYellowToBrown2, circleYPositionsYellowToBrown2, fillColorYellowToBrown2);
}

//I think I pasted this here by accident. doesn't seem to mess up anything when I take it out 
/*function drawCirclesWithColors(xPositions, yPositions, baseColor) {
  let circleCount = xPositions.length;
  for (let i = 0; i < circleCount; i++) {
    let circleX = xPositions[i];
    let circleY = yPositions[i];
    let circleSize = map(i, 0, circleCount - 1, 50, 250);

    fill(baseColor);
    noStroke(); // No outline for circles
    ellipse(circleX, circleY, circleSize, circleSize);
  }
}*/

function calculateColor(colorPosition, customColors) {
  let colorIndex1 = floor(colorPosition);
  let colorIndex2 = ceil(colorPosition);
  let colorIndex3 = colorIndex1 + 1;
  colorIndex1 = constrain(floor(colorPosition), 0, customColors.length - 1);
  colorIndex2 = constrain(ceil(colorPosition), 0, customColors.length - 1);
  colorIndex3 = constrain(ceil(colorPosition), 0, customColors.length - 1);

  // Interpolate between the two closest colors
  let fillColor;
  if (colorIndex1 === colorIndex2) {
    fillColor = customColors[colorIndex1];
  } else {
    if (colorIndex2 === colorIndex3) {
      // If colorIndex2 and colorIndex3 are the same, use lerpColor between colorIndex1 and colorIndex2
      fillColor = lerpColor(customColors[colorIndex1], customColors[colorIndex2], colorPosition % 1);
    } else {
      // If they are not the same, interpolate between colorIndex1 and colorIndex2 up to colorIndex3
      let color1 = lerpColor(customColors[colorIndex1], customColors[colorIndex2], (colorPosition - colorIndex1));
      let color2 = lerpColor(customColors[colorIndex2], customColors[colorIndex3], (colorPosition - colorIndex2));
      fillColor = lerpColor(color1, color2, (colorPosition - colorIndex2) / (colorIndex3 - colorIndex2));
    }
  }
  return fillColor;
}

function drawCirclesWithColors(xPositions, yPositions, baseColor) {
  let circleCount = xPositions.length;
  for (let i = 0; i < circleCount; i++) {
    let circleX = xPositions[i];
    let circleY = yPositions[i];
    let circleSize = map(i, 0, circleCount - 1, 50, 250);

    fill(baseColor);
    noStroke(); // No outline for circles
    ellipse(circleX, circleY, circleSize, circleSize);
  }
}

function drawTree(x, y, trunkLength, angle, levels, branchWidth) {
  if (levels > 0) {
    let endX = x + cos(angle) * trunkLength;
    let endY = y - sin(angle) * trunkLength;

    stroke(139, 69, 19); // Brown color for trunks
    strokeWeight(branchWidth);
    line(x, y, endX, endY);

    // Recursive calls to draw branches
    drawTree(endX, endY, trunkLength * 0.7, angle - PI / 6, levels - 1.5, branchWidth * 0.7);
    drawTree(endX, endY, trunkLength * 0.7, angle + PI / 6, levels - 1.5, branchWidth * 0.7);
    drawTree(endX, endY, trunkLength * 0.7, angle - PI / 6, levels - 1.5, branchWidth * 0.7);
    drawTree(endX, endY, trunkLength * 0.7, angle + PI / 6, levels - 1.5, branchWidth * 0.7);
  }
}

/*function keyPressed() {
  if (key === 'A' || key === 'a') {
    topColor = color(6, 120, 164); // Dark blue (top color)
    bottomColor = color(118, 196, 226); // Lighter blue (bottom color)
    drawBackground(topColor, bottomColor);
  } else if (key === 'S' || key === 's') {
    topColor = color(41, 35, 74); // Dusty dark blue
    bottomColor = color(255, 96, 62); // Orangy-pink
    drawBackground(topColor, bottomColor);
  } else if (key === 'D' || key === 'd') {
    topColor = color(4, 1, 17);
    bottomColor = color(43, 36, 78);
    drawBackground(topColor, bottomColor);
  }
}

function drawBackground(c1, c2) {
  // Draw the background gradient within a specific region
  for (let i = 0; i < 700; i++) {
    let inter = map(i, 0, 700, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, i, windowWidth, i);
  }
}*/

//COME BACK TO LINES 11 AND 170-194 --> KEY PRESS BACKGROUND CHANGE
