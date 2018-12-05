class Animal {
  constructor(animalName, noise) {
    this._animalName = animalName;
    this._noise = noise;
  }
  get animalName() {
    return this._animalName;
  }
  get noise() {
    return this._noise;
  }
  static get DoesItEat() {
    return true;
  }
}

class Dog extends Animal {
  constructor() {
    super('DOG', 'BARKS');//Animal constructor
    this._lifespan = 10;
  }
  get lifespan() {
    return this._lifespan;
  }
}

var dogInstance = new Dog();
console.log(dogInstance.animalName, dogInstance.noise, dogInstance.lifespan);//DOG BARKS 10
console.log(dogInstance);//Dog { _animalName: 'DOG', _noise: 'BARKS', _lifespan: 10 }