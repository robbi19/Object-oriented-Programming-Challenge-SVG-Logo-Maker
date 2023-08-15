# Object-oriented-Programming-Challenge-SVG-Logo-Maker

## Description:
The application enables users to enter inputs into a inquirer prompt in order to generate a logo "logo.svg" file which contains the users desired results as an SVG image.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)


# Overview

## The Challenge:
Build a Node.js command-line application that takes in user inputs to generates a SVG logo and saves it as "logo.svg" file. In addition, create a walkthrough video that demonstrates its functionality and the passing of all of the tests.

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Usage Instructions
Most information came from class notes, stackflow and W3
1. Open the cloned repository in any source code editor e.g. Visual Studio Code.
2. Initialize Node.js Project: npm init
3. Install Dependencies:npm install inquirer svg.js  
4. Open integrated terminal on index.js
5. Enter “node index.js” in the command line
6. Through sequential order within the command line interface - the user will be presented with npm inquirer questions - the user will provide a response to each question and proceed.
7. Once completed a SVG file named "logo.svg" will be created.
8. At your discretion, you may rename the "logo.svg" file to the file name of your choice.



 ##  Screenshot  Video:
https://drive.google.com/file/d/1xAj09WRRPF-byGXxR6DMhvHXWaILB_Vu/view

## Screenshots:
### Figure 1. Command line application
<img width="905" alt="nodeindexjsscreenshot" src="https://github.com/robbi19/Object-oriented-Programming-Challenge-SVG-Logo-Maker/assets/128949831/aa4e4ced-60ec-43f5-a767-989002850582">

### Figure 2. Jest Testing "npm test"
<img width="914" alt="npmtestpassed" src="https://github.com/robbi19/Object-oriented-Programming-Challenge-SVG-Logo-Maker/assets/128949831/10bcda6a-7ccf-4991-bb04-72d05c689dd4">


### Figure 3. Generated "logo.svg" file
<img width="182" alt="Screenshot 2023-08-15 123831" src="https://github.com/robbi19/Object-oriented-Programming-Challenge-SVG-Logo-Maker/assets/128949831/9c9819e1-02ed-4782-aea3-b253365a88f4">



## Installation Process
1. Clone the repository: 
2. Install the following: 
- Node.JS [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Jest [Version 29.4.3](https://www.npmjs.com/package/jest)
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
3. Open the cloned repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided above in section (2.) to ensure the cloned documentation will operate.


