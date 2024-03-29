const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

// Processes charge to Stride asynchronously. Returns a Promise.

const processPayment= (data) =>{
    return new Promise((resolve, reject)=>{
        stripe.charges.create(data, (error, payment)=>{
            if(error){
                console.log(error);
                reject(false)
            }else{
                console.log("Payment Successful");
                resolve(payment);
            }
        });
    });
}

module.exports ={
    processPayment
}