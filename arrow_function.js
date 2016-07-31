var foo = function () { return 2; };
var boo = () => 2;//No curly braces for single-line arrow function bodies

console.log(foo());
console.log(boo());

//------------------------------------------------
var foo2 = (val) => { return val; };
console.log(foo2(33));

var boo2 = val => { return val; };//Brackets optional for single parameter
console.log(boo2(33));

//------------------------------------------------
var foo3 = (val1, val2) => { console.log(val1, val2); };
foo3(1, 2);

//var boo3 = val1, val2 => { console.log(val1, val2);};//SyntaxError: Unexpected token =>
//------------------------------------------------
let nums = [1, 2, 3];
let res = nums.map(x => x * x);
console.log(res);

//------------------------------------------------
function Widget() {
  this.id = 222;
  this.logLegacy = function () {
    console.log('Legacy', this.id);
  };
  this.logNew = () => {
    console.log('Arrow', this.id);
  };
};

new Widget().logLegacy();
new Widget().logNew();

var settings = { id: 555 };
new Widget().logLegacy.call(settings);
new Widget().logNew.call(settings);