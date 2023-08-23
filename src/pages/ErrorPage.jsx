import { Link, useRouteError } from "react-router-dom";
import Lottie from "react-lottie";
import errorAnimation from "../assets/error_animation.json";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  const [animationDimensions, setAnimationDimensions] = useState({
    width: 500,
    height: 500,
  });

  const updateDimensions = () => {
    if (window.innerWidth < 768) {
      setAnimationDimensions({ width: 250, height: 250 });
    } else {
      setAnimationDimensions({ width: 500, height: 500 });
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    clickToPause: false,
  };

  return (
    <>
      <Helmet>
        <title>Error Page - Chemistry Corner</title>
      </Helmet>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <Lottie options={defaultOptions} {...animationDimensions} />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-black text-5xl">{status || 404}</h1>
            <h1 className="text-black text-lg md:text-2xl font-signature">
              {error.message}
            </h1>
            <Link to="/">
              <div>
                <button className="bg-[#ED0058] text-white px-10 py-2 border border-[#ED0058] hover:bg-white hover:text-[#ED0058] transition-all ease-in duration-300">
                  Back to Home
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
