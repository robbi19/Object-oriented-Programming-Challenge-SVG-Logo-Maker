class Shape{
  // Defines Shape to start color and  'color' value.
  
      constructor(){
          this.color=''
      }
      setColor(color){
          this.color=(color);
      }
  }
  // Defines a Square class to extends Shape w/fill, position, size
  class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
  }

  // Defines Circle to extends Shape w/ fill, position, size
  class Circle extends Shape{
      render(){
          return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
      }
  }
  
  // Defines a Triangle to extends Shape w/ fill, position, size
  class Triangle extends Shape{
      render(){
          //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
          return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
      }
  };
  
  module.exports = { Square,Circle, Triangle}