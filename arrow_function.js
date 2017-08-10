//Parameterless Function
var fn1 = function () { return 2; };//Traditional way to create a function
var fn2 = () => { return 2 };
var fn3 = () => 2;//Curly braces for single-line arrow function bodies optional

console.log(fn1());//2
console.log(fn2());//2
console.log(fn3());//2

//Functions with single parameter
var fn4 = (val) => { return val; };
console.log(fn4(33));//33

var fn5 = val => { return val; };//Brackets optional for single parameter
console.log(fn5(33));//33

//Functions with multiple parameter
var fn6 = (one, two) => { return { one, two }; };
console.log(fn6(1, 2));//{ one: 1, two: 2 }