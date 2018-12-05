# Override in Class

Here is the base class
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

  toString() {
    return this._animalName + ' ' + this._noise;
  }
}
```
Here is the inherited class `Dog` from `Animal` class

```javascript
class Dog extends Animal {

  constructor(lifespan) {
    super('DOG', 'BARKES');//Animal constructor
    this._lifespan = lifespan;
    console.log('Dog constructor');//Dog constructor
  }

  get lifespan() {
    return this._lifespan;
  }
  
  toString() {
    return super.toString() + ' ' + this._lifespan;
    //To access base methods/properties use super
  }
}
```
Here if you notice the base class `Animal` has a method named `toString` and it can overrided by having new implementation in the derived class `Dog` as well. In case if you want access the base class implementation of `toString` use `super` followed by the method.

```javascript
var dogInstance = new Dog(10);
//Animal constructor
//Dog constructor

console.log(dogInstance.AnimalName, dogInstance.Noise, dogInstance.Lifespan);//DOG BARKES 10

console.log(dogInstance.toString());//DOG BARKES 10
```

```javascript
var animalInstance = new Animal('SHEEP', 'MAA MAA');//Animal constructor

console.log(animalInstance.toString());//SHEEP MAA MAA
```

## Summary
* To override a method have the implementation with same name in the derived class
* To access the method of base class use `super`