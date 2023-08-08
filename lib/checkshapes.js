const { Square, Circle,Triangle } = require("./shapes");

// Square Shape
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        const color = 'green'; 
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="200" width="200" fill="${color}"></rect>`); // Added y attribute and closing </rect> tag
    });
});

// Circle Shape
describe('Circle', () => {
  test('renders correctly', () => {
      const shape = new Circle();
      const color = 'blue'; 
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle>`); // Added closing </circle> tag
  });
});

// Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        const color = 'pink'; 
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill="${color}"></polygon>`); // Removed unnecessary height and width attributes and added closing </polygon> tag
    });
});
