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
  ToString() {
    return this._animalName + ' ' + this._noise;
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
  ToString() {
    return super.ToString() + ' ' + this._lifespan;
    //To access base methods/properties use super
  }
}

var dogInstance = new Dog(10);
//animal constructor
//dog constructor
console.log(dogInstance.AnimalName, dogInstance.Noise, dogInstance.Lifespan);//DOG BARKES 10
console.log(dogInstance.ToString());//DOG BARKES 10

var animalInstance = new Animal('SHEEP', 'MAA MAA');//animal constructor
console.log(animalInstance.ToString());//SHEEP MAA MAA