# Template Literals
This feature was introduced in ES6 to have control over dynamic string. Lets start with an example

```javascript
var multiLineString = 'This is first line\n' +
    'This is second line\n' +
    'This is third line';

console.log(multiLineString);
/*
This is first line
This is second line
This is third line
*/
```
In the above code the in order to have multi line \n (new line) escape characters are used with concatenation + symbol with each string is contained between single quote ( ' ) or double quote ( " ). Now let see how this is handled with ES6 features

```javascript
var multiLineString = `This is first line
This is second line
This is third line`;

console.log(multiLineString);
/*
This is first line
This is second line
This is third line
*/
```
If you notice there is no + symbol used and string is contained within backtick ( ` ) character.

Now let see how expression are handled
```javascript
var dateString = new Date().toDateString();
var timeString = new Date().toTimeString();

console.log('Date: ' + dateString + ', Time: ' + timeString);

console.log(`Date: ${dateString}, Time: ${timeString}`);
```
Here in expression are passed like `${variable/expression}`

Few more examples with expressions
```javascript
console.log('Sum of 1 + 2 is ' + (1 + 2));//Sum of 1 + 2 is 3

console.log(`Sum of 1 + 2 is ${1+2}`);//Sum of 1 + 2 is 3
```

Now lets see how literal can be passed and HTML output can be generated
```javascript
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
/*
<section>
  <p>John</p>
  <p>34</p>
  <p>male</p>
</section>
*/
```
