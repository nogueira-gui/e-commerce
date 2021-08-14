const stripe = require("stripe")(process.env.stripe_secret_key);

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
    // shipping_rates: ["shr_1IwPysSCcFGNqofHiAQsTfdz"], //valor do frete
    shipping_address_collection: {
      allowed_countries: ["BR"],
    },
    line_items: stripeItems,
    mode: "payment",
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/checkout`,
    // success_url: `${process.env.host}/success`,
    // cancel_url: `${process.env.host}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
