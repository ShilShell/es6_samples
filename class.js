class fruit {
  constructor(name) {
    this.name = name;
  }
}

var apple = new fruit();
console.log(apple.name);//undefined

var banana = new fruit('banana');
console.log(banana.name)//banana

//------------------------------------------------------------
class mamal {
  constructor(name, noise) {
    this.name = name;
    this.noise = noise;
  }
  // constructor(name) {
  //  this.name = name;
  // }
  //  Uncaught SyntaxError: A class may only have one constructor
  get sounds() {
    return this.noise;
  }
}

var dog = new mamal('dog', 'barkes');
console.log(dog.sounds);//barkes
dog.sounds = 'sings';//get alone is implemented so not updated & doesn't throw error so need to be careful
console.log(dog.sounds);//barkes