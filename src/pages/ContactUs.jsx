import { Helmet } from "react-helmet-async";
import ContactInfo from "../components/ContactUs/ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Contact Us</h1>
        </div>
      </div>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default ContactUs;
