import { Layout } from "components/Shared";
import useUser from "hooks/useUser";
import { wrapper } from "store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useUser();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
