In the initial days of my programming career i often consfused with the pass by value / behaviour of primitives and pass by reference/ behaviour of Objects. But now i think i got some clarity 
so i will make you people feel more confident as well in this topic by explaining in most popular programming lanugages out there.

a simple thing to keep in mind is, in general primitives are the data types which really can't broke into simpler types and are the basic building blocks of data by combining primitives
one can make complex data types often termed as Objects.

primitives are passed by value and stored in memory as the values.
a = 20;
b = a ;


objects are passed by reference and also stored in the memory as the copy of the reference.
a = {};
b = a ;

## JAVA

primitves - int,char,float,double ....

objects   - String(string is  an object but behaves like a primitive due to string pool and other bunch of stuff in java),arrays and all other objects created for any class

## JAVASCRIPT

primitves - null, boolean , string (in js string is also considered as a primitive) and number  

objects - arrays, functions and objects

## PYTHON

as python does not contains specific data types all the mutable objects are passed by reference(lists, sets, dicts) and immutable objects are passed by values(strings, numbers) 

## C and C++

in c and c++ be default everything (primitves and objects) are passed by values that measns in the function another copy of the primitive/object is created but when you want to modify
the original object/primitve you need to explicitly send the reference through '&' .

## GO

in golang also you have to explicitly mention the address but there are datatypes that are impicitly passed by references such as
maps, channels and slices.

## RUST

Rust has whole different concpet to work on that is ownership and borrowing system which we will talk about it later


### NOTE  : [Excellent explanation](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

