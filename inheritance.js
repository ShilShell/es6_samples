class animal {
  constructor(animalName, noise) {
    this._animalName = animalName;
    this._noise = noise;
    console.log('animal constructor');
  }
  get animalName() {
    return this._animalName;
  }
  get noise() {
    return this._noise;
  }
}

class dog extends animal {
  constructor(lifespan) {
    super('DOG', 'BARKES');//animal constructor
    this._lifespan = lifespan;
    console.log('dog constructor');//dog constructor
  }
  get lifespan() {
    return this._lifespan;
  }
}

console.log(dog.animalName, dog.noise, dog.lifespan);//undefined undefined undefined
console.log(animal.animalName, animal.noise, animal.lifespan);//undefined undefined undefined

console.log(animal.name);//animal
console.log(dog.name);//dog
//so class.name is the name of the class

var dogInstance = new dog(10);
console.log(dogInstance.animalName, dogInstance.noise, dogInstance.lifespan);//DOG BARKES 10