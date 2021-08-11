const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const prices = await stripe.prices.list({
        limit: 3,
      })
  res.status(200).json({ prices: prices.data });
}