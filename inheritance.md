# Inheritance

```javascript
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
  static get DoesItEat() {
    return true;
  }
}
```
```javascript
class Dog extends Animal {
  constructor() {
    super('DOG', 'BARKS');//Animal constructor
    this._lifespan = 10;
  }
  get Lifespan() {
    return this._lifespan;
  }
}
```
```javascript
var dogInstance = new Dog();
console.log(dogInstance.AnimalName, dogInstance.Noise, dogInstance.Lifespan);//DOG BARKS 10
```