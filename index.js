const fs = require('fs');
const inquirer = require('inquirer');

class svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, 'utf-8');
  console.log("Generated: " + fileName);
}

async function init() {
  console.log("Starting init");
  const svgFile = "logo.svg";

  try {
    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);

    // Create an instance of Svg class using 'new'
    const svgInstance = new svg();

    // Initialize the SVG.js drawing canvas
    const draw = svg().size(300, 200);

    if (answers.shapeType === 'circle') {
      svgInstance.shapeElement = draw.circle(100).move(50, 50).fill(answers.shapeColor);
    } else if (answers.shapeType === 'square') {
      svgInstance.shapeElement = draw.rect(150, 100).move(50, 50).fill(answers.shapeColor);
    } else if (answers.shapeType === 'triangle') {
      svgInstance.shapeElement = draw.polygon('50,150 150,150 100,50').fill(answers.shapeColor);
    }

    svgInstance.textElement = draw.text(answers.text).move(50, 150);

    const svgContent = svgInstance.render();

    writeToFile(svgFile, svgContent);
  } catch (err) {
    console.error("Error:", err);
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

// Call the async function to start the program
init();
