import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../api/fetch";
import moment from "moment";

const NewBlogPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data));
  }, []);

  const sortedBlogs = blogs.sort((a, b) => {
    const timestampA = new Date(a.blog_time).getTime();
    const timestampB = new Date(b.blog_time).getTime();
    return timestampB - timestampA;
  });

  const lastThreeBlogs = sortedBlogs.slice(0, 3);

  return (
    <div className="">
      <h1 className="text-2xl text-black font-bold mb-5">New Posts</h1>
      {lastThreeBlogs.map((blog) => (
        <Link
          to={`/view-blog/${blog._id}`}
          className="flex lg:h-36 p-6 hover:shadow-2xl"
          key={blog._id}
        >
          <img className="rounded-md w-40" src={blog.image_url} alt="" />
          <div className="font-bold pl-2">
            <h1 className="text-black">{blog.blog_heading}</h1>
            <h2 className="text-red-400">
              {moment(blog?.blog_time).format("Do MMM, YYYY- hh:m a")}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewBlogPosts;
