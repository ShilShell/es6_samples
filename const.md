# Const (Constant)
This is one of the new features introduced in ES6. Contant are similar to variables and cannot be modified. It's like readonly varible and cannot be `reassigned` or `redeclared`. Here are the samples

```javascript
const PI = 3.142;
console.log(typeof(PI));//number
console.log(PI);//3.142
//PI = 33;//ReferenceError: f is not defined
//const PI = 3;//SyntaxError: Identifier 'PI' has already been declared
```

Lets take another example
```javascript
const empObj = {name: 'Shiljo', age: 30};
console.log(typeof(empObj));//object
console.log(empObj);//{name: 'Shiljo', age: 30}

empObj.age = 28;
console.log(empObj);//{name: 'Shiljo', age: 28}

empObj.name = 'Paul';
console.log(empObj);//{name: 'Paul', age: 28}

//empObj = {name: 'Abram', age: 45};//error
```
Here const 'empObj' is an object and if you try to change it property/field it will allow you to change but it wouldn't allow you to `reassign` new value to the const 'empObj'.