import { Link } from "react-router-dom";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#ED0058]">
      <div className="container mx-auto flex flex-col gap-8 py-10 text-white">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl text-black font-bold leading-0 m-0">
              Subscribe Newsletter
            </h1>
            <p className="text-base text-black italic leading-0 m-0">
              Subscribe your email to get latest updates.
            </p>
          </div>
          <form className="flex items-center justify-center w-1/2 md:w-full">
            <div className="flex justify-center md:w-full">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email..."
                  className="bg-white pl-5 py-3 border-2 border-white outline-none rounded-s-full w-40 md:w-[50rem]"
                />
              </div>
              <input
                type="submit"
                value="Subscribe"
                className="bg-[#ED0058] text-white font-semibold uppercase px-5 py-3 rounded-e-full cursor-pointer border-2 border-white border-s-0"
              />
            </div>
          </form>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-evenly gap-5 md:gap-0">
            <div className="flex flex-col items-center md:items-start gap-3">
              <h1 className="text-xl">About Us</h1>
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-sm max-w-xs text-center md:text-start">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nisi, quasi ut! Dicta, amet perferendis! Cupiditate labore
                  nemo cum eligendi explicabo.
                </p>
                <p className="flex items-center gap-2">
                  <HiOutlineMail /> info@chemistrycorner.com
                </p>
                <p className="flex items-center gap-2">
                  <HiPhone /> + 880 1522 264481
                </p>
                <div className="flex flex-col items-center md:items-start gap-2">
                  <p>Stay in Touch:</p>
                  <div className="flex items-center gap-3">
                    <Link to="#">
                      <AiOutlineFacebook />
                    </Link>
                    <Link to="#">
                      <AiOutlineTwitter />
                    </Link>
                    <Link to="#">
                      <AiOutlineInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
              <h1 className="text-xl">Navigation</h1>
              <ul className="flex flex-col items-center md:items-start gap-3">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Our Team</Link>
                </li>
                <li>
                  <Link to="#">Testimonials</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <h1 className="text-xl">Support</h1>
              <ul className="flex flex-col items-center md:items-start gap-3">
                <li>
                  <Link to="#">Get in Touch</Link>
                </li>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Community Guidelines</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="divider m-0"></div>
          <div className="my-3">
            <h1 className="text-xs text-center md:text-left">
              Copyright &copy; 2023 Chemistry Corner. An Online Dating Platform{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
