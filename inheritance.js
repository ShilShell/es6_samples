class Animal {
  constructor(animalName, noise) {
    this._animalName = animalName;
    this._noise = noise;
    console.log('animal constructor');
  }
  get AnimalName() {
    return this._animalName;
  }
  get Noise() {
    return this._noise;
  }
}

class Dog extends Animal {
  constructor(lifespan) {
    super('DOG', 'BARKES');//animal constructor
    this._lifespan = lifespan;
    console.log('dog constructor');//dog constructor
  }
  get Lifespan() {
    return this._lifespan;
  }
}

console.log(Dog.AnimalName, Dog.Noise, Dog.Lifespan);//undefined undefined undefined
console.log(Animal.AnimalName, Animal.Noise, Animal.Lifespan);//undefined undefined undefined

console.log(Animal.name);//Animal
console.log(Dog.name);//Dog
//so class.name is the name of the class which have not defined but automatically gets defined

var dogInstance = new Dog(10);
console.log(dogInstance.AnimalName, dogInstance.Noise, dogInstance.Lifespan);//DOG BARKES 10