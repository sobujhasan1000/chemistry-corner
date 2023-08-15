import { useEffect, useState } from "react";
import siteLoader from "/ccLoader.gif";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./ReduxStore/store";
import AuthProvider from "./providers/AuthProvider";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisite] = useState(true);

  useEffect(() => {
    if (isFirstVisit) {
      setIsFirstVisite(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isFirstVisit]);
  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <img src={siteLoader} alt="Website Loader" />
        </div>
      ) : (
        <div>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <HelmetProvider>
                  <Toaster />
                  <RouterProvider router={router} />
                </HelmetProvider>
              </AuthProvider>
            </QueryClientProvider>
          </Provider>
        </div>
      )}
    </>
  );
}

export default App;
