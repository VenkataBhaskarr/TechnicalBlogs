## Redux

1. The solution for classical dilemma that devs goes through is the react components state management 


Level2 comp3 -> Level1 comp1 -> root comp -> Level1 comp2 -> Level2 comp4



You know in order to control state of comp 4 by comp 3 you should implement stuff in root comp and then pass it via props to level1 comp1 and comp2 and then pass it via props to level 2 comp3 and comp4………bruhhh!
Seriously the root comp file gots absolutely messy and the props chain got messier too so to address these difficulties redux come into existence

Terminology : redux store , reducers , state and actions


Redux store : think of it as magical place where all your needed states would be stored and updated via reducers hence reducers are the functions used to update the variables in the store


Now in this case comp3 and comp4 can establish a store and direct communicate with it via reducers instead of udsing props form root->level1->level2 huh!


Redux toolkit architecture : 

Create a store where you would store all the reducers and the store is connected in our high level component.


State - action - reducers

State - essentially the variables
Action - the name of the reducers may be and these are the actual names used in react
Reducers - these are the functions named actions and changes the state.

These three combined would be called as a slice(in toolkit) and it is exported to use in store

Usedispatcher hook is used call actions from particular stores
Useselector hook is used to access the state of a slice/particular store in various components
