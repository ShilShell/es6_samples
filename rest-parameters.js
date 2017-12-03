function foo(...rparams) {
  var ret = { args: arguments.length, restargs: rparams.length };
  console.log(ret);
}

foo('a', '22');//{ args: 2, restargs: 2 };
foo();//{ args: 0, restargs: 0 };

//------------------------------------------------------

function bar(first, ...rparams) {
  var ret = { args: arguments.length, restargs: rparams.length };
  console.log(ret);
}

bar(1, 2, 3, 4);//{ args: 4, restargs: 3 };
bar();//{ args: 0, restargs: 0 };
//------------------------------------------------------

//function zoo(first, ...rparams, last) {} //Error