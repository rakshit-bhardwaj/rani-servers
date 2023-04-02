const stripe = require('stripe')(process.env.STRIPE_LIVE_SK_KEY);


export default async function handler(req, res) {

    if (req.method === 'POST') {
      try {
        const {steamID} = req.body;
        console.log(steamID);
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
               // test price : 'price_1Mpa97SJau31s6BFZmzJ3OBM',
              // live price: 'price_1MpcMCSJau31s6BFwafyOZuD',
              price: 'price_1MpcMCSJau31s6BFwafyOZuD',
              quantity: 1,
            },
          ],
          payment_method_types: ['card'],
          mode: 'payment',
          success_url: `${req.headers.origin}/?success=true&rsteamid=${steamID}`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
        });
        
        res.redirect(303, session.url);
  
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
