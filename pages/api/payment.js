const stripe = require('stripe')(process.env.STRIPE_TEST_SK_KEY);
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "api key",
  authDomain: "auth domain",
  projectId: "projectId",
  storageBucket: "storage bucket",
  messagingSenderId: "messagesendid",
  appId: "appid",
  measurementId: "measurement id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const dbi = collection(db, 'steamIDs');

export default async function handler(req, res) {

    if (req.method === 'POST') {
      try {
        const {steamID} = req.body;
        console.log(steamID);
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              // live price: 'price_1MpcMCSJau31s6BFwafyOZuD',
              price: 'price_1Mpa97SJau31s6BFZmzJ3OBM',
              quantity: 1,
            },
          ],
          payment_method_types: ['card'],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
        });
        
        res.redirect(303, session.url);
        addDoc(dbi, {
          steamID: steamID
       })
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
