# Set
The Set lets you store unique values of any type (it can be primitive or object references types)

Let us learn and understand more by looking from the below snippet code 
```javascript
var set = new Set();
set.add(1);
set.add(2);
set.add(3);

console.log(set.size);//3
console.log(set.has(1));//true
console.log(set.has('1'));//false
console.log(set.has(22));//false
```
In the above snippet the object is created and 3 items are added to it. It has property to check the size and method 'has' to check if item already added.


```javascript
var set = new Set();
set.add(1);
set.add(1);
set.add(1);

console.log(set.size);//1
```
Even though the code tries to add duplicate values to the object it is not throwing exception and size remains 1

```javascript
var set = new Set();
set.add(1);
set.add(2);
set.add(1);
set.add(1);

console.log(set.size);//2

set.delete(1);
console.log(set.size);//1
console.log(set);//Set { 2 }
```
In the above code an item added is removed using delete method.

```javascript
var items = new Set([1, 2, 3, 3, 5, 5]);
console.log(items);//Set { 1, 2, 3, 5 }
console.log(items.size);//4
```
The Set constructor accepts array as parameter and it ensures that there is no duplicate entries.

```javascript
var items = new Set([1, 2, 3, 4, 5]);
var val = items.values();
console.log(val.next().value);//1
console.log(val.next().value);//2

var val2 = items.values();
console.log(val2.next().value);//1
console.log(val2.next().value);//2
```
The values() method actually returns new Iterator object that contains the values for each element