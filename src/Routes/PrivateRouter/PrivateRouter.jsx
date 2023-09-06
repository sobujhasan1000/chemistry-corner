import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import CustomModal from "./CustomModal";
import siteLoader from "/ccLoader.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!user && !loading) {
      // User is not authenticated, and loading has finished
      setIsModalOpen(true);
    }
  }, [user, loading]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={siteLoader} alt="Website Loader" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <>
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        from={location}
      />
    </>
  );
};

export default PrivateRoute;
