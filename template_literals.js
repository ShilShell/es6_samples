var name = 'Shiljo';
var wish = "All the best";

console.log('Hi ' + name + ', ' + wish);//Hi Shiljo, All the best
//the above the legacy way of doing

var message = `Hi ${name}, ${wish}`;
console.log(message);//Hi Shiljo, All the best
//The above using template literals
//if you notice here single/double quote is not used instead backtick(`)