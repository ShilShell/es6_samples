var multiLineString1 = 'This is first line\n' +
    'This is second line\n' +
    'This is third line';
console.log(multiLineString1);

var multiLineString2 = `This is first line
This is second line
This is third line`;
console.log(multiLineString2);

var dateString = new Date().toDateString();
var timeString = new Date().toTimeString();

console.log('Date: ' + dateString + ', Time: ' + timeString);
//the above is legacy way of doing

console.log(`Date: ${dateString}, Time: ${timeString}`);
//Using template literals. Here single/double quote is not used instead backtick(`)

console.log('Sum of 1 + 2 is ' + (1 + 2));
//the above is legacy way of doing

console.log(`Sum of 1 + 2 is ${1 + 2}`);

var empDetails = {
    name: 'John',
    age: 34,
    gender: 'male'
}

function renderHtml(data) {
    return `
    <section>
        <p>${data.name}</p>
        <p>${data.age}</p>
        <p>${data.gender}</p>
    </section>`;
}

console.log(renderHtml(empDetails));
//<section>
//  <p>John</p>
//  <p>34</p>
//  <p>male</p>
//</section>