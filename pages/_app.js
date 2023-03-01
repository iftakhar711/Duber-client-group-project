import ContextProvider from "@/ContextProvider/ContextProvider";
import MainLayout from "@/layout/MainLayout/MainLayout";
import store from "@/redux/store/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout

  return (
    <Provider store={store}>
      <ContextProvider>
        <MainLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </ContextProvider>
    </Provider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>