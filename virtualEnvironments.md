## VIRTUAL ENVIRONMENTS


Virtual environments are the directories with some executables required to develop the python project its same as the origin directory but it differs in the following way that is why they are called specially virtual environments.

Virtual environments helps you to isolate the environment for that particular project from our operating system environment.

For suppose if we are not creating a virtual environment and developing/starting a project in a traditional way then the required dependencies(lets say axios is a depedency version 1.2) are downloaded in our system. Ok, but if we want to develop a new project which requires axios dependency already we have downloaded axios package right so there is no problem right but here is the catch for our new project it requires version 1.3 of axios but we only loads v1.2 as we have previously downloaded so to avoid these kind of irregularities we use virtual environments which create a virtual repository (lets say) and the dependecies are specific for that repository itself.


Summary :

Creates another fresh python/lang specific interpreter and then you can use your specified version packages


### Commands to create a virtual environments ..

`python3 -m venv -project—name`

### To activate the created virtual environment ..

activating the virtual environment means making the newly created virtual python environment as your default python interpreter with the session as your terminal

`source /path/to/venv/bin/activate`
