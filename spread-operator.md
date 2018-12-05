# Spread Operator

```javascript
var nums = [1, 2, 3];
console.log(nums);//[1, 2, 3]
console.log(...nums);//1 2 3
```

```javascript
function makeArrayOfTwo(a, b) {
  return [b, a];
}

var nums = [1, 2, 3];
console.log(nums);//[1, 2, 3]

console.log(makeArrayOfTwo(nums[0], nums[1]));//[2, 1]

//The above line can be rewritten as below
console.log(makeArrayOfTwo(...nums));//[2, 1]
```

## Composing an object

```javascript
var numArrayOne = [1, 2, 3];
var numArrayTwo = [4, 5, 6];

var nums = [...numArrayOne, ...numArrayTwo];
console.log(nums);//[1, 2, 3, 4, 5, 6]
```
In the above example we actullay combined both the arrays into one. Also array is of type `object`

Here is an another example
```javascript
var empObj = {name: 'Shiljo', age: 30};
console.log(empObj);//{name: 'Shiljo', age: 30}

var additionalProp = {gender: 'male', height: 180};
var empObj2 = {...empObj, ...additionalProp};

console.log(empObj);//{name: 'Shiljo', age: 30}

console.log(empFullObj);//{name: 'Shiljo', age: 30, gender: 'male', height: 180}
```
Here in the above example

* The `empObj` has a two properties `name` & `age`

* The `additionalProp` has two properties `gender` & `height`.

* In `empFullObj` we are combining properties of both `empObj` & `additionalProp`