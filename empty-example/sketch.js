// Toni Hunter Nov 13, 2023
//Creative Coding P5JS  Self-Portrait Project

//Global Variables
let openingScreenTime = 10000; // 10 seconds
let openingScreenFadeInTime = 2000; // 2 seconds for fade in
let openingScreenStartTime;
let openingTextOpacity = 255;

let topColor, bottomColor; // sky colors
let greenToBrownColorPosition, yellowToBrownColorPosition, thirdSetColorPosition; //circle positions
let circleXPositionsGreenToBrown, circleYPositionsGreenToBrown, circleXPositionsYellowToBrown, circleYPositionsYellowToBrown, circleXPositionsYellowToBrown2, circleYPositionsYellowToBrown2;
var state = 4; //click states
let fadeInComplete = false;

/*------------------------------------------------------------------------------------ SETUP AND OPENING ------------------------------------------------------------------------------------ */

/*Setup function sets up opening screen variable (time for opening screen), the canvas background before keyPress, 
  and starting indeces for circles */
function setup() {

  openingScreenStartTime = millis(); // Set the start time for the opening screen
  //canvas
  // My machine "canvas" - 1920, 923. windowHeight and windowWidth will not work for all resolutions but setting the screen dimensions will
  createCanvas(1920, 923); 
  topColor = color(4, 89, 121); // Dark blue (top color)
  bottomColor = color(255, 213, 98); // Lighter blue (bottom color)

  //tree color positions start
  greenToBrownColorPosition = 0;
  yellowToBrownColorPosition = 1;
  thirdSetColorPosition = 2;

  // This loop is for every line of canvas height, starts from the top of the canvas to the bottom of the canvas.
  for (let i = 0; i < 700; i++) { // Up to down (height)
    // Map function scales i values from 0 to canvas height and maps values from 0 to 1.
    //map(i, 0, windowHeight, 0, 1)
    m = map(i, 0, 700, 0, 1); // Changes how the gradient looks

    // lerpColor mixes top and bottom colors to make a color in between them.
    // Mixes colors based on location.
    let newColor = lerpColor(topColor, bottomColor, m);
    stroke(newColor); // Set the new color for the brush.
    line(0, i, windowWidth, i); // Draw a horizontal line for each color in the loop.
  } 
}

/*drawOpeningScreen Function is the opening screen before the main screen. Outputs background and text*/
function drawOpeningScreen() {
  // Calculate text opacity based on elapsed time
  let elapsedTime = millis() - openingScreenStartTime;
  openingTextOpacity = map(elapsedTime, 0, openingScreenTime, 255, 0);
  openingTextOpacity = constrain(openingTextOpacity, 0, 255);

  //opening background color
  background(116, 71, 79);

  // Fading text
  fill(255, 255, 255, openingTextOpacity);
  noStroke() // no outline for letters
  textSize(58);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("ABSCISSION\n\n", width / 2, height / 2)

  textStyle(ITALIC);
  textSize(26);
  text("[ab·scis·sion] ; noun\n", width / 2, height / 2 )

  textStyle(BOLD);
  textSize(38);
  text("\n\n\nThe natural detachment of parts of a plant, typically dead leaves and ripe fruit.", width / 2, height / 2);

  // Check is fading text is finished
  if (openingTextOpacity <= 0) {
    fadeInComplete = true;
}
}

/*----------------------------------------------------------------------------------- DRAW AND MAIN DRAW ----------------------------------------------------------------------------------- */

/*Draw function checks for fade in and continue to next screen */
function draw() {
  if (!fadeInComplete) {
    // If fade in is not complete, draw opening screen
    drawOpeningScreen();
  } else {
    // If fade in is complete, draw main screen
    drawMainScene();
  }
}

/*drawMainScence is the overall project (before opening) -- circles, ground, trees, background. drawBackground conists, fully, 
  of 6 colors -- 2 for each time of day. Directions are on top left for user. There are two sections for arrays -- one for the 
  transitioning colors for the circles and the positions for the circles(6 array for the x,y positions of each "layer" of the 
  circles. */
