// import { buffer } from "micro";
// import * as admin from "firebase-admin";

// const serviceAccount = require("../../../permission.json");

// const app = !admin.apps.length
//   ? admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   })
//   : admin.app();

const stripe = require("stripe")(process.env.stripe_secret_key);

export default async (req, res) => {
  const {price} = req.body;
  let product={}
  
  if(price){
    try {
      let stripePrice = await stripe.prices.retrieve(price);
      let stripeProduct = await stripe.products.retrieve(stripePrice.product);

      if(stripePrice && stripeProduct){
        product = {
            id: stripeProduct.id,
            title: stripeProduct.name,
            price: stripePrice.unit_amount,
            quantity: 1,
            description: stripeProduct.description ? stripeProduct.description : ' ',
            category: stripeProduct.metadata.category ? stripeProduct.metadata.category : '',
            image: stripeProduct.images[0],
        };
      }
    } catch (e) {
      console.log(e);
    }
    res.status(200).json(JSON.stringify(product));
  }
}