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
  static hasFourLegs(animalName) {
    var ret = 'not sure';
    if (animalName === 'dog' || animalName === 'sheep' || animalName === 'cow') {
      ret = 'yes';
    }
    else if (animalName === 'hen') {
      ret = 'no';
    }
    console.log(ret);
  }
}

animal.eats = function (foodName) {
  console.log('This animal eats ' + foodName);
};

animal.hasFourLegs('dog');//yes
animal.eats('grass');//This animal eats grass
//notice here eats method is added on animal class (so this like a static method)

var animalInstance = new animal('sheep', 'maaa maaa');//animal constructor
console.log(animalInstance.animalName, animalInstance.noise);//sheep maaa maaa

animalInstance.hasFourLegs('dog');//Uncaught TypeError: animalInstance.hasFourLegs is not a function
//hasFourLegs method is invoked on animalInstance & since there is no implemention hence error

animalInstance.eats('grass');//Uncaught TypeError: animalInstance.eats is not a function
//eats method is invoked on animalInstance & since there is no implemention hence error