
# The ultimate reference to the #Javascript.

CREDITS : AKSHAY SAINI



> The whole javascript code runs in Execution Context 
> execution context is further divided into two parts memory block and code block
jd
Memory block
Also called as variable environment.
Stores variables and their values as key value pairs.
Code block
Also called as thread of execution
Runs remaining code line by line

> javascript is a synchronous(meaning runs the next line or statement if and only if the current running statement/line is finished.
> javascript is a single threaded language (meaning it can inly run/execute one line at a time)
> javascript code runs in two phases memory allocation phase and code execution phase

Live example showing javascript execution context in action.


1.1 code

    var n =2;
    function square (num) {
    var ans = num * num:
    return ans;
    }
    var square2 = square(n) ;
    var square4 = square(4);
  
Note : observe how the variables are only declared with classic types that is var and function declaration.

Global Execution context 
Local execution conetexts created with the need while code execution phase










Memory allocation phase : 
n : undefined
square : {}
square2 : undefined
square4 : undefined

Code execution phase : 
n : 2
square2 : as it is a function invocation another execution context is created and pushed on top of the global execution context in the call stack which follows the similar rules and returns the execution control when the function completed its execution and removes from the call stack.
square4 : same story














> call stack is used to push and pop the execution contexts created while running our javascript code it maintains the order of execution of execution contexts.


### HOISTING

Like how the variables present in the execution context works in real life.

More informally the part of memory allocation stage 
Where functions are stored as it is and the variables are stored as undefined.

Strictly we are using variables who are defined by using var only and all types of functions.

Every function except the classical declaration type are considered as a variables and are assigned a undefined value in memory allocation phase.





### WINDOW

In javascript the window object is automatically created by the javascript engine (the engine which is used to compile the javascript in browser it is generally v8) the window object is created accordingly as per the need like if it is server or a client and this object is a also called as “this” and has some predifined properties to use.


> undefined (vs) not defined. We can refer hoisting concept to know exactly what is undefined it is a placeholder for variables stored In the memory not he other hand not defined means it’s not there even in the global scope


### SCOPE CHAIN AND LEXICAL ENVIRONMENT

> lexical environment of a execution context = local memory of ec  + lexical environment of the parent ec

> so these kind of chaining of lexical environments is called as scope chain
