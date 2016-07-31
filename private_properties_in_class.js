const _animalName = Symbol('animalName');
const _noise = Symbol('noise');

class animal {
  constructor(animalName, noise) {
    this[_animalName] = animalName;
    this[_noise] = noise;
    console.log('animal constructor');
  }
  get animalName() {
    return this[_animalName];
  }
  get noise() {
    return this[_noise];
  }
}

var animalInstance = new animal('DOG', 'BARKES');
console.log(animalInstance.animalName, animalInstance.noise);
console.log(animalInstance);