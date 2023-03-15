## This is a quick intro about what is tailwindcss and how to install it


### In general tailwindcss is a css framework where developers can use the low level classes present in the tailwindcss directly into the html files without writing even a single line of css

### when i have said that it consists of low level classes it means it does not contains pre written whole components such as navbars, button sections like hero and footer everything should be written manually just the css would be provided by tailwindcss.

### using tailwind css is pretty much easy thanks to their docs i will let not mention what is present in the docs instead will explain each step in the doc

### we need to first install the tailwind package as a dev dependency and it is self explanatory as the tailwind is only needed for development and is automatically compiled into regular css during production

### We must add a config file bacause of two reasons

- we are telling where to look at files containing tailwind classes 
- The other reason is for customizations such as screen sizes and colors
- you need to add these lines in a file... 

@tailwind base;
@tailwind components;
@tailwind utilities;

so that every tailwind utility classes will be initiliazed 

- finally you need to build and watch for continous changes 
