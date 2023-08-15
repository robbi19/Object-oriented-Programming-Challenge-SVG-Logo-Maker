const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle, Shield } = require('./lib/shapes');
const validateColor = require("validate-color").default;

class SVGLogoGenerator {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 200 200" width="200" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
}

class Logo {
  constructor(shape) {
    this.shape = shape;
  }

  createShape() {
    return this.shape.render();
  }

  createText() {
    return this.shape.textElement;
  }
}

function writeToFile(fileName, data) {
  console.log(`Writing [${data}] to file [${fileName}]`);
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Logo.svg file created!");
  });
}

async function getLogoInfo() {
  try {
    const answers = await inquirer.prompt(questions);

    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'Square':
        shape = new Square(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'Triangle':
        shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'Shield':
        shape = new Shield(answers.text, answers.textColor, answers.shapeColor);
        break;
      default:
        console.log('Switch case error');
    }

    const logo = new Logo(shape);

    const svgInstance = new SVGLogoGenerator();
    svgInstance.shapeElement = logo.createShape();
    svgInstance.textElement = logo.createText();
    const svgContent = svgInstance.render();

    writeToFile('logo.svg', svgContent);
  } catch (err) {
    console.error("Error:", err);
  }
}

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please type a logo acronym in 3 characters or less:',
    validate: confirmTextLength
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter a text color :',
    default: 'white',
    validate: validateColor
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please enter a logo shape',
    choices: ['Circle', 'Square', 'Triangle', 'Shield'],
    default: 0
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a shape color :',
    default: 'red',
    validate: validateColor
  },
];


function confirmTextLength(input) {
  if ((input.trim() !== '') && (input.trim().length <= 3)) {
    return true;
  }
  return 'Please enter an input of 1 to 3 characters';
}

getLogoInfo();
