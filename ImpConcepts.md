In this declaration in java
ArrayList<T> list = new ArrayList<>()
we can pass any type as Type of the ArrayList class and now the important part constructor of ArrayList<>() it takes a collection of types, 
comparator or size as an arguments
  
### comparator
  
 In java comparator interface provides several functions for comparing different types(rather than simple primitives) which are used especially in sorting purpose
 
  declaration :
  
list.sort((ele1 , ele2) => ele1.compareTo(ele2))
  
### lamda expressions
  
  Now lamda expressions are the inline functions used for simple purposes for example
  
  public int square(int num){
     return num*num;
  }
  
  can be written as square = lambda x : x*x and can be used as normal square()
  
