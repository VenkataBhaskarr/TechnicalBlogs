Why state management ? no worries your app works absoultely fine without it too
But using state management tools will make your app more faster because ultimately it provides less operations to perform on DOM whicu are otherwise
Expensive to perform

ok Whate are the problems ?

Componenet tree and state store

If you want to use the state in two components you have to store the state int he least common ancestor component of the both compons
or else you have to store in the parent component this will leads to prop drilling and make every component re render
which is super expecive if the applications grwwos ;arge

one solution to the problem is state management tools now we are going to see aboujt recoil which is one of those tools

