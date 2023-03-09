import ContextProvider from "@/ContextProvider/ContextProvider";
import MainLayout from "@/layout/MainLayout/MainLayout";
import store from "@/redux/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "../styles/globals.css";


export default function App({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout
  const queryClient = new QueryClient()
  return (

    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>

  );
}

const EmptyLayout = ({ children }) => <>{children}</>