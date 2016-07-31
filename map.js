//Map is like Key-Value object
var map = new Map();
map.set('name', 'Shiljo');
console.log(map.get('name'));//Shiljo

map.set(1, true);
console.log(map.has(1));//true
console.log(map.has('1'));//false
console.log(map.get(1));//true

map.set('userdetails', { userid: 433, name: 'shiljo' });
console.log(map.get('userdetails'));//Object {userid: 433, name: "shiljo"}
console.log(map.entries());//MapIterator {["name", "Shiljo"], [1, true], ["userdetails", Object]}
console.log(map.size);//3
map.set(1, 1);
console.log(map.entries());//MapIterator {["name", "Shiljo"], [1, 1], ["userdetails", Object]}