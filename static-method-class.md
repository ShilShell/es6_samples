# Static Method in Class
Static method calls are made directly on the class and cannot make calls on instances of the class. The static methods are similar to normal methods but with `static` keyword assigned to the front of the method

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
    
    static IsFourLegged(animalName) {
        let animals4Legged = ['dog', 'sheep', 'cow', 'tiger', 'lion'];

        return animals4Legged.indexOf(animalName) === 0 ? 'yes' : 'no idea';
  }

}
```
Here IsFourLegged() method is a static method.

```javascript
console.log(Animal.IsFourLegged('sheep'));//yes

var animalInstance = new Animal('dog', 'barks');
console.log(animalInstance.AnimalName);//dog

console.log(animalInstance.IsFourLegged('sheep'));///Uncaught TypeError: animalInstance.IsFourLegged is not a function
```
So static method calls cannot be made on instance if you try you will get `Uncaught TypeError`

```javascript
Animal.Eats = function (animalName, foodName) {
    console.log(animalName + ' eats ' + foodName);
};
```
It will create a static method `Eats`. This is the alternate way of including additional static methods to a class. Important thing to notice here is the Eats() method implemented outside the class implementation

```javascript
console.log(Animal.Eats('tiger', 'flesh'));//tiger eats flesh
```