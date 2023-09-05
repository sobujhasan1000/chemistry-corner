import { Link } from "react-router-dom";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import { getAllBlogs } from "../../api/fetch";
import moment from "moment";

const Footer = () => {
  const [blogs, setBlogs] = useState([]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_API_URL}/newsletter`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your newsletter subscription has been saved.",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data));
  }, []);
  return (
    <div className="bg-[#ED0058]">
      <div className="container mx-auto flex flex-col gap-8 py-10 text-white">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl text-white font-bold leading-0 m-0">
              Subscribe Newsletter
            </h1>
            <p className="text-base text-white italic leading-0 m-0">
              Subscribe your email to get latest updates.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-center w-1/2 md:w-full"
          >
            <div className="flex justify-center md:w-full">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="Your Email..."
                  className="bg-white pl-5 py-3 border-2 border-white outline-none rounded-s-full w-40 md:w-[50rem] text-black"
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
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-around gap-5 md:gap-0">
            <div className="flex flex-col items-center md:items-start gap-3">
              <h1 className="text-xl">About Us</h1>
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-sm max-w-xs text-center md:text-start">
                  At Chemistry Corner, we believe that meaningful connections
                  are the cornerstone of a fulfilling life. Our platform is more
                  than just another online dating website – it&apos;s a
                  community dedicated to helping individuals discover genuine
                  relationships that resonate on a deeper level.
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
              <ul className="flex flex-col items-center md:items-start gap-3 text-sm">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <h1 className="text-xl">Support</h1>
              <ul className="flex flex-col items-center md:items-start gap-3 text-sm">
                <li>
                  <Link to="/contact-us">Get in Touch</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/community-guidelines">Community Guidelines</Link>
                </li>
              </ul>
            </div>
            <div className="md:flex flex-col items-center md:items-start gap-3 hidden">
              <h1 className="text-xl">Our Latest Blogs</h1>
              <div className="">
                <div className="flex flex-col gap-2">
                  {blogs.slice(0, 2).map((blog) => (
                    <Link
                      to={`/view-blog/${blog._id}`}
                      className="flex p-1 hover:shadow-2xl group border border-white hover:bg-white duration-300"
                      key={blog._id}
                    >
                      <img className=" w-40 h-24" src={blog.image_url} alt="" />
                      <div className="font-bold pl-2">
                        <h1 className="text-black">{blog.blog_heading}</h1>
                        <h2 className="text-yellow-400 group-hover:text-red-500">
                          {moment(blog?.blog_time).format(
                            "Do MMM, YYYY- hh:m a"
                          )}
                        </h2>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/blog">
                  <button className="text-white mt-2 hover:underline underline-offset-4 duration-300">
                    Read More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="divider m-0"></div>
          <div className="my-3">
            <div className="my-3 text-center ">
              <h1 className="text-xs text-center md:text-left">
                Copyright &copy; 2023 Chemistry Corner. An Online Dating
                Platform{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
