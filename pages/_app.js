import ContextProvider from "@/ContextProvider/ContextProvider";
import MainLayout from "@/layout/MainLayout/MainLayout";
import store from "@/redux/store/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout

  return (
    <Provider store={store}>
      <ContextProvider>
        <MainLayout>
          <Layout>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </ContextProvider>
    </Provider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>