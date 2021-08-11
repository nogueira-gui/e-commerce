const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const stripeItems = items.map((item) => ({
    description: item.description,
    quantity: item.quantity,
    price_data: {
      currency: "brl",
      unit_amount: Math.round(item.price),
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1IwPysSCcFGNqofHiAQsTfdz"],
    shipping_address_collection: {
      allowed_countries: ["BR"],
    },
    line_items: stripeItems,
    mode: "payment",
    success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
    // success_url: `${process.env.HOST}/success`,
    // cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
