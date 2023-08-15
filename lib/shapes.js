class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  createText() {
    return `<text font-weight="bold" x="100" y="100" font-size="70" text-anchor="middle" dominant-baseline="central" font-family="monospace" fill="${this.textColor}">${this.text}</text>`;
  }

  render() {
    return this.createShape() + this.createText();
  }
}

class Circle extends Shape {
  createShape() {
    return `<circle cx="50%" cy="50%" r="100" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  createShape() {
    return `<rect x="50" y="50" height="200" width="200" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  createShape() {
    return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />`;
  }
}

class Shield extends Shape {
  createShape() {
    return `<polygon points="0,0 200,0 200,100 100,200 0,100" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Square, Triangle, Shield };


