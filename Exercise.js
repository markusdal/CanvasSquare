const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Size of each square
const squareSize = 50; 

// Array to hold the positions of the squares
const squares = []; 

// Max attempts to place a square
const maxAttempts = 10000;

// Function to check if a new square overlaps with existing ones
function isOverlapping(x, y) {

  for (let square of squares) {
    let distanceX = Math.abs(x - square.x);
    let distanceY = Math.abs(y - square.y);

    if (distanceX < squareSize && distanceY < squareSize) {
      return true;
    }
  }
  return false;
}

// Function to randomly place squares on the canvas
function placeSquares(numSquares) {
  let attempts = 0;

  while (squares.length < numSquares && attempts < maxAttempts) {
    let randomX = Math.floor(Math.random() * (canvasWidth - squareSize));
    let randomY = Math.floor(Math.random() * (canvasHeight - squareSize));

    if (!isOverlapping(randomX, randomY)) {
      // Store the position of the new square
      squares.push({ x: randomX, y: randomY });

      // Draw the square
      ctx.fillStyle = getRandomColor();
      ctx.fillRect(randomX, randomY, squareSize, squareSize);
    }
    attempts++;
  }
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Fill the canvas with the specified amount of squares(if possible)
placeSquares(100); 