function drawMainScene() {

  drawBackground(topColor, bottomColor);

  fill(255); // Set text color to white
  noStroke() //Directional text does not have outline
  textSize(14);
  textAlign(LEFT, TOP);
  text("Press 'A' for Morning Sky\nPress 'S' for Afternoon Sky\nPress 'D' for Night Sky\nMove mouse to change leaf color\nClick to remove leaves", 20, 20);

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

  // Separate color positions for the three sets of circles. these colors go all the way to brown
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


  // Tree trunk length and width
  let trunkLength = 180;
  let trunkWidth = 30;

  // Ground
  noStroke();
  fill(84, 33, 10);
  rect(0, 700, windowWidth); // Left/right, up/down, "size"

  // drawTree(left/right (-/+), up/down, size(-/+), , # of recursions,thickness)
  drawTree(width / 4 - 260, height - 230, trunkLength, PI / 2, 4.5, trunkWidth * 0.7);     //1
  drawTree(width / 4 - 20, height - 0, trunkLength, PI / 2, 4.5, trunkWidth * 1.3);        //2
  drawTree(width / 4 + 240, height - 230, trunkLength - 100, PI / 2, 2, trunkWidth * 0.3); //3 
  drawTree(width / 4 + 530, height  - 90, trunkLength, PI / 2, 5, trunkWidth * 0.7);       //4
  drawTree(width / 4 + 630, height - 90, trunkLength - 100, PI / 2, 2, trunkWidth * 0.7);  //5
  drawTree(width / 4 + 1200, height - 0, trunkLength + 80, PI / 2, 5, trunkWidth * 3);     //7
  drawTree(width / 4 + 800, height - 231, trunkLength - 150, PI / 2, 3, trunkWidth * 0.1); //8

  // If statements are decremented using the state variable and the mouseClicked function
  //drawTree gets called extra here so that the last state is only tree
  if (state == 4){ //All 3 circle layers;   greenToBrownColorPosition, yellowToBrownColorPosition, thirdSetColorPosition
    drawCirclesWithColors(circleXPositionsGreenToBrown, circleYPositionsGreenToBrown, fillColorGreenToBrown); 
    drawCirclesWithColors(circleXPositionsYellowToBrown, circleYPositionsYellowToBrown, fillColorYellowToBrown);
    drawCirclesWithColors(circleXPositionsYellowToBrown2, circleYPositionsYellowToBrown2, fillColorYellowToBrown2);
    
  }
  if (state == 3){ //2 circle layers;   greenToBrownColorPosition, yellowToBrownColorPosition
    drawCirclesWithColors(circleXPositionsGreenToBrown, circleYPositionsGreenToBrown, fillColorGreenToBrown);
    drawCirclesWithColors(circleXPositionsYellowToBrown, circleYPositionsYellowToBrown, fillColorYellowToBrown);
  }
  if (state == 2){ // thirdSetColorPosition
    drawCirclesWithColors(circleXPositionsGreenToBrown, circleYPositionsGreenToBrown, fillColorGreenToBrown);
  }
  if (state == 1){ //BARE TREES ONLY
    drawTree(width / 4 - 260, height - 230, trunkLength, PI / 2, 4.5, trunkWidth * 0.7);     //1
    drawTree(width / 4 - 20, height - 0, trunkLength, PI / 2, 4.5, trunkWidth * 1.3);        //2
    drawTree(width / 4 + 240, height - 230, trunkLength - 100, PI / 2, 2, trunkWidth * 0.3); //3 
    drawTree(width / 4 + 530, height  - 90, trunkLength, PI / 2, 5, trunkWidth * 0.7);       //4
    drawTree(width / 4 + 630, height - 90, trunkLength - 100, PI / 2, 2, trunkWidth * 0.7);  //5
    drawTree(width / 4 + 1200, height - 0, trunkLength + 80, PI / 2, 5, trunkWidth * 3);     //7
    drawTree(width / 4 + 800, height - 231, trunkLength - 150, PI / 2, 3, trunkWidth * 0.1); //8
  }
}

/*---------------------------------------------------------------------------------------- FUNCTIONS ---------------------------------------------------------------------------------------- */

/*Function caculateColor calculates the fill colors for the circles according to their starting index in customColors.
  This functions uses lerpColor to interpolate between all the colors.*/
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

/* Function drawCirclesWithColors that actually outputs the circles in their postiions with the color gradient fill. */
function drawCirclesWithColors(xPositions, yPositions, baseColor) {
  let circleCount = xPositions.length;
  for (let i = 0; i < circleCount; i++) {
    let circleX = xPositions[i];
    let circleY = yPositions[i];
    let circleSize = map(i, 0, circleCount - 1, 50, 250); //circle amount, smallest size, biggest size

    fill(baseColor);
    noStroke(); // No outline for circles
    ellipse(circleX, circleY, circleSize, circleSize);
  }
}

/* Function mouseClicked decrements the variable state. This is used the drawMainScene function 
  So that the circles are momentarilly erased from the screen until the variable state reaches zero
  (returns state to it's original value). */
function mouseClicked() {
  state --;
  if (state == 0) {
    state = 4;
  }
}

/* drawTree is a recursive function to draw trees with trunks and branches */
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

/* Function Keypressed changed the colors of topColor and bottomColor of the background in 
  the drawMainScence function. 6 colors are used in total. */
function keyPressed() {
  if (key === 'A' || key === 'a') {
    // 6, 120, 164
    topColor = color(4, 89, 121); // Dark blue (top color)
    bottomColor = color(255, 213, 98); // Light yellow (bottom color)
  } else if (key === 'S' || key === 's') {
    topColor = color(58, 38, 71); // Dusty dark blue
    bottomColor = color(255, 150, 98); // Orangy-pink
  } else if (key === 'D' || key === 'd') {
    topColor = color(4, 1, 17);
    bottomColor = color(63, 59, 86);
  }
  drawBackground(topColor, bottomColor);
}

/*Function drawBackground uses the lerp and map function to draw the gradients for the keyPressed
  backgrounds. */
function drawBackground(c1, c2) {
  // Draw the background gradient within a specific region
  for (let i = 0; i < 700; i++) {
    let inter = map(i, 0, 700, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, i, windowWidth, i);
  }
}