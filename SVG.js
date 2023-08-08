const draw = SVG().size(300, 200); // Initialize the SVG.js drawing canvas with a size of 300x200

if (answers.shape === 'circle') {
  draw.circle(100).move(50, 50).fill(answers.color); // Draw a circle with a radius of 100 at position (50, 50) and fill it with the specified color
} else if (answers.shape === 'square') {
  draw.rect(150, 100).move(50, 50).fill(answers.color); // Draw a rectangle with width 150 and height 100 at position (50, 50) and fill it with the specified color
} else if (answers.shape === 'triangle') {
  draw.polygon('50,150 150,150 100,50').fill(answers.color); // Draw a triangle using the specified points and fill it with the specified color
}

draw.text(answers.text).move(50, 150); // Draw the user's input text at position (50, 150)

const svgContent = draw.svg(); // Get the SVG content as a string
fs.writeFileSync('logo.svg', svgContent, 'utf-8'); // Write the SVG content to a file named 'logo.svg' using the 'fs' module

