# Default Parameter
The objective this functionaliry is about assigning default parameter in case parameters are not passed to the method. Similar functionality existed long before in languages like Visual Basic and .Net languages. So lets see the code in action

```javascript
const MIN_SALARY = 1000;

function updateSalary(empid, salary) {
    if (salary === undefined) {
        salary = MIN_SALARY;
    }
    //do something...
    console.log(empid, salary);
}

updateSalary('E1234');//E1234 1000
```
In the above snippet code whenever salary is undefined (i.e. salaray parameter value is not passed) it is performing conditional check and if condition matches(i.e. undefined) MIN_SALARY is set. This can be avoided using default parameters

```javascript
function updateSalary(empid, salary = MIN_SALARY) {
    //do something...
    console.log(empid, salary);
}
```
Here is the new way implementing the same function 'updateSalary' if you notice in the parameter salar is assigned with 'MIN_SALARY' in the method signature. Functionally both implementations are same. Lets see more on default parameters 

```javascript
function generateRandomId() {
    return Math.ceil(Math.random() * 10000000) + new Date().getTime();
}

function updateId(id) {
    if (id === undefined) {
        id = generateRandomId();
    }
    //do something..
    console.log('Id:' + id);
}
```
Here generateRandomId() method returns random number and whenever updateId() method doesn't receive value for 'id' parameter it is assigned with random number received from generateRandomId()

```javascript
function updateId(id = generateRandomId()) {
    //do something..
    console.log('Id:' + id);
}
```
Here is the new way of handling using default parameter and if you notice a method's return value is assigned to the 'id' parameter in the method signature