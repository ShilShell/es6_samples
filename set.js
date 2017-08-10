//Set is like an array and has iterator methods(entries and values)
var set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
console.log(set1.size);//3
console.log(set1.has(1));//true
console.log(set1.has('1'));//false
console.log(set1.has(22));//false

var set2 = new Set();
set2.add(1);
set2.add(1);
set2.add(1);
console.log(set2.size);//1

var set3 = new Set();
set3.add(1);
set3.add(2);
set3.add(1);
set3.add(1);
console.log(set3.size);//2
set3.delete(1);
console.log(set3.size);//1
console.log(set3);//Set { 2 }

var items = new Set([1, 2, 3, 3, 5, 5]);
console.log(items);//Set { 1, 2, 3, 5 }
console.log(items.size);//4

var val = items.values();
console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value);