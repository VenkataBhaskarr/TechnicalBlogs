# Razorpay

The Razorpay integration is as follows 

Create a order for every user before the transaction to securely store the transaction (razopay binds the orderid with the original transaction for security purposes).
Later this id is used to create the original transaction.

## Razorpay frontend
```
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [id , setId] = useState('')
  const handlePayment = () => {
    var options = {
      key: "", // Enter the Key ID generated from the Dashboard
      amount: 200, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Lavade corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: {id}, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#3399cc"
      }
  };
  var razor = new window.Razorpay(options);
  razor.open()
  };
  const checkIt = () => {
     axios.get('http://localhost:8000/order').then((res) => {
        setId(res.data.id)
        console.log(res)
     })
    // console.log(window)
  }
  return (
   <div>
     <button onClick={checkIt}>Checkthis</button>
     {id}
     <button onClick={handlePayment}>buy the fuck</button>
   </div>
  )
}

export default App
```
## Razopay backend
```
const express = require("express");
const cors = require("cors");
const app = express();
const Razorpay = require("razorpay");
const instance = new Razorpay({
    key_id: "",
    key_secret: "",
});
app.use(cors());

// frontend hits this endpoint where this end point will create an object that is sent to the rajorpay server for payment request
// we might get an orderID from this which can be further used in the next routes or so bruh
app.get('/order' , (req,res) => {
    try{
        const options = {
            amount: 10 * 100, // amount == Rs 10
            currency: "INR",
            payment_capture: 1,
        }
        instance.orders.create(options , (err,order) => {
            if (err) {
                return res.status(500).json({
                  message: "Something Went Wrong",
                });
              }
            return res.status(200).json(order);
        })
    }catch(error){
         return res.status(403).send("something went really wrong")
    }
})


app.listen(8000, () => {
    console.log("Server is listening at http://localhost:8000");
});
```

# Stripe

Stripe is slighlt more comfortable to maintain but in INDIA it only offers the cards there is no UPI payment method availble 

In stripe we have to manually create the products and their details along with the prices before hand in order to not temparize the product prices by clients after manually creating the dashboard head ahead to your js framewors

## code
```
import "./App.css"
import getStripe from "./lib/Stripe.jsx"
function App(){
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "...",
          quantity: 1,
        },
      ],
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      mode: 'payment',
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }
  return(
    <div>
       product_id : ...
       publishablekey : ...
       Lets integrate stripe payments in it .... Lesgoooo
       

       <button onClick={handleCheckout}>
         Checkout
       </button>
    </div>
  )
}
export default App
```

```
import {loadStripe} from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe("...");
    }
    return stripePromise;
  };
  
export default getStripe;
```
