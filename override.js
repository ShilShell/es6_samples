class Animal {
  constructor(animalName, noise) {
    this._animalName = animalName;
    this._noise = noise;
    console.log('Animal constructor');//Animal constructor
  }
  get AnimalName() {
    return this._animalName;
  }
  get Noise() {
    return this._noise;
  }
  ToString() {
    return this._animalName + ' ' + this._noise;
  }
}

class Dog extends Animal {
  constructor(lifespan) {
    super('DOG', 'BARKES');//Animal constructor
    this._lifespan = lifespan;
    console.log('Dog constructor');//Dog constructor
  }
  get Lifespan() {
    return this._lifespan;
  }
  ToString() {
    return super.ToString() + ' ' + this._lifespan;
    //To access base methods/properties use super
  }
}

var dogInstance = new Dog(10);
//Animal constructor
//Dog constructor
console.log(dogInstance.AnimalName, dogInstance.Noise, dogInstance.Lifespan);//DOG BARKES 10
console.log(dogInstance.ToString());//DOG BARKES 10

var animalInstance = new Animal('SHEEP', 'MAA MAA');//Animal constructor
console.log(animalInstance.ToString());//SHEEP MAA MAA