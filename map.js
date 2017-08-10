//Map is like Key-Value object
var map = new Map();
map.set('name', 'Shil');
console.log(map.get('name'));//Shil

map.set('name', 'Joe');
console.log(map.get('name'));//Joe

map.set(100, true);
console.log(map.has(100));//true
console.log(map.has('100'));//false
console.log(map.get(100));//true

console.log(map.has(999));//false
console.log(map.get(999));//undefined

console.log(map.keys());//MapIterator { 'name', 1 }
console.log(map.values());//MapIterator { 'Joe', true }

map.delete(100);
console.log(map.size);//1
console.log(map.keys());//MapIterator { 'name' }