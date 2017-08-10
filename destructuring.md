# Destructuring Assignments
Destructure means 'dismantle' as per dictionary. In JavaScript destructuring assignment expression makes it possible to unpack/dismantle values from array or properties. Lets jump into the sample code

```javascript
var empDetails = {
  empid: 10982,
  name: 'John',
  salary: 2000000
};

function process(obj) {
  var empid = obj.empid;
  var name = obj.name;
  var salary = obj.salary;
  //do something...
  console.log(empid, name, salary);//10982 "John" 2000000
}

process(empDetails);
```
Here is the traditional way of assigning each properties to the variables inside the process() method. Now lets see the ES6 way of doing the same

```javascript
function process(obj) {
  let { empid, name, salary } = obj;
  //do something...
  console.log(empid, name, salary);//10982 "John" 2000000
}
```
Here we have reduced 2 lines of code. Here if the object's property and varible name should match else it won't work. What if, if you don't want the varible name to be 'eid' instead of 'empid'

```javascript
function process(obj) {
  let { empid: eid, name, salary } = obj;
  //do something...
  console.log(eid, name, salary);//10982 "John" 2000000
}
```
I have aliased the 'empid' with 'eid'. I have used the colon. Lets see what else destructuring can do

```javascript
var nums = [1, 2, 3, 4, 5];
var first = nums[0]
var second = nums[1];
var fifth = nums[4];
console.log(first, second, fifth);
```
Here we are trying to dismantle on an 'Array' and this can be rewritten like below in ES6

```javascript
var nums = [1, 2, 3, 4, 5];
var [first, second, , , fifth] = nums;
console.log(first, second, fifth);
```
You can see there are mulitiple commas used with no variable names. 

Previously in order to swap two variable we require 3 variables or have to do some calculations, now this can be done with ease. Similar kind of syntax available in python 
```javascript
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a);
console.log(b);
```
I am into software development for quite over a decade and I see these kind of syntactical sugary features are really intersting and cool. There is a saying like *less luggage more comfort* in the same way *less code less lines to debug*