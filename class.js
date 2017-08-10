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

//class Animal { }//SyntaxError: Identifier 'Animal' has already been declared
//var Animal = class {};//SyntaxError: Identifier 'Animal' has already been declared

var dog = new Animal('dog', 'barks');
console.log(dog.Noise);//BARKS
console.log(dog.name);//Animal
console.log(dog.AnimalName);//DOG
//So class.name is the name of the class which we have not defined but automatically gets defined

console.log(Animal.length);//2
//Similarly we didn't create property 'length' it is automatically included. Which is actually the number of parameters of class's constructor

class ClsA{
  constructor(a, b, c){

  }
}

class ClsB{
  constructor(a, b, c, d, e){
    
  }
}

console.log(ClsA.length);
console.log(ClsB.length);