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
  static IsFourLeged(animalName) {
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

Animal.Eats = function (foodName) {
  console.log('This animal eats ' + foodName);
};

Animal.IsFourLeged('dog');//yes
Animal.Eats('grass');//This animal eats grass
//Here Eats method is added on animal class (so this like a static method)

var animalInstance = new Animal('sheep', 'maaa maaa');//animal constructor
console.log(animalInstance.AnimalName, animalInstance.Noise);//sheep maaa maaa

Animal.IsFourLeged('dog');//This works because we are accessing static method of class so no instance required
//animalInstance.IsFourLeged('dog');//Uncaught TypeError: animalInstance.hasFourLegs is not a function
//IsFourLeged method is invoked on instance.

Animal.Eats('grass');////This works because we are accessing static method of class so no instance required
//animalInstance.Eats('grass');//Uncaught TypeError: animalInstance.eats is not a function
//eats method is invoked on instance