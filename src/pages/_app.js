import { Provider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";
import Router from 'next/router';
import NProgress from 'nprogress';

import { store } from "../app/store";
import "../styles/globals.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`loading page=  ${url}`)
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
})

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
