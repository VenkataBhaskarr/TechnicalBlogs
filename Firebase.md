Now we will figure out how to connect our web app to firebase more speciafically firestore.

setup a basic project in firebase and that project to firestore.

now get the initial config file 

```

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
return default app
```

Hereby we will do every CRUD operations with this app object.

``` 
  import {collection , addDb , .....} from "firebase/firestore"
  // perform those particular tasks using the imported functions
```
