
# The ultimate reference to the Javascript.

CREDITS : AKSHAY SAINI (this is the summary written in my words of akshay saini's namaste javascript videos)

NOTE    : This blog is not fixed and constantly evolving if you find any mistake of the concept let me know and i am vey happy to discuss.



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

![image](https://user-images.githubusercontent.com/114099821/211069035-eb09db11-42fa-4b8b-9911-31957d04ff67.png)














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

Let (vs) const (vs) var 

> First things first in javascript every type of variable is hoisted but for let and const they are in temporal dead zone means they are not created in the global object and created separately in script object(just for increasing strictness) and you can’t access them until they are initialized.

> temporal dead zone is the tine between the variable declaration and initialization.

> var < let < const this is order in terms of strictness

> const variables should be initialized at the same time when they are declared

> reference error, type error and syntax error are the major errors we would face in javascript.

> both reference and the type errors would occur during the phase of code execution and the syntax error occurs during the memory allocation phase


### Undefined vs not defined

### undefined
1. undefined is a javaScript special keyword.
2. Undefined means, a variable that has been declared but not assigned a value.

### not defined
1. similar to other programming languages, not defined indicates that a variable does not exist. 
2. It comes in picture, by trying to access variable that is out of score.
3. Basically it means a "Reference Error".
### undefined example
1.2 code

    console.log(a);
    var a = 5;
    console.log(a);


> Even before the varibale 'a' is declared, javaScript allocates memory to this varable 'a' in the global scope;


### console.log(a); // trying to print before declared, --> it gives undefined.

![aglobal](https://user-images.githubusercontent.com/114099821/212151962-d36eb190-f814-4f31-8c8d-32bfc433d8d3.png)

> var a = 5; // Declaration

### console.log(a); // trying to print after declaration, --> it prints value "5".

![bb](https://user-images.githubusercontent.com/114099821/212152100-8eb45dcc-71fe-4224-b35d-c75c38b7b45a.png)


### not defined example
1.3 code

    var a = 5;
    console.log(b);


> as 'b' was not declared, so it gives not defined (Reference Error) sice javaScript engine was not able to find in the global scope.

![c](https://user-images.githubusercontent.com/114099821/212152707-f8f23b94-ad31-467f-a733-d7ab2e99848e.png)


BLOCK AND SCOPE

> A block in javascript or in any language is defined as a group of statements and is used where we need to execute a group of statements instead of a single one.
> blocks has separate memory spaces, block scope has highest priority than global scope
> blocks do follow the lexical scope
> scope is an area at which we can access a variable
> shadowing is providing same name for variables in block which are already there in global scope.


CLOSURE

> closures in javascript are defined as function bundled with its lexical environment.

> these are more predominant when we return functions and call them separetly

> when the original function execution context is deleted but still it remembers its lexical environment that is what it is called as closure

> even when the function runs other than its original scope it remembers its lexical scope this is also called as closure.




DEEP DIVE INTO CLOSURES

> now lets see the example of a code snippet where we can observe the importance of block scope, shadowing and closures combined.


function x(){
    for (var index = 1; index <= 5; index++) {
        setTimeout(function y(){
           console.log(index)
        },index*1000)
    }
}
x()


> carefully look at the above code and its output here the function y has the reference to index as apart of you know lexical environment or more formally closure but the index is var type hence the index is only globally created and referenced to it 

function x(){
    function close(i){
        setTimeout(function y(){
            console.log(i)
         },index*1000)
    }

    for (var index = 1; index <= 5; index++) {
        close(index)
    }
}
x()

> now we have used the concept of shadowing a bit here and we can also say it is the concept of closure like first come first serve closures.


DEEP DIVE INTO FUNCTIONS

> Functions in javascript the powerful features are said to be the functions and also there are different terminologies attached to it

Function declaration or function statement

   These are classical function we would   
   Declare in javascript with the syntax  
   function x(){}






2. Function expression 

   These are the function which we use     
   To be assigned with a value 
   Let a = function(){}

The major difference between both these declarations are hoisting where the former ones are hoisted and the later onces are just treated as normal variables


3. Anonymous functions

   These are the functions with no names and cannot be declared directly but can be used in place of the funtions which are used as values.

4. Named function expression

   [IMP] var a = function xyz(){}
   These kind of functions are called as named function expression we cannot access the above function with xyz() because it is created in separate local memory or local execution context as it is a function expression.

5. Parameters and arguments[most confusing]
 Paramet


6. First Class Functions or First Class Citizens

   The ability to use functions as     values is called first class functions they are literally can be passed as arguments like they can return functions as their return values and hence in javascript they got the name FCF


CALL BACK FUNCTIONS

> These are the most important functions in javascript because they introduce the concept of asynchronous behavior to the synchronous javascript.

> that is we can control which block of code can execute after the present running block of code which we would often say as asynchronous

> closures form only with the functions when the sub function is declared in the parent function but not when its passed as a value or an argument

> call back functions are super important in javascript as they introduce asynchrnous nature to the javascript code 

> but the while dealing with callback functions we might face some issues out of all the two main important issues are `CALBACK HELL` and `INVERSION OF CONTROL` 

> when there are chained callbacks it often called as callback hell and when we declare our callback we are blindly following that particular api/hiher order function to execute our callback so we are giving the control of our code to the hiherorde function/api which is a serious issue.

WEB API'S

> the whole architecture of javascript is below 

<img width="874" alt="Screenshot 2023-01-10 at 9 32 44 PM" src="https://user-images.githubusercontent.com/111889155/211601352-a1b25400-5049-47c0-90b2-f6af6ea8228e.png">

> the webAPI's are bundled and served to the call stack by the v8-engine in the form of a window/global object.

event loop, callBack queue and microtask queue

> lets say we declare a setTimeout function when it is running basically its a callback function it is registered in the `BROWSER` and when it completes it's timer it is pushed into the callback queue present int the browser not directly to the call stack present in the v8 engine because of access denial
and then the event loop will check whether the call stack is empty and then pushes the events in call back queue to the call stack and then it starts executing.

> callbacks bagges with the promises are special type of callbacks and are given high priority than the other callbacks and hence the microtask queue are introduced it works similar to call back queue but the ddifference is the event loop would give high priority to micro task queue.


HIGHER ORDER FUNCTIONS

> Those function which can take another function as arguments or which can return functions from themselves are called as higher order functions 
> those functions which are sent as arguments are called as call back functions
> these functions are essentially the heart of javascript as literaly broo we can pass function into functions and use them and later we can return it just imagine its hecking amazing right.
> polyfills are the functions created by user which can act on all the objects and arrays like the inbuilt map function.
> map function maps the every children of an array to the given function.

DEEP DIVE INTO SOME HIGHER ORDER FUNCTIONS

`map`
> the map function is called upon an array takes a function as an argument and returns an array
under the hood implemntation

`filter`
> As the name suggests it filters out some values in the array and returns the filtered array most useful function in javascript frame works
under the hood implementation


PROMISES

> promises when called are registered and then are stored in microtask queue later pushed into call stack with the help of event loop
> on the high level promises represents the evnetual completion of an asynchronous event
> it has two properties which are used to resolve the promises 
> promises are extensively used in place of callbacks to avoid callback hell and inversion control

 




