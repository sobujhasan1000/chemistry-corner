import { useEffect, useState } from "react";
import siteLoader from "/ccLoader.gif";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import { HelmetProvider } from "react-helmet-async";

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
          <HelmetProvider>
          <RouterProvider router={router} />
          </HelmetProvider>
        </div>
      )}
    </>
  );
}

export default App;
