class Fruit {
  constructor(name) {
    this.Name = name;
  }
}

var apple = new Fruit();
console.log(apple.Name);//undefined

var banana = new Fruit('banana');
console.log(banana.Name)//banana

//------------------------------------------------------------
class Mamal {
  constructor(name, noise) {
    this.Name = name;
    this.Noise = noise;
  }
  // constructor(name) {
  //  this.Name = name;
  // }
  //  Uncaught SyntaxError: A class may only have one constructor
  get Sounds() {
    return this.Noise;
  }
}

var dog = new Mamal('dog', 'barkes');
console.log(dog.Sounds);//barkes
dog.Sounds = 'sings';//get alone is implemented so changes won't get applied
console.log(dog.Sounds);//barkes