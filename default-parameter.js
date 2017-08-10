const MIN_SALARY = 1000;
function updateSalary_Legacy(empid, salary) {
  if (salary === undefined) {
    salary = MIN_SALARY;
  }
  console.log(empid, salary);
}

//Function with default parameter
function updateSalary_New(empid, salary = MIN_SALARY) {
  console.log(empid, salary);
}

updateSalary_Legacy('E1234');//E1234 1000

updateSalary_New('E1234');//E1234 1000

function getRandomId() {
  return Math.ceil(Math.random() * 10000000) + new Date().getTime();
}

function updateId_Legacy(id) {
  if (id === undefined) {
    id = generateRandomId();
  }
  console.log('Id:' + id);
}
updateId_Legacy();
updateId_Legacy(1);

//function as default parameter
function updateId_New(id = getRandomId()) {
  console.log('Id:' + id);
}

updateId_New();
updateId_New(1);