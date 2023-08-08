// Import required modules
const filesystem = require('fs'); 
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const svg = require('./svg.js');

// Inside the try block of your `init` function
svg.textElement = draw.text(answers.text).move(50, 150);
if (answers.shapeType === 'circle') {
  svg.shapeElement = draw.circle(100).move(50, 50).fill(answers.shapeColor);
} else if (answers.shapeType === 'square') {
  svg.shapeElement = draw.rect(150, 100).move(50, 50).fill(answers.shapeColor);
} else if (answers.shapeType === 'triangle') {
  svg.shapeElement = draw.polygon('50,150 150,150 100,50').fill(answers.shapeColor);
}

const svgContent = svg.render();

// Write the SVG content to a file
filesystem.writeFileSync(svgFile, svgContent, 'utf-8');



// Define a class for SVG content
class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }


  // SVG  with shape and text
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
}
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'TEXT: Enter up to 1 to 3 Characters:',
    validate: (input) => {
      if (input.trim().length > 0 && input.trim().length <= 3) {
        return true;
      }
      return 'Please enter 1 to 3 characters.';
    },
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'SHAPE COLOR: Enter a color keyword (OR number):',
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Choose which shape you would like?',
    choices: ['Square', 'Circle', 'Triangle'],
  },
];

// Function to write data to a file
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]");
  filesystem.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Congrats, you have Generated a logo.svg!");
  });
}

// start the application
async function init() {
  console.log("Starting init");
  var svgString = "";
  var svgFile = "logo.svg";

  try {
    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);
    const draw = SVG().size(300, 200); 

    if (answers.shapeType === 'circle') {
      draw.circle(100).move(50, 50).fill(answers.shapeColor);
    } else if (answers.shapeType === 'square') {
      draw.rect(150, 100).move(50, 50).fill(answers.shapeColor);
    } else if (answers.shapeType === 'triangle') {
      draw.polygon('50,150 150,150 100,50').fill(answers.shapeColor);
    }

    draw.text(answers.text).move(50, 150);

    const svgContent = draw.svg(); 

    // Write the SVG content to a file
    fs.writeFileSync(svgFile, svgContent, 'utf-8');
    
    console.log("SVG content has been written to " + svgFile);
  } catch (err) {
    console.error("Error:", err);
  }
}

init();

