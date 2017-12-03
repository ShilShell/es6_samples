# Arrow functions
Arrow functions are actually a simplified way to creating a function by using combination of characters such as =>

## Functions with no Parameters
Here is the Traditional way by which we create a function
```javascript
var fn = function () { return 2; };
```
The same function can be written with arrow function like show below
```javascript
var fn = () => { return 2 };
```
Curly braces are optional if there is no parameters are passed
```javascript
var fn = () => 2;
```

## Function with Parameters
Here is the Traditional way by which we create a function
```javascript
var fn = function (val) { return val; };
```
The same function can be written with arrow function like show below
```javascript
var fn = (val) => { return val; };
```
In the below snippet the brackets are optional for single parameter function
```javascript
var fn = val => { return val; };
```

Here is the function with multiple parameters
```javascript
var fn = (one, two) => { return { one, two }; };
```