# Inheritance

Here I will create an class called `Animal` which has read property of `AnimalName` and `Noise`.

```javascript
class Animal {
  
  constructor(animalName, noise) {
    this._animalName = animalName;
    this._noise = noise;
    console.log('Animal constructor');//Animal constructor
  }

  get animalName() {
    return this._animalName;
  }
  
  get noise() {
    return this._noise;
  }
}
```

Here we are inheriting the `Animal` class using `extends` keyword
```javascript
class Dog extends Animal {

  constructor() {
    super('DOG', 'BARKS');//Passing arguments to the base(Animal) class
    this._lifespan = 10;
    console.log('Dog constructor');//Dog constructor
  }
  
  get lifespan() {
    return this._lifespan;
  }
}
```
In the above block of code for the base class arguments are passed using the method `super` and the `_lifespace` variable is set to 10 in the constructor.

```javascript
var dogInstance = new Dog();
//Animal constructor
//Dog constructor

console.log(dogInstance.animalName, dogInstance.noise, dogInstance.lifespan);//DOG BARKS 10

console.log(dogInstance);//Dog { _animalName: 'DOG', _noise: 'BARKS', _lifespan: 10 }
```
Here when you create an instance for the class `Dog` it actually calls the base class so it outputs *Animal constructor*

When you try call properties (`animalName`, `noise`, `lifespan`) individually it outputs the internal variables (`_animalName`, `_noise`, `_lifespace`) respectively. Even though we call the properties without () brackets it is actully a method internally the proof is when you try to execute `console.log(dogInstance);` it outputs as *Dog { _animalName: 'DOG', _noise: 'BARKS', _lifespan: 10 }*

## Summary

* To inherit a class use the keyword `extends`
* To pass arguments to the constructor of the base class use `super`
* Multiple inheritance is not possible.
* Base class properties can be accessed in child class