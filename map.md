# Map
The Map object holds key-value pairs. Any type (it can be primitive or object references types) may be used as either a key or a value.

Let us learn and understand more by looking from the below snippet code 
```javascript
var map = new Map();
map.set('name', 'Shil');
console.log(map.get('name'));//Shil

map.set('name', 'Joe');
console.log(map.get('name'));//Joe

console.log(map.size);//1
```
Here key value is added to the Map with value 'Shil' latter it is updated with new value of 'Joe'. It actually updates the value accordingly.

```javascript
map.set(100, true);
console.log(map.has(100));//true
console.log(map.has('100'));//false
console.log(map.get(100));//true

console.log(map.has(999));//false
console.log(map.get(999));//undefined
```
Here if you notice 100 (number) is not same as '100'(string). The code is trying to fetch the value for the non existing key but it is not throwing exception instead it return undefined. Those who are from C# background might why am I have mentioned about 'exection'. In C#, if you try to access the non existing key it will throw an exception :) 

```javascript
console.log(map.keys());//MapIterator { 'name', 100 }
console.log(map.values());//MapIterator { 'Joe', true }
```
The methods keys() and values() will return new iterator object

```javascript
map.delete(100);
console.log(map.size);//1
console.log(map.keys());//MapIterator { 'name' }
```
So here comes the way to remove the key-value from Map