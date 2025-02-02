import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import db from "../../firebase";
import moment from "moment";

import Header from "../components/Header";
import Order from "../components/Order";
import Footer from "../components/Footer";

const Orders = ({ orders }) => {
  const [session] = useSession();
  return (
    <div className="dark:bg-amazon_blue-light dark:text-white">
      <Head>
        <title>Pedidos</title>
        <link rel="icon" href="/images.png" />
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10 dark:bg-amazon_blue-light">
        <h1 className="text-3xl border-b mb-2 pb-1 border-blue-400">
          Meus Pedidos
        </h1>

        {session ? (
          <h2>
            {orders ? orders.length : 0}{" "}
            {orders.length === 1 ? "order" : "orders"}
          </h2>
        ) : (
          <h2>Por favor, conecte-se para visualizar seus pedidos</h2>
        )}

        <div className="mt-5 space-y-4 dark:bg-amazon_blue dark:text-white">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
      <div className="h-[50vh]" />
      <Footer />
    </div>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
      session,
    },
  };
}
