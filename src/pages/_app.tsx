import "../../styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.css';
 import "../../styles/bootstrap-overrides.css";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
