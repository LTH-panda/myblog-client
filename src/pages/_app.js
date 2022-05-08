import { Layout } from "components/Shared";
import useUser from "hooks/useUser";
import Head from "next/head";
import { wrapper } from "store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useUser();
  return (
    <>
      <Head>
        <title>Whale-Log</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
