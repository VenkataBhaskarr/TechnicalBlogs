
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

