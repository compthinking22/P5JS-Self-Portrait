let topColor, bottomColor; // Global
let greenToBrownColorPosition, yellowToBrownColorPosition, thirdSetColorPosition;
let circleXPositionsGreenToBrown, circleYPositionsGreenToBrown, circleXPositionsYellowToBrown, circleYPositionsYellowToBrown, circleXPositionsYellowToBrown2, circleYPositionsYellowToBrown2;

function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight); // 800, 600
  topColor = color(6, 120, 164); // Dark blue (top color)
  bottomColor = color(118, 196, 226); // Lighter blue (bottom color)
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
  drawTree(width / 4 - 100, height  - 200, trunkLength, PI / 2, 5, trunkWidth * 0.7);
  drawTree((width * 3) / 4, height - 97, trunkLength, PI / 2, 5, trunkWidth * 0.7);
  drawTree(width / 4, height  - 200, trunkLength, PI / 2, 5, trunkWidth * 0.7);
  drawTree((width * 2) / 4 - 100, height - 97, trunkLength, PI / 2, 5, trunkWidth * 0.7);

}


function draw() {
  // Array defined for custom colors starting from customColors[0]
  let customColors = [
    color(12, 58, 32), // Dark green
    color(53, 88, 47),  // Light green
    color(185, 157, 20),
    color(251, 191, 7), // Yellow
    color(255, 164, 0), // Orange
    color(156, 40, 6),  // Red
    color(84, 33, 10),   // Brown
    color(51, 16, 0) //dark brown
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
   circleXPositionsGreenToBrown = [500, 300, 500, 80, 800, 800, 800, 360, 220, 200, 150, 285]; // Left, right
   circleYPositionsGreenToBrown = [400, 430, 500, 415, 450, 500, 550, 400, 440, 280, 380, 360]; // Up, down

  circleXPositionsYellowToBrown = [360, 220, 200, 160, 275]; // Left, right
  circleYPositionsYellowToBrown = [400, 440, 290, 380, 370]; // Up, down

  circleXPositionsYellowToBrown2 = [100, 205, 170, 270, 500]; // Left, right
  circleYPositionsYellowToBrown2 = [100, 320, 380, 370, 100]; // Up, down

  // Draw circles starting from green to brown
  drawCirclesWithColors(circleXPositionsGreenToBrown, circleYPositionsGreenToBrown, fillColorGreenToBrown);

  // Draw circles starting from yellow to brown
  drawCirclesWithColors(circleXPositionsYellowToBrown, circleYPositionsYellowToBrown, fillColorYellowToBrown);

  // Draw circles starting from yellow to brown for the second set of circles
  drawCirclesWithColors(circleXPositionsYellowToBrown2, circleYPositionsYellowToBrown2, fillColorYellowToBrown2);
}

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
    let circleSize = map(i, 0, circleCount - 1, 50, 150);

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
