import "../../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/bootstrap-overrides.css";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import * as ga from "../lib/ga";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>The Warzone Report</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
