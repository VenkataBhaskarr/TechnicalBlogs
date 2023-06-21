
First of all we need to access appwrite SDK through the config files.

To initilize the appwrite SDK we can use Client/Server object form the appwrite package which inreturn takes two argument one is the endpoint url of our project 
and the project ID itself in order to initilize all appwrite services to that project

```
const client = new Client();
client.setEndpoint("The URL").setProject(PROJECT ID)
```

OK, now that we had the access to the app write sdk through the client object

We will use Account class from the appwrite package which is used to create users and also used to maintain users by creating authentication and sessions

```
export const account = new Account(client);
```

If we want to use additional services like databases we should then create objects for that particluar services as well.

```
export const databases = new Databases(client, "DB ID")
```



## Authentications are done

For signup we need to use account.create method

```
 account.create(
         uuidv4(),
         user.email,
         user.password,
         user.name,
    ).then(
           function (response) {
             console.log(response)
           },

           function (error) {
            console.log(error)
           }

    );
 ```   
 
For login we can use account.createEmailSession method to create a session using email

```
 try{
           const promise = account.createEmailSession(user.email , user.password)

           promise.then(
               function(res){
                   console.log(res);
               },
               function(error){
                   console.log(error);
               }

           )
        }
        catch(err){
           console.log(err)
        }
```
