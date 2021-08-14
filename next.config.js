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
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    stripe_signing_secret: process.env.STRIPE_SIGNING_SECRET,

    google_id: process.env.GOOGLE_ID,
    google_secret: process.env.GOOGLE_SECRET,

    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,

    host: process.env.HOST,
  },
};
