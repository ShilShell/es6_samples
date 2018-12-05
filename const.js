const PI = 3.142;
console.log(typeof(PI));
console.log(PI);//number

//PI = 33;//ReferenceError: f is not defined
//const PI = 3;//SyntaxError: Identifier 'PI' has already been declared

const empObj = {name: 'Shiljo', age: 30};
console.log(empObj);//{name: 'Shiljo', age: 30}
console.log(typeof(empObj));//object

empObj.age = 28;
console.log(empObj);//{name: 'Shiljo', age: 28}

empObj.name = 'Paul';
console.log(empObj);//{name: 'Paul', age: 28}

empObj = {name: 'Abram', age: 45};//error