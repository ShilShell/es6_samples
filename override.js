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
  toString() {
    return this._animalName + ' ' + this._noise;
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
  toString() {
    return super.toString() + ' ' + this._lifespan;
    //To access base methods/properties use super
  }
}

var dogInstance = new dog(10);
//animal constructor
//dog constructor
console.log(dogInstance.animalName, dogInstance.noise, dogInstance.lifespan);//DOG BARKES 10
console.log(dogInstance.toString());//DOG BARKES 10

var animalInstance = new animal('SHEEP', 'MAA MAA');//animal constructor
console.log(animalInstance.toString());//SHEEP MAA MAA