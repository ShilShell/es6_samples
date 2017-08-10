## Var

`The variable statement declares a variable, optionally initializing it to a value - MDN web docs`

## Let

Let is the new keyword introduced in ES6.

`The let statement declares a block scope local variable, optionally initializing it to a value - MDN web docs`

```javascript
var a = 'a';

function foo() {
    console.log(a);//a
    
    let b = 'b';
    console.log(b);//b
    
    var c = 'c';
    console.log(c);//c

    if (c === 'c') {
        let d = 'd';
        console.log(d);//d
        
        var e = 'e';
        console.log(e);//e
        
        {
            let f = 'f';
            console.log(f)//f
        }
        //console.log(f)//ReferenceError: f is not defined
    }
    //console.log(d);//Uncaught ReferenceError: d is not defined
    console.log(e);//e
}

foo();
console.log(a);
//console.log(b);//Uncaught ReferenceError: b is not defined
//console.log(c);//ReferenceError: c is not defined
```

Based on the above code snippet the following are the behaviours when variable are created using `var` and `let` keywords

* Any variable created with `var` keyword inside a function is not accessible outside the function
* Function can access variables (`var` or `let`) which are outside the function 
* Varibles created with `let` keyword is accessible only within the block {}