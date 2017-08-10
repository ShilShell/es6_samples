class Animal {
  constructor(animalName, noise) {
    this._animalName = animalName;
    this._noise = noise;
  }
  get AnimalName() {
    return this._animalName;
  }
  get Noise() {
    return this._noise;
  }
  static IsFourLeged(animalName) {
    let fourLeggedAnimals = ['dog', 'sheep', 'cow', 'tiger', 'lion'];
    return fourLeggedAnimals.indexOf(animalName) === 0 ? 'yes' : 'no idea';
  }
}

Animal.Eats = function (animalName, foodName) {
  console.log(animalName + ' eats ' + foodName);
};

Animal.IsFourLeged('dog');//yes
Animal.Eats('sheep', 'grass');//sheep eats grass
//Here Eats method is added on animal class (so this like a static method)

var animalInstance = new Animal('sheep', 'maaa maaa');
console.log(animalInstance.AnimalName, animalInstance.Noise);//sheep maaa maaa

console.log(Animal.IsFourLeged('dog'));//yes
//This works because we are accessing static method of class so no instance required
//animalInstance.IsFourLeged('dog');//Uncaught TypeError: animalInstance.hasFourLegs is not a function
//IsFourLeged method is invoked on instance.

Animal.Eats('goat', 'grass');//goat eats grass
//This works because we are accessing static method of class so no instance required
//animalInstance.Eats('grass');//Uncaught TypeError: animalInstance.eats is not a function
//eats method is invoked on instance