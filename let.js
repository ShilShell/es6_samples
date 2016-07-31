var a = 1;
function foo() {
  let b = 2;
  console.log(b);
  console.log(a);
}

foo();
//console.log(b);//Uncaught ReferenceError: b is not defined