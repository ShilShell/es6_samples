# Rest Parameters
The rest parameter syntax allows us to represent an indefinite number of arguments as an array. The rest parameters starts with ... and it should be the last parameter of a function

```javascript
function foo(...rparams) {
  var ret = { 
      args: arguments.length, 
      restargs: rparams.length 
  };
  console.log(ret);
}
```

In the below snippet if you notice when two parameters are passed it's *arguments.length* is 2
```javascript
foo('a', '22');//{ args: 2, restargs: 2 };
```

```javascript
foo();//{ args: 0, restargs: 0 };
```
Here is an another example with a regular parameter and rest parameter 
```javascript
function foo(first, ...rparams) {
  var ret = { 
      args: arguments.length, 
      restargs: rparams.length 
  };
  console.log(ret);
}
```

So if we look at the below snippet *arguments.length* is 4 and rest parameters length is 3
```javascript
foo(1, 2, 3, 4);//{ args: 4, restargs: 3 };
```

The below snippet will throw an error
```javascript
function zoo(first, ...rparams, last) {} //Error
```