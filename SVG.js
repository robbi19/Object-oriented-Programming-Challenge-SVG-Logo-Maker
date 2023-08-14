const draw = new svg().size(300, 200); 
if (answers.shape === 'circle') {
  draw.circle(100).move(50, 50).fill(answers.color); 
} else if (answers.shape === 'square') {
  draw.rect(150, 100).move(50, 50).fill(answers.color); 
} else if (answers.shape === 'triangle') {
  draw.polygon('50,150 150,150 100,50').fill(answers.color); 
}

draw.text(answers.text).move(50, 150); 

const svgContent = draw.svg(); 
fs.writeFileSync('logo.svg', svgContent, 'utf-8'); 
