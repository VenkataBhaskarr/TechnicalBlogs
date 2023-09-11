### Everything in javscript is an object......le primitive datatypes left the chat (jokes apart but still javascript wraps the primitives into object when it is mandatory).
### Object has properties and methods 
### In javascript window object is the mother of all objects(remember it's mother not father) which provides various properties and methods like the browser API methods and so on
### Important object properties and methods can be updated/modified no matter what type of variable you use unless you are using the freeze function.
### class in javascript is most likely a class in java they are the blue prints to create the objects th main method in the class is the constructor through which we construct the objects.

``` 
class User(){
    constructor(name , email){
    this.name = name;
    this.email = email
    }
  }
```

constructors are only for the object properties and for methods we would create the subsequent function following the constructor method

### method chaining is possible when we return the instance of the object from a function which is default returning the undefned object.

```
class User{
   constructor(name){
     this.name = name
   }
   login(){
     console.log(this.name + " logged in successfully");
     return this;
   }
   logout(){
    console.log(this.name + " logged out successfully")
   }
}

const user1 = new User("bhaskar");

user1.login().logout()
```

### class inheritance come into the picture when a class needs the same things present in another class along with some new properties.
```
class Admin extends User {
  deleteUser(user){
     users.filter(u => {
       return u.name != user.name
     })
  }
}
```

### we can also emulate class like behaviour without using the class keyword and just using the constructor function alone 

```
function User(name){
  this.name = name;
  this.login = function(){
  }
}
```
