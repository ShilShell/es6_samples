var a = 'a';

function foo() {
  console.log(a);//a

  let b = 'b';
  console.log(b);//b

  var c = 'c';
  console.log(c);//c

  if (c === 'c') {
    let d = 'd';
    console.log(d);//d
    var e = 'e';
    console.log(e);//e

    {
      let f = 'f';
      console.log(f)//f
    }
    //console.log(f)//ReferenceError: f is not defined
  }
  //console.log(d);//Uncaught ReferenceError: d is not defined
  console.log(e);//e
}

foo();
console.log(a);
//console.log(b);//Uncaught ReferenceError: b is not defined
//console.log(c);//ReferenceError: c is not defined

//So any variable created inside a function is not accessible outside the function
//and function can access variables which are outside the function
//varibles created with let is accessible only within the block {}