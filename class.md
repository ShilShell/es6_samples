# Class
As we all know JavaScript is an object-oriented language (prototype based). That means classes in JavaScript too is prototype based. The concept of class is not new in JavaScript but the keyword class is new, the keyword `class` is actually a syntactical sugar over the function and function is first class citizen. Lets see how new feature/syntatic sugar looks

```javascript
class Animal {

  constructor(animalName, noise) {
    this._animalName = animalName;
    this._noise = noise;
  }
  
  // constructor(name) {
  //  this.Name = name;
  // }
  //  Uncaught SyntaxError: A class may only have one constructor

  get AnimalName() {
    return this._animalName.toUpperCase();
  }
  get Noise() {
    return this._noise.toUpperCase();
  }
}
```
In the above snippet code class `Animal` is created with a constructor which accepts two parameters (animalName, noise). Currently class can have only one constructor if you try to have multiple it would throw `SyntaxError`. Next is we have two properties `AnimalName` and `Noise` which doesn't implement set. So it is like a readonly property

```javascript
class Animal { }//SyntaxError: Identifier 'Animal' has already been declared

var Animal = class {};//SyntaxError: Identifier 'Animal' has already been declared
```
If you try to create class with same name you will `SyntaxError`. A class can be created similar to how we create function which is what illustrated in the last line of the code.

```javascript
var dog = new Animal('dog', 'barks');
console.log(dog.Noise);//BARKS
console.log(dog.AnimalName);//DOG
```
Here an instance is created for the `Animal` class. If you notice dog.Noise returns 'barks' where Noise is the property where as dog.name is not property which we created but it returns 'Animal'. Here class.name is the name of the class which we have not defined but automatically gets included.

```javascript
console.log(typeof(dog));//object
console.log(typeof(Animal));//function
```
I was mentioning that the keyword `class` is syntatic sugar of function and here is the proof the typeof(Animal) is a function & the instance of any class which you create is of type is `object`.

```javascript
console.log(Animal.length);//2
```
Similarly we didn't create property `length` it is automatically included which is actually the number of parameters of class's constructor

```javascript
class ClsA{
  constructor(){
  }
}

class ClsB{
  constructor(a, b, c){    
  }
}

class ClsC{
  constructor(a, b, c, d, e){    
  }
}

console.log(ClsA.length);//0
console.log(ClsB.length);//3
console.log(ClsC.length);//5
```
So it is better not to name any static properties with `name` and `length`

## Summary

* Single constructor is allowed in a class.
* Read property starts with `get` keyword.
* Write propery starts with `set` keyword.
* Instance of class will have default property of `length` which actually tells the number of arguments it can accept in an constructor.
* The typeof instance of class is `object`
* The typeof class is `function`