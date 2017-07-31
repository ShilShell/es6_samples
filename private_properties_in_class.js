const _animalName = Symbol('animalName');
const _noise = Symbol('noise');

class Animal {
  constructor(animalName, noise) {
    this[_animalName] = animalName;
    this[_noise] = noise;
    console.log('animal constructor');
  }
  get AnimalName() {
    return this[_animalName];
  }
  get Noise() {
    return this[_noise];
  }
}

var animalInstance = new Animal('DOG', 'BARKES');
console.log(animalInstance.AnimalName, animalInstance.Noise);// DOG BARKES
console.log(animalInstance);//Animal {}