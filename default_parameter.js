function setSalaryLegacy(empid, salary, age) {
  if (salary === undefined) {
    salary = 0;
  }
  console.log(empid, salary, age);
}

function setSalaryNew(empid, salary = 0, age) {
  console.log(empid, salary, age);
}

setSalaryLegacy('E1234');//E1234 0 undefined

setSalaryNew('E1234');//E1234 0 undefined

setSalaryNew('E1234', null);//E1234 null undefined

//Function as default parameter-----------------------------------
function getRandomId() {
  return Math.ceil(Math.random() * 10000000) + new Date().getTime();
}

function generate(id = getRandomId()) {
  console.log('Id:' + id);
}
generate();
generate(1);