module.exports = {
  images: {
    domains: [
      "fakestoreapi.com",
      "www.designfreelogoonline.com",
      "s3.envato.com",
      "files.stripe.com",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
