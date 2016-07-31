function getAddress() {
  return { city: 'Coimbatore', state: 'Tamilnadu', country: 'India' };
}

let {city, state, country} = getAddress();
console.log(city);//Coimbatore
console.log(state);//Tamilnadu
console.log(country);//India

console.log(city, state, country);//Coimbatore Tamilnadu India

//Alias---------------------------------------------
function getNames() {
  return { first: 'John', middle: 'Claude', last: 'Vandeme' };
}
let {first: f, middle: m, last: l} = getNames();
console.log(f);//John
console.log(m);//Claude
console.log(l);//Vandeme
//console.log(first);//ReferenceError: first is not defined
console.log(f, m, l);//John Claude Vandeme

//--------------------------------------------------
var empDetails = {
  empid: 10982,
  name: 'John',
  salary: 2000000
};

function processDetailsLegacy(obj) {
  var eid = obj.empid;
  var name = obj.name;
  var salary = obj.salary;
  console.log(eid, name, salary);//10982 "John" 2000000
}
processDetailsLegacy(empDetails);

function processDetailsNew(obj) {
  let {empid: eid, name, salary} = obj;
  console.log(eid, name, salary);//10982 "John" 2000000
}
processDetailsNew(empDetails);

function processDetailsNewOrder(obj) {
  let {salary, empid, name} = obj;
  console.log(empid, name, salary);//10982 "John" 2000000
}
processDetailsNewOrder(empDetails);

//Destructuing Array------------------------------------
var nums = [1, 2, 3, 4, 5];
var [first, second, , , fifth] = nums;
console.log(first, second, fifth